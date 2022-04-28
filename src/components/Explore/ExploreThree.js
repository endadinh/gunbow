import React, { Component } from "react";
import axios from "axios";
import i18next from "i18next";
import { Load, unLoad } from "../../utils/Loader";
import ReactPaginate from 'react-paginate';
import { isMetamask } from "../../utils/metamask";
import $ from 'jquery';
import { toast } from "react-toastify";
import { buyItem, handleBuyItem } from "../../utils/buyItem";

const initData = {
  pre_heading: "All item",
  heading: "Exclusive Digital Assets",
  content:
    "All selling items on Marketplace",
  filter_1: "All",
  filter_2: "Hero",
  filter_3: "Item",
};

class ExploreThree extends Component {
  constructor() {
    super();
    this.state = {
      initData: {},
      data: [],
      currentPage: 1,
      pageCount: 1
    };
    // this.renderTypeItem = this.renderTypeItem.bind(this);
    // this.goDetail = this.goDetail.bind(this)
  }

  renderTypeItem(item) { 
    let group;
    if(item.itemType == 5) { 
       group = `["Item"]`
    }
    if(item.itemType == 2) { 
       group = `["Hero"]`
    }
    else { 
      group=`["Item"]`
    }
    return group;
  }
  async buyItem(item) {
    Load();
    console.log(item);
    const metamask = await isMetamask();
    if (metamask) {
      handleBuyItem(item);
    }
    else {
      alert(`${i18next.t('_login_wallet_require')}`);
      unLoad();
    }
  }
  async getItemUser(currentPage = 1) {
    const formData = new FormData();
    formData.append("currentPage", currentPage);
    formData.append("wallet", "");
    await axios
      .post("https://api.metawar.biz/MarketPlace/GetSellingList", formData)
      .then((res) => {
        console.log(res);
        this.setState({
          initData: initData,
          data: res.data.data,
          pageCount: res.data.totalPage,
          currentPage: currentPage-1
        })
        unLoad();
      })
  }

  async handlePageClick(event) {
    // console.log('event selected',event.selected)
    const current = event.selected + 1;
    // console.log(event);
    window.location.href = `/all-item/${current}`;
    //  this.fetchProfileData(current);
    //  this.forceUpdate();
    // console.log(this.state.currentPage)
  }

  async componentDidMount() {
    this.getItemUser(this.props.page)
  }
  render() {
    console.log('current', this.state.currentPage);
    return (
      <section className="explore-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 col-md-8 col-lg-7">
              {/* Intro */}
              <div className="intro text-center mb-4">
                <span>{this.state.initData.pre_heading}</span>
                <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                <p>{this.state.initData.content}</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-12">
              {/* Explore Menu */}
              <div
                className="explore-menu btn-group btn-group-toggle flex-wrap justify-content-center text-center mb-4"
                data-toggle="buttons"
              >
                <label className="btn active d-table text-uppercase p-2">
                  <input
                    type="radio"
                    defaultValue="all"
                    defaultChecked
                    className="explore-btn"
                  />
                  <span>{this.state.initData.filter_1}</span>
                </label>
                <label className="btn d-table text-uppercase p-2">
                  <input
                    type="radio"
                    defaultValue="Hero"
                    className="explore-btn"
                  />
                  <span>{this.state.initData.filter_2}</span>
                </label>
                <label className="btn d-table text-uppercase p-2">
                  <input
                    type="radio"
                    defaultValue="Item"
                    className="explore-btn"
                  />
                  <span>{this.state.initData.filter_3}</span>
                </label>
              </div>
            </div>
          </div>
          <div className="row items explore-items">
            {
              this.state.data.map((item, idx) => {           
                return (
                  <div
                    key={`edt_${idx}`}
                    className="col-12 col-sm-6 col-lg-3 item explore-item"
                    data-groups={this.renderTypeItem(item)}
                  // '["Hero","pet"]'
                  >
                    <div className="card">
                      <div className="image-over">
                        <a href={`/item-details/${item.packageId}`}>
                          <img
                            className="card-img-top"
                            src={`/img/battle/${item.productsPic}`}
                            alt=""
                          />
                          <img
                            className="img1 "
                            src="/img/hover.svg"
                            alt=""
                          />
                        </a>
                      </div>
                      {/* Card Caption */}
                      <div className="card-caption col-12 p-0">
                        {/* Card Body */}
                        <div className="card-body">
                          <a href={`/item-details/${item.packageId}`}>
                            <h5 className="mb-0">{item.productsName}</h5>
                            
                          </a>
                          <div className="seller d-flex align-items-center my-3">
                            <img
                              className="avatar-sm rounded-circle"
                              src="/img/avatar/avatar_1.jpeg"
                              alt=""
                            />
                            <span className="ml-2 address">
                              {item.username_sales}
                            </span>
                          </div>
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
              })
              // : null
            }
          </div>
          <ReactPaginate
            className="paginate col-12 pt-5"
            breakLabel="..."
            nextLabel=" >"
            forcePage={this.state.currentPage}
            onPageChange={(event) => { this.handlePageClick(event) }}
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

export default ExploreThree;
