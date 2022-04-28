import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
// import BlogSection from '../components/Blog/Blog';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import BuyTokenSection from '../components/BuyToken/BuyToken';
import Background from '../components/Background/Background';
// import ModalPlayGame from '../components/Modal/ModalPlayGame';
import { unLoad } from '../utils/Loader';
class BuyToken extends Component {
    render() {
        unLoad();
        return (
            
            <div className="main">
                <Header connectedWallet={this.props.connectedWallet} />
                <Background/>
                <Breadcrumb title="Buy token" page="Buy token" />
                <BuyTokenSection connectedWallet={this.props.connectedWallet} refCode={this.props.refCode} />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                {/* <ModalPlayGame /> */}
                <Scrollup />
            </div>
        );
    }
}

export default BuyToken;