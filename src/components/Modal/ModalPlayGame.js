import i18next from 'i18next';
import React from 'react';
import { Component } from 'react/cjs/react.production.min';



class ModalPlayGame extends Component {
    constructor() {
        super();
        this.state = {
            data: {}
        }
        this.generateString = this.generateString.bind(this);
        this.handlePlayGame = this.handlePlayGame.bind(this);
    }
    handlePlayGame(event, server) {
        event.preventDefault();
        if (server) {
            if ((window.ethereum && window.ethereum.chainId == "0x61")) {
                const addressToPlay = window.ethereum.selectedAddress + this.generateString(5);
                if (server === "VI") {
                    const urlString =
                        "http://demo.metawar.biz/vi/playgame.php?wallet=" +
                        addressToPlay +
                        "&playcheck=ms3" +
                        this.generateString(10);
                    let url = urlString.replace(/\s/g, "");
                    // console.log(url);
                    return (window.location.href = url);
                }
                else if (server === "CN") {
                    const urlString =
                        "http://demo.metawar.biz/cn/playgame.php?wallet=" +
                        addressToPlay +
                        "&playcheck=ms3" +
                        this.generateString(10);
                    let url = urlString.replace(/\s/g, "");
                    // console.log(url);
                    return (window.location.href = url);
                }
                else if (server === "APK") {
                    // console.log(url);
                    return (window.location.href = "https://drive.google.com/file/d/1okgd3jTHhQ_JEZmfmuthmaS5F6u2Dm7F/view?usp=sharing");
                }
            }
            // else if ( window.localStorage.walletconnect ) { 
            //     console.log('hahaaaaaaaaaaaaaaaaaaaaa');
            //     const a = window.localStorage.walletconnect;
            //     const b = JSON.parse(a);
            //     console.log('bbbbbbbbb',b)
            //     if(b.connected) { 
            //         if(b.peerMeta.name === "Metamask") { 
            //             alert('Please use metamask to play game!');
            //             window.location.reload();
            //         }
            //         else if(b.chainId !== 97) {
            //             alert('Please use BSC Testnet to play game!');
            //         }
            //         else { 
            //             const addressToPlay = b.accounts[0] + this.generateString(5);
            //             if (server === "VI") {
            //                 const urlString =
            //                     "http://demo.metawar.biz/vi/playgame.php?wallet=" +
            //                     addressToPlay +
            //                     "&playcheck=ms3" +
            //                     this.generateString(10);
            //                 let url = urlString.replace(/\s/g, "");
            //                 // console.log(url);
            //                 return (window.location.href = url);
            //             }
            //             else if (server === "CN") {
            //                 const urlString =
            //                     "http://demo.metawar.biz/cn/playgame.php?wallet=" +
            //                     addressToPlay +
            //                     "&playcheck=ms3" +
            //                     this.generateString(10);
            //                 let url = urlString.replace(/\s/g, "");
            //                 // console.log(url);
            //                 return (window.location.href = url);
            //             }
            //         }

            //         // console.log( b.connected);
            //     }
            //     // console.log('b',b);
            // }
            // else { 
            //     alert(' You need connect your Metamask wallet to play game !  ')
            // }
            else {
                alert(`${i18next.t('_select_net')}`)
            }
        }
    }
    generateString(length) {
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = " ";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        console.log("aaaaa", result);
        return result;
    }

    render() {
        return (
            <div className="container">
                <div className="modal fade" id="myModalPlayGame" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className='modal-dialog modal-dialog-video' role="document">
                        <div className='modal-content h-50 pb-5'>
                            <div className="modal-header d-flex justify-end" data-dismiss="modal">
                                <i className="far fa-times-circle icon-close " />
                            </div>
                            <h4 className="text-center">{i18next.t("_welcome")}</h4>
                            <div className="d-flex m-auto px-3  row">
                            <button type="button" onClick={(event) => { this.handlePlayGame(event, "APK") }} className="btn btn-bordered-red ">
                                    <img className="img11" src="/img/apk.png" alt="" />
                                    <span className='ml-3'>Android APK</span>
                                </button>
                                {/* <button type="button" onClick={(event) => { this.handlePlayGame(event, "VI") }} className="btn btn-bordered-red ">
                                    <img className="img11" src="/img/google-play.png" alt="" />
                                    <span>Google play</span>
                                </button> */}
                                {/* <button type="button" onClick={(event) => { this.handlePlayGame(event, "CN") }} className="btn btn-bordered-red mt-5">
                                    <img className="img11" src="/img/app-store.png" alt="" />
                                    <span> App Store </span>
                                </button> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
// const ModalPlayGame = () => {
//     return (
//         <div className="container">
//             <div className="modal fade" id="myModalPlayGame" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className='modal-dialog modal-dialog-video' role="document">
//                     <div className='modal-content h-50 pb-5'>
//                         <div className="modal-header d-flex justify-end" data-dismiss="modal">
//                              <i className="far fa-times-circle icon-close "/>
//                         </div>
//                         <h4 className="text-center">{i18next.t("_welcome")}</h4>
//                         <div className="d-flex justify-center m-auto px-3">
//                             <img className="card-img-top img11" src="img/vietnam.png"  alt="" />
//                             <button type="button" className="btn btn-primary mr-5">Sever 1</button>
//                             <img className="card-img-top img11" src="img/china.png" alt="" />
//                             <button type="button" className="btn btn-success">Sever 2</button>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

export default ModalPlayGame;