import React, { Component } from 'react';
import i18next from 'i18next';

const data = {
    "img": "/img/logo.png",
    "socialData": [
    //   {
    //     "id": 1,
    //     "link": "facebook",
    //     "icon": "fab fa-facebook-f",
    //     "url": "#"
    //   },
      {
        "id": 2,
        "link": "twitter",
        "icon": "fab fa-twitter",
        "url": "https://twitter.com/sqfgame"
      },
      {
        "id": 3,
        "link": "telegram-plane",
        "icon": "fab fa-telegram-plane",
        "url": "https://t.me/sqfgamechannel"
      },
      {
        "id": 4,
        "link": "youtube",
        "icon": "fab fa-youtube",
        "url": "https://www.youtube.com/c/SQFGAMEOFFICIAL"
      }
    ],
    "widgetData_1": [
      {
        "id": 1,
        "text": "All NFTs",
        "link": "/all-item"
      },
      {
        "id": 2,
        "text": "How It Works",
        "link": "#"

      },
      {
        "id": 3,
        "text": "Sell item",
        "link":"/account"
      },
      {
        "id": 5,
        "text": "Privacy & Terms",
        "link": "#"
      }
    ],
    "widgetData_2": [
      {
        "id": 1,
        "text": "Help Center",
        "link": "help-center"
      },
      {
        "id": 2,
        "text": "News",
        "link": "/news"
      },
    ]
  }

class Footer extends Component {
    state = {
        data: {},
        socialData: [],
        widgetData_1: [],
        widgetData_2: []
    }
    componentDidMount(){
        this.setState({
            data: data,
            socialData: data.socialData,
            widgetData_1: data.widgetData_1,
            widgetData_2: data.widgetData_2
        })
    }
    render() {
        return (
            <footer className="footer-area">
                {/* Footer Top */}
                <div className="footer-top">
                    <div className="container">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-10 col-sm-5 col-lg-5 res-margin">
                                {/* Footer Items */}
                                <div className="footer-items">
                                    {/* Logo */}
                                    <a className="navbar-brand" href="/">
                                        <img src={this.state.data.img} alt="" />
                                    </a>
                                   
                                </div>
                            </div>
                            {/* <div className="col-12 col-sm-6 col-lg-3 res-margin">
                      
                                <div className="footer-items">
                               
                                    <h4 className="footer-title">{this.state.data.widget_1}</h4>
                                    <ul>
                                        {this.state.widgetData_1.map((item, idx) => {
                                            return (
                                                <li key={`wdo_${idx}`}><a href={item.link}>{item.text}</a></li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div> */}


                            {/* <div className="col-12 col-sm-6 col-lg-3 res-margin">
  
                                <div className="footer-items">
                        
                                    <h4 className="footer-title">{this.state.data.widget_2}</h4>
                                    <ul>
                                        {this.state.widgetData_2.map((item, idx) => {
                                            return (
                                                <li key={`wdo_${idx}`}><a href={item.link}>{item.text}</a></li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div> */}


                            <div className="col-10 col-sm-5 col-lg-5">
                                {/* Footer Items */}
                                <div className="footer-items">
                                    {/* Footer Title */}
                                    <h4 className="footer-title text-center">{i18next.t('footer').subscribe_us}</h4>
                                    {/* Subscribe Form */}
                                    <div className="subscribe-form d-flex align-items-center text-center">
                                        <input type="email" className="form-control" placeholder="info@yourmail.com" />
                                        <button type="submit" className="btn"><i className="icon-paper-plane" /></button>
                                    </div>
                                    <p className="text-center">{i18next.t('footer').content}</p>
                                    {/* Social Icons */}
                                    <div className="social-icons d-flex justify-center ">
                                        {this.state.socialData.map((item, idx) => {
                                            return (
                                                <a key={`sd_${idx}`} className={item.link} href={item.url}>
                                                    <i className={item.icon} />
                                                    <i className={item.icon} />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* Copyright Area */}
                                <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                                    {/* Copyright Left */}
                                    <div className="copyright-left text-center m-auto">{i18next.t('footer').copy_right}</div>
                                    {/* Copyright Right */}
                                    {/* <div className="copyright-right">Made with <i className="fas fa-heart" /> By <a href="#">Sancti Quest on Frontline</a></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;