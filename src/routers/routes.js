import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import NodeWalletConnect from "@walletconnect/node";
// import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";
import "react-toastify/dist/ReactToastify.css";

// importing all the themes
import ThemeOne from "../themes/theme-one";
import ExploreOne from "../themes/explore-one";
import ExploreTwo from "../themes/explore-two";
// import ExploreThree from "../themes/explore-three";
// import ExploreFour from "../themes/explore-four";
import NewItems from "../themes/new-item";
// import Auctions from "../themes/auctions";
import ItemDetails from "../themes/item-details";
import Activity from "../themes/activity";
// import Blog from "../themes/blog";
import News from "../themes/news";
import BlogSingle from "../themes/blog-single";
import HelpCenter from "../themes/help-center";
// import Authors from "../themes/authors";
import Author from "../themes/author";
import WalletConnect from "../themes/wallet-connect";
// import Create from "../themes/create";
import Login from "../themes/login";
import Signup from "../themes/signup";
import Contact from "../themes/contact";
import Staking from "../themes/staking";
import BuyToken from "../themes/buy-token";
import SellItems from "../themes/sellitem";
import Account from "../themes/account";
import PreOrderDetails from "../themes/preOrderDetails";
import Event from "../themes/event";
// import { web3 } from "../App";
import ModalPlayGame from "../components/Modal/ModalPlayGame";
import Transfer from "../themes/Transfer";
import { getConfig } from "../Config/config";
import { webtest } from "../App";
import { Load, unLoad } from "../utils/Loader";
import { Web3Provider } from "../utils/Web3Provider";
import { connectWallet } from "../utils/connectWallet";
import Web3 from "web3";



class MyRouts extends React.Component {
  constructor(props) {
    super(props);
    this._initState = {
      connectedWallet: {
        status: false,
        address: "",
        chainId: null,
        balanceBNB: 0,
        connector: {},
        wallet: "",
      },
    };
    this.state = this._initState;
    this.checkStatus.bind(this);
    this.listenEvent.bind(this);

  }

