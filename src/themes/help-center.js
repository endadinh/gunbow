import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Help from '../components/HelpCenter/HelpCenter';
import Faq from '../components/Faq/Faq';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import Background from '../components/Background/Background';
import { unLoad } from '../utils/Loader';
class HelpCenter extends Component {
    render() {
        unLoad();
        return (
            <div className="main">
                <Header connectedWallet={this.props.connectedWallet} />
                <Background/>
                <Breadcrumb title="Help Center" subpage="Community" page="Help Center" />
                <Help />
                <Faq />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                {/* <ModalPlayGame /> */}
                <Scrollup />
            </div>
        );
    }
}

export default HelpCenter;