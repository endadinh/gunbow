import React, { Component } from "react";
import axios from "axios";
import i18next from "i18next";
import { buyItem, handleBuyItem, send } from "../../utils/buyItem";
import { toast } from "react-toastify";
import { Load, unLoad } from '../../utils/Loader';
import { isMetamask } from "../../utils/metamask";


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



class ItemDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataChamp: [],
      dataOne: [],
      scanUrl: "",
    };
  }


  // async sendHash(item, txHash) {
  //   await send(txHash).then(res => {
  //     const formData = new FormData();
  //     formData.append("itemInput", item.productPriceId ? item.productPriceId : item.packageId)
  //     formData.append("type", this.props.type == 1 ? 2 : 1)
  //     formData.append("hashCode", txHash);
  //     formData.append("wallet", window.ethereum.selectedAddress);
  //     axios`
  //       .post("https://api.metawar.biz/MarketPlace/BuyItemOrder", formData)
  //       .then(async (res) => {
  //         if (res.data.message) {
  //           alert("Successfully  !!!");44444444
  //           unLoad()
  //         }
  //       })
  //   });
  // }

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


  async dateTime(date) {
    // const date = Date(date)
    // console.log(date)
  }

  async getItemOwner(id) {
    setTimeout(async () => {
      const formData = new FormData();
      // formData.append("currentPage", 1);
      // formData.append("wallet", window.ethereum.selectedAddress);
      formData.append("bagId", id);
      const item = await axios
        .post("https://api.metawar.biz/ItemDetails/ByInventory", formData)
        .then(async (res) => {
          try {
            this.dateTime(res.data.createdDate);
            this.setState({
              dataOne: res.data
            })
            unLoad();
            return true;
          }
          catch (err) {
            return false;
          }
        })
      if (!item) {
        console.log('no data');
        this.getItemOwner();
      }
    }, 100);

  }

  async getItem(id) {
    // const formData = new FormData();
    // formData.append("id", id);
    //   axios.post("https://api.metawar.biz/ItemDetails/ByUser", formData)
    //     .then(async (res) => {
    //       console.log('data detail', res);
    //       this.setState({
    //         dataOne: res.data,
    //       });
    //       unLoad();
    //     })
    console.log(id);
    data.map((item) => {
      if (id === item.id) {
        console.log('aaaaaaaaaaa');
        this.setState({
          dataOne: item
        })
        unLoad();
      }
    })
  }
  async getConfigNetwork() {
    const Config = JSON.parse(localStorage.getItem('Config'));
    console.log('Config ::', Config)
    const scanUrl = Config.scanUrl;
    this.setState({
      scanUrl: scanUrl,
    })
  }

  async componentDidMount() {
    await this.getConfigNetwork();
    await this.getItem(this.props.id);
  }
  render() {
    // this.getItemOwner(this.props.connectedWallet.address,this.props.id)
    return (
      <section className="item-details-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              {/* Intro */}
              <div className="intro text-center mb-4">
                <span>{i18next.t('item_details').pre_heading}</span>
                <h3 className="mt-3 mb-0">{i18next.t('item_details').heading}</h3>
                <p>{i18next.t('item_details').content}</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-5">
            <div className="col-lg-6">
              <div className="item-info">
                <div className="card no-hover mt-4">
                  <div className="card-item">
                    <div className="item-thumb text-center">
                      <img
                        src={`${this.state.dataOne.img}`}
                        alt=""
                      />
                    </div>
                    <div className="card-body col-12 text-center">
                      <div className="col-12 d-flex justify-content-center">
                        <img src="/img/icons/forge.png" />
                        <span>{i18next.t('_level')} : {this.state.dataOne.level} </span>
                      </div>
                      <div className="col-12">
                        <div className="quality col-12  d-flex justify-content-center">
                          <span className={this.state.dataOne.quality === "Epic" ? "epic" : this.state.dataOne.quality === "Normal" ? "normal" : "rare"}>{this.state.dataOne.quality}</span>
                        </div>
                      </div>
                      <div className="col-12 line-attr">
                        <div className="attributes col-lg-6 ">
                          <img src="/img/icons/lighting.png" />
                          <span>{i18next.t('_energy')} : {this.state.dataOne.energy} </span>
                        </div>
                        <div className="attributes col-lg-6" >
                          <img src="/img/icons/swords.png" />
                          <span>{i18next.t('_attack')} : {this.state.dataOne.attack} </span>
                        </div>
                      </div>
                      <div className="col-12 line-attr">
                        <div className="attributes col-lg-6 " >
                          <img src="/img/icons/shield.png" />
                          <span>{i18next.t('_defense')} : {this.state.dataOne.defense}</span>
                        </div>
                        <div className="attributes col-lg-6 " >
                          <img src="/img/icons/speedometer.png" />
                          <span>{i18next.t('_speed')} : {this.state.dataOne.speed}</span>
                        </div>
                      </div>
                      <div className="col-12 line-attr">
                        <div className="attributes col-lg-6 " >
                          <img src="/img/icons/four-leaf.png" />
                          <span>{i18next.t('_lucky')} : {this.state.dataOne.lucky}</span>
                        </div>
                      </div>
                      <div className="attributes col-12">
                        <span>{i18next.t('_passive')} : {this.state.dataOne.passive}</span>
                      </div>
                    </div>
                  </div>
                  {/* <div className="countdown d-flex justify-content-center" data-date={this.state.dataOne.date} /> */}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              {/* Content */}
              <div className="content mt-5 mt-lg-0">
                <h3 className="m-0">{this.state.dataOne.name}</h3>
                <p>{this.state.dataOne.content}</p>
                {/* Owner */}
                <div className="owner d-flex align-items-center">
                  <span>{i18next.t('_owner')} : </span>
                  <a
                    className="owner-meta d-flex align-items-center ml-3"
                    href={`${this.state.scanUrl}/address/${this.state.dataOne.seller}`}
                  >
                    {/* <img className="avatar-sm rounded-circle" src="/img/avatar/avatar_1.jpeg" alt="" /> */}
                    <h6 className="ml-2">
                      {this.state.dataOne.seller}
                    </h6>
                  </a>
                </div>
                <p className="mt-2">
                  {i18next.t('_created')} : {this.state.dataOne.date}
                </p>

                {/* Item Info List */}
                <div className="item-info-list mt-4">
                  <ul className="list-unstyled">
                    <li className="price d-flex justify-content-between">
                      <span>
                        {i18next.t('_price')} : {this.state.dataOne.price} <span className="sqf">SQF</span>
                      </span>
                      {/* <span>{this.state.dataOne.price_2}</span>
                                                        <span> {this.state.dataOne.count}</span> */}
                      <span>ID : #{this.state.dataOne.id}</span>
                    </li>
                    <li>
                      <span>USD : {this.state.dataOne.usdPrice} $ </span>
                    </li>
                  </ul>
                </div>
                <div className="btn-buy d-flex justify-content-center">
                  <a
                    className="btn btn-bordered-buy mt-4"
                    href="#"
                    onClick={(event) => {
                      this.buyItem(this.state.dataOne);
                    }}
                  >
                    <i className="icon-handbag mr-2" /> {i18next.t('_buy_item')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ItemDetails;
