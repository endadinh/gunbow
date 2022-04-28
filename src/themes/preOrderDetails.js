import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
// import ItemDetail from '../components/ItemDetails/ItemDetails';
// import LiveAuctions from '../components/Auctions/AuctionsThree';
import NewItems from '../components/NewItems/NewItems';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import Background from '../components/Background/Background';
import PreOrderDetail from '../components/PreOrder/pre-order-details';
// import ModalPlayGame from '../components/Modal/ModalPlayGame';
import { unLoad } from '../utils/Loader';
class PreOrderDetails extends Component {
    render() {
        unLoad();
        return (
            <div className="main">
                <Header connectedWallet={this.props.connectedWallet} />
                <Background/>
                <Breadcrumb title="Item Details" subpage="Marketplace" page="Mystery Box" />
                <PreOrderDetail connectedWallet={this.props.connectedWallet} id={this.props.id} />
                <NewItems />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                {/* <ModalPlayGame /> */}
                <Scrollup />
            </div>
        );
    }
}

export default PreOrderDetails;