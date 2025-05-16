import React, { createContext, useState, useEffect } from 'react';

// 1. Create the context
export const AppContext = createContext(null);

// 2. Create the provider component
const AppContextProvider = (props) => {

const heroData = [
  {text1: 'Real Fruit',text2: 'Macarons'},
  {text1: 'Almond +',text2: 'Chocolates'},
  {text1: 'Celebrate with',text2: 'real', text3: 'cakes' },
  {text1: 'Breakfast',text2: 'in Bed???'},   //background image text
]

  const [count, setCount] = useState(0); // image count

  useEffect(() => {
  const interval = setInterval(() => {
    setCount((prevCount) => (prevCount + 1) % heroData.length);
  }, 5000);

  return () => clearInterval(interval); // Cleanup
}, [heroData.length]);


  const contextValue = {count,setCount, heroData}
  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
