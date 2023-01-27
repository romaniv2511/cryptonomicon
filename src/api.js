const BASE_URL = "https://min-api.cryptocompare.com";
const API_KEY =
  "42d33137984f37ff35c8d9a957a6c6f147f125afb0b1bd10ef5241b9c58f6f66";

const tickersHandlers = new Map();

export const getAvailableIndices = () =>
  fetch(
    "https://min-api.cryptocompare.com/data/all/coinlist?summary=true"
  ).then((r) => r.json());

const loadTicker = () => {
  if (tickersHandlers.size === 0) {
    return;
  }
  return fetch(
    `${BASE_URL}/data/pricemulti?fsyms=${[...tickersHandlers.keys()].join(
      ","
    )}&tsyms=USD&api_key=${API_KEY}`
  )
    .then((r) => r.json())
    .then((rawData) => {
      const updatedPrices = Object.fromEntries(
        Object.entries(rawData).map(([key, value]) => [key, value.USD])
      );
      Object.entries(updatedPrices).forEach(([currency, newPrice]) => {
        const handlers = tickersHandlers.get(currency) ?? [];
        handlers.forEach((fn) => fn(newPrice));
      });
      return updatedPrices;
    })
    .catch((error) => console.log(error));
};

export const subscribeToTicker = (ticker, cb) => {
  const subscribers = tickersHandlers.get(ticker) || [];
  tickersHandlers.set(ticker, [...subscribers, cb]);
};

export const unsubscribeFromTicker = (ticker) => {
  tickersHandlers.delete(ticker);
};

setInterval(loadTicker, 5000);
