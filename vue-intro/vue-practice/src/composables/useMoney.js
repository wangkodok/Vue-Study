import { ref } from "vue";
function useMoney(initialTotalMoney = 0) {
  const totalMoney = ref(initialTotalMoney);
  function addMoney(price) {
    totalMoney.value += price;
  }

  return {
    totalMoney,
    addMoney,
  };
}

export default useMoney;
