export const getExchangeRate = async () => {
    try {
      const response = await fetch('https://api.exchangedyn.com/markets/quotes/usdves/bcv');
      const data = await response.json();
  
      // Extraemos la tasa de cambio de la respuesta
      const exchangeRate = parseFloat(data.sources.BCV.quote);
      return exchangeRate;
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
      return null;
    }
  };
  