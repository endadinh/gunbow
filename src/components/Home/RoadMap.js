import React, { Component, useState } from "react";
import i18next from "i18next";


class RoadMap extends Component {
    state = {
        data: {},
    };
    render() {
        return (
            <section className="road-section">
                <div className="container">
                    <div className="row" data-aos="zoom-in-down">
                        <div className="intro text-center">
                            <div className="heading">
                                <h3 className="mt-4 ">{i18next.t('road_map').heading}</h3>
                            </div>
                            <p>{i18next.t('road_map').content}</p>
                        </div>
                    </div>
                    <div className="roadmap">
                        <div className="road-1" data-aos="flip-left">
                            <div className="">
                                <div className="title">
                                    <h4>Q3-2021</h4>
                                </div>
                                <div className="content-field">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-12 content">
                                            <ul>
                                                <li>
                                                    Ideas
                                                </li>
                                                <li>
                                                    Concepts
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 content">
                                            <ul>
                                                <li>
                                                    Implementation
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="middle-line row" data-aos="fade-in">
                            <div className="line"></div>
                        </div>
                        <div className="road-1" data-aos="flip-right">
                            <div className="title">
                                <h4>Q4-2021</h4>
                            </div>
                            <div className="content-field">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12 content">
                                        <ul>
                                            <li>
                                                Finish Whitepaper v1.0
                                            </li>
                                            <li>
                                                Setup Foundation and Legal Structure
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 content">
                                        <ul>
                                            <li>
                                                Dev-Team Building
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="middle-line row" data-aos="fade-in">
                            <div className="line"></div>
                        </div>
                        <div className="road-1" data-aos="flip-left">
                            <div className="title">
                                <h4>Q1-2022</h4>
                            </div>
                            <div className="content-field">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12 content">
                                        <ul>
                                            <li>
                                                Technical Architecture of the Platform
                                            </li>
                                            <li>
                                                Build items
                                            </li>
                                            <li>
                                                Main Gaming Framework Development
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 content">
                                        <ul>
                                            <li>
                                                NFT Contract Development
                                            </li>
                                            <li>
                                                Official Website & Marketplace Establishment
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="middle-line row" data-aos="fade-in">
                            <div className="line"></div>
                        </div>
                        <div className="road-1" data-aos="flip-right">
                            <div className="title">
                                <h4>Q2-2022</h4>
                            </div>
                            <div className="content-field">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12 content">
                                        <ul>
                                            <li>
                                                Token burning
                                            </li>
                                            <li>
                                                Testing In-game battle function
                                            </li>
                                            <li>
                                                Launching Beta Web Version (est. end of April)
                                            </li>
                                            <li>
                                                Lauching Beta Android Version (est. end of April)
                                            </li>
                                            <li>
                                                BEP20 Token contract & NFT Contract Audit
                                            </li>
                                            <li>
                                                Seed Round (est. middle of April)
                                            </li>
                                            <li>
                                                Testing Marketplace
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 content">
                                        <ul>
                                            <li>
                                                Guide features for Game
                                            </li>
                                            <li>
                                                Increase influencer onboarding
                                            </li>
                                            <li>
                                                Private Sale (est. begin of May)
                                            </li>
                                            <li>
                                                Pre-Sale (est. middle of May)
                                            </li>
                                            <li>
                                                Public Sale (est. begin of June)
                                            </li>
                                            <li>
                                                Launching Beta IOS Version (est. begin of June)
                                            </li>
                                            <li>
                                                List on PancakeSwap, Coingecko
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="middle-line row" data-aos="fade-in">
                            <div className="line"></div>
                        </div>
                        <div className="road-1" data-aos="flip-left">
                            <div className="title">
                                <h4>Q3-2022</h4>
                            </div>
                            <div className="content-field">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12 content">
                                        <ul>
                                            <li>
                                                New Official Website
                                            </li>
                                            <li>
                                                Optimize NFT contract
                                            </li>
                                            <li>
                                                Official Launching Game (est. begin of July)
                                            </li>
                                            <li>
                                                Each character in the game has their own story.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 content">
                                        <ul>
                                            <li>
                                                Release new official version on Web, Andoid and IOS
                                            </li>
                                            <li>
                                                Expand ecosystem activities with partners
                                            </li>
                                            <li>
                                                Token burning
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="middle-line row" data-aos="fade-in">
                            <div className="line"></div>
                        </div>
                        <div className="road-1" data-aos="flip-right">
                            <div className="title">
                                <h4>Q4-2022 onwards</h4>
                            </div>
                            <div className="content-field">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 content">
                                        <ul>
                                            <li>
                                                Research on 3D game mainet
                                            </li>
                                            <li>
                                                Conferences with game community to develop SQF game in accordance with DAOs (Decentralized Autonomous Organization)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*
                        
                        <div className="point">
                            <div className="point-index">4</div>
                            <div className="point-label">
                                <span> The future</span>
                            </div>
                            <div className="point-text">
                                {/* The future content 
                           </div>
                        </div>  */}
                    </div>
                    <div className="col-12 line-space">
                    </div>
                </div>
            </section>
        );
    }
}

export default RoadMap;
