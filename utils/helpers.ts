import { Country } from "@/app/_types/types";

export function removeDuplicates(arr: string[]) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

export function alphabeticalOrder(data: Country[]) {
  return data.sort((a, b) => a.name.common.localeCompare(b.name.common));
}

// export function isCountryInUserFavorites(userCountries: any, countryCode: string) {
//   if (!userCountries || !userCountries.countries) {
//     return false; 
//   }

//   const favoriteCountryCodes: string[] = userCountries.countries.map((country: any) => country.country);
//   return favoriteCountryCodes.includes(countryCode);
// }