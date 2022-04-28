import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import Background from '../components/Background/Background';
import { unLoad } from '../utils/Loader';
import Airdrop from '../components/Airdrop/Airdrop';

class Event extends Component {
    render() {
        unLoad();
        return (
            <div className="main">
                <Header connectedWallet={this.props.connectedWallet} />
                <Background/>
                {/* <ContactSection /> */}
                <Airdrop />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default Event;