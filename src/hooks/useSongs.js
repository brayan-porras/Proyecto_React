import axios from "axios";
import { useEffect, useState } from "react"
import { data } from "../data/shopify";

export const useSongs = () => {
 const [songs, setSongs ] =  useState([]);

 const getSongs = async () =>{

    try {

        const response = await axios.get( "https://cors-anywhere.herokuapp.com/https://celes-app.myshopify.com/admin/api/2023-04/products.json",{

      
            headers: {
                "X-Shopify-Access-Token": "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",
         
            },
           
        

            });

        setSongs(response.data.products);   


} catch (error) {
    
}

 }
useEffect(() =>{
  setSongs(data.products);
//getSongs();
},[])

  return {
songs
  }
    
  
}
