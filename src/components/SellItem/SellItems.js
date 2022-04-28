import React, { Component } from "react";
// import ItemProfile from "../ItemProfile/ItemProfile";
import axios from "axios";
import i18next from "i18next";
import { unLoad } from '../../utils/Loader';
import { toast } from "react-toastify";

const data = [
    {
        id: "111111",
        name: "Super Bomb#91",
        img: "/img/shopitems/1.png",
        price: 3000,
        usdPrice: 300,
        level: 1,
        quality: "Epic",
        quantity: 20,
        seller: "0xaf8a7611aEEd90Aa6ab4D8257b7DE42575698F29",
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!",
        date: "March, 16th , 2022",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive",
    },
    {
        id: "111112",
        name: "Super Bomb#91",
        img: "/img/shopitems/2.png",
        price: 3000,
        usdPrice: 300,
        level: 1,
        quality: "Normal",
        quantity: 20,
        seller: "0xaf8a7611aEEd90Aa6ab4D8257b7DE42575698F29",
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!",
        date: "March, 16th , 2022",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive",
    },
    {
        id: "111113",
        name: "Super Bomb#91",
        img: "/img/shopitems/3.png",
        price: 3000,
        usdPrice: 300,
        level: 1,
        quality: "Rare",
        quantity: 20,
        seller: "0xaf8a7611aEEd90Aa6ab4D8257b7DE42575698F29",
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!",
        date: "March, 16th , 2022",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive",
    },
    {
        id: "111114",
        name: "Super Bomb#91",
        img: "/img/shopitems/4.png",
        price: 3000,
        usdPrice: 300,
        level: 1,
        quality: "Epic",
        quantity: 20,
        seller: "0xaf8a7611aEEd90Aa6ab4D8257b7DE42575698F29",
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!",
        date: "March, 16th , 2022",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive",
    },
    {
        id: "111115",
        name: "Super Bomb#91",
        img: "/img/shopitems/5.png",
        price: 3000,
        usdPrice: 300,
        level: 1,
        quality: "Normal",
        quantity: 20,
        seller: "0xaf8a7611aEEd90Aa6ab4D8257b7DE42575698F29",
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!",
        date: "March, 16th , 2022",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive",
    },
    {
        id: "111116",
        name: "Super Bomb#91",
        img: "/img/shopitems/6.png",
        price: 3000,
        usdPrice: 300,
        level: 1,
        quality: "Rare",
        quantity: 20,
        seller: "0xaf8a7611aEEd90Aa6ab4D8257b7DE42575698F29",
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!",
        date: "March, 16th , 2022",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive",
    },
    {
        id: "111117",
        name: "Super Bomb#91",
        img: "/img/shopitems/7.png",
        price: 3000,
        usdPrice: 300,
        level: 1,
        quality: "Epic",
        quantity: 20,
        seller: "0xaf8a7611aEEd90Aa6ab4D8257b7DE42575698F29",
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!",
        date: "March, 16th , 2022",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive",
    },
    {
        id: "111118",
        name: "Super Bomb#91",
        img: "/img/shopitems/8.png",
        price: 3000,
        usdPrice: 300,
        level: 1,
        quality: "Normal",
        quantity: 20,
        seller: "0xaf8a7611aEEd90Aa6ab4D8257b7DE42575698F29",
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!",
        date: "March, 16th , 2022",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive",
    },
    {
        id: "111119",
        name: "Super Bomb#91",
        img: "/img/shopitems/9.png",
        price: 3000,
        usdPrice: 300,
        level: 1,
        quality: "Rare",
        quantity: 20,
        seller: "0xaf8a7611aEEd90Aa6ab4D8257b7DE42575698F29",
        content: " Kill all !!!!!!!!!!!!!!!!!!!!!!",
        date: "March, 16th , 2022",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive",
    },
]
class SellItemsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initData: {},
            data: [],
            AmountValue: 0,
            socialData: {},
            currency: "SQF",
            price: 0,
            quantity: 0,
            dataOne: [],
            fields: {},
            errors: {},
        };
        this.handleChange = this.handleChange.bind(this);
        // this.handleChangePrice = this.handleChangePrice.bind(this);
        // this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
    }


    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        let splitNum = fields["price"].split('.');
        let decimals = splitNum[1];
        if (!fields["price"]) {
            formIsValid = false;
            errors["price"] = i18next.t('errors').price_empty;
        }
        if ((fields["price"] > 999999999999999999)) {
            formIsValid = false;
            errors["price"] = i18next.t('errors').price_less;
        }
        if (fields["price"] <= 0) {
            formIsValid = false;
            errors["price"] = i18next.t('errors').price_positive;
        }
        if (decimals && decimals.length > 13) { 
            formIsValid = false;
            errors["price"] = i18next.t('errors').decimals;
        }
        // if (fields["quantity"] <= 0) {
        //     formIsValid = false;
        //     errors["quantity"] = "The quantity must be a positive value "
        // }
        // if (fields["quantity"] > this.state.dataOne.bagNum) {
        //     formIsValid = false;
        //     errors["quantity"] = "The quantity must be a less than available. "
        // }
        // else {}
        this.setState({ errors: errors });
        return formIsValid;
    }
    handleChangePrice(event) {
        const total = event.target.value * this.state.quantity;
        this.setState({ AmountValue: (total) - (total * 0.035) });
    }
    // handleChangeQuantity(event) {
    //     this.setState({ quantity: (event.target.value) });

    // }
    handleChange(e) {
        console.log(e.target.name);
        if (e.target.name === "price") {
            this.handleChangePrice(e);
        }
        if (e.target.name === "quantity") {
            this.handleChangeQuantity(e);
        }
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({ fields }, () => {
            this.handleValidation();
        });
        // this.handleValidation();
    }
    async getItemOwner(id) {
        // const formData = new FormData();
        // formData.append("bagId", id);
        // axios
        //     .post("https://api.metawar.biz/ItemDetails/ByInventory", formData)
        //     .then(async (res) => {
        //         try {
        //             this.setState({
        //                 dataOne: res.data,
        //                 quantity: res.data.bagNum
        //             })
        //             unLoad();
        //             return true;
        //         }
        //         catch (err) {
        //             return false;
        //         }
        //     })
        data.map((item) => {
            if (id === item.id) {
                this.setState({
                    dataOne: item,
                    quantity: 1,
                })
                unLoad();
            }
        })
    }
    async submitForm(e, id) {
        console.log('aaaa');
        e.preventDefault();
        if (this.handleValidation()) {
            if (window.confirm(`${i18next.t('_confirm_sell')}`) === true) {
                toast(`${i18next.t('_pending')}`);
                const formData = new FormData();
                formData.append("itemId", id);
                formData.append("price", e.target.price.value);
                formData.append("quantity", e.target.quantity.value);
                formData.append("wallet", window.ethereum.selectedAddress);
                await axios.post("https://api.metawar.biz/SellItems/CreatePackages", formData)
                    .then((res) => {
                        if (res.data.code === 0) {
                            alert(`${i18next.t('_success')}`);
                            window.location.href = `/account`;
                        }
                        return;
                    })
            } else {
                window.alert(`${i18next.t(`_rejected`)}`);
            }
        }
    }
    componentDidMount() {
        setTimeout(async () => {
            await this.getItemOwner(this.props.id).then(() => {
                unLoad();
            });
        }, 100);
    }
    render() {
        const { errors } = this.state;
        return (
            <section className="sell-items-area">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12">
                            <div className="intro text-center mt-5 mt-lg-0 mb-4 mb-lg-5">
                                <div className="intro-content">
                                    <span>{i18next.t('sell_items').heading}</span>
                                    <h3 className="mt-3 mb-0">{i18next.t('sell_items').content}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center mt-5">
                            <div className="col-lg-5 col-md-12 col-sm-12 item-info">
                                <div className="card no-hover">
                                    <div className="card-item">
                                        <div className="item-thumb text-center">
                                            <img src={`${this.state.dataOne.img}`} alt="" />
                                        </div>
                                        <div className="card-body col-12 text-center">
                                            <div className="col-12 d-flex justify-content-center">
                                                <img src="/img/icons/forge.png" />
                                                <span>{i18next.t('_level')} : {this.state.dataOne.level} </span>
                                            </div>
                                            <div className="col-12">
                                                <div className="quality col-12  d-flex justify-content-center">
                                                    <span className={this.state.dataOne.quality === "Epic" ? "epic" : this.state.dataOne.quality === "Normal" ? "normal" : "rare"}>{this.state.dataOne.quality}</span>
                                                </div>
                                            </div>
                                            <div className="col-12 line-attr">
                                                <div className="attributes col-lg-6 ">
                                                    <img src="/img/icons/lighting.png" />
                                                    <span>{i18next.t('_energy')} : {this.state.dataOne.energy} </span>
                                                </div>
                                                <div className="attributes col-lg-6" >
                                                    <img src="/img/icons/swords.png" />
                                                    <span>{i18next.t('_attack')} : {this.state.dataOne.attack} </span>
                                                </div>
                                            </div>
                                            <div className="col-12 line-attr">
                                                <div className="attributes col-lg-6 " >
                                                    <img src="/img/icons/shield.png" />
                                                    <span>{i18next.t('_defense')} : {this.state.dataOne.defense}</span>
                                                </div>
                                                <div className="attributes col-lg-6 " >
                                                    <img src="/img/icons/speedometer.png" />
                                                    <span>{i18next.t('_speed')} : {this.state.dataOne.speed}</span>
                                                </div>
                                            </div>
                                            <div className="col-12 line-attr">
                                                <div className="attributes col-lg-6 " >
                                                    <img src="/img/icons/four-leaf.png" />
                                                    <span>{i18next.t('_lucky')} : {this.state.dataOne.lucky}</span>
                                                </div>
                                            </div>
                                            <div className="attributes col-12">
                                                <span>{i18next.t('_passive')} : {this.state.dataOne.passive}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 col-sm-12">
                                {/* Intro */}
                                {/* Item Form */}
                                <form className="item-form no-hover" onSubmit={(e) => this.submitForm(e, this.state.dataOne.itemId)}>
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-center mt-3">
                                            <div className="form-group ">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">{i18next.t('_price')} :</span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="price"
                                                        step="any"
                                                        pattern="[0-9]+([\.,][0-9]+)?"
                                                        onInput = {(e) =>{
                                                            e.target.value = parseFloat(e.target.value) < 9999999999999 ? e.target.value : e.target.value.slice(0,13);
                                                          }}
                                                        placeholder="Price"
                                                        required="required"
                                                        autoComplete="off"
                                                        onChange={this.handleChange}
                                                    />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text"> <span className="sqf">SQF</span> </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {errors["price"] ? <div className="validation" style={{ display: "block" }}>{errors["price"]}</div> : null}

                                        </div>
                                        {/* <div className="col-12">
                                        <div className="form-group">
                                            <label className="control-label col-sm-3"  >
                                                <span>Quantity:</span>
                                            </label>
                                            <input
                                                className="form-input col-sm-6"
                                                defaultValue={3}
                                                // placeholder="Quantity"
                                                name="quantity"
                                                type="number"
                                                required="required"
                                                autoComplete="off"
                                                step="1"
                                                onChange={this.handleChange}
                                            />

                                        </div>
                                        {errors["quantity"] ? <div className="validation" style={{ display: "block" }}>{errors["quantity"]}</div> : null}
                                    </div> */}
                                        <div className="col-12 d-flex justify-content-center">
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">{i18next.t('_fee')} :</span>
                                                    </div>
                                                    <input type="text"
                                                        className="form-input form-control"
                                                        // placeholder="Amount SQF"
                                                        name="fee"
                                                        value={3.5}
                                                        disabled
                                                    />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text"> % </span>
                                                    </div>
                                                </div>
                                                {/* <label className="control-label col-sm-3">
                                                    <span >FEE :</span>
                                                </label>
                                                <input
                                                    className="form-input col-sm-6"
                                                    placeholder="Amount SQF"
                                                    name="fee"
                                                    value={3.5}
                                                    disabled
                                                />
                                                <label className="control-label col-sm-3">
                                                    <span > % </span>
                                                </label> */}
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex ustify-content-center">
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">{i18next.t('_receive')} :</span>
                                                    </div>
                                                    <input type="text"
                                                        className="form-input form-control"
                                                        placeholder="Amount SQF"
                                                        name="total"
                                                        // defaultValue="0"
                                                        value={this.state.AmountValue}
                                                        disabled
                                                    />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text"> {this.state.currency} </span>
                                                    </div>
                                                </div>
                                                {/* <label className="control-label col-sm-3">
                                                    <span >Total:</span>
                                                </label>
                                                <input
                                                    className="form-input col-sm-6"
                                                    placeholder="Amount SQF"
                                                    name="total"
                                                    // defaultValue="0"
                                                    value={this.state.AmountValue}
                                                    disabled
                                                />
                                                <label className="control-label col-sm-3">
                                                    <span >{this.state.currency}</span>
                                                </label> */}

                                            </div>
                                        </div>
                                        {/* <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="price" placeholder="Item Price" />
                                        </div>
                                    </div> */}

                                        <div className="col-12 d-flex justify-content-center">
                                            <button className="btn btn-bordered-buy mt-3 mt-sm-4" type="submit">
                                                {i18next.t('_sell_item')}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SellItemsSection;
