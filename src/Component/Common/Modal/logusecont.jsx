import axios from "axios";
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [LoginUserData, setLoginUserData] = useState();
  const [farmDtl, setfarmDtl] = useState(null);
  const [sizevalue, setSizevalue] = useState(null);
  const [UidData, setUidData] = useState(null);
  const [cartdata, setCartdata] = useState(null);
  const [amountData, setamountData] = useState(null);
  const [iteamdata, setiteamdata] = useState();
  const [FarmDataUMKid, setFarmDataUMKid] = useState({});
  const [AnimalData, setAnimalData] = useState({});
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [showKidMainCard, setshowKidMainCard] = useState({});

  return (
    <UserContext.Provider
      value={{
        loggedInUser,
        farmDtl,
        setfarmDtl,
        AnimalData,
        setAnimalData,
        selectedAnimal,
        setSelectedAnimal,
        setLoggedInUser,
        sizevalue,
        setSizevalue,
        setUidData,
        UidData,
        cartdata,
        setCartdata,
        amountData,
        setamountData,
        cart,
        setCart,
        iteamdata,
        setiteamdata,
        LoginUserData, 
        setLoginUserData,
        FarmDataUMKid,
         setFarmDataUMKid,showKidMainCard, setshowKidMainCard
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
