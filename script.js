document.addEventListener('DOMContentLoaded', function() {
  const fromAmount = document.getElementById('fromAmount');
  const toAmount = document.getElementById('toAmount');
  const fromCurrency = document.getElementById('fromCurrency');
  const toCurrency = document.getElementById('toCurrency');
  const convertBtn = document.getElementById('convert');
  async function convert() {
    const amount = parseFloat(fromAmount.value);
    if (isNaN(amount)) {
      toAmount.value = '';
      return;
    }
    const from = fromCurrency.value;
    const to = toCurrency.value;
    try {
      const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
      const data = await res.json();
      const rate = data.rates[to];
      const result = amount * rate;
      toAmount.value = result.toFixed(6);
    } catch (error) {
      toAmount.value = 'Error';
    }
  }
  convertBtn.addEventListener('click', convert);
});
