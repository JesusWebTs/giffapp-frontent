import React, { useState } from "react";
import useUser from "../../hooks/useUser";
import { useLocation } from "wouter";
import "./Fav.css";
import Modal from "../Modal";
import Login from "../Login";
import Logo from "../Logo";

function Fav({ id }) {
  const [, navigate] = useLocation();
  const { isLogged, addFav, favs } = useUser();
  const [showModal, setShowModal] = useState(false);

  const isFaved = favs.some((favId) => favId === id);
  const handleClick = () => {
    console.log(isFaved);
    if (!isLogged) return setShowModal(true);
    addFav({ id });
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const handleLogin = () => {
    setShowModal(false);
  };

  const [label, emoji] = isFaved
    ? ["Remove from favorites", "❌"]
    : ["Add to favorites", "❤️"];
  return (
    <React.Fragment>
      <button className="gf-Fav" onClick={handleClick}>
        <span aria-label={label} role="img">
          {emoji}
        </span>
      </button>
      {showModal && (
        <Modal onClose={handleClose}>
          <Logo />
          <Login onLogin={handleLogin} />
        </Modal>
      )}
    </React.Fragment>
  );
}

export default Fav;
