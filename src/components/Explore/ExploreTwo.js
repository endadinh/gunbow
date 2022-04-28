import React, { Component } from "react";
import axios from "axios";
import i18next from "i18next";
import { buyItem, handleBuyItem, send } from "../../utils/buyItem";
import { toast } from "react-toastify";
import { Load, unLoad } from "../../utils/Loader";
import { isMetamask } from "../../utils/metamask";

export const data = {
  preHeading: "Exclusive Assets",
  heading: "Explore",
  btnText: "All item",
};

class ExploreTwo extends Component {
  state = {
    data: {},
    exploreData: [],
  };
  goDetail(item) {
    console.log("item", item);
    window.location.href = `/item-details/${item.packageId}`;
  }

  async getItem() {


    const formData = new FormData();
    formData.append("currentPage", 1);
    formData.append("wallet", "");
    await axios
      .post("https://api.metawar.biz/MarketPlace/GetSellingList", formData)
      .then(async (res) => {
        this.setState({
          data: data,
          exploreData: res.data.data,
        });
        unLoad();
      });

  }

  async buyItem(item) {
    Load();
    const metamask = await isMetamask();
    if (metamask) {
      handleBuyItem(item)
    }
    else {
      alert(`${i18next.t('_login_wallet_require')}`);
      unLoad();
    }
  }

  componentDidMount() {
    this.getItem();
  }
  render() {
    return (
      <section className="explore-area pt-1">
        <div className="container bg1">
          <div className="row">
            <div className="col-12">
              {/* Intro */}
              <div className="intro d-flex justify-content-between align-items-end m-0">
                <div className="intro-content">
                  <span>{this.state.data.preHeading}</span>
                  <h3 className="mt-3 mb-0">Game Market</h3>
                </div>
                <div className="intro-btn">
                  <a className="btn content-btn" href="/all-item">
                    {this.state.data.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row items">

            {
              this.state.exploreData ?
                this.state.exploreData.map((item, idx) => {
                  return (
                    <div
                      key={`edt_${idx}`}
                      className="col-12 col-sm-6 col-lg-3 item"
                    >
                      <div className="card">
                        <div className="image-over">
                          <a
                            onClick={(event) => {
                              this.goDetail(item);
                            }}
                          >
                            <img
                              className="card-img-top "
                              src={`/img/battle/${item.productsPic}`}
                              alt=""
                            />
                            <img
                              className="img1 "
                              src="/img/hover.svg"
                              alt=""
                            />
                            {/* <img className="img1 " src="https://app.heroverse.io/images/common/sparkle.svg" alt="" /> */}
                          </a>
                        </div>
                        {/* Card Caption */}
                        <div className="card-caption col-12 p-0">
                          {/* Card Body */}
                          <div className="card-body ">
                            <a
                              onClick={(event) => {
                                this.goDetail(item);
                              }}
                            >
                              <div className="d-flex justify-content-between">
                                <h5 className="mb-0">{item.productsName}</h5>
                                {/* <span>{item.count}</span> */}
                              </div>
                            </a>
                            <a
                              className="seller d-flex align-items-center my-3"
                              onClick={(event) => {
                                this.goDetail(item);
                              }}
                            >
                              <img
                                className="avatar-sm rounded-circle"
                                src="/img/avatar/avatar_1.jpeg"
                                alt=""
                              />
                              <span className="ml-2 address">
                                {item.username_sales} 
                              </span>
                            </a>
                            <div className="card-bottom d-flex justify-content-between">
                              <span>{item.packagePrice} SQF</span>
                              <span>{item.packageNum} Items</span>
                            </div>

                            <a
                              className="btn btn-bordered-white btn-smaller mt-3"
                              onClick={(event) => {
                                this.buyItem(item);
                              }}
                            >
                              <i className="icon-handbag mr-2" />
                              {i18next.t('_buy_item')}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }) : null
            }

          </div>
        </div>
      </section>
    );
  }
}

export default ExploreTwo;
