export const getUserFromLocalStorage = (type) => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(type);
      try {
        return storedValue ? JSON.parse(storedValue) : null;
      } catch (error) {
        console.error('Error parsing JSON from localStorage:', error);
        return null;
      }
    }
    return null;
  };
  
  export const getPropsFromLocalStorage = (type) => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(type);
      try {
        return storedValue ? JSON.parse(storedValue) : null;
      } catch (error) {
        console.error('Error parsing JSON from localStorage:', error);
        return null;
      }
    }
    return null;
  };
  
  export const setLocalStorageProp_ = (type, value) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(type, JSON.stringify(value));
    }
  };
  