import React, { Component, useState } from 'react';
import i18next from 'i18next';


class WhitePaper extends Component {
    render() {
        return (
            <section className="whitepaper-section bg-img2">
                    <div className="container">
                        <div className="row col-12 mt-5 mb-5 pb-5">
                            <div className='col-md-4 '>
                                <div className="image-over">
                                    <a href="#">
                                        <img className="card-img-top" src="/img/Main/main1.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-7 mt-5">
                                <span>{i18next.t('white_paper').pre_heading}</span>
                                <h1 className="mt-4 text-center">{i18next.t('white_paper').heading}</h1>
                                <p className="text-center">{i18next.t('white_paper').content}</p>
                                <div className="button-group ml-4">
                                    <a className="btn btn-bordered-red" href="/whitepaper/SQF.pdf"><i className="icon-notebook mr-2" />{i18next.t('_read_whitepaper')}</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}

export default WhitePaper;