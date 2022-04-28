import React, { Component } from 'react';
import i18next from 'i18next';

class Airdrop extends Component {
    render() {
        return (
            <section className="event-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                <span>{i18next.t('airdrop').pre_heading}</span>
                                <h3 className="mt-3 mb-0">{i18next.t('airdrop').heading}</h3>
                                <p>{i18next.t('airdrop').content}</p>
                            </div>
                            {/* Item Form */}
                        </div>
                    </div>
                    <div className="row mt-5 text-center">
                        <div className="col-12 card">
                            <div>
                                <h2>List mission</h2>
                            </div>
                            <div>
                                <input type="checkbox" id="1" class="vh" disabled checked />
                                <label for="1">Mission to complete</label>
                            </div>

                            <div>
                                <input type="checkbox" id="2" class="vh" disabled checked />
                                <label for="2">Mission to complete</label>
                            </div>

                            <div>
                                <input type="checkbox" id="3" class="vh" disabled />
                                <label for="3">Mission to complete</label>
                            </div>
                            <div className="claim-btn">
                                <div className="btn">
                                    Claim
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Airdrop;