import React, { Component } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { unLoad } from '../../utils/Loader';
import i18next from 'i18next';
import { Link } from 'react-router-dom';

export const data = {
    "preHeading": "Exclusive Assets",
    "heading": "Explore",
    "btnText": "Explore More",
}
const dataItem = [
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
class Sold extends Component {
    state = {
        data: {},
        exploreData: [],
        currentPage: 1,
        pageCount: 0,
        scanUrl:"",
    }

    async getSellList(currentPage = 1) {
        // setTimeout(async () => {
        //     const formData = new FormData();
        // formData.append("currentPage", currentPage);
        // formData.append("wallet", window.ethereum.selectedAddress);
        // const sellList = await axios
        //     .post("https://api.metawar.biz/Users/GetSellList", formData);
        //     if(!sellList) { 
        //         return this.getSellList();
        //     }
        //     else { 
                this.setState({
                    // exploreData: sellList.data.data
                    exploreData: dataItem,
                })
                unLoad();
        //     }
        // }, 0);
        
    }

    async handlePageClick(event) { 
        console.log('event selected',event.selected+1)
        const current = event.selected+1;
       this.getSellList(current);
       this.forceUpdate();
        // console.log(this.state.currentPage)
    }

    goDetail(item) {
        console.log("item", item);
        // window.location.href = `/sell-items/${item.itemType}/${item.packageId}`;
    }
    
    async getConfigNetwork() { 
        const Config = JSON.parse(localStorage.getItem('Config'));
        console.log('Config ::',Config)
        const scanUrl = Config.scanUrl;
        this.setState({
            scanUrl: scanUrl,
        })
    }


    componentDidMount() {
        this.getSellList(this.state.currentPage)
        this.getConfigNetwork();
        this.setState({
            data: data,
        });
    }
    render() {
        return (
            <section className="explore-area">
                <div className="container mt-5">
                    <div className="col-12 text-center">
                        <div className="card-title">
                            <h2>{i18next.t('account').sold}</h2>
                        </div>
                    </div>
                    <div className="row items">
                        {
                            this.state.exploreData[0] ?
                                this.state.exploreData.map((item, idx) => {
                                    return (
                                        <div key={`edt_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                            <div className="card">
                                                <div className="image-over d-flex justify-content-center">
                                                    <Link to="#">
                                                        <img className="card-img-top" src={`${item.img}`} alt="" />
                                                        {/* <img className="img1 " src="/img/hover.svg" alt="" /> */}
                                                    </Link>
                                                </div>
                                                {/* Card Caption */}
                                                <div className="card-caption col-12 p-0">
                                                    {/* Card Body */}
                                                    <div className="card-body text-center">
                                                        <Link to="#">
                                                            <h5 className="mb-0">{item.name}</h5>
                                                        </Link>
                                                        <div className="quality d-flex justify-content-center">
                                                            {/* <span>{item.bagPrice} SQF</span> */}
                                                            <span className={item.quality === "Epic" ? "epic" : item.quality === "Normal" ? "normal" : "rare"}>{item.quality}</span>

                                                        </div>
                                                        <div className="card-bottom">
                                                             <span>{i18next.t('_sell_price')} : {item.price} <span className="sqf">SQF</span></span>
                                                        </div>
                                                        {/* <div className="card-bottom d-flex justify-content-between">
                                                            <span> Order Amount :   {item.orderAmount}</span>

                                                        </div> */}

                                                        <div className="card-bottom">
                                                            <span>{item.date}</span>
                                                        </div>
                                                        <div className="card-bottom pt-1">
                                                            <div className="seller" >
                                                                <a className="ml-2 address" href={`${this.state.scanUrl}/tx/${item.hash}`}>
                                                                         {`${item.seller}`}
                                                                </a>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );

                                })
                                :
                                null
                        }
                    </div>
                    <ReactPaginate
                        className="paginate col-12 pt-5"
                        breakLabel="..."
                        nextLabel=" >"
                        onPageChange={(event) => { this.handlePageClick(event)}}
                        pageRangeDisplayed={5}
                        pageCount={this.state.pageCount}
                        previousLabel=" < "
                        renderOnZeroPageCount={null}
                    />
                </div>
            </section>
        );
    }
}

export default Sold;