import axios from "axios";

// Get all countries
export async function getCountries() {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const data = response.data;
    return { data };
  } catch (error) {
    return { error: "Error fetching data" };
  }
}

// Get a single country by its cca3 code
