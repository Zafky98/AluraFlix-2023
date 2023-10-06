import React from 'react';
import { useContext } from 'react';


const MyContext = React.createContext({})
export const MyProvider = MyContext.Provider
export default MyContext 
