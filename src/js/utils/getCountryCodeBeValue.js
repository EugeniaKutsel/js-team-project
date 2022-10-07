import {countries} from "../variables/countries";


export function getCountryCodeBeValue (value) {
  return countries.filter(it => it.name.includes(value) || it.code.toLowerCase().includes(value))
}