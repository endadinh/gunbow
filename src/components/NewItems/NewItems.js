import React, { Component } from "react";
import axios from "axios";
import { buyItem, handleBuyItem, send } from "../../utils/buyItem";
import { toast } from "react-toastify";
import { Load, unLoad } from "../../utils/Loader";
import { isMetamask } from "../../utils/metamask";
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

const initData = {
  pre_heading: "New Items",
  heading: "New Items",
  btnText: "View All",
};

class NewItems extends Component {
  constructor() {
    super();
    this.state = {
      initData: {},
      data: [],
    };
  }
  async ItemList() {
    // const formData = new FormData();
    // formData.append("currentPage", 1);
    // formData.append("wallet", "");
    // await axios
    //   .post("https://api.metawar.biz/MarketPlace/GetSellingList", formData)
    //   .then(async (res) => {
    //     this.setState({
    //       data: res.data.data,
    //     });
    //     unLoad();
    //   });
    this.setState({
      data: data,
      initData: initData,

    });
    unLoad();
  }

  async buyItem(item) {
    console.log(item);
    Load()
    const metamask = await isMetamask();
    if (metamask) {
      handleBuyItem(item)
    }
    else {
      alert(`${i18next.t('_login_wallet_require')}`);
      unLoad();
    }
  }
  async componentDidMount() {
    this.ItemList();
  }
  render() {
    return (
      <section className="new-item-area bg2 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Intro */}
              <div className="intro d-flex justify-content-between align-items-end m-0">
                <div className="intro-content">
                  <span>{i18next.t('new_items').pre_heading}</span>
                  <h3 className="mt-3 mb-0">{i18next.t('new_items').heading}</h3>
                </div>
                <div className="intro-btn">
                  <a className="btn content-btn" href="/new-items">
                    {i18next.t('new_items').btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="auctions-slides">
            <div className="swiper-container slider-mid items">
              <div className="swiper-wrapper">
                {/* Single Slide */}
                {
                  this.state.data && this.state.data[0] ?
                    this.state.data.map((item, idx) => {
                      return (
                        <div key={`auc_${idx}`} className="swiper-slide item">
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
                    }) : null}
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NewItems;
