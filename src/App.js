import React from "react";
// importing MyRouts where we located all of our them
import MyRouts from "./routers/routes";
import Web3 from "web3";
import { getConfig } from "./Config/config";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"



export const web3 = Web3.givenProvider ? new Web3(Web3.givenProvider) : new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/");
// export const web3 = new Web3("https://bsc-dataseed.binance.org/");




// export async function webtest() { 
//   var abcd = {};
//   await getConfig().then(res => { 
//     console.log(res)
//     abcd = res;
//   })
//     localStorage.setItem("SQF",abcd.rpc);
//   return abcd;

// }
function App() {
  useEffect(() => { 
    Aos.init({
      duration: 2000,
    })
  })
  return (
    <div>
      <MyRouts />
    </div>
  );
  }
export default App;
