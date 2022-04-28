import React, { Component } from "react";
import i18next from "i18next";

class Header extends Component {
  constructor(props) {
    super(props);

    // this.changeChain = this.changeChain.bind(this);
  }

  changeLang(option) {
    localStorage.setItem('lang', option.target.value);
    window.location.reload()
  }

  async componentDidMount() { }
  render() {
    const lang = localStorage.getItem('lang') || 'en';
    return (
      <header id="header">
        {/* Navbar */}
        <nav
          data-aos="zoom-out"
          data-aos-delay={800}
          className="navbar navbar-expand"
        >
          <div className="container header">
            {/* Navbar Brand*/}
            <a href="/" className="navbar-brand">
              <img
                className="navbar-brand-sticky"
                src="/img/logo.png"
                alt="sticky brand-logo"
              />
            </a>

            {/* Navbar */}
            <ul className="navbar-nav items mx-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  {i18next.t('header').home}
                </a>
              </li>
              <li className="nav-item">
                <a href="/marketplace" className="nav-link">
                  {i18next.t('header').marketplace}
                </a>
              </li>
              <li className="nav-item">
                <a href="/news" className="nav-link">
                  {i18next.t('header').news}
                </a>
              </li>
              <li className="nav-item">
                <a href="/staking" className="nav-link">
                  {i18next.t('header').staking}
                </a>
              </li>
            </ul>
            {/* Navbar Icons */}
            {/* Navbar Toggler */}
            <ul className="navbar-nav toggle">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  data-toggle="modal"
                  data-target="#menu"
                >
                  <i className="fas fa-bars toggle-icon m-0" />
                </a>
              </li>
            </ul>
            {/* Navbar Action Button */}
            <ul className="navbar-nav action">
              <li className="nav-item mr-3">
                {this.props.connectedWallet &&
                  this.props.connectedWallet.status ? (
                  <button
                    className="btn btn-bordered-white playGame-btn"
                    type="button"
                    data-toggle="modal"
                    data-target="#myModalPlayGame"
                  >
                    {i18next.t('header').play_game}
                  </button>
                ) : (
                  <a
                    href="/wallet-connect"
                    className="btn ml-lg-auto btn-bordered-white"
                  >
                    {i18next.t('header').play_game}

                  </a>
                )}
              </li>
            </ul>
            <ul className="navbar-nav items action">
              {/* {this.outputButtonContent(this.props.connectedWallet)} */}
              {this.props.connectedWallet &&
                !this.props.connectedWallet.address ? (
                <li className="nav-item">
                  <a
                    href="/wallet-connect"
                    className="btn ml-lg-auto btn-bordered-white"
                  >
                    {" "}
                    <i className="icon-wallet mr-md-2" />
                    {i18next.t('header').wallet_connect}
                  </a>
                </li>
              ) : (
                <li className="nav-item">
                  <a
                    href="/account"
                    className="btn ml-lg-auto btn-bordered-white active-wallet"
                  >
                    <span>{this.props.connectedWallet.address}</span>
                  </a>
                  <a className="nav-link balance-header" href="#">
                  {i18next.t('header').balance} : {this.props.connectedWallet.balanceBNB} BNB
                  </a>
                  {/* <button onClick={this.changeChain}>Change chain</button> */}
                </li>
              )}
            </ul>
            <ul>
              <select class="custom-select pull-right" onChange={this.changeLang} value={lang}>
                <option value="en">ENG</option>
                <option value="vi">VIE</option>
                <option value="cn">CHN</option>
              </select>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
