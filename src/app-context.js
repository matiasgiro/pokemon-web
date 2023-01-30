import React from 'react';
import { useState } from 'react';

const { createContext } = React;

const AppContext = createContext({});

const AppProvider = props => {
  const [store, setStore] = useState({ pokemones: []});
 
  return <AppContext.Provider value={[store, setStore]}>{props.children}</AppContext.Provider>
 }

 export { AppProvider, AppContext };
