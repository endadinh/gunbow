import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Explore from '../components/Explore/ExploreFive';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import Background from '../components/Background/Background';
import { unLoad } from '../utils/Loader';
class ExploreFour extends Component {
    render() {
        unLoad();
        return (
            <div className="main">
                <Header connectedWallet={this.props.connectedWallet} />
                <Background/>
                <Breadcrumb title="Explore" subpage="Explore" page="Explore Style 4" />
                <Explore />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                {/* <ModalPlayGame /> */}
                <Scrollup />
            </div>
        );
    }
}

export default ExploreFour;