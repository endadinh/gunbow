import React, { Component, useState } from "react";
import i18next from "i18next";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// import ChartComponent from '../Chart/Chart';

ChartJS.register(ArcElement, Tooltip);

export const data = {
    labels: [
        "Team",
        "Seed Round",
        "Private sale",
        "Pre sale ",
        "Public sale",
        "Partner & Advisor",
        "Marketing",
        "Ecosystem Growth",
        "Liquidity",
        "Reserve"
    ],
    datasets: [
        {
            // label: '# of Votes',
            data: [33333333333.3, 3333333333.33, 9999999999.99,20000000000, 40000000000, 33333333333.3, 90666666666, 66666666666.6, 2666666666, 33333333333.3],
            backgroundColor: [
                "rgba(255, 99, 132, 0.3)",
                "rgba(54, 162, 235, 0.3)",
                "rgba(100, 50, 50, 0.3)",
                "rgba(255, 206, 86, 0.3)",
                "rgba(75, 192, 192, 0.3)",
                "rgba(153, 102, 255, 0.3)",
                "rgba(224, 113, 15, 0.3)",
                "rgba(150, 250, 250, 0.3)",
                "rgba(50, 250, 150, 0.3)",
                "rgba(250, 30, 250, 0.3)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 0.9)",
                "rgba(54, 162, 235, 0.9)",
                "rgba(100, 50, 50, 0.9)",
                "rgba(255, 206, 86, 0.9)",
                "rgba(75, 192, 192, 0.9)",
                "rgba(153, 102, 255, 0.9)",
                "rgba(224, 113, 15, 0.9)",
                "rgba(150, 250, 250, 0.9)",
                "rgba(50, 250, 150, 0.9)",
                "rgba(250, 30, 250, 0.9)",

            ],
            borderWidth: 1,
            hoverOffset: 2,
        },
    ],
};

class TokenEconomics extends Component {
    render() {
        return (
            <section className="token-economics-section">
                <div className="container pb-5">
                    <div className="row" data-aos="fade-down">
                        <div className="intro col-12 text-center">
                            <div className="heading">
                                <h3 className="mt-4">{i18next.t('token').heading}</h3>
                            </div>
                            <p>{i18next.t('token').content}</p>
                        </div>
                    </div>
                    <div className="row d-flex token-field">
                        <div className="col-lg-4 col-md-6 col-sm-12 token-content" data-aos="zoom-in">
                            <div className="col-12 card mt-1">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <span>{i18next.t('token').team}</span>
                                    </div>
                                    <div className="col-sm-4">
                                        <p>10%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 card mt-1">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <span>{i18next.t('token').seed_round}</span>
                                    </div>
                                    <div className="col-sm-4">
                                        <p>1%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 card mt-1">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <span>{i18next.t('token').private_round}</span>
                                    </div>
                                    <div className="col-sm-4">
                                        <p>3%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 card mt-1">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <span>{i18next.t('token').presale_round}</span>
                                    </div>
                                    <div className="col-sm-4">
                                        <p>6%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 card mt-1">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <span>{i18next.t('token').public_round}</span>
                                    </div>
                                    <div className="col-sm-4">
                                        <p>12%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 card mt-1">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <span>{i18next.t('token').partner_advisor}</span>
                                    </div>
                                    <div className="col-sm-4">
                                        <p>10%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 card mt-1">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <span>{i18next.t('token').marketing}</span>
                                    </div>
                                    <div className="col-sm-4">
                                        <p>27,2%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 card mt-1">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <span>{i18next.t('token').growth}</span>
                                    </div>
                                    <div className="col-sm-4">
                                        <p>20%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 card mt-1">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <span>{i18next.t('token').liquidity}</span>
                                    </div>
                                    <div className="col-sm-4">
                                        <p>0,8%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 card mt-1">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <span>{i18next.t('token').reserve}</span>
                                    </div>
                                    <div className="col-sm-4">
                                        <p>10%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12" data-aos="zoom-in">
                            <Doughnut data={data} />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12" data-aos="fade-down">
                            <div className="token-info text-right">
                                <div className="card m-3">
                                    <div className="card-item">
                                        <span>{i18next.t('token').token_name}</span>
                                        <p>Sancti Quest on Frontline</p>
                                    </div>
                                </div>
                                <div className="card m-3">
                                    <div className="card-item">
                                        <span>{i18next.t('token').token_symbol}</span>
                                        <p>SQF</p>
                                    </div>
                                </div>
                                <div className="card m-3">
                                    <div className="card-item">
                                        <span>{i18next.t('token').token_supply}</span>
                                        <p>333.333.333.333 SQF</p>
                                    </div>
                                </div>
                                <div className="card m-3">
                                    <div className="card-item">
                                        <span>{i18next.t('token').network}</span>
                                        <p>Binance Smart Chain ( BSC )</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TokenEconomics;
