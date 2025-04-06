import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}` || "";
console.log('API_URL', API_URL)
export const fetchExams = async () => {
    try {
        const response = await axios.get(`${API_URL}/exams`);
        console.log('response: ', response)
        return response.data;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        throw error;
    }
};