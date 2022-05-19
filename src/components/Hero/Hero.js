import React, { Component } from 'react';
import i18next from "i18next";
import { toast } from 'react-toastify';

const Config = JSON.parse(localStorage.getItem('Config'));
const SQFSmartContractAddress = Config ? Config.SQFSmartContractAddress : null;

class Hero extends Component {
    constructor(props) {
        super(props);
        this.handleCopyText = this.handleCopyText.bind(this);
    }
    handleCopyText(type) {
        if (type) {
            if (type === "address") {
                toast(`${i18next.t('_copy_address')}`);
                return navigator.clipboard.writeText(SQFSmartContractAddress);
            }
        }
    }
    render() {
        return (
            <section className="hero-section ">
                <div className="container">
                    <div className="row row1">
                        <div className="intro col-md-12 col-lg-7 col-sm-12 text-center title-section" data-aos="fade-up">
                            {/* <span>{i18next.t('hero').pre_heading}</span> */}
                            <div className="heading">
                                <h3 className="">{i18next.t('hero').heading}</h3>
                            </div>
                            <p>{i18next.t('hero').content}</p>
                            {/* Buttons */}
                            <div className="button-group">
                                {/* <a className="btn btn-bordered-buy" href="/marketplace"><i className="fas fa-store mr-2" />{i18next.t('_marketplace')}</a> */}
                                <a className="btn btn-bordered-buy" href="/#"><i className="fas fa-store mr-2" />{i18next.t('_marketplace')}</a>
                                {/* <a className="btn btn-bordered-white my-3" href="/account"><i className="fas fa-shopping-cart mr-2" />{this.state.data.btn_2}</a> */}
                                <a className="btn btn-bordered-buy" href="/buy-token"><i className="fas fa-credit-card mr-2" />{i18next.t('_buy_token')}</a>
                            </div>
                            <div className="token-group">
                                <div className="token-title">
                                    <h4>SQF TOKEN</h4>
                                </div>
                                <div className="token-content">
                                    <div className="row box">
                                        <div className="col-4 title">
                                            <span>SQF Contract</span>
                                        </div>
                                        <div className="col-8 content">
                                            <i style={{ cursor: "pointer" }} onClick={() => { this.handleCopyText("address") }}>0x5e84a852292195991A082CeC783b490e9e6A9f17</i>
                                        </div>
                                    </div>
                                    {/* <div className="row box">
                                        <div className="col-4 title">
                                            <span>CoinMarketCap</span>
                                        </div>
                                        <div className="col-8 content">
                                            <i>https://coinmarketcap.com/currencies/bitcoin/</i>
                                        </div>
                                    </div>
                                    <div className="row box">
                                        <div className="col-4 title">
                                            <span>Coingecko</span>
                                        </div>
                                        <div className="col-8 content">
                                            <i>https://www.coingecko.com/vi/ty_gia/bitcoin</i>
                                        </div>
                                    </div> */}
                                </div>
                                {/* <div className="token-content">
                                    <div className="field-content">
                                        <div className="title">aaaaaaaa</div>
                                        <div className="address">aaaa</div>
                                    </div>
                                    <div className="field-content">aaaa</div>
                                    <div className="field-content">aaaaaa</div>
                                </div> */}
                            </div>
                            {/* <div className="mt-3">
                                <div className='col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center table-token'>
                                    <table className="table table-bordered table-responsive-sm col-lg-8 col-md-12 col-sm-12">
                                        <tbody>
                                            <tr>
                                                <td className="col-lg-4 col-md-4 col-sm-4 title"><p>SQF Contract</p></td>
                                                <td className="col-lg-8 col-md-8 col-sm-8 content"><a href="https://coinmarketcap.com/currencies/bitcoin/">0x7edc0ec89f987ecd85617b891c44fe462a325869</a></td>
                                            </tr>
                                            <tr>
                                                <td className="col-lg-4 col-md-4 col-sm-4 title"><p>CoinMarketCap</p></td>
                                                <td className="col-lg-8 col-md-8 col-sm-8 content"><a href='https://coinmarketcap.com/currencies/bitcoin/'>https://coinmarketcap.com/currencies/bitcoin/</a></td>
                                            </tr>
                                            <tr>
                                                <td className="col-lg-4 col-md-4 col-sm-4 title"><p>Coingecko</p></td>
                                                <td className="col-lg-8 col-md-8 col-sm-8 content"><a href="https://www.coingecko.com/vi/ty_gia/bitcoin">https://www.coingecko.com/vi/ty_gia/bitcoin</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-md-12 col-lg-5 col-sm-12 mt-5" data-aos="fade-down">
                            <img className="card-img-top" src="/img/headIcon.png" alt="" />
                        </div>
                        <div className="col-12 line-space">
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;