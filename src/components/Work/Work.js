import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json/work";

class Work extends Component {
    state = {
        data: {},
        workData: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    workData: res.data.workData
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section className="work-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro mb-4 mt-5">
                                <div className="intro-content">
                                    <span>{this.state.data.preHeading}</span>
                                    <h3 className="mt-3 mb-0">Buy and sell your NFTs</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items mb-5">
                        {/* {this.state.workData.map((item, idx) => {
                            return (
                                <div key={`wd_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                    Single Work
                                    <div className="single-work">
                                        <i className={item.icon} />
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            );
                        })} */}
                        <div className="col-12 col-sm-6 col-lg-3 item mt-4 pb-4">
                            <div className="single-work">
                                <i className="icons icon-wallet text-effect"> </i>
                                <h4>Set up your wallet</h4>
                                <p>Once you’ve set up your wallet of choice.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 item">
                            <div className="single-work">
                                <i className="icons icon-drawer text-effect"> </i>
                                <h4>Buy your NFTs</h4>
                                <p>Buy your heros or buy your item's hero</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 item">
                            <div className="single-work">
                                <i className="icons icon-grid text-effect"> </i>
                                <h4>Play Sancti Quest on Frontline</h4>
                                <p> Play to earn </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 item">
                            <div className="single-work">
                                <i className="icons icon-bag text-effect"> </i>
                                <h4>Sale your NFTs</h4>
                                <p>Sell your own NFTs or Item on Marketplace</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Work;