import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/Home/About';
import CollectibleNFT from '../components/Home/CollectibleNFT';
// import Auctions from '../components/Auctions/AuctionsThree';
// import TopSeller from '../components/TopSeller/TopSellerOne';
// import Collections from '../components/Collections/Collections';
// import Explore from '../components/Explore/ExploreOne';
import PreOrderNft from '../components/Home/preOrderNFT';
import GamePlay from '../components/Home/GamePlay';
import WhitePaper from '../components/Home/WhitePaper';
import TokenEconomics from '../components/Home/TokenEconomics';
import Member from '../components/Home/Member';
import Advisors from '../components/Home/Advisor';
import RoadMap from '../components/Home/RoadMap';
import Partners from '../components/Home/Partner'
// import Work from '../components/Work/Work';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';
import ModalVideo from '../components/Modal/ModalVideo';
// import ModalPlayGame from '../components/Modal/ModalPlayGame';
import BuyToken from '../components/BuyToken/BuyToken';
import Background from '../components/Background/Background';
// import { web3 } from '../App';
import { unLoad } from '../utils/Loader';

class ThemeOne extends Component {
    render() {
        unLoad();
        return (
            <div className="main">
                <Background />
                <Header connectedWallet={this.props.connectedWallet} />
                <div className="bg-img1">
                    <Hero />
                    <BuyToken connectedWallet={this.props.connectedWallet} refCode={this.props.referCode} />
                    <About />
                </div>

                {/* <PreOrderNft /> */}
                {/* <Auctions /> */}
                {/* <TopSeller /> */}
                {/* <Collections /> */}
                {/* <Explore /> */}
                {/* <Auctions /> */}
                <div className="bg-img2">
                    <CollectibleNFT />
                    {/* <WhitePaper /> */}
                    <GamePlay />
                </div>
                <TokenEconomics />
                <div className="bg-img3">
                    <RoadMap />
                    <Member />
                </div>
                {/* <Advisors /> */}
                <Partners />
                <Footer />
                <ModalSearch />
                <ModalMenu />
                {/* <ModalPlayGame /> */}
                <Scrollup />
                <ModalVideo />
            </div>
        );
    }
}

export default ThemeOne;