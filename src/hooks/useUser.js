import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext";
import { loginService, logoutService } from "../services/login";
import addFavService from "../services/addFav";
import getFavsService from "../services/getFavs";
export default function useUser() {
  const { jwt, setJWT, setFavs, favs } = useContext(Context);
  const [state, setState] = useState({ loading: false, error: false });

  const login = useCallback(
    ({ userName, password }) => {
      setState({ loading: true, error: false });
      loginService({ userName, password })
        .then((jwt) => {
          if (jwt) {
            setState({ loading: false, error: false });
            window.sessionStorage.setItem("jwt", jwt);
            return setJWT(jwt);
          }
          throw Error("F");
        })
        .catch((err) => {
          window.sessionStorage.removeItem("jwt");
          setState({ loading: false, error: true });
          console.log(err);
        });
    },
    [setJWT]
  );

  const addFav = useCallback(({ id }) => {
    addFavService({ id, jwt })
      .then((favs) => {
        setFavs(favs);
      })
      .catch((err) => {});
  }, []);

  const logOut = () => {
    logoutService(window.sessionStorage.getItem("jwt"));
    window.sessionStorage.removeItem("jwt");
    setJWT(null);
  };



  return {
    favs,
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logOut,
    addFav,
  };
}
