import React, { useEffect, useState } from "react";

import getFavsService from "../services/getFavs";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [favs, setFavs] = useState([]);
  const [jwt, setJWT] = useState(
    () => window.sessionStorage.getItem("jwt") || null
  );

  useEffect(() => {
    if (!jwt) return setFavs([]);
    getFavsService({ jwt }).then(setFavs);
    return () => {};
  }, [jwt]);

  return (
    <Context.Provider value={{ jwt, favs, setJWT, setFavs }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
