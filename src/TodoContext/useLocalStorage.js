import React from "react";
function useLocalStorage (itemName, initialValue) {
    
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
        } catch(error){
          setLoading(false)
          console.log('Hubo un error al leer el item del local storage', error);
          setError(true)
        }     
          }, 2000);
      }, []);
    

      //fx para actualizar localStorage y estado
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, 
      JSON.stringify(newItem)); // actualiza el Storage
        
      setItem(newItem) //actualiza el estado
    }
    
    return {
      item, 
      saveItem,
      loading,
      error
  };
  }

  export { useLocalStorage }