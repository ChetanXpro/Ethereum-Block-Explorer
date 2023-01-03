import React, { useEffect, useState } from "react";
import classes from "./home.module.css";
import { Alchemy, isHex, Network } from "alchemy-sdk";
// const { keccak256 } = require("ethereum-cryptography/keccak");
import {
  toHex,
  hexToBytes,
  bytesToHex,
  bytesToUtf8,
} from "ethereum-cryptography/utils";
// import { isBytes } from "alchemy-sdk/dist/src/api/utils";

// const { utf8ToBytes, toHex } = require("ethereum-cryptography/utils");

const settings = {
  apiKey: import.meta.env.VITE_ALCHEMY_API,
  network: Network.ETH_MAINNET,
};

// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

const Home = () => {
  const [blockNumber, setBlockNumber] = useState();
  const [blocks, setBlock] = useState([]);

  function hexToDec(hexString) {
    return parseInt(hexString, 16);
  }

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }
    async function getBlock() {
      const block = await alchemy.core.getBlock(16327151);
      const data = block || [];

      // var yourNumber = parseInt(newda, 16);
      // console.log(yourNumber);

      console.log(hexToDec(block._difficulty._hex));

      // setBlock(data.transactions);
    }

    getBlockNumber();
    getBlock();
  });

  return (
    <div className={`h-screen ${classes.main}`}>
      <div className="h-34">{blockNumber}</div>
      {/* {blocks.map((txn) => (
        <div key={txn.from}>{JSON.stringify(txn.from)}</div>
      ))} */}
    </div>
  );
};

export default Home;
