import React, { Component } from 'react';
import axios from 'axios';
import i18next from 'i18next';

const initData = {
    pre_heading: "New items",
    heading: "New items release",
    content: "NFT trading system Sancti Quest on Frontline has an NFT trading system in-game where players can increase their power and grow the game economy by trading NFT products. All transactions will be paid with a 15% transaction tax.",
    btnText: "Load More"
}
const data = [
    {
        id: "111111",
        name: "Super Bomb#91",
        img: "/img/shopitems/1.png",
        price: 3000,
        usdPrice: 300,
        level: 1,
        quality: "Epic",
        quantity: 20,
        seller: "0xaf8a7611aEEd90Aa6ab4D8257b7DE42575698F29",
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!",
        date: "March, 16th , 2022",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive",
    },
    {
        id: "111112",
        name: "Super Bomb#91",
        img: "/img/shopitems/2.png",
        price: 3000,
        usdPrice: 300,
        level: 1,
        quality: "Normal",
        quantity: 20,
        seller: "0xaf8a7611aEEd90Aa6ab4D8257b7DE42575698F29",
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!",
        date: "March, 16th , 2022",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive",
    },
    {
        id: "111113",
        name: "Super Bomb#91",
        img: "/img/shopitems/3.png",
        price: 3000,
        usdPrice: 300,
        level: 1,
        quality: "Rare",
        quantity: 20,
        seller: "0xaf8a7611aEEd90Aa6ab4D8257b7DE42575698F29",
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!",
        date: "March, 16th , 2022",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive",
    },
    {
        id: "111114",
        name: "Super Bomb#91",
        img: "/img/shopitems/4.png",
        price: 3000,
        usdPrice: 300,
        level: 1,
        quality: "Epic",
        quantity: 20,
        seller: "0xaf8a7611aEEd90Aa6ab4D8257b7DE42575698F29",
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!",
        date: "March, 16th , 2022",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive",
    },
    {
        id: "111115",
        name: "Super Bomb#91",
        img: "/img/shopitems/5.png",
        price: 3000,
        usdPrice: 300,
        level: 1,
        quality: "Normal",
        quantity: 20,
        seller: "0xaf8a7611aEEd90Aa6ab4D8257b7DE42575698F29",
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!",
        date: "March, 16th , 2022",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive",
    },
    {
        id: "111116",
        name: "Super Bomb#91",
        img: "/img/shopitems/6.png",
        price: 3000,
        usdPrice: 300,
        level: 1,
        quality: "Rare",
        quantity: 20,
        seller: "0xaf8a7611aEEd90Aa6ab4D8257b7DE42575698F29",
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!",
        date: "March, 16th , 2022",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive",
    },
    {
        id: "111117",
        name: "Super Bomb#91",
        img: "/img/shopitems/7.png",
        price: 3000,
        usdPrice: 300,
        level: 1,
        quality: "Epic",
        quantity: 20,
        seller: "0xaf8a7611aEEd90Aa6ab4D8257b7DE42575698F29",
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!",
        date: "March, 16th , 2022",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive",
    },
    {
        id: "111118",
        name: "Super Bomb#91",
        img: "/img/shopitems/8.png",
        price: 3000,
        usdPrice: 300,
        level: 1,
        quality: "Normal",
        quantity: 20,
        seller: "0xaf8a7611aEEd90Aa6ab4D8257b7DE42575698F29",
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!",
        date: "March, 16th , 2022",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive",
    },
    {
        id: "111119",
        name: "Super Bomb#91",
        img: "/img/shopitems/9.png",
        price: 3000,
        usdPrice: 300,
        level: 1,
        quality: "Rare",
        quantity: 20,
        seller: "0xaf8a7611aEEd90Aa6ab4D8257b7DE42575698F29",
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!",
        date: "March, 16th , 2022",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive",
    },
]
class NewItemsTwo extends Component {
    state = {
        initData: {},
        data: []
    }

    async ItemList() {
        // const formData = new FormData();
        // formData.append("currentPage", 1);
        // formData.append("wallet", "");
        // axios
        // .post("https://api.metawar.biz/MarketPlace/GetSellingList", formData)
        // .then( async (res) => {
        //   console.log("res ne ", res.data.data);
        //   await this.setState({
        //       initData: initData,
        //     data: res.data.data,
        //   });
        // });
        await this.setState({
            initData: initData,
            data: data
        })
    }
    componentDidMount() {
        this.ItemList();
        //    this.ItemList();
        // this.setState({
        //     initData: initData,
        //     data: data
        // })
    }
    render() {
        return (
            <section className="new-item-area load-more">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                <span>{i18next.t('new_items').pre_heading}</span>
                                <h3 className="mt-3 mb-0">{i18next.t('new_items').heading}</h3>
                                <p>{i18next.t('new_items').content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {this.state.data.map((item, idx) => {
                            return (
                                <div key={`auct_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card text-center">
                                        <div className="card-title">ID : {item.id}</div>
                                        <div className="image-over">
                                            <a href={`/item-details/${item.id}`}>
                                                <img
                                                    className="card-img-top"
                                                    src={`${item.img}`}
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body">
                                                <a href={`/item-details/${item.id}`}>
                                                    <h5 className="mb-0">{item.name}</h5>

                                                </a>
                                                <div className="quality">
                                                    <span className={item.quality === "Epic" ? "epic" : item.quality === "Normal" ? "normal" : "rare"}>{item.quality}</span>
                                                </div>
                                                <div className="card-bottom d-flex justify-content-center">
                                                    <span>{item.price} <span className="sqf">SQF</span></span>
                                                </div>
                                                <a
                                                    className="btn btn-bordered-buy btn-smaller mt-3"
                                                    href={`/item-details/${item.id}`}
                                                >
                                                    <i className="fas fa-eye"></i> 
                                                    {i18next.t('_view')}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <a id="load-btn" className="btn btn-bordered mt-5" href="#">{i18next.t('_load_more')}</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default NewItemsTwo;