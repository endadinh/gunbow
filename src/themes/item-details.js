import React, { Component } from "react";

// import axios from "axios";
import Header from "../components/Header/Header";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ItemDetail from "../components/ItemDetails/ItemDetails";
// import LiveAuctions from '../components/Auctions/AuctionsThree';
import NewItems from "../components/NewItems/NewItems";
import Footer from "../components/Footer/Footer";
import ModalSearch from "../components/Modal/ModalSearch";
import ModalMenu from "../components/Modal/ModalMenu";
import Scrollup from "../components/Scrollup/Scrollup";
import Background from "../components/Background/Background";
// import ModalPlayGame from "../components/Modal/ModalPlayGame";
class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: [],
    };
  }
  render() {
  // unLoad();
    //   console.log(this.state.itemData);
    return (
      <div className="main">
        <Header connectedWallet={this.props.connectedWallet} />
        <Background />
        {/* <Breadcrumb
          title="Item Details"
          subpage="Marketplace"
          page="Item Details"
        /> */}
        <ItemDetail
          connectedWallet={this.props.connectedWallet}
          type={this.props.type}
          id={this.props.id}
          /> 
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

export default ItemDetails;
