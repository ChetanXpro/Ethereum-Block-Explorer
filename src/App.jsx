import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Block from "./components/Block/Block";
import Layout from "./components/Dashboard/Layout";
import Home from "./components/Home/Home";

const settings = {
  apiKey: import.meta.env.VITE_ALCHEMY_API,
  network: Network.ETH_MAINNET,
};

// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/block/:hash" element={<Block />} />
        </Route>
      </Routes>
      {/* <div className="App">Block Number: {blockNumber}</div>
      <div className="App">Block Number: {}</div> */}
    </div>
  );
}

export default App;
