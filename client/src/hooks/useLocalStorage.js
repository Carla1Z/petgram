import { useState } from "react";

export function useLocalStorage(key, initialValue) {
    // Inicializar el estado
    const [storedValue, setValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item != null ? JSON.parse(item) : initialValue;
      } catch (error) {
        return initialValue;
      }
    });
  
    // Actualizar el localstorage
    const setLocalStorage = (value) => {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
        setValue(value);
      } catch (error) {
        console.error(error);
      }
    };
  
    return [storedValue, setLocalStorage];
  }
  