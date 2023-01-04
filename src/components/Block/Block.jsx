import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Alchemy, isHex, Network } from "alchemy-sdk";

const settings = {
  apiKey: import.meta.env.VITE_ALCHEMY_API,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const Block = () => {
  const { BlockNumber } = useParams();
  useEffect(() => {
    const fetchBlock = async () => {
      const block = await alchemy.core.getBlockWithTransactions(BlockNumber);
      console.log(block);
    };
    fetchBlock();
  }, []);

  const { hash } = useParams();
  return <div>{hash}</div>;
};

export default Block;
