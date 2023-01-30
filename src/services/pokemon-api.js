import axios from "axios";
 
const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=20";

 class Service {
   static getPokemonList() { 
    return axios.get(baseURL).then((response) => (response.data.results));
   }

   static getPokemonDetails(url) { 
    return axios.get(url).then((response) => (response.data));
   }
 }
 
 export default Service;
 