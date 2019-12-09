import {useState} from 'react';

 const useLocalStorage = (key, initialValue) =>{
    const [storedValue, setStoredValue] = useState(()=>{
        const isItemInStorage = window.localStorage.getItem(key)        
        return isItemInStorage ? JSON.parse(isItemInStorage) : initialValue;
    });
    const setValue = value =>{
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue, setValue];
}

export default useLocalStorage;