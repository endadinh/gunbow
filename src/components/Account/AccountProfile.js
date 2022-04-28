import React, { Component } from "react";
import AuthorProfile from "../AuthorProfile/AuthorProfile";
import Inventory from "../Account/Inventory";
import Explore from "../Explore/ExploreSix";
import { toast } from 'react-toastify';
import Activity from "./AccountInfo/Activity";
import BuyToken from "./AccountInfo/BuyToken";
import { claimToken, getBalance, getUnlockPercent } from "../../utils/Wallet";
import axios from "axios";
// import Web3 from "web3";
import { web3 } from "../../App";
import { unLoad } from "../../utils/Loader";
import i18next from "i18next";


export const Style = {
    backgroundImage: "linear-gradient(to bottom, var(--light-color) 10%, var(--primary-color))",
    color: "#000",
}
class AccountProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {},
            currentStage: "",
            SQFSmartContractAddress: '0xc450e0cfd08b570748e198175428fa55e4a34dde',
            address: "",
            availableBalance: 0,
            balance: 0,
            unlockPercent: 0,
            claimedPercent: 0,
            countItem: 0,
            countHero: 0,
            countNoneHero: 0,
            SQFSmartContractABI:
                '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Freeze","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"FrozenTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MeltFrozen","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousMelter","type":"address"},{"indexed":true,"internalType":"address","name":"newMelter","type":"address"}],"name":"MelterTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"MintFrozen","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addToMelters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_transferFeeAddress","type":"address"}],"name":"addTransferFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"availableBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimMelterAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"destroyFrozen","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"meltTokens","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"melteradmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintFrozenTokens","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingMelterAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeFromMelters","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_transferFeeAddress","type":"address"}],"name":"removeTransferBurnAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeaddr","type":"address"}],"name":"setFeeAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"name":"setTransferFeeRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferFeeRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrozenToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newMelter","type":"address"}],"name":"transferMelterAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
        };
        this.handleCopyText = this.handleCopyText.bind(this);
    }
    handleCopyText(type) {
        if (type) {
            if (type === "address") {
                toast(`${i18next.t('_copy_address')}`);
                return navigator.clipboard.writeText(window.ethereum.selectedAddress);
            }
            else if (type === "referLink") {
                toast(`${i18next.t('_copy_refer_link')}`);
                return navigator.clipboard.writeText("https://gunbow-project.vercel.app/buy-token/" + window.ethereum.selectedAddress);
            }
        }
    }

    handleChangeStage(event) {
        this.setState({ currentStage: event.target.value })
        event.preventDefault()
    }
    async countItem() {
        const formData = new FormData();
        formData.append("currentPage", 1);
        formData.append("wallet", window.ethereum.selectedAddress);

        try {
            // const data = await axios
            //     .post("https://api.metawar.biz/Users/GetInventoryList", formData);
            // console.log(data.data.data ? true : false);
            // if (!data) {
            //     return this.countItem();
            // }
            // else if (data.data.data && data.data.data[0]) {
            //     return ({
            //         noneHero: data.data.data[0].total_none_hero,
            //         Hero: data.data.data[0].total_hero,
            //     })
            // }
            // else {
                return ({
                    noneHero: 0,
                    Hero: 0
                });
            // }

        }
        catch (err) {
            throw err;
            
        }

    }
    async getBalance() {
        const balance = getBalance()
        if (!balance) {
            return this.getBalance();
        }
        else {
            return balance;
        }
    }
    async getUnlockPercent() { 
        const unlockPercent = getUnlockPercent();
        if(!unlockPercent) { 
            return this.getUnlockPercent();
        }
        else { 
            return unlockPercent;
        }
    }
    async getData() {
        setTimeout(async () => {
            const balance = await this.getBalance();
            const countItem = await this.countItem();
            const {unlockPercent} = await this.getUnlockPercent();
            const {claimedPercent} = await this.getUnlockPercent();
            if (!balance || !countItem) {
                console.log('no data');
                return this.getData();
            }
            else {
                console.log('countItem', countItem.noneHero);
                this.setState({
                    currentStage: "ACTIVITY",
                    style: Style,
                    balance: balance.balance,
                    availableBalance: balance.availBalance,
                    unlockPercent : unlockPercent,
                    claimedPercent: claimedPercent,
                    countHero: countItem.Hero,
                    countNoneHero: countItem.noneHero
                }, () => unLoad())
            }
        }, 100);

    }
    async claimToken() { 
        try { 
            if(this.state.unlockPercent === this.state.claimedPercent) { 
                // console.log('xxxxxx');
                alert('You Claimed all of available token !');
            }
            else { 
                const claimed = claimToken();
                if(!claimed) { 
                    return this.claimToken();
                }
                else { 
                    return claimed;
                }
            }
        }
        catch(err) {
            alert(err);
        }
    }
    async componentDidMount() {
        await this.getData();
        await this.setState({
            currentStage: "ACTIVITY",
            style: Style,
        })

    }
    render() {
        return (
            <section className="account-profile-area">
                <div className="justify-content-center">
                    <div className="col-12 text-center">
                        <div className="card-title">
                            <h2>{i18next.t('account').accounts.headline}</h2>
                        </div>
                    </div>
                    <div className="row items">
                        <div className="col-12 col-lg-5 col-sm-5 col-sm-12 item account-section">
                            <div className="card px-1 py-1">
                                <div className="card-title">
                                    <h6>{i18next.t('account').accounts.overview}</h6>
                                </div>
                                <div className="card-body">
                                    <div className="col-12 justify-center text-center">
                                        <div className="col-sm-12 overview">
                                            <img src="/img/overview/weapon.png"></img>:<span>100 </span>
                                        </div>
                                        <div className="col-sm-12 overview">
                                            <img src="/img/overview/outfit.png"></img>:
                                            <span> {this.state.countNoneHero} </span>
                                        </div>
                                        <div className="col-sm-12 overview">
                                            <img src="/img/overview/pet.png"></img>:
                                            <span> {this.state.countNoneHero} </span>
                                        </div>
                                        <div className="col-sm-12 overview">
                                            <img src="/img/overview/stone.png"></img>:
                                            <span> {this.state.countNoneHero} </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mt-3">
                                <div className="card-title">
                                    <h6>{i18next.t('account').accounts.my_wallet}</h6>
                                </div>
                                <div className="card-body d-flex justify-content-center text-center row">
                                    <div className="col-12 overview ">
                                        <label className="control-label">{i18next.t('_balance')} :</label>
                                        <span> {this.state.balance} <span className="sqf">SQF</span></span>
                                    </div>
                                    <div className="col-12 overview ">
                                        <label className="control-label"> {i18next.t('_balance_available')} :</label>
                                        <span> {this.state.availableBalance} <span className="sqf">SQF</span></span>
                                    </div>
                                    <div className="col-12 overview ">
                                        <label className="control-label">{i18next.t('_unlock_percent')} :</label>
                                        <span> {this.state.unlockPercent} <span className="sqf">%</span></span>
                                    </div>
                                    <div className="col-12 overview ">
                                        <label className="control-label">{i18next.t('_claimed_percent')} :</label>
                                        <span> {this.state.claimedPercent} <span className="sqf">%</span></span>
                                    </div>
                                    <div className="col-12 overview mt-4" onClick={() => {this.claimToken()}}>
                                        <div className="btn" >Claim</div>
                                    </div>
                                    <div className="col-12 mt-3 overview form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">{i18next.t('account').accounts.address}</div>
                                            </div>
                                            <input
                                                style={{ cursor: "pointer" }}
                                                type="text"
                                                className="form-control"
                                                onClick={() => { this.handleCopyText("address") }}
                                                placeholder={this.props.connectedWallet.address}
                                                readOnly
                                            />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <i className="icon-docs" style={{ cursor: "pointer" }} onClick={() => { this.handleCopyText("address") }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">{i18next.t('account').accounts.ref_link}</div>
                                            </div>
                                            <input
                                                style={{ cursor: "pointer" }}
                                                type="text"
                                                className="form-control"
                                                onClick={() => { this.handleCopyText("referLink") }}
                                                placeholder={`https://gunbow-project.vercel.app/${this.props.connectedWallet.address}`}
                                                readOnly
                                            />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <i className="icon-docs" style={{ cursor: "pointer" }} onClick={() => { this.handleCopyText("referLink") }} />
                                                </div>
                                            </div>
                                        </div>
                                                                                    {/* <fieldset disabled>
                                                <div className=" d-flex mb-2">
                                                    <p>{i18next.t('account').accounts.address}</p>
                                                    <input
                                                        style={{ cursor: "pointer" }}
                                                        type="text"
                                                        className="form-control text-light "
                                                        onClick={() => { this.handleCopyText("address") }}
                                                        placeholder={this.props.connectedWallet.address}
                                                        readOnly />
                                                    <button >
                                                        <i className="icon-docs" style={{ cursor: "pointer" }} onClick={() => { this.handleCopyText("address") }} />
                                                    </button>
                                                </div>

                                                <div className=" d-flex ">
                                                    <p>{i18next.t('account').accounts.ref_link}</p>
                                                    <input
                                                        style={{ cursor: "pointer" }}
                                                        type="text"
                                                        className="form-control text-light "
                                                        onClick={() => { this.handleCopyText("referLink") }}
                                                        placeholder={`https://metawar.biz/buy-token/${this.props.connectedWallet.address}`}
                                                        readOnly
                                                    // ref={`https://metawar.biz/buy-token/${this.props.connectedWallet.address}`}
                                                    />
                                                    <button>
                                                        <i className="icon-docs" style={{ cursor: "pointer" }} onClick={() => { this.handleCopyText("referLink") }} />
                                                    </button>
                                                </div>
                                            </fieldset> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 item">
                            <div className="card">
                                <div className="card-title ">
                                    <div className="d-flex justify-content-center">
                                        <ul className="nav" id="navId">
                                            <li className="nav-item">
                                                <button value="ACTIVITY" onClick={(event) => this.handleChangeStage(event)} style={this.state.currentStage === "ACTIVITY" ? this.state.style : null} className="small-btn-account">{i18next.t('account').accounts.activity}</button>
                                            </li>
                                            <li className="nav-item">
                                                <button value="BUY_TOKEN" onClick={(event) => this.handleChangeStage(event)} style={this.state.currentStage === "BUY_TOKEN" ? this.state.style : null} className="small-btn-account">{i18next.t('account').accounts.buy_token}</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-body activity-list mt-5">
                                    {(this.state.currentStage === "BUY_TOKEN") ? (<BuyToken />) : <Activity activity={this.props.activity} />}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AccountProfile;
