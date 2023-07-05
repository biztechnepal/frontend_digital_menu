// import { useEffect, useState } from 'react';

// export function useLocalStorage(key, initialValue) {
//   const [value, setValue] =
//     useState <
//     T >
//     (() => {
//       const jsonValue = localStorage.getItem(key);
//       if (jsonValue != null) return JSON.parse(jsonValue);

//       if (typeof initialValue === 'function') {
//         return initialValue();
//       } else {
//         return initialValue;
//       }
//     });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue];
// }

import { useState, useEffect } from 'react';

// ----------------------------------------------------------------------

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue === null ? defaultValue : JSON.parse(storedValue);
  });

  useEffect(() => {
    const listener = (e) => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(JSON.parse(e.newValue));
      }
    };
    window.addEventListener('storage', listener);

    return () => {
      window.removeEventListener('storage', listener);
    };
  }, [key, defaultValue]);

  const setValueInLocalStorage = (newValue) => {
    setValue((currentValue) => {
      const result =
        typeof newValue === 'function' ? newValue(currentValue) : newValue;
      localStorage.setItem(key, JSON.stringify(result));
      return result;
    });
  };

  return [value, setValueInLocalStorage];
}
