import React, { Component } from "react";
import { web3 } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BuyTokenDemo, BuyToken } from "../../utils/BuyToken";
import {getPrice} from "../../utils/Wallet"
import i18next from "i18next";

class BuyTokenSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initData: {},
            amount: 0,
            amountSQF: 0,
            tokenPrice: 0,
            currency: "USD",
            chain: "BINANCE SMART CHAIN",
            gif: "Referral Rewards ( 10% BNB , 10% SQF )",
            gasPrice: 0,
            address: "",
            balance: 0,
            total: 0,
            fields: {},
            errors: {},
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        // this.handleChangeValue = this.handleChangeValue.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeValue = (event) => {
        var sqf = Math.floor(event.target.value / this.state.tokenPrice);
        console.log(sqf)
        this.setState({
            amount: event.target.value,
            total: parseFloat(sqf),
        });
    };

    handleChange(e) {
        e.preventDefault();
        this.handleChangeValue(e)
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({ fields });
        this.handleValidation()
        // this.handleValidation();

    }
    handleValidation() {
        // console.log(this.props.connectedWallet);
        let fields = this.state.fields;
        let errors = {};
        let splitNum = fields["amount"].split('.');
        let decimals = splitNum[1];
        let formIsValid = true;
        if (!fields["amount"]) {
            formIsValid = false;
            errors["amount"] = i18next.t('errors').amount_empty;
        }
        if ((parseFloat(fields["amount"]) >= parseFloat(this.props.connectedWallet.balanceBNB))) {
            formIsValid = false;
            errors["amount"] = i18next.t('errors').amount_less;
        }
        if (fields["amount"] <= 0) {
            formIsValid = false;
            errors["amount"] = i18next.t('errors').amount_positive;
        }
        if (fields["amount"] <= 0.0001) {
            formIsValid = false;
            errors["amount"] = i18next.t('errors').amount_small;
        }
        if (decimals && decimals.length > 13) {
            formIsValid = false;
            errors["amount"] = i18next.t('errors').decimals;
        }
        this.setState({ errors: errors });
        return formIsValid;
    }
    async handleClickBuySQF(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            toast(`${i18next.t('_pending')}`);
            // await BuyTokenDemo(e.target.amount.value);
            await BuyToken(e.target.amount.value);

        }
    }

    async componentDidMount() { 
        await getPrice().then(res => { 
            this.setState({ tokenPrice: res });
        })
    }
    render() {
        const { errors } = this.state;
        return (
            <section className="buy-token-area ">
                <div className="container">
                    <div className="row justify-content-center row3 title-section" data-aos="fade-up">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro text-center">
                                <div className="heading">
                                    <h3 className="mt-3 mb-0">{i18next.t('buy_token').heading}</h3>
                                </div>
                                <p>{i18next.t('buy_token').content}</p>
                                {/* <p>{i18next.t('buy_token').content2}</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row items" data-aos="fade-down">
                        <form className="item-form" onSubmit={(e) => { this.handleClickBuySQF(e) }}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group text-center">
                                        <div className="balance-custom">
                                            <span> {i18next.t('_balance')} : {this.props.connectedWallet.balanceBNB} BUSD </span>
                                        </div>
                                    </div>
                                </div>
                                .<div className="form-group justify-content-center">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">{i18next.t('_amount')} :</div>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="amount"
                                            // value={this.state.fields["amount"]}
                                            placeholder="Amount BUSD"
                                            pattern="[0-9]+([\.,][0-9]+)?"
                                            onChange={this.handleChange}
                                            onInput={(e) => {
                                                e.target.value = parseFloat(e.target.value) < 9999999999999 ? e.target.value : e.target.value.slice(0, 13);
                                            }}
                                            step="any"
                                            // value={this.state.fields["amount"]}
                                            autoComplete="off"
                                        // ref="amount"
                                        />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span>BUSD</span>
                                            </div>
                                        </div>
                                    </div>
                                    {errors["amount"] ? <div className="validation col-12 text-center" style={{ display: "block" }}>{errors["amount"]}</div> : null}

                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">{i18next.t('_get')} :</div>
                                        </div>
                                        <input
                                            className="form-control"
                                            value={this.state.total}
                                            // placeholder="To get SQF"
                                            disabled
                                        />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span>SQF</span>
                                            </div>
                                        </div>
                                    </div>
                                    {window.localStorage.getItem("refCode") ? (
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">{i18next.t('_ref')}:</div>
                                            </div>
                                            <input
                                                className="form-control"
                                                value={window.localStorage.getItem("refCode")}
                                                // placeholder="To get SQF"
                                                disabled
                                            />
                                            <div className="input-group-append">
                                                <div className="input-group-text">
                                                </div>
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                                <div className="form-group d-flex justify-content-center col-12">
                                    <button
                                        className="btn btn-bordered-buy mt-3 d-flex justify-content-center"
                                        type="submit"
                                    >
                                        {/* <span> {i18next.t('_buy_sqf')} </span> */}
                                        <span> 9AM GTM+0, 22th May</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default BuyTokenSection;
