import React, { Component } from 'react';
import i18next from 'i18next';

class StakingSection extends Component {
    render() {
        return (
            <section className="staking-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                <span>{i18next.t('staking').pre_heading}</span>
                                <h3 className="mt-3 mb-0">{i18next.t('staking').heading}</h3>
                                <p>{i18next.t('staking').content}</p>
                            </div>
                            {/* Item Form */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default StakingSection;