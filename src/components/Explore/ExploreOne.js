import i18next from 'i18next';
import React, { Component } from 'react';

const initData = {
    pre_heading: "Exclusive Assets",
    heading: "Explore",
    btn_1: "View All",
    btn_2: "Load More"
}

const data = [
    {
        id: "1",
        img: "https://mymasterwar.s3.ap-southeast-1.amazonaws.com/generals-v3/005/005_3_0_4_1_0_2_3_2.gif?v=R0rcWvskPI",
        title: "Item Tittle",
        owner: "Richard",
        price: "1.5 ETH",
        count: "1 of 1",
        btnText: "Buy item"
    },
    {
        id: "2",
        img: "https://mymasterwar.s3.ap-southeast-1.amazonaws.com/generals-v3/005/005_3_0_4_1_0_2_3_2.gif?v=R0rcWvskPI",
        title: "Item Tittle",
        owner: "John Deo",
        price: "2.7 ETH",
        count: "1 of 1",
        btnText: "Buy item"
    },
    {
        id: "3",
        img: "https://mymasterwar.s3.ap-southeast-1.amazonaws.com/generals-v3/005/005_3_0_4_1_0_2_3_2.gif?v=R0rcWvskPI",
        title: "Item Tittle",
        owner: "Arham",
        price: "2.3 ETH",
        count: "1 of 1",
        btnText: "Buy item"
    },
    {
        id: "4",
        img: "https://mymasterwar.s3.ap-southeast-1.amazonaws.com/generals-v3/005/005_3_0_4_1_0_2_3_2.gif?v=R0rcWvskPI",
        title: "Item Tittle",
        owner: "Yasmin",
        price: "1.8 ETH",
        count: "1 of 1",
        btnText: "Buy item"
    },
    {
        id: "5",
        img: "https://mymasterwar.s3.ap-southeast-1.amazonaws.com/generals-v3/005/005_3_0_4_1_0_2_3_2.gif?v=R0rcWvskPI",
        title: "Item Tittle",
        owner: "Junaid",
        price: "1.7 ETH",
        count: "1 of 1",
        btnText: "Buy item"
    },
    {
        id: "6",
        img: "https://mymasterwar.s3.ap-southeast-1.amazonaws.com/generals-v3/005/005_3_0_4_1_0_2_3_2.gif?v=R0rcWvskPI",
        title: "Item Tittle",
        owner: "ArtNox",
        price: "1.9 ETH",
        count: "1 of 1",
        btnText: "Buy item"
    },
    {
        id: "7",
        img: "https://mymasterwar.s3.ap-southeast-1.amazonaws.com/generals-v3/005/005_3_0_4_1_0_2_3_2.gif?v=R0rcWvskPI",
        title: "Item Tittle",
        owner: "Junaid",
        price: "3.2 ETH",
        count: "1 of 1",
        btnText: "Buy item"
    },
    {
        id: "8",
        img: "https://mymasterwar.s3.ap-southeast-1.amazonaws.com/generals-v3/005/005_3_0_4_1_0_2_3_2.gif?v=R0rcWvskPI",
        title: "Item Tittle",
        owner: "Johnson",
        price: "0.69 ETH",
        count: "1 of 1",
        btnText: "Buy item"
    },
    {
        id: "9",
        img: "https://mymasterwar.s3.ap-southeast-1.amazonaws.com/generals-v3/005/005_3_0_4_1_0_2_3_2.gif?v=R0rcWvskPI",
        title: "Item Tittle",
        owner: "Sara",
        price: "2.3 ETH",
        count: "1 of 1",
        btnText: "Buy item"
    },
    {
        id: "10",
        img: "https://mymasterwar.s3.ap-southeast-1.amazonaws.com/generals-v3/005/005_3_0_4_1_0_2_3_2.gif?v=R0rcWvskPI",
        title: "Item Tittle",
        owner: "SpaceMan",
        price: "3.7 ETH",
        count: "1 of 1",
        btnText: "Buy item"
    },
    {
        id: "11",
        img: "https://mymasterwar.s3.ap-southeast-1.amazonaws.com/generals-v3/005/005_3_0_4_1_0_2_3_2.gif?v=R0rcWvskPI",
        title: "Item Tittle",
        owner: "Monas",
        price: "2.2 ETH",
        count: "1 of 1",
        btnText: "Buy item"
    },
    {
        id: "12",
        img: "https://mymasterwar.s3.ap-southeast-1.amazonaws.com/generals-v3/005/005_3_0_4_1_0_2_3_2.gif?v=R0rcWvskPI",
        title: "Item Tittle",
        owner: "Victor",
        price: "4.3 ETH",
        count: "1 of 1",
        btnText: "Buy item"
    }
]

class ExploreOne extends Component {
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
            <section className="explore-area load-more p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>{this.state.initData.pre_heading}</span>
                                    <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                </div>
                                <div className="intro-btn">
                                    <a className="btn content-btn" href="/all-item">{this.state.initData.btn_1}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {this.state.data.map((item, idx) => {
                            return (
                                <div key={`exo_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card">
                                        <div className="image-over">
                                            <a href="/item-details">
                                                <img className="card-img-top" src={item.img} alt="" />
                                            </a>
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body">
                                                <a href="/item-details">
                                                    <h5 className="mb-0">{item.title}</h5>
                                                </a>
                                                <div className="seller d-flex align-items-center my-3">
                                                    <span>Owned By</span>
                                                    <a href="/author">
                                                        <h6 className="ml-2 mb-0">{item.owner}</h6>
                                                    </a>
                                                </div>
                                                <div className="card-bottom d-flex justify-content-between">
                                                    <span>{item.price}</span>
                                                    <span>{item.count}</span>
                                                </div>
                                                <a className="btn btn-bordered-white btn-smaller mt-3" href="/login"><i className="icon-handbag mr-2" />{i18next.t('_buy_item')}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <a id="load-btn" className="btn btn-bordered-white mt-5" href="#">{i18next.t('_load_more')}</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ExploreOne;