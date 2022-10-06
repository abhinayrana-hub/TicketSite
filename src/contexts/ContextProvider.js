import React, { createContext, useContext, useState } from 'react';


const StateContext = createContext();

const initialState = {
  bell: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {

 const [activeMenu, setActiveMenu] = useState(true);
const [screenSize, setScreenSize] = useState(undefined);
  const [isClicked, setIsClicked] = useState(initialState);
  const[openPopup, setOpenPopup] = useState(false);
  const [textEditor, setTextEditor] = useState("");
  const [projectName, setprojectName] = useState("");
  const [user, setUser] = useState("");



  

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ openPopup, setOpenPopup, handleClick, 
    isClicked, initialState, setIsClicked, textEditor, setTextEditor, projectName, setprojectName, user, setUser,
    activeMenu, setActiveMenu,  screenSize, setScreenSize}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
