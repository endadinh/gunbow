import React, { Component } from "react";
import { Link } from "react-router-dom";
import i18next from "i18next";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state={ 
      lang: "ENG",
    }
  }

  changeLang(event, option) {
    event.preventDefault();
    localStorage.setItem('lang', option);
    window.location.reload()
  }

  async componentDidMount() { }
  render() {
    const lang = localStorage.getItem('lang') || 'en';
    return (
      <header id="header">
        {/* Navbar */}
        <nav data-aos="zoom-out" data-aos-delay={800} className="navbar navbar-expand">
          <div className="container-fluid header">
            <div className="navbar-brand logo">
              <Link to ="/"><img src="/img/logo.png" alt="sticky brand-logo" /></Link>
            </div>
            <input type="checkbox" id="chk" />
            <label htmlFor="chk" className="show-menu-btn">
              <i className="fas fa-bars" />
            </label>
            <ul className="menu items mx-auto">
              <div className="nav-item">
                <Link to ="/" className="nav-link">
                  <span>{i18next.t('header').home}</span>
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/marketplace" className="nav-link">
                {i18next.t('header').marketplace}

                </Link>
                {/* <Link to ="/marketplace" className="nav-link">
                </Link> */}
              </div>
              <div className="nav-item">
                <Link to ="/news" className="nav-link">
                  {i18next.t('header').news}
                </Link>
              </div>
              <div className="nav-item">
                <Link to ="/staking" className="nav-link">
                  {i18next.t('header').staking}
                </Link>
              </div>
              <div className="nav-item">
                <a  href="https://thien-quang-nguyen.gitbook.io/product-docs/" className="nav-link">
                  {i18next.t('header').white_paper}
                </a>
              </div>
              <div className="nav-item">
                <Link to ="/airdrop" className="nav-link">
                  Event
                </Link>
              </div>
              <div className="nav-item d-flex justify-content-center">
                {this.props.connectedWallet &&
                  this.props.connectedWallet.status ? (

                  <Link to ="#" className="btn btn-bordered-white nav-links active-wallet"
                    data-toggle="modal"
                    data-target="#myModalPlayGame"><span>{i18next.t('header').play_game}</span></Link>
                ) : (
                  <a
                    href="/wallet-connect"
                    className="btn btn-bordered-white nav-links active-wallet"
                  >
                    <span>{i18next.t('header').play_game}</span>
                  </a>
                )}
              </div>
              <div className="nav-item d-flex justify-content-center">
                {this.props.connectedWallet &&
                  !this.props.connectedWallet.address ? (
                  <a
                    href="/wallet-connect"
                    className="btn btn-bordered-white active-wallet nav-links"
                  >
                    <span><i className="icon-wallet mr-md-2" />{i18next.t('header').wallet_connect}</span>
                  </a>
                ) : (
                    <Link
                      to="/account"
                      className="btn btn-bordered-white active-wallet nav-links"
                    >
                      <span>
                        {this.props.connectedWallet.address}
                      </span>
                    </Link>
                )}
              </div>
              {/* <div className="nav-items">
                <div className="lang-menu d-flex justify-content-center">
                    <div className="selected-lang">
                        <img src={`/img/flag/${lang}32.png`}></img>
                        {lang}
                    </div>
                    <ul className="">
                      <li>
                        <a className="vi" onClick={event => this.changeLang(event,"vi")}>VI</a>
                      </li>
                      <li>
                        <a className="en" onClick={event => this.changeLang(event,'en')}>EN</a>
                      </li>
                      <li>
                        <a className="cn" onClick={event => this.changeLang(event,"cn")}>CN</a>
                      </li>
                    </ul>
                </div>
              </div> */}
              {/* <div className="nav-items mt-1">
                <select class="custom-select select-dark pull-right" onChange={this.changeLang} value={lang}>
                  <option value="en">ENG</option>
                  <option value="vi">VIE</option>
                  <option value="cn">CHN</option>
                </select>
              </div> */}
              <label htmlFor="chk" className="hide-menu-btn">
                <i className="fas fa-times" />
              </label>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
