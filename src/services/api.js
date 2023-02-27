const API_KEY =
  "42c17dd004b08c2a98135fcd584472a8b7fc7ed7d4989fe14b248d691e822485";

const tickersHandlers = new Map();
const socket = new WebSocket(
  `wss://streamer.cryptocompare.com/v2?api_key=${API_KEY}`
);

const AGGREGATE_INDEX = "5";
const ERROR_TYPE = "500";
let validPriceBTC = null;

socket.addEventListener("message", (e) => {
  const {
    TYPE: type,
    FROMSYMBOL: currency,
    TOSYMBOL: convertedSymbol,
    PRICE: newPrice,
    PARAMETER,
  } = JSON.parse(e.data);

  if (type === ERROR_TYPE) {
    const errorParams = PARAMETER.split("~");
    const currentTicker = errorParams[2];
    const toSymbol = errorParams[3];

    if (toSymbol !== "BTC") {
      checkTicketToBTC(currentTicker);
      return;
    }
    const handlers = tickersHandlers.get(currentTicker) ?? [];

    handlers.forEach((fn) => fn("error"));
  }
  if (type !== AGGREGATE_INDEX || newPrice === undefined) return;

  if (currency === "BTC") {
    validPriceBTC = newPrice;
  }
  if (convertedSymbol === "BTC" && !validPriceBTC) {
    sendToWebSocket({
      action: "SubAdd",
      subs: [`5~CCCAGG~BTC~USD`],
    });
    return;
  }

  const handlers = tickersHandlers.get(currency) ?? [];

  const updatedPrice =
    convertedSymbol === "BTC" ? newPrice * validPriceBTC : newPrice;

  handlers.forEach((fn) => fn(updatedPrice));
});

function checkTicketToBTC(ticketName) {
  sendToWebSocket({
    action: "SubAdd",
    subs: [`5~CCCAGG~${ticketName}~BTC`],
  });
}

function sendToWebSocket(message) {
  const stringifiedMessage = JSON.stringify(message);

  if (socket.readyState === WebSocket.OPEN) {
    socket.send(stringifiedMessage);
    return;
  }

  socket.addEventListener(
    "open",
    () => {
      socket.send(stringifiedMessage);
    },
    { once: true }
  );
}

function subscribeToTickerOnWs(ticker) {
  sendToWebSocket({
    action: "SubAdd",
    subs: [`5~CCCAGG~${ticker}~USD`],
  });
}
function unsubscribeFromTickerOnWs(ticker) {
  sendToWebSocket({
    action: "SubRemove",
    subs: [`5~CCCAGG~${ticker}~USD`],
  });
}

export const subscribeToTicker = (ticker, cb) => {
  const subscribers = tickersHandlers.get(ticker) || [];
  tickersHandlers.set(ticker, [...subscribers, cb]);
  subscribeToTickerOnWs(ticker);
};

export const unsubscribeFromTicker = (ticker) => {
  tickersHandlers.delete(ticker);
  unsubscribeFromTickerOnWs(ticker);
};

export const getAvailableIndices = () =>
  fetch(
    "https://min-api.cryptocompare.com/data/all/coinlist?summary=true"
  ).then((r) => r.json());
