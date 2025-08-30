export const getExchangeRate = async () => {
  try {
    const response = await fetch('https://pydolarve.org/api/v2/tipo-cambio?currency=usd');
    const data = await response.json();

<<<<<<< HEAD
    // Extraemos la tasa del campo 'price'
    const exchangeRate = parseFloat(data.price);
    return exchangeRate;
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
=======
    if (data?.price) {
      return data.price;
    } else {
      console.error('No se encontró el valor del dólar en la respuesta.');
      return null;
    }
  } catch (error) {
    console.error('Error al obtener la tasa del dólar:', error);
>>>>>>> f161acfc87e8ad309bb978b6212f4db06b6648ef
    return null;
  }
};
