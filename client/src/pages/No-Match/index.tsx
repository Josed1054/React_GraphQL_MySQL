import React from "react";
import { Link } from "react-router-dom";

export function NoMatch() {
  return (
    <>
      <h1>404</h1>
      <Link to={"/"}>
        <h1>🤠</h1>
      </Link>
    </>
  );
}
