
// Importa las dependencias necesarias 
  import axios from "axios";
  import { useEffect, useState } from "react"
  import { data } from "../data/shopify";

// Se define el gancho personalizado 
  export const useSongs = () => {

// Estado para almacenar las canciones, inicialmente con un arreglo vacio  

  const [songs, setSongs ] =  useState([]);

//Funcion para obtener las canciones   

  const getSongs = async () =>{

// Realizamos la solicitud HTTP a la api utilizando axios   
    try {

//se agrega el token para la autenticacion de la  API

        const response = await axios.get( "https://cors-anywhere.herokuapp.com/https://celes-app.myshopify.com/admin/api/2023-04/products.json",{
     
            headers: {
                "X-Shopify-Access-Token": "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",
         
            },
            });

// Almacena los dados de las canciones en el estado ´songs´
 setSongs(response.data.products);   


} catch (error) {
// Manejo de cualquier error que pase dentro de la solicitud 
}

 }

  useEffect(() =>{
  setSongs(data.products);// se creo para visualizar la data mientras este en desarrollo
//getSongs();
},[])

//retorna el objeto con el arreglo de canciones ´songs´
  return {
songs
  }  
}
