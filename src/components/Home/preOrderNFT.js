import React, { Component } from 'react';

const initData = {
    pre_heading: "Pre-order",
    heading: "Pre-order NFT",
    btnText: "View All"
}

const data = [
    {
        id: "1",
        img: {
            name: "img/gif/gif1/gif1",
            ext: ".gif",
            quantity: "148"
        } ,    // 600x600 
        date: "2022-03-30",
        title: "Mystery box 1",
        seller_thumb: "/img/avatar_jpg",
        seller: "@Richard",
        price: "25000000 SQF",
        count: "1 of 1",

    },
    {
        id: "2",
        img: {
            name: "img/gif/gif2/gif2",
            ext: ".gif",
            quantity: "148"
        },    // 600x600
        date: "2022-03-30",
        title: "Mystery box 2",
        seller_thumb: "/img/avatar_jpg",
        seller: "@JohnDeo",
        price: "25000000 SQF",
        count: "1 of 1"
    },
    {
        id: "3",
        img: {
            name: "img/gif/gif3/gif3",
            ext: ".gif",
            quantity: "148"
        },    // 600x600
        date: "2022-03-30",
        title: "Mystery box 3",
        seller_thumb: "/img/avatar_3.jpg",
        seller: "@MKHblots",
        price: "25000000 SQF",
        count: "1 of 1"
    },
    {
        id: "4",
        img: {
            name: "img/gif/gif4/gif4",
            ext: ".gif",
            quantity: "148"
        },    // 600x600
        date: "2022-03-30",
        title: "Mystery box 4",
        seller_thumb: "/img/avatar_4.jpg",
        seller: "@RioArham",
        price: "25000000 SQF",
        count: "1 of 1"
    },
    {
        id: "5",
        img: {
            name: "img/gif/gif5/gif5",
            ext: ".gif",
            quantity: "148"
        },    // 600x600
        date: "2022-03-30",
        title: "Mystery box 5",
        seller_thumb: "/img/avatar_5.jpg",
        seller: "@ArtNox",
        price: "25000000 SQF",
        count: "1 of 1"
    },
    {
        id: "6",
        img: {
            name: "img/gif/gif6/gif6",
            ext: ".gif",
            quantity: "148"
        },    // 600x600
        date: "2022-03-30",
        title: "Mystery box 6",
        seller_thumb: "/img/avatar_6.jpg",
        seller: "@Junaid",
        price: "25000000 SQF",
        count: "1 of 1"
    },
    {
        id: "7",
        img: {
            name: "img/gif/gif7/gif7",
            ext: ".gif",
            quantity: "148"
        },    // 600x600
        date: "2022-03-30",
        title: "Mystery box 6",
        seller_thumb: "/img/avatar_6.jpg",
        seller: "@Junaid",
        price: "25000000 SQF",
        count: "1 of 1"
    },
    {
        id: "8",
        img: {
            name: "img/gif/gif8/gif8",
            ext: ".gif",
            quantity: "148"
        },    // 600x600
        date: "2022-03-30",
        title: "Mystery box 6",
        seller_thumb: "/img/avatar_6.jpg",
        seller: "@Junaid",
        price: "25000000 SQF",
        count: "1 of 1"
    }
]

class PreOrderNft extends Component {
    state = {
        initData: {},
        data: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data
        })
    }
    render() {
        return (
            <section className="new-item-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-5 mb-5">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>{this.state.initData.pre_heading}</span>
                                    <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                </div>
                                {/* <div className="intro-btn">
                                    <a className="btn content-btn" href="/auctions">{this.state.initData.btnText}</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="auctions-slides">
                        <div className="swiper-container slider-mid items">
                            <div className="swiper-wrapper">
                                {/* Single Slide */}
                                {this.state.data.map((item, idx) => {
                                    return (
                                        <div key={`auc_${idx}`} className="swiper-slide item">
                                            <div className=" card3">
                                                <div className="image-over">
                                                    <a href={`pre-order/${item.id}`}>
                                                        <img className="card-img-top" src={item.img} alt="" />
                                                        <canvas className="imgaeCanvas" imgname={item.img.name} quantity={148} ext={item.img.ext}  width="300" height="250"></canvas>
                                                    </a>
                                                </div>
                                                {/* Card Caption */}
                                                <div className="card-caption col-12 p-0">
                                                    {/* Card Body */}
                                                    <div className="card-body">
                                                        <div className="countdown-times mb-3">
                                                            <div className="countdown d-flex justify-content-center" data-date={item.date} />
                                                        </div>
                                                        <a href="/item-details">
                                                            <h5 className="mb-0 ">{item.title}</h5>
                                                        </a>
                                                        {/* <a className="seller d-flex align-items-center my-3" href="/item-details">
                                                            <img className="avatar-sm rounded-circle" src={item.seller_thumb} alt="" />
                                                            <span className="ml-2">{item.seller}</span>
                                                        </a> */}
                                                        <div className="card-bottom d-flex justify-content-between ">
                                                            <span>{item.price}</span>
                                                            <span>{item.count}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="swiper-pagination" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PreOrderNft;