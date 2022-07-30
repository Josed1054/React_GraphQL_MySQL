import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { App } from "../../pages/Home";
import Nav from "../../components/nav";
import { NoMatch } from "../../pages/No-Match";
import { SingUp } from "../../components/sing-up";

export function ROUTES() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <SingUp />
            </>
          }
        >
          <Route index={true} element={<App />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  );
}
