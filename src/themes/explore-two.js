import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Explore from '../components/Explore/ExploreThree';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import Background from '../components/Background/Background';
// import ModalPlayGame from '../components/Modal/ModalPlayGame';
// import { unLoad } from '../utils/Loader';
class ExploreTwo extends Component {
    render() {
        return (
            <div className="main">
                <Header connectedWallet={this.props.connectedWallet} />
                <Background/>
                <Breadcrumb title="Marketplace" subpage="Marketplace" page="All item" />
                <Explore page={this.props.page} />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                {/* <ModalPlayGame /> */}
                <Scrollup />
            </div>
        );
    }
}

export default ExploreTwo;