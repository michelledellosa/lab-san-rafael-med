// servicio.js
import axios from 'axios';

export const getLaboratory = async () => {
    try {
      const url = 'https://lab-san-rafael-api.onrender.com/labs';
  
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
  
      const data = await response.json();
      console.log(data, 'response');
      return data;
  
    } catch (err) {
      console.log(err, 'err');
      return null;
    }
  };
  