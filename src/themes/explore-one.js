import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
// import Auctions from '../components/Auctions/AuctionsThree';
import NewItems from '../components/NewItems/NewItems';
// import TopSeller from '../components/TopSeller/TopSellerOne';
import Explore from '../components/Explore/ExploreTwo';
import Footer from '../components/Footer/Footer';
// import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import Background from '../components/Background/Background';
import Marketplace from '../components/Marketplace/Marketplace';
// import ModalPlayGame from '../components/Modal/ModalPlayGame';
import { unLoad } from '../utils/Loader';

class ExploreOne extends Component {
    render() {
        unLoad()
        return (
            <div className="main">
                <Header connectedWallet={this.props.connectedWallet} />
                {/* <Breadcrumb title="Marketplace" page="Marketplace" /> */}
                {/* <Auctions /> */}
                <Background />
                <Marketplace />
                {/* <NewItems /> */}
                {/* <Explore /> */}
                {/* <TopSeller /> */}
                <Footer />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default ExploreOne;