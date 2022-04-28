import React, { Component } from "react";
import axios from "axios";
import { Load, unLoad } from "../../utils/Loader";
import ReactPaginate from 'react-paginate';
import { isMetamask } from "../../utils/metamask";
import { handleBuyItem } from "../../utils/buyItem";
import FilterBox from "../FilterBox/FilterBox";
import i18next from "i18next";


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
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!"
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
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!"
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
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!"
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
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!"
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
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!"
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
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!"
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
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!"
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
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!"
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
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!"
    },
]




class Marketplace extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            initData: {},
            data: [],
            currentPage: 1,
            pageCount: 1,
            activeFilter: true,
            filterData: {
                item: "all",
                sex: "all",
                quality: [],
                outfits: [],
                jewelry: [],
                pet: [],
                special: []
            }
        };
        this.closeFilter = this.closeFilter.bind(this);
        this.openFilter = this.openFilter.bind(this);
        this.handleChangeFilter = this.handleChangeFilter.bind(this);
        this.loadFilter = this.loadFilter.bind(this);
    }
    openFilter() {
        this.setState({
            activeFilter: true,
        })
    }
    closeFilter() {
        this.setState({
            activeFilter: false,
        })
    }

    async handleChangeFilter(event) {
        console.log(event.target.id);
        await this.setState(prevState => {
            let filterData = { ...prevState.filterData };
            if (event.target.id === "all") {
                filterData[filterData.item] = [];
                filterData.item = "all";
            }
            if (event.target.id === "sex") {
                filterData.sex = event.target.value;
            }
            if (event.target.id === "weapon") {
                filterData[filterData.item] = [];
                filterData.item = "weapon";

            }
            if (event.target.id === "outfits") {
                filterData[filterData.item] = [];
                filterData.item = "outfits"


            }
            if (event.target.id === "jewelry") {
                filterData[filterData.item] = [];
                filterData.item = "jewelry"

            }
            if (event.target.id === "pet") {
                filterData[filterData.item] = [];
                filterData.item = "pet"

            }
            if (event.target.id === "special") {
                filterData[filterData.item] = [];
                filterData.item = "special"

            }
            if (filterData.item === "outfits") {
                if (event.target.checked) {
                    console.log(event.target);
                    if (!filterData.outfits.includes(event.target.id)) {
                        filterData.outfits.push(event.target.id);
                    }
                }
                else {
                    const index = filterData.outfits.indexOf(event.target.id);
                    if (index > -1) {
                        filterData.outfits.splice(index, 1); // 2nd parameter means remove one item only
                    }
                }
            }
            if (filterData.item === "jewelry") {
                console.log('bbb');
                if (event.target.checked) {
                    if (!filterData.jewelry.includes(event.target.id)) {
                        filterData.jewelry.push(event.target.id);
                    }
                }
                else {
                    const index = filterData.jewelry.indexOf(event.target.id);
                    if (index > -1) {
                        filterData.jewelry.splice(index, 1); // 2nd parameter means remove one item only
                    }
                }
            }
            if (filterData.item === "pet") {
                if (event.target.checked) {
                    if (!filterData.pet.includes(event.target.id)) {
                        filterData.pet.push(event.target.id);
                    }
                }
                else {
                    const index = filterData.pet.indexOf(event.target.id);
                    if (index > -1) {
                        filterData.pet.splice(index, 1); // 2nd parameter means remove one item only
                    }
                }
            }
            if (filterData.item === "special") {
                if (event.target.checked) {
                    if (!filterData.special.includes(event.target.id)) {
                        filterData.special.push(event.target.id);
                    }
                }
                else {
                    const index = filterData.special.indexOf(event.target.id);
                    if (index > -1) {
                        filterData.special.splice(index, 1); // 2nd parameter means remove one item only
                    }
                }
            }
            if (event.target.id === "rare" || event.target.id === "epic" || event.target.id === "normal") {
                if (event.target.checked) {
                    if (!filterData.quality.includes(event.target.id)) {
                        filterData.quality.push(event.target.id);
                    }
                }
                else {
                    const index = filterData.quality.indexOf(event.target.id);
                    if (index > -1) {
                        filterData.quality.splice(index, 1); // 2nd parameter means remove one item only
                    }
                }
            }
            return { filterData }
        })
        // this.forceUpdate();

    }
    async loadFilter() {
        const sex = this.state.filterData.sex;
        const item = this.state.filterData.item;
        console.log(item);
        const quality = this.state.filterData.quality.join('%');
        const outfits = this.state.filterData.outfits.join('%');
        const jewelry = this.state.filterData.jewelry.join('%');
        const pet = this.state.filterData.pet.join('%');
        const special = this.state.filterData.special.join('%');
        let href = `?${item ? `&item=${item}` : ""}${sex ? `&sex=${sex}` : ""}${quality ? `&quality=${quality}` : ""}`;

        if (item === "outfits") {
            href = `${href}${outfits ? `&outfits=${outfits}` : ""}`;
        }
        else if (item === "jewelry") {
            href = `${href}${jewelry ? `&jewelry=${jewelry}` : ""}`;
        }
        else if (item === "pet") {
            href = `${href}${pet ? `&pet=${pet}` : ""}`;
        }
        else if (item === "special") {
            href = `${href}${special ? `&special=${special}` : ""}`;

        }
        return window.location.href = href;
    }

    async buyItem(item) {
        Load();
        const metamask = await isMetamask();
        if (metamask) {
            handleBuyItem(item);
        }
        else {
            alert(`${i18next.t('_login_wallet_require')}`);
            unLoad();
        }
    }

    async getParams() {
        const queryParams = new URLSearchParams(window.location.search);
        const item = queryParams.get('item') || "all";
        const quality = queryParams.get('quality') ? queryParams.get('quality').split("%") : [];
        const sex = queryParams.get('sex');
        const weapon = queryParams.get('weapon');
        const jewelry = queryParams.get('jewelry') ? queryParams.get('jewelry').split("%") : [];
        const outfits = queryParams.get('outfits') ? queryParams.get('outfits').split("%") : [];
        const pet = queryParams.get('pet') ? queryParams.get('pet').split("%") : [];
        const special = queryParams.get('special') ? queryParams.get('special').split("%") : [];
        const itemData = await this.getItemUser();
        await this.setState(() => {
            let objState = this.state;
            objState.filterData.item = item;
            objState.filterData.sex = sex;
            objState.filterData.quality = quality;
            objState.filterData.jewelry = jewelry;
            objState.filterData.weapon = weapon;
            objState.filterData.outfits = outfits;
            objState.filterData.pet = pet;
            objState.filterData.special = special;
            objState.data = itemData.data;
            objState.pageCount = itemData.pageCount;
            objState.currentPage = itemData.currentPage;
            objState.isLoaded = true;
            return { objState }
        })
    }

    async getItemUser(currentPage = 1) {
        // const formData = new FormData();
        // formData.append("currentPage", currentPage);
        // formData.append("wallet", "");
        // await axios
        //     .post("https://api.metawar.biz/MarketPlace/GetSellingList", formData)
        //     .then((res) => {
        //         this.setState({
        //             initData: initData,
        //             data: res.data.data,
        //             pageCount: res.data.totalPage,
        //             currentPage: currentPage - 1
        //         })
        //         unLoad();
        //     })
        return { data: data, pageCount: 1, currentPage: currentPage - 1 };
    }

    async handlePageClick(event) {
        const current = event.selected + 1;
        window.location.href = `/all-item/${current}`;
        //  this.fetchProfileData(current);
        //  this.forceUpdate();
    }
    async componentDidMount() {
        await this.getParams();
    }
    render() {
        const { isLoaded } = this.state;
        if (isLoaded) {
            return (
                <section className="marketplace-area">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                {/* Intro */}
                                <div className="intro text-center mb-4">
                                    <span>{i18next.t('marketplace').pre_heading}</span>
                                    <h3 className="mt-3 mb-0">{i18next.t('marketplace').heading}</h3>
                                    <p>{i18next.t('marketplace').content}</p>
                                </div>
                            </div>
                        </div>
                        <FilterBox
                            handleChangeFilter={this.handleChangeFilter}
                            filterData={this.state.filterData}
                            loadFilter={this.loadFilter}
                        />
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="row items explore-items">
                                    {
                                        this.state.data.map((item, idx) => {
                                            return (
                                                <div
                                                    key={`edt_${idx}`}
                                                    className="col-12 col-lg-2 col-md-4 col-sm-6 item explore-item"
                                                // '["Hero","pet"]'
                                                >
                                                    <div className="card text-center">
                                                        <div className="card-title"><i>Id:  #{item.id}</i></div>
                                                        <div className="image-over">
                                                            <a href={`/item-details/${item.id}`}>
                                                                <img
                                                                    className="card-img-top"
                                                                    src={`${item.img}`}
                                                                    alt=""
                                                                />
                                                                {/* <img
                                                                    className="img1 card-img-top "
                                                                    src="/img/hover.svg"
                                                                    alt=""
                                                                /> */}
                                                            </a>
                                                        </div>
                                                        {/* Card Caption */}
                                                        <div className="card-caption col-12 p-0">
                                                            {/* Card Body */}
                                                            <div className="card-body">
                                                                <a href={`/item-details/${item.id}`}>
                                                                    <h5 className="mb-0">{item.name}</h5>

                                                                </a>
                                                                {/* <div className="seller d-flex align-items-center my-3">
                                                                    <img
                                                                        className="avatar-sm rounded-circle"
                                                                        src="/img/avatar/avatar_1.jpeg"
                                                                        alt=""
                                                                    />
                                                                    <span className="ml-2 address">
                                                                        {item.seller}
                                                                    </span>
                                                                </div> */}
                                                                <div className="quality">
                                                                    <span className={item.quality === "Epic" ? "epic" : item.quality === "Normal" ? "normal" : "rare"}>{item.quality}</span>
                                                                </div>
                                                                <div className="card-bottom d-flex justify-content-center">
                                                                    <span>{item.price} <span className="sqf">SQF</span></span>
                                                                    {/* <span>{item.quantity} Items</span> */}
                                                                </div>
                                                                <a
                                                                    className="btn btn-bordered-buy btn-smaller mt-3"
                                                                    href={`/item-details/${item.id}`}
                                                                // onClick={(event) => {
                                                                //     this.buyItem(item);
                                                                // }}
                                                                >
                                                                    <i className="fas fa-eye"></i> {i18next.t('_view')}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                        // : null
                                    }
                                </div>
                                <ReactPaginate
                                    className="paginate col-12 pt-5"
                                    breakLabel="..."
                                    nextLabel={<div className="btn content-btn-right"></div>}
                                    forcePage={this.state.currentPage}
                                    onPageChange={(event) => { this.handlePageClick(event) }}
                                    pageRangeDisplayed={5}
                                    pageCount={this.state.pageCount}
                                    previousLabel={<div className="btn content-btn-left"></div>}
                                    renderOnZeroPageCount={null}
                                />
                            </div>
                        </div>
                    </div>


                </section >
            );
        }
        else return null;
    }
}

export default Marketplace;