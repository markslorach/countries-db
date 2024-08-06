import axios from "axios";

export async function getCountries() {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const data = response.data;
    return { data };
  } catch (error) {
    return { error: "Error fetching data" };
  }
}
