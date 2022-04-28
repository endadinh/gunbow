import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import NewsSection from '../components/News/News';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import Background from '../components/Background/Background';
// import ModalPlayGame from '../components/Modal/ModalPlayGame';
import { unLoad } from '../utils/Loader';
class News extends Component {
    render() {
        unLoad();
        return (
            <div className="main">
                <Header connectedWallet={this.props.connectedWallet} />
                <Background/>
                {/* <Breadcrumb title="News" page="News" /> */}
                <NewsSection />
                <Footer />
                <ModalSearch />
                {/* <ModalPlayGame /> */}
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default News;