import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get("http://localhost:8000/getData");
    console.log(response);

    if (response.status === 200) {
     
      if (response.data) {
        return response.data.products;
      } else {
        console.error("Response data is missing.");
        return [];
      }
    } else {
      console.error(`Unexpected status code: ${response.status}`);
      return [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
