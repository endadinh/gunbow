import React, { Component } from 'react';
import AuthorProfile from '../AuthorProfile/AuthorProfile';
import axios from 'axios';
import i18next from 'i18next';
import ReactPaginate from 'react-paginate';
import { unLoad } from '../../utils/Loader';
import FilterBox from '../FilterBox/FilterBox';
import { Link } from 'react-router-dom';


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

class Inventory extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            exploreData: [],
            pageCount: 0,
            currentPage: 1,
            isLoaded: false,
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
        const itemData = await this.getInventoryList();
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
            objState.exploreData = itemData.data;
            objState.pageCount = itemData.pageCount;
            objState.currentPage = itemData.currentPage;
            objState.isLoaded = true;
            return { objState }
        })
        unLoad();
    }



    async getInventoryList(currentPage = 1) {

        return { data: dataItem, pageCount: 1, currentPage: currentPage - 1 }
        // setTimeout(async () => {
        //     const formData = new FormData();
        //     formData.append("currentPage", currentPage);
        //     formData.append("wallet", window.ethereum.selectedAddress);
        //     const inventoryList = await axios
        //         .post("https://api.metawar.biz/Users/GetInventoryList", formData)

        //     if (!inventoryList) {
        //         return this.getInventoryList()
        //     }
        //     else {
        //         console.log('totalPage', inventoryList.data.totalPage)
        //         console.log('totalPage', inventoryList.data.data)

        //         this.setState({
        //             // exploreData: inventoryList.data.data,
        //             exploreData: dataItem,
        //             pageCount: inventoryList.data.totalPage
        //         })
        //         unLoad();
        //     }

        // }, 0);

    }
    async handlePageClick(event) {
        // console.log('event selected',event.selected)
        const current = event.selected + 1;
        this.getInventoryList(current);
        this.forceUpdate();
        // console.log(this.state.currentPage)
    }
    goDetail(item) {
        console.log("item", item);
        // window.location.href = `/sell-items/${item.itemType}/${item.packageId}`; 
    }

    async componentDidMount() {
        // this.getInventoryList(this.state.currentPage)
        await this.getParams();
    }
    render() {
        const { isLoaded } = this.state;
        if (isLoaded) {
            return (
                <section className="explore-area">
                    <div className="container mt-5">
                        <div className="col-12 text-center">
                            <div className="card-title">
                                <h2>{i18next.t('account').inventory}</h2>
                            </div>
                        </div>
                        <FilterBox
                            handleChangeFilter={this.handleChangeFilter}
                            filterData={this.state.filterData}
                            loadFilter={this.loadFilter}
                        />
                        <div className="row items">
                            {
                                this.state.exploreData[0] ?
                                    this.state.exploreData.map((item, idx) => {
                                        return (
                                            <div key={`edt_${idx}`} className="col-12 col-sm-6 col-lg-3 item">
                                                <div className="card ">
                                                    <div className="image-over d-flex justify-content-center">
                                                        <Link to={`/sell-items/${item.id}`}>
                                                            <img className="card-img-top" src={`${item.img}`} alt="" />
                                                            {/* <img className="img1 " src="/img/hover.svg" alt="" /> */}
                                                        </Link>
                                                    </div>
                                                    {/* Card Caption */}
                                                    <div className="card-caption col-12 p-0">
                                                        {/* Card Body */}
                                                        <div className="card-body text-center">
                                                            <Link to={`/sell-items/${item.id}`}>
                                                                <h5 className="mb-0">{item.name}</h5>
                                                            </Link>
                                                            <div className="card-bottom d-flex justify-content-center">
                                                                {/* <span>{item.bagPrice} SQF</span> */}
                                                                {/* <span>{item.count}</span> */}
                                                            </div>
                                                            <div className="quality d-flex justify-content-center">
                                                                {/* <span>{item.bagPrice} SQF</span> */}
                                                                <span className={item.quality === "Epic" ? "epic" : item.quality === "Normal" ? "normal" : "rare"}>{item.quality}</span>
                                                            </div>
                                                            <Link className="btn btn-bordered-buy btn-smaller mt-3" to={`/sell-items/${item.id}`}><i className="fas fa-shopping-cart mr-2" />{i18next.t('_sell_item')}</Link>

                                                            <Link className="btn btn-bordered-buy btn-smaller mt-3" to={`/transfer/${item.id}`}><i className="fas fa-exchange-alt mr-2" />{i18next.t('_transfer_to_game')}</Link>
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
                            onPageChange={(event) => { this.handlePageClick(event) }}
                            pageRangeDisplayed={3}
                            pageCount={this.state.pageCount}
                            previousLabel=" < "
                            renderOnZeroPageCount={null}
                        />
                    </div>
                </section>
            );
        }
        else return null;
    }
}

export default Inventory;