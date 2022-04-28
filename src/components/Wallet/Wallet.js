import i18next from 'i18next';
import React, { Component } from 'react';
// import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-1/wallet";
const data = {
    "preHeading": "Wallet Connect",
    "heading": "Connect your Wallet",
    "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
    "walletData": [
      {
        "id": 1,
        "img": "/img/metamask.png",
        "title": "MetaMask",
        "content": "A browser extension with great flexibility. The web's most popular wallet",
        "type": "METAMASK"
      },
    //   {
    //     "id": 2,
    //     "img": "/img/vertical_blue.png",
    //     "title": "Trust Wallet",
    //     "content": "A Mobile wallet with great flexibility. The web's most popular mobile wallet",
    //     "type": "TRUST"
    //   },
    ]
  }

class Activity extends Component {
    state = {
        data: {},
        walletData: []
    }
    componentDidMount(){
        this.setState({
            data: data,
            walletData: data.walletData
        })
        // axios.get(`${BASE_URL}`)
        //     .then(res => {
        //         this.setState({
        //             data: res.data,
        //             walletData: res.data.walletData
        //         })
        //         // console.log(this.state.data)
        //     })
        // .catch(err => console.log(err))
        // console.log('feawfewa');

        // browser window listen event
        // window.addEventListener('message', (res) => { 
        //     if (res.data) {
        //         // console.log('message event', res);
        //         // event of metamask 
        //         if (res.data.target == "metamask-inpage") {
        //             // 
        //             // console.log(res.data.data.name, res.data.data.data);
        //             // console.log(res.data.data.data.method, res.data.data.data.params);

        //             // acount change res.data.data.data.method == 'metamask_accountsChanged' 
        //         }
        //     }
        // });

    }

    async onClick_Connect_Wallet(e, type){
        if (type === 'METAMASK') {
            if(window.ethereum){
              await window.ethereum.enable().then(async () => { 
                toast(`${i18next.t('_connected_meta')}`);
               await window.location.replace("/");
              })
            }
            else { 
            //   alert('Please install Metamask');
            // console.log('a123');
                // window
                window.location.href = "https://metamask.app.link/dapp/metawar.biz/"
            //     window.location.reload();
            }
        }
        // console.log('aaaa')
        // e.preventDefault();
        // this.props.handleWalletLogin({type:type});
        // alert('login trust ! ',window.ethereum);
        // console.log('connect clicked !!!', type);
        // console.log(window.ethereum);
        //check if metamask is installed on browser ? if installed, window of browser should have ethereum property
        // if(!window.ethereum){   
        //     console.log('Please install metamask');
        // }else{  // Metamask is installed
        //     // check if metamask is logged in.
        //     if(!window.ethereum.selectedAddress){
        //         console.log('Please log in metamask ');
        //         window.ethereum.enable();
        //     }else{
        //         console.log(`connected address : ${window.ethereum.selectedAddress} `);
        //         console.log(`connected chainId : ${window.ethereum.chainId} `);

               
        //         // check if chainId is correct, chainId of some provider return number of hex 
        //     }
            
        // }
    }

    render() {
        return (
            <section className="wallet-connect-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                <span>{this.state.data.preHeading}</span>
                                <h3 className="mt-3 mb-0">{this.state.data.heading}</h3>
                                <p>{this.state.data.content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center items">
                        {  }
                        {this.state.walletData.map((item, idx) => {
                            return (
                                <div key={`wd_${idx}`} className="col-12 col-md-6 col-lg-4 item">
                                    {/* Single Wallet */}
                                    <div className="card single-wallet">
                                        <a className="d-block text-center" onClick={ (e) => {this.onClick_Connect_Wallet(e,item.type)}} >
                                            <img className="avatar-lg" src={item.img} alt="" /> 
                                            <h4 className="mb-0">{item.title}</h4>
                                            <p>{item.content}</p>
                                            
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Activity;