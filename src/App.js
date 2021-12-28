import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Routes, Link, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <>
          <Header />
          <AppBody>
            <Sidebar/>
            <Routes>
              <Route exact path="/" />
            </Routes>
          </AppBody>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display:flex;
  height:100vh;
`;
