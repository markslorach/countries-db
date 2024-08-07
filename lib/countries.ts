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
export async function getCountry(cca3: string) {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/alpha/${cca3}`
    );
    const data = response.data[0];
    return { data };
  } catch (error) {
    return { error: "Error fetching data" };
  }
}

// Get boardering countries by name from cca3 code


