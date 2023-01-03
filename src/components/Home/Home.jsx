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
import BlockTable from "../BlockTable/BlockTable";
import { textTransforms } from "@nextui-org/react";
// import { isBytes } from "alchemy-sdk/dist/src/api/utils";

import { checkResultErrors } from "@ethersproject/abi";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const settings = {
  apiKey: import.meta.env.VITE_ALCHEMY_API,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const Home = () => {
  const [blockNumber, setBlockNumber] = useState();
  const [blocks, setBlock] = useState([]);

  function hexToDec(hexString) {
    return parseInt(hexString, 16);
  }

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    {
      key: 0,
      block: 3232323,
      miner: "0x023232232",
    },
  ];
  async function getBlock() {
    let data = [];
    // console.log(data);

    const blockHeight = await alchemy.core.getBlockNumber();

    for (let i = blockHeight; i >= blockHeight - 10; i--) {
      const block = await alchemy.core.getBlock(i);
      const hr = new Date(block.timestamp).getHours();
      const min = new Date(block.timestamp).getMinutes();
      const age = `${hr}h:${min}min`;

      let obj = {
        key: block.number,
        block: block.number,
        miner: block.miner,
        txn: block.transactions.length,
        age: age,
      };
      data.push(obj);

      // if(data.length > 2){
      const check = blocks.filter((bk) => bk.key === block.number);
      // console.log(check.length === 0);
      if (check.length === 0) {
        setBlock(() => {
          return [...blocks, ...data];
        });
      }
      // }
    }
  }

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();
    getBlock();
  }, []);

  return (
    <div className={`h-screen ${classes.main}`}>
      {/* <div className="h-34">{blockNumber}</div> */}
      <TableContainer className="bg-green-500" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Block</TableCell>
              {/* <TableCell>Age</TableCell> */}
              <TableCell align="right">Txn</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Miner</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blocks.map((row) => (
              <TableRow
                key={row.key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  onClick={() => console.log(row.block)}
                  component="th"
                  scope="row"
                >
                  {row.block}
                </TableCell>
                {/* <TableCell align="right">{row.age}</TableCell> */}
                <TableCell align="right">{row.txn}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.miner}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
