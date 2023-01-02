import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";

import "./App.css";

const settings = {
  apiKey: import.meta.env.VITE_ALCHEMY_API,
  network: Network.ETH_MAINNET,
};

// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [block, setBlock] = useState();

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }
    async function getBlock() {
      const block = await alchemy.core.getTransactionReceipt("0xa5b5c975e1efff912570f77a5b7d33dca59dc6856f60f9516e193007145e9883")
      console.log(block);
    }

    getBlockNumber();
    getBlock();
  });

  return (
    <>
      <div className="App">Block Number: {blockNumber}</div>
      <div className="App">Block Number: {}</div>
    </>
  );
}

export default App;
