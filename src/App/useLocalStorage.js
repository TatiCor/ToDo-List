import React, { useState } from "react";
// eliminamos el context

function useLocalStorage (itemName, initialValue) {
    // Sincronización entre pestañas de un mismo navegador
    const [sincronized, setSincronized] = useState(true)
    // declaro estado inicial
    const [item, setItem] = React.useState(initialValue);

    // declaro estado para mensaje de carga
    const [loading, setLoading] = React.useState(true);

    // estado para manejar errores si no carga info TODOs
    const [error, setError] = React.useState(false);
  
    // LocalStorage custom hook  
    
    React.useEffect(() => {
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itemName);

          let parsedItem;

          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);  // primero nuestra app va a revisar si hay algo en localstorage.
            setItem(parsedItem)
          }
          setLoading(false)
          setSincronized(true)
        } catch(error){
          setLoading(false)
          console.log('Hubo un error al leer el item del local storage', error);
          setError(true)
        }     
          }, 2000);
      }, [sincronized]);
    

      //fx para actualizar localStorage y estado
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, 
      JSON.stringify(newItem)); // actualiza el Storage
        
      setItem(newItem) //actualiza el estado
    }

    const sincronizeItem = () => {
      setLoading(true);
      setSincronized(false)
    }
    
    return {
      item, 
      saveItem,
      loading,
      error,
      sincronizeItem
  };
  }

  export { useLocalStorage }