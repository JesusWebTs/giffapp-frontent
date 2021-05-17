/** @jsx jsx */
/** @jsxFrag React.Fragment */

import React from "react";
import SearchForm from "../../components/SearchForm";
import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { css, jsx } from "@emotion/react";
import Button from "../../components/Button";

const gifsErrors = [
  "d2jjuAZzDSVLZ5kI",
  "Bp3dFfoqpCKFyXuSzP",
  "hv5AEBpH3ZyNoRnABG",
  "hLwSzlKN8Fi6I",
];

const pageErrorsStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
`;

const codeErrorStyles = css`
  font-size: 5rem;
  font-weight: bold;
  font-style: italic;
`;

const msgErrorStyle = css(`
  font-size: 1.5rem;
  margin: 1rem 0;
`);

const gifErrorStyle = css({
  margin: "1rem auto",
  width: "250px",
  height: "250px",
  "&:hover": {
    transform: "scale(1.2)",
  },
});

// .page-error .code-error {
//
// }

// .page-error .msg-error {
// }

// .page-error .gif-error {
// }

export default function ErrorPage() {
  const randomImage = () => {
    return `https://media.giphy.com/media/${
      gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]
    }/giphy.gif`;
  };

  return (
    <>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>
      <header className="o-header">
        <SearchForm />
      </header>
      <div className="App-wrapper">
        <div /* className="App-main page-error" */ css={pageErrorsStyles}>
          <span /* className="code-error" */ css={codeErrorStyles}>404</span>
          <span /* className="msg-error" */ css={msgErrorStyle}>
            Sometimes gettings lost isn't that bad
          </span>
          <img
            /* className="gif-error" */ css={gifErrorStyle}
            src={randomImage()}
            alt="alt-page-404"
          />
          <Button href="/">Go back home</Button>
        </div>
      </div>
    </>
  );
}