  async checkStatus() {
    const $this = this;
    const web3 = await Web3Provider();
    if (window.ethereum) {
      if (
        window.ethereum &&
        window.ethereum.selectedAddress &&
        window.ethereum.selectedAddress !== $this.state.connectedWallet.address
      ) {
        var xxx = $this.state.connectedWallet;
        xxx.status = true;
        xxx.address = window.ethereum.selectedAddress;
        xxx.chainId = window.ethereum.chainId;
        xxx.wallet = "METAMASK";

        const busdAddress = "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee";
        // const holderAddress = "0x8894e0a0c962cb723c1976a4421c95949be2d4e3";
        
        // just the `balanceOf()` is sufficient in this case
        const abiJson = [{"constant":false,"inputs":[],"name":"disregardProposeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"assetProtectionRole","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"r","type":"bytes32[]"},{"name":"s","type":"bytes32[]"},{"name":"v","type":"uint8[]"},{"name":"to","type":"address[]"},{"name":"value","type":"uint256[]"},{"name":"fee","type":"uint256[]"},{"name":"seq","type":"uint256[]"},{"name":"deadline","type":"uint256[]"}],"name":"betaDelegatedTransferBatch","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"sig","type":"bytes"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"seq","type":"uint256"},{"name":"deadline","type":"uint256"}],"name":"betaDelegatedTransfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"initializeDomainSeparator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"unfreeze","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newSupplyController","type":"address"}],"name":"setSupplyController","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"target","type":"address"}],"name":"nextSeqOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newAssetProtectionRole","type":"address"}],"name":"setAssetProtectionRole","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"freeze","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newWhitelister","type":"address"}],"name":"setBetaDelegateWhitelister","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"decreaseSupply","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"isWhitelistedBetaDelegate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"whitelistBetaDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_proposedOwner","type":"address"}],"name":"proposeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"increaseSupply","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"betaDelegateWhitelister","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposedOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"unwhitelistBetaDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"wipeFrozenAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"EIP712_DOMAIN_HASH","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"isFrozen","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"supplyController","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"reclaimBUSD","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"currentOwner","type":"address"},{"indexed":true,"name":"proposedOwner","type":"address"}],"name":"OwnershipTransferProposed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldProposedOwner","type":"address"}],"name":"OwnershipTransferDisregarded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"}],"name":"AddressFrozen","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"}],"name":"AddressUnfrozen","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"}],"name":"FrozenAddressWiped","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldAssetProtectionRole","type":"address"},{"indexed":true,"name":"newAssetProtectionRole","type":"address"}],"name":"AssetProtectionRoleSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"SupplyIncreased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"SupplyDecreased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldSupplyController","type":"address"},{"indexed":true,"name":"newSupplyController","type":"address"}],"name":"SupplyControllerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"seq","type":"uint256"},{"indexed":false,"name":"fee","type":"uint256"}],"name":"BetaDelegatedTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldWhitelister","type":"address"},{"indexed":true,"name":"newWhitelister","type":"address"}],"name":"BetaDelegateWhitelisterSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"newDelegate","type":"address"}],"name":"BetaDelegateWhitelisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldDelegate","type":"address"}],"name":"BetaDelegateUnwhitelisted","type":"event"}];
        
        const contract = new web3.eth.Contract(abiJson, busdAddress);
        const balance = await contract.methods.balanceOf(xxx.address).call();
        // note that this number includes the decimal places (in case of BUSD, that's 18 decimal places)
        console.log(balance);

        // var balanceBNB = await window.ethereum.request({
        //   method: "eth_getBalance",
        //   params: [window.ethereum.selectedAddress, "latest"],
        // });
        xxx.balanceBNB = parseFloat(web3.utils.fromWei(balance, "ether")).toFixed(6);
        $this.setState({ connectedWallet: xxx });
      }
      // }
      // else {
      //   alert('Select BSC Testnet chain, please!!!');
      //   window.location.reload();
      // }
    }
  }

  async listenEvent() {
    const $this = this;
    const web3 = await Web3Provider();
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", async function (accounts) {
        console.log('change account ne', accounts);
        // console.log('change change change');
        // Time to reload your interface with accounts[0]!
        if (
          window.ethereum &&
          window.ethereum.selectedAddress &&
          window.ethereum.selectedAddress !== $this.state.connectedWallet.address
        ) {
          var xxx = $this.state.connectedWallet;
          xxx.status = true;
          xxx.address = window.ethereum.selectedAddress;
          xxx.chainId = window.ethereum.chainId;
          xxx.wallet = "METAMASK";
          var balanceBNB = await window.ethereum.request({
            method: "eth_getBalance",
            params: [window.ethereum.selectedAddress, "latest"],
          });
          xxx.balanceBNB = parseFloat(web3.utils.fromWei(balanceBNB, "ether")).toFixed(6);
          $this.setState({ connectedWallet: xxx }, () => {
            window.location.reload();

          });
        }
      });
      window.ethereum.on("chainChanged", (chainId) => {
        // Handle the new chain.
        // Correctly handling chain changes can be complicated.
        // We recommend reloading the page unless you have good reason not to.
        window.location.reload();
      });
    }
  }

  async connectWallet() {
    const $this = this;
    const web3 = await Web3Provider();
    if (window.ethereum) {
      await window.ethereum.enable();
      if (window.ethereum && !window.ethereum.selectedAddress) {
        window.ethereum.request({ method: "eth_requestAccounts" });
      }
      if (window.ethereum) {
        console.log("chainId", window.ethereum.chainId);
        // unLoad()
        // if (window.ethereum.chainId == '0x38') {
        if (
          window.ethereum &&
          window.ethereum.selectedAddress &&
          window.ethereum.selectedAddress !== $this.state.connectedWallet.address
        ) {
          var xxx = $this.state.connectedWallet;
          xxx.status = true;
          xxx.address = window.ethereum.selectedAddress;
          xxx.chainId = window.ethereum.chainId;
          xxx.wallet = "METAMASK";
          var balanceBNB = await window.ethereum.request({
            method: "eth_getBalance",
            params: [window.ethereum.selectedAddress, "latest"],
          });
          xxx.balanceBNB = parseFloat(web3.utils.fromWei(balanceBNB, "ether")).toFixed(6);
          $this.setState({ connectedWallet: xxx });
        }
        // }
        // else {
        //   alert('Select BSC Testnet chain, please!!!');
        //   window.location.reload();
        // }
      }

      window.ethereum.on("accountsChanged", async function (accounts) {
        console.log('change account ne', accounts);
        // console.log('change change change');
        // Time to reload your interface with accounts[0]!
        if (
          window.ethereum &&
          window.ethereum.selectedAddress &&
          window.ethereum.selectedAddress !== $this.state.connectedWallet.address
        ) {
          var xxx = $this.state.connectedWallet;
          xxx.status = true;
          xxx.address = window.ethereum.selectedAddress;
          xxx.chainId = window.ethereum.chainId;
          xxx.wallet = "METAMASK";
          var balanceBNB = await window.ethereum.request({
            method: "eth_getBalance",
            params: [window.ethereum.selectedAddress, "latest"],
          });
          xxx.balanceBNB = parseFloat(web3.utils.fromWei(balanceBNB, "ether")).toFixed(6);
          $this.setState({ connectedWallet: xxx }, () => {
            window.location.reload();

          });
          // console.log("new state : ", $this.state);
          // $this.setState({ connectedWallet: { status: true, address: window.ethereum.selectedAddress } });
        }
      });
      window.ethereum.on("chainChanged", (chainId) => {
        // Handle the new chain.
        // Correctly handling chain changes can be complicated.
        // We recommend reloading the page unless you have good reason not to.
        window.location.reload();
      });
    }


    //////////// Bridge Wallet Connect /////////////////

    // else {
    //   const walletConnector = new NodeWalletConnect(
    //     {
    //       bridge: "https://bridge.walletconnect.org", // Required
    //     },
    //     {
    //       clientMeta: {
    //         description: "WalletConnect NodeJS Client",
    //         url: "https://nodejs.org/en/",
    //         icons: ["https://nodejs.org/static/images/logo.svg"],
    //         name: "WalletConnect",
    //       },
    //     }
    //   );
    //   // console.log('cnn',walletConnector.killSession);
    //   // Check if connection is already established
    //   if (!walletConnector.connected) {
    //     // create new session
    //     walletConnector.createSession().then((result) => {
    //       // get uri for QR Code modal
    //       console.log("result ne", result);
    //       const uri = walletConnector.uri;
    //       // display QR Code modal
    //       WalletConnectQRCodeModal.open(
    //         uri,
    //         () => {
    //           console.log("QR Code Modal closed");
    //         },
    //         true // isNode = true
    //       );
    //     });
    //   }
    //   if (walletConnector.connected) {
    //     // walletConnector.
    //     // console.log('Name : ',walletConnector);
    //     // console.log(window.localStorage.walletconnect)
    //     var xxx = $this.state.connectedWallet;
    //     xxx.status = true;
    //     xxx.address = walletConnector.accounts[0];
    //     xxx.chainId = "0x" + walletConnector.chainId;
    //     xxx.balanceBNB = 9999;
    //     // xxx.chainId = window.ethereum.chainId;
    //     xxx.wallet = "ANOTHER";
    //     xxx.connector = walletConnector;
    //     $this.setState({ connectedWallet: xxx });
    //     //   var balanceBNB = await window.ethereum.request({ method: "eth_getBalance", "params": [window.ethereum.selectedAddress, "latest"] });
    //     //   xxx.balanceBNB = parseFloat(web3.utils.fromWei(balanceBNB, "ether")).toFixed(6);
    //   }
    //   // Subscribe to connection events
    //   walletConnector.on("connect", async (error, payload) => {
    //     console.log('update ne',payload);
    //     if (error) {
    //       throw error;
    //     }


    //     // Close QR Code Modal
    //     WalletConnectQRCodeModal.close(
    //       true // isNode = true
    //     );

    //     // Get provided accounts and chainId
    //     const { accounts, chainId } = payload.params[0];
    //     // if(chainId !== 56) { 
    //     //   alert('Only support BSC Mainnet');
    //     //   await walletConnector.killSession();
    //     //   window.location.reload();
    //     // }
    //     console.log( accounts, chainId);
    //     window.location.reload();
    //   });

    //   walletConnector.on("session_update", (error, payload) => {
    //     if (error) {
    //       throw error;
    //     }
    //     // console.log('paylak',payload.params[0].accounts)
    //     // Get updated accounts and chainId
    //     const { accounts, chainId } = payload.params[0];
    //     // console.log(accounts);
    //     // console.log('aaaaaaaaaa',walletConnector)
    //     var xxx = $this.state.connectedWallet;
    //     xxx.status = true;
    //     xxx.address = accounts;
    //     xxx.chainId = "0x" + chainId;
    //     xxx.balanceBNB = 9999;
    //     // // xxx.chainId = window.ethereum.chainId;
    //     xxx.wallet = "ANOTHER";
    //     xxx.connector = walletConnector;
    //     $this.setState({ connectedWallet: xxx });
    //     window.location.reload();
    //     // else{ 
    //     //   console.log('Changing Chain')
    //     //   xxx.chainId = "0x" + walletConnector.chainId;
    //     // }
    //     // console.log(xxx.address);
    //     // console.log($this.state.connectedWallet.address)  
    //     // console.log($this.state.connectedWallet.chainId)
    //   });
    //   walletConnector.on("chain_update", (error,payload) => { 
    //      console.log(payload);

    //      if (error) {
    //       throw error;
    //     }
    //     // alert('disconnecting');
    //     window.location.reload();
    //     // Delete walletConnector
    //   })
    //   walletConnector.on("disconnect", (error, payload) => {
    //     // console.log(payload);
    //     if (error) {
    //       throw error;
    //     }
    //     // alert('disconnecting');
    //     // window.location.reload();
    //     // Delete walletConnector
    //   });
    // }
  }

  async setSystemConfig() {
    const Config = await getConfig();
    console.log(Config);
    const localConfig = await localStorage.getItem('Config');
    if (!localConfig) {
      await localStorage.setItem('Config', JSON.stringify(Config));
    }
    else if (JSON.stringify(Config) !== localConfig) {
      await localStorage.setItem('Config', JSON.stringify(Config));
    }
    return;
  }

  async componentDidMount() {
    await getConfig();
    await connectWallet();
    this.checkStatus();
    this.listenEvent();
    // await this.setSystemConfig();
    // const x = await webtest();
    // console.log('web test ne', x )
    // console.log('Config ne  : ' , config)
    // const xxx = localStorage.getItem("SQF");
    // console.log('address',xxx);
    // const xyz = await Web3Provider();
    // console.log('new',xyz)
  }

  render() {  
    return (
      <div>
        <ToastContainer />
        <ModalPlayGame />

        <Router>
          <Switch>
            <Route exact path="/">
              <ThemeOne connectedWallet={this.state.connectedWallet} />
            </Route>
            <Route exact path="/marketplace">
              <ExploreOne connectedWallet={this.state.connectedWallet} />
            </Route>
            <Route exact path="/all-item">
              <ExploreTwo connectedWallet={this.state.connectedWallet} />
            </Route>
            <Route exact path="/all-item/:page" render={({ match }) => (<ExploreTwo connectedWallet={this.state.connectedWallet} page={match.params.page} />)}>
            </Route>
            <Route exact path="/new-items">
              <NewItems connectedWallet={this.state.connectedWallet} />
            </Route>
            <Route exact path="/item-details/owner/:id" render={({ match }) => (<ItemDetails connectedWallet={this.state.connectedWallet} owner={true} id={match.params.id} />)} />
            <Route exact path="/item-details/:id" render={({ match }) => (<ItemDetails connectedWallet={this.state.connectedWallet} id={match.params.id} />)} />
            {/* <Route exact path="/item-details/item/:id" render={({ match }) => (  <ItemDetails connectedWallet={this.state.connectedWallet} type={1} id={match.params.id} />)} /> */}
            {/* <ItemDetails connectedWallet={this.state.connectedWallet} />
            </Route> */}
            <Route exact path="/pre-order/:id" render={({ match }) => (<PreOrderDetails connectedWallet={this.state.connectedWallet} id={match.params.id} />)} />
            <Route exact path="/activity">
              <Activity connectedWallet={this.state.connectedWallet} />
            </Route>
            <Route exact path="/news">
              <News connectedWallet={this.state.connectedWallet} />
            </Route>
            <Route
              exact
              path="/blog-single/:id"
              render={({ match }) => (
                <BlogSingle
                  connectedWallet={this.state.connectedWallet}
                  id={match.params.id}
                />
              )}
            />
            {/* <Route exact path="/blog-single/:id" >
              <BlogSingle connectedWallet={this.state.connectedWallet}  />
             
              </Route> */}
            <Route exact path="/help-center">
              <HelpCenter connectedWallet={this.state.connectedWallet} />
            </Route>
            <Route exact path="/authors">
              <Author connectedWallet={this.state.connectedWallet} />
            </Route>
            <Route exact path="/author">
              <Author connectedWallet={this.state.connectedWallet} />
            </Route>
            <Route exact path="/wallet-connect">
              {/* <WalletConnect connectedWallet={this.state.connectedWallet} btnConnectClick={this.handleRouteLogin} /> */}
              <WalletConnect connectedWallet={this.state.connectedWallet} />
            </Route>
            {/* <Route exact path="/sell-items">
              <SellItems connectedWallet={this.state.connectedWallet} />
            </Route> */}
            <Route exact path="/sell-items/:id" render={({ match }) => (<SellItems connectedWallet={this.state.connectedWallet} id={match.params.id} />)} />
            <Route exact path="/login">
              <Login connectedWallet={this.state.connectedWallet} />
            </Route>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/contact">
              <Contact connectedWallet={this.state.connectedWallet} />
            </Route>
            <Route exact path="/staking">
              <Staking connectedWallet={this.state.connectedWallet} />
            </Route>
            <Route exact path="/airdrop">
              <Event connectedWallet={this.state.connectedWallet} />
            </Route>
            <Route exact path="/buy-token">
              <BuyToken connectedWallet={this.state.connectedWallet} />
            </Route>
            <Route
              exact
              path="/buy-token/:refCode"
              render={async ({ match }) => {
                await window.localStorage.setItem("refCode", match.params.refCode);
                window.location.href = '/buy-token';
                (<BuyToken
                  connectedWallet={this.state.connectedWallet}
                  refCode={match.params.refCode}
                />
                )
              }}
            />
            <Route exact path="/account">      
                <Account connectedWallet={this.state.connectedWallet} currentStage={"ACCOUNT_STAGE"} />
            </Route>
            <Route exact path="/account/inventory">      
                <Account connectedWallet={this.state.connectedWallet} currentStage={"ACCOUNT_INVENTORY"} />
            </Route>
            <Route exact path="/account/selling">      
                <Account connectedWallet={this.state.connectedWallet} currentStage={"SELLING"} />
            </Route>
            <Route exact path="/account/buy">      
                <Account connectedWallet={this.state.connectedWallet} currentStage={"BUY"} />
            </Route>
            <Route exact path="/account/sold">      
                <Account connectedWallet={this.state.connectedWallet} currentStage={"SOLD"} />
            </Route>
            <Route exact path="/account/airdrop">      
                <Account connectedWallet={this.state.connectedWallet} currentStage={"AIRDROP"} />
            </Route>
            <Route exact path="/transfer/:id" render={({ match }) => (<Transfer connectedWallet={this.state.connectedWallet} id={match.params.id} />)} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRouts;
