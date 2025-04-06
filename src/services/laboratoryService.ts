// servicio.js
import axios from 'axios';

async function getLaboratoryInfo() {
    /*try {
        const response = await axios.get('http://localhost:3001/laboratory/info');
        return response.data;
    } catch (error) {
        console.error('Error fetching laboratory information:', error);
        throw new Error('Failed to fetch laboratory information');
    }*/
}

export const getLaboratory = async () => {
    try{
        
   const url = 'http://localhost:3001/laboratory/info';
  // let token_w4s: string | null = localStorage.getItem("token");
   
   const body = {
        method: 'get',
        headers: new Headers({
        //'Authorization': `Bearer ${token_w4s}`,
        //test with token expired
        //'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcnNOYW1lIjoidGVzdGluZzFAdGVzdGluZy5jb20iLCJleHAiOjE2NTA4NzgwOTcsImlhdCI6MTY1MDg3NDQ5N30.bnaHY0Ry0C3xuoQqsel7PX35xzpAL0v6MJ8ThWkamC8`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }),
}

    
   const test = await fetch(`${url}`,body);
   const   response = await test.json();
   console.log(response,'response');
   return response

   
    }catch(err){
        console.log(err,'err');
        return null
    }
  
}
