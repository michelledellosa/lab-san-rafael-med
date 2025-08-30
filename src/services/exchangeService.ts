export const getExchangeRate = async () => {
  try {
    const response = await fetch('https://pydolarve.org/api/v2/tipo-cambio?currency=usd');
    const data = await response.json();

    // Extraemos la tasa del campo 'price'
    const exchangeRate = parseFloat(data.price);
    return exchangeRate;
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    return null;
  }
};
