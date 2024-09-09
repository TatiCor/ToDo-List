import React, { useReducer, useEffect} from "react";
// eliminamos el context

const initialState = ({ initialValue }) => ({
  // Sincronización entre pestañas de un mismo navegador
  sincronized: true,
  // declaro estado para mensaje de carga
  loading: true,
  // estado para manejar errores si no carga info TODOs
  error: false,
  // declaro estado inicial
  item: initialValue,
})

// Action types
const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE',
  loading: 'LOADING',

} 
// reducer
const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronized: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload
  },
  [actionTypes.sincronize]: {
    ...state,
    loading: true,
    sincronized: false
  },
  
})

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
}

function useLocalStorage (itemName, initialValue) {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));

  const {
    sincronized,
    item,
    loading,
    error,
  } = state;

    // LocalStorage custom hook  
    
    // Action creators 
  const onError = (error) => dispatch({ 
    type: actionTypes.error, 
    payload: error
  });

  const onSuccess = (item) => dispatch({ 
    type: actionTypes.success, 
    payload: item
  });

  const onSave = (item) => dispatch({
    type: actionTypes.save,
    payload: item
  }); 

  const onSincronize = () => dispatch({
    type: actionTypes.sincronize,
  })

  useEffect(() => {
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);  // primero nuestra app va a revisar si hay algo en localstorage.
        }

        onSuccess(parsedItem);        
      } catch(error){
        console.log('Hubo un error al leer el item del local storage', error);
        onError(error);
      }     
        }, 2000);
    }, [sincronized]);

      //fx para actualizar localStorage y estado
  
    const saveItem = (newItem) => {
      try {
        const stringifiedITem = JSON.stringify(newItem);
        localStorage.setItem(itemName, 
          stringifiedITem); // actualiza el Storage            
          onSave(newItem) //actualiza el estado
      } catch (error) {
        onError(error)
      }
    }

    const sincronizeItem = () => onSincronize();

    
    return {
      item, 
      saveItem,
      loading,
      error,
      sincronizeItem
  };
  }

  export { useLocalStorage }