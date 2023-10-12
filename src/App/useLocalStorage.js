import React from "react";
function useLocalStorage (itemName, initialValue) {
    // LocalStorage custom hook
 
   const localStorageItem = localStorage.getItem(itemName);
 
   let parsedItem;
 
   if (!localStorageItem) {
       localStorage.setItem(itemName, JSON.stringify(initialValue));
       parsedItem = initialValue;
     } else {
       parsedItem = JSON.parse(localStorageItem);  // primero nuestra app va a revisar si hay algo en localstorage.
     }
     
      // declaro estado 
   const [item, setItem] = React.useState(parsedItem);
     //fx para actualizar localStorage y estado
 
   const saveItem = (newItem) => {
     localStorage.setItem(itemName, 
     JSON.stringify(newItem)); // actualiza el Storage
       
     setItem(newItem) //actualiza el estado
   }
   
   return [item, saveItem];
 }

 export { useLocalStorage }