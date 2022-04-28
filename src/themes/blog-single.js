import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Blog from '../components/BlogSingle/BlogSingle';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import Background from '../components/Background/Background';
// import ModalPlayGame from '../components/Modal/ModalPlayGame';
import { unLoad } from '../utils/Loader';
class BlogSingle extends Component {
    render() {
        unLoad();
        return (
            <div className="main">
                <Header connectedWallet={this.props.connectedWallet} />
                <Background/>
                <Breadcrumb title="Blog Single" subpage="Community" page="Blog Single" />
                <Blog id={this.props.id}/>
                <Footer />
                <ModalSearch />
                <ModalMenu />
                {/* <ModalPlayGame /> */}
                <Scrollup />
            </div>
        );
    }
}

export default BlogSingle;