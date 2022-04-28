import React, { Component } from 'react';
import axios from 'axios';
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
} from "react-share";
const location = window.location.href;
const data = {
    "widgetTitle_1": "Categories",
    "widgetTitle_2": "Popular Tags",
    "widgetTitle_3": "Share This",
    "widgetData_1": [
        {
            "id": 1,
            "title": "Arts",
            "content": "23"
        },
        {
            "id": 2,
            "title": "Photography",
            "content": "15"
        },
        {
            "id": 3,
            "title": "Sports",
            "content": "12"
        },
        {
            "id": 4,
            "title": "Collectibles",
            "content": "29"
        },
        {
            "id": 5,
            "title": "Domains",
            "content": "16"
        },
        {
            "id": 6,
            "title": "Technology",
            "content": "13"
        }
    ],
    "widgetData_2": [
        {
            "id": 1,
            "title": "Bitcoin"
        },
        {
            "id": 2,
            "title": "NFT"
        },
        {
            "id": 3,
            "title": "Bids"
        },
        {
            "id": 4,
            "title": "Crypto"
        },
        {
            "id": 5,
            "title": "Digital"
        },
        {
            "id": 6,
            "title": "Arts"
        },
        {
            "id": 7,
            "title": "Marketplace"
        },
        {
            "id": 8,
            "title": "Token"
        },
        {
            "id": 9,
            "title": "Wallet"
        }
    ],
    "widgetData_3": [
        // {
        //     "id": 1,
        //     "icon": "icon-social-instagram ml-0",
        //     "button": < />
        // },
        {
            "id": 2,
            "icon": "icon-social-facebook",
            "button": <FacebookShareButton
            url={location}
            quote={"フェイスブックはタイトルが付けれるようです"}
            hashtag={"#SQF"}
            description={"aiueo"} >
            <a href="#" className="nav-link"><i className="icon-social-facebook" /></a>
        </FacebookShareButton>


        },
        {
            "id": 3,
            "icon": "icon-social-twitter",
            "button": <TwitterShareButton
                url={location}
                quote={"フェイスブックはタイトルが付けれるようです"}
                hashtag={"#SQF"}
                description={"aiueo"} 
            >
                <a href="#" className="nav-link"><i className="icon-social-twitter" /></a>
            </TwitterShareButton>
        },
        {
            "id": 4,
            "button": <LinkedinShareButton
                url={location}
                // quote={"フェイスブックはタイトルが付けれるようです"}
                // hashtag={"#SQF"}
                // description={"aiueo"} 
                >
                <a href="#" className="nav-link"><i className="icon-social-linkedin" /></a>
            </LinkedinShareButton>

        }
    ]
}

class Sidebar extends Component {
    state = {
        data: {},
        widgetData_1: [],
        widgetData_2: [],
        widgetData_3: []
    }
    componentDidMount() {
        this.setState({
            data: data,
            widgetData_1: data.widgetData_1,
            widgetData_2: data.widgetData_2,
            widgetData_3: data.widgetData_3
        })
    }
    // console.log(this.state.data)
    render() {
        return (
            <aside className="col-12 col-lg-4 pl-lg-5 p-0 float-right sidebar">
                <div className="row">
                    <div className="col-12 align-self-center text-left">
                        {/* Widget [categories] */}
                        {/* <div className="item widget-categories">
                            <h4 className="title">{this.state.data.widgetTitle_1}</h4>
                            <ul className="list-group list-group-flush">
                                {this.state.widgetData_1.map((item, idx) => {
                                    return (
                                        <li key={`wdo_${idx}`} className="list-group-item d-flex justify-content-between align-items-center">
                                            <a href="#">{item.title}</a>
                                            <span className="badge circle">{item.content}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div> */}
                        {/* Widget [tags] */}

                        <div className="item widget-tags">
                            <h4 className="title">{this.state.data.widgetTitle_2}</h4>
                            {this.state.widgetData_2.map((item, idx) => {
                                return (
                                    <a key={`wdt_${idx}`} href="" className="badge tag">{item.title}</a>
                                );
                            })}
                        </div>
                        {/* Widget [share-this] */}
                        <div className="item widget-share-this">
                            <h4 className="title">{this.state.data.widgetTitle_3}</h4>
                            <ul className="navbar-nav social share-list">
                                {this.state.widgetData_3.map((item, idx) => {
                                    return (
                                        <li key={`wdth_${idx}`} className="nav-item">
                                            {item.button}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
}

export default Sidebar;