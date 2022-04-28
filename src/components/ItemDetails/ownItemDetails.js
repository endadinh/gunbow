import React, { Component } from "react";
import axios from "axios";
import { buyItem, handleBuyItem, send } from "../../utils/buyItem";
import { toast } from "react-toastify";
import { Load, unLoad } from '../../utils/Loader';
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



class ownItemDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataChamp: [],
      dataOne: [],
      stateMain: "UnOwner",
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
  //           alert("Successfully  !!!");
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
    // setTimeout(async () => {
    //   const formData = new FormData();
    //   // formData.append("currentPage", 1);
    //   // formData.append("wallet", window.ethereum.selectedAddress);
    //   formData.append("bagId", id);
    //   const item = await axios
    //     .post("https://api.metawar.biz/ItemDetails/ByInventory", formData)
    //     .then(async (res) => {
    //       try {
    //         this.dateTime(res.data.createdDate);
    //         this.setState({
    //           dataOne: res.data
    //         })
    //         unLoad();
    //         return true;
    //       }
    //       catch (err) {
    //         return false;
    //       }
    //     })
    //   if (!item) {
    //     console.log('no data');
    //     this.getItemOwner();
    //   }
    // }, 100);
    data.map((item) => {
        if (id === item.id) {
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
    await this.getItemOwner(this.props.id).then(() => {
        this.setState({
          stateMain: "Owner",
        });
        unLoad();
    });
  }
  render() {
      return (
        <section className="item-details-area">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-12 col-lg-6">
                <div className="item-info">
                  <div className="item-thumb text-center">
                    <img
                      src={`/img/battle/${this.state.dataOne.img}`}
                      alt=""
                    />
                  </div>
                  <div className="card no-hover countdown-times my-4">
                    {/* <div className="countdown d-flex justify-content-center" data-date={this.state.dataOne.date} /> */}
                    <p>{this.state.dataOne.productsContent}</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                {/* Content */}
                <div className="content mt-5 mt-lg-0">
                  <h3 className="m-0">{this.state.dataOne.productsName}</h3>
                  <p>{this.state.dataOne.productsContent2}</p>
                  {/* Owner */}
                  <div className="owner d-flex align-items-center">
                    <span>Owned By : </span>
                    <a
                      className="owner-meta d-flex align-items-center ml-3"
                      href={`${this.state.scanUrl}/address/${this.state.dataOne.username}`}
                    >
                      {/* <img className="avatar-sm rounded-circle" src="/img/avatar/avatar_1.jpeg" alt="" /> */}
                      <h6 className="ml-2">
                        {this.state.dataOne.username}
                      </h6>
                    </a>
                  </div>
                  <p className="mt-2">
                    Created : {this.state.dataOne.date}
                  </p>

                  {/* Item Info List */}
                  <div className="item-info-list mt-4">
                    <ul className="list-unstyled">
                      <li className="price d-flex justify-content-between">
                        <span>ID: {this.state.dataOne.itemId}</span>
                      </li>
                    </ul>
                  </div>
                  <a
                    className="d-block btn btn-bordered-white mt-4"
                    href={`/sell-items/${this.state.dataOne.bagId}`}
                  >
                    <i className="icon-handbag mr-2" /> Sell this item
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
  }
}

export default ownItemDetails;
