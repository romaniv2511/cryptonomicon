<template>
  <section>
    <div class="flex">
      <div class="max-w-xs">
        <label for="wallet" class="block text-sm font-medium text-gray-700"
          >Тикер</label
        >
        <div class="mt-1 relative rounded-md shadow-md">
          <input
            v-model.trim="ticker"
            @keydown.enter="add"
            type="text"
            name="wallet"
            id="wallet"
            class="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
            placeholder="Например DOGE"
          />
        </div>
        <div
          v-if="showIndices"
          class="flex bg-white shadow-md p-1 rounded-md flex-wrap"
        >
          <span
            v-for="index of filteredCoinList()"
            :key="index"
            @click="
              {
                (ticker = index), add;
              }
            "
            class="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer"
          >
            {{ index }}
          </span>
        </div>
        <add-button @click="add" :disabled="disabled" />
      </div>
    </div>
  </section>
</template>

<script>
import { getAvailableIndices } from "../services/api";
import AddButton from "./AddButton";

export default {
  name: "AddTicker",
  components: { AddButton },
  props: {
    disabled: {
      type: Boolean,
      requared: false,
      default: false,
    },
  },
  emits: {
    "add-ticker": (value) => typeof value === "string" && value.length > 0,
  },
  data() {
    return {
      ticker: "",
    };
  },
  computed: {
    showIndices() {
      return this.filteredCoinList()?.length > 0;
    },
  },
  methods: {
    add() {
      if (this.ticker.length === 0) return;

      this.$emit("add-ticker", this.ticker);
      this.ticker = "";
    },
    filteredCoinList() {
      if (!this.ticker) return;

      const filteredCoins = this.coinList.filter((i) =>
        i.includes(this.ticker.toUpperCase())
      );

      if (filteredCoins.length > 4) {
        return filteredCoins.slice(0, 4);
      }
      return filteredCoins;
    },
  },
  mounted() {
    getAvailableIndices()
      .then(({ Data }) => {
        this.coinList = Object.keys(Data);
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
