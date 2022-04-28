import React, { Component } from 'react';
import Inventory from './Inventory';
import AccountProfile from './AccountProfile';
import Selling from './Selling';
import Buy from './Buy';
import Sold from './sold';
import Airdrop from './Airdrop';
import i18next from 'i18next';
// import axios from 'axios';

export const Style = {
    color: "red !important",
    border: "none",
    outline: "none",
}

class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStage: "",
            style: {},

        }

        this.handleChangeStage = this.handleChangeStage.bind(this);
    }
    handleChangeStage(value) {
        window.location.href = `/account/${value}`
    }

    async getData() {

    }
    async componentDidMount() {
        // console.log('aaa',window.ethereum.selectedAddress)
        console.log('account props', this.props.currentStage)
        if (this.props.connectedWallet) {
            console.log(this.props.connectedWallet.address)
            this.getData();
            this.setState({
                currentStage: this.props.currentStage,
                style: Style
            })
        }

    }
    render() {
        return (
            <section className="account-area">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center mb-4">
                                <span>{i18next.t('account').pre_heading}</span>
                                <h3 className="mt-3 mb-0">{i18next.t('account').heading}</h3>
                                <p>{i18next.t('account').content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-2 col-md-12 col-sm-12 text-center nav-account">
                            <div className="nav-button">
                                <a href="/account" className={`btn btn-bordered ${this.state.currentStage === "ACCOUNT_STAGE" ? "active" : ""}`}  >
                                    <span className="" >{i18next.t('account').account}</span>
                                </a>
                            </div>
                            <div className="nav-button">
                                <a href="/account/inventory" className={`btn btn-bordered ${this.state.currentStage === "ACCOUNT_INVENTORY" ? "active" : ""}`} >
                                    <span className=""  >{i18next.t('account').inventory}</span>
                                </a>
                            </div>
                            <div className="nav-button">
                                <a href="/account/airdrop" className={`btn btn-bordered ${this.state.currentStage === "AIRDROP" ? "active" : ""}`} >
                                    <span className=""   >{i18next.t('account').airdrop}</span>
                                </a>
                            </div>
                            <div className="nav-button">
                                <a href="/account/selling" className={`btn btn-bordered ${this.state.currentStage === "SELLING" ? "active" : ""}`}  >
                                    <span className=""   >{i18next.t('account').selling}</span>
                                </a>
                            </div>
                            <div className="nav-button">
                                <a href="/account/buy" className={`btn btn-bordered ${this.state.currentStage === "BUY" ? "active" : ""}`} >
                                    <span className="" >{i18next.t('account').buy}</span>
                                </a>
                            </div>
                            <div className="nav-button">
                                <a href="/account/sold" className={`btn btn-bordered ${this.state.currentStage === "SOLD" ? "active" : ""}`} >
                                    <span className=""   >{i18next.t('account').sold}</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-12 col-sm-12 account-section">
                            {(this.state.currentStage === "ACCOUNT_STAGE") ? (<AccountProfile connectedWallet={this.props.connectedWallet} />) : null}
                            {(this.state.currentStage === "ACCOUNT_INVENTORY") ? (<Inventory connectedWallet={this.props.connectedWallet} />) : null}
                            {(this.state.currentStage === "SELLING") ? (<Selling connectedWallet={this.props.connectedWallet} />) : null}
                            {(this.state.currentStage === "BUY") ? (<Buy connectedWallet={this.props.connectedWallet} />) : null}
                            {(this.state.currentStage === "SOLD") ? (<Sold connectedWallet={this.props.connectedWallet} />) : null}
                            {(this.state.currentStage === "AIRDROP") ? (<Airdrop connectedWallet={this.props.connectedWallet} />) : null}

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Account;