import React, { Component } from 'react';
import i18next from 'i18next';

const initData = {
    itemImg: "/img/battle/N166.png",
    date: "2022-03-30",
    tab_1: "Bids",
    tab_2: "History",
    content: "Skills:  Physical Damage, Support and Resist",
    tab_3: "Details",
    ownerImg: "/img/avatar/avatar_1.jpeg",
    itemOwner: "Ox0000000000000000000",
    created: "15 Jul 2021",
    title: "Zhang Fei",
    // content: " Champion ",
    price_1: "25000000 SQF",
    price_2: "$500.89",
    count: "1 of 5",
    size: "14000 x 14000 px",
    volume: "64.1",
    highest_bid: "2.9 BNB",
    bid_count: "1 of 5",
    btnText: "Buy item"
}

const data = {
    "preHeading": "Exclusive Assets",
    "heading": "Explore",
    "btnText": "Explore More",
    "exploreData": [
        {
            id: "1",
            img: {
                name: "img/gif/gif1/gif1",
                ext: ".gif",
                quantity: "148"
            },    // 600x600 
            date: "2022-03-30",
            title: "Mystery box 1",
            seller_thumb: "/img/avatar_jpg",
            seller: "@Richard",
            price: "25000000 SQF",
            count: "1 of 1",
            btnText: "Buy"


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
            count: "1 of 1",
            btnText: "Buy"
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
            count: "1 of 1",
            btnText: "Buy"
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
            count: "1 of 1",
            btnText: "Buy"
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
            count: "1 of 1",
            btnText: "Buy"
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
            count: "1 of 1",
            btnText: "Buy"
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
            count: "1 of 1",
            btnText: "Buy"
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
            count: "1 of 1",
            btnText: "Buy"
        }
    ]
}




const tabData_1 = [
    {
        id: "1",
        img: "/img/avatar_1.jpg",
        price: "14 ETH",
        time: "4 hours ago",
        author: "@arham"
    },
    {
        id: "2",
        img: "/img/avatar_2.jpg",
        price: "10 ETH",
        time: "8 hours ago",
        author: "@junaid"
    },
    {
        id: "3",
        img: "/img/avatar_3.jpg",
        price: "12 ETH",
        time: "3 hours ago",
        author: "@yasmin"
    }
]

const tabData_2 = [
    {
        id: "1",
        img: "/img/avatar_6.jpg",
        price: "32 ETH",
        time: "10 hours ago",
        author: "@hasan"
    },
    {
        id: "2",
        img: "/img/avatar_7.jpg",
        price: "24 ETH",
        time: "6 hours ago",
        author: "@artnox"
    },
    {
        id: "3",
        img: "/img/avatar_8.jpg",
        price: "29 ETH",
        time: "12 hours ago",
        author: "@meez"
    }
]

const sellerData = [
    {
        id: "1",
        img: "/img/avatar_1.jpg",
        seller: "@ArtNoxStudio",
        post: "Creator"
    },
    {
        id: "2",
        img: "/img/avatar_2.jpg",
        seller: "Virtual Worlds",
        post: "Collection"
    }
]

class PreOrderDetail extends Component {
    state = {
        initData: {},
        tabData_1: [],
        tabData_2: [],
        sellerData: [],
        dataChamp: []
    }
    componentDidMount() {
        this.setState({
            initData: initData,
            tabData_1: tabData_1,
            tabData_2: tabData_2,
            sellerData: sellerData,
            dataChamp: data.exploreData
        })
        console.log('abcdefgh', this.props)
        // console.log(this.state.dataChamp);
    }
    render() {
        return (
            <section className="item-details-area">
                <div className="container">
                    {this.state.dataChamp.map((item, idx) => {
                        if (item.id === this.props.id) {
                            return (
                                <div key={`auc_${idx}`} className="row justify-content-between align-items-center">
                                    <div className="col-12 col-lg-6">
                                        <div className="item-info">
                                            <div className="item-thumb text-center">
                                                {/* <img className="" src={this.state.initData.itemImg} alt="" /> */}
                                                <canvas class="imageCanvas" imgName={item.img.name} quantity={item.img.quantity} ext={item.img.ext} width="300" height="250"></canvas>
                                            </div>
                                            <div className="card no-hover countdown-times my-4">
                                                <div className="countdown d-flex justify-content-center" data-date={item.date} />
                                                {/* <p>He had great merit in protecting Cao Wei from Zhuge Liang's northern attacks. After a long period of patience with Cao Shuang to wait for the right opportunity, he carried out a breakdown of the system in 249, setting the stage for the establishment of the Jin Dynasty, the first of China, the late Three Kingdoms period</p> */}
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        {/* Content */}
                                        <div className="content mt-5 mt-lg-0">
                                            <h3 className="m-0">{item.title}</h3>
                                            {/* <p>{item.content}</p> */}
                                            {/* Owner */}
                                            {/* <div className="owner d-flex align-items-center">
                                                <span>Owned By : </span>
                                                <a className="owner-meta d-flex align-items-center ml-3" href="#"> */}
                                            {/* <img className="avatar-sm rounded-circle" src={item.ownerImg} alt="" /> */}
                                            {/* <h6 className="ml-2">{item.seller}</h6>
                                                </a>
                                            </div> */}
                                            {/* <p className="mt-2">Created : {item.created}</p> */}

                                            {/* Item Info List */}
                                            <div className="item-info-list mt-4">
                                                <ul className="list-unstyled">
                                                    <li className="price d-flex justify-content-between">
                                                        <span>Current Price : {item.price} </span>
                                                        {/* <span>{item.price_2}</span> */}
                                                        <span> {item.count}</span>
                                                        {/* <span>Id : {item.id}</span> */}
                                                    </li>
                                                    {/* <li>
                                            <span>Volume Traded :</span>
                                            <span>{item.volume}</span>
                                        </li> */}
                                                </ul>
                                            </div>
                                            <a className="d-block btn btn-bordered-white mt-4" href="/wallet-connect">{i18next.t('_buy_item')}</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })};
                </div>
            </section>
        );
    }
}

export default PreOrderDetail;