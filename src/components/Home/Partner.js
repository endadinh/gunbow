import i18next from 'i18next';
import React, { Component } from 'react';

const authorData = [
    {
        "id": 1,
        "img": "/img/partners/nwv_logo.svg",
        "avatar": "/img/avatar_2.jpg",
        "link": "http://newworldventures.io/"
    },
    {
        "id": 2,
        "img": "/img/partners/CoinMarketCap.svg",
        "avatar": "/img/avatar_1.jpg",
        "link": "#"
    },
    {
        "id": 3,
        "img": "/img/partners/metamask.svg",
        "avatar": "/img/avatar_2.jpg",
        "link": "#"
    },
    {
        "id": 4,
        "img": "/img/partners/eth.svg",
        "avatar": "/img/avatar_1.jpg",
        "link": "#"
    },
    {
        "id": 5,
        "img": "/img/partners/binance.svg",
        "avatar": "/img/avatar_1.jpg",
        "link": "#"
    },
    {
        "id": 6,
        "img": "/img/partners/coin-gecko.svg",
        "avatar": "/img/avatar_2.jpg",
        "link": "#"
    },
    // {
    //     "id": 7,
    //     "img": "/img/partners/eth.svg",
    //     "avatar": "/img/avatar_1.jpg",
    //     "link": "#"
    // },
    // {
    //     "id": 8,
    //     "img": "/img/partners/binance.svg",
    //     "avatar": "/img/avatar_1.jpg",
    //     "link": "#"
    // },
]

class Partners extends Component {
    state = {
        data: {},
        authorData: [],
        initData: {},
        info: "",
    }
    componentDidMount() {
        this.setState({
            authorData: authorData,
        })
    }
    render() {
        return (
            <section className="partners-section">
                <div className="container">
                    <div className="row">
                        <div className="intro text-center" data-aos="zoom-in">
                            <div className="heading">
                                <h3 className="mt-4">{i18next.t('partner').heading}</h3>
                            </div>
                            {/* <p>{i18next.t('partner').content}</p> */}
                        </div>
                    </div>
                    <div className="row items mt-5 justify-content-center">
                        {this.state.authorData.map((item, idx) => {
                            return (
                                <div key={`ad_${idx}`} className="col-12 col-sm-6 col-lg-3 item" data-aos="flip-down" >
                                    <div className="card text-center">
                                        <div className="">
                                            <a href={item.link}>
                                                <img className="card-img-top" src={item.img} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}
export default Partners;