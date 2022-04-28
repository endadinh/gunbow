import React, { Component } from "react";
// import ItemProfile from "../ItemProfile/ItemProfile";
import axios from "axios";
import i18next from "i18next";
import { unLoad } from '../../utils/Loader';
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

class TransferToGame extends Component {
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
            serverList: [],
            fields: {},
            errors: {},

        };
        // this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
        this.handleChangeServer = this.handleChangeServer.bind(this);
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if (fields["quantity"] <= 0) {
            formIsValid = false;
            errors["quantity"] = i18next.t('errors').quantity_positive;
        }
        if (fields["quantity"] > 3) {
            formIsValid = false;
            errors["quantity"] = i18next.t('errors').quantity_less;
        }
        // else {}
        this.setState({ errors: errors });
        return formIsValid;
    }

    handleChangeQuantity(event) {
        // console.log(event.target.value);
        event.preventDefault();
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({ fields });
        this.handleValidation();

    }

    handleChangeServer(event) {
        console.log(event.target.value);
    }


    async getServerList() {
        // const formData = new FormData();
        await axios.post("https://api.metawar.biz/SellItems/TransferServer")
            .then((res) => {
                this.setState({
                    serverList: res.data
                })
            })
    }


    async getItemOwner(id) {

        // const formData = new FormData();
        // formData.append("bagId", id);
        // axios
        //     .post("https://api.metawar.biz/ItemDetails/ByInventory", formData)
        //     .then(async (res) => {
        //         console.log(res);
        //         try {
        //             this.setState({
        //                 dataOne: res.data,
        //                 quantity: res.data.bagNum
        //             }, () => {
        //                 unLoad();
        //             })
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
        e.preventDefault();
        if (this.handleValidation()) {
            if (window.confirm(`${i18next.t('_confirm_transfer')}`) === true) {
                const formData = new FormData();
                formData.append("itemId", id);
                formData.append("serverId", e.target.server.value);
                formData.append("quantity", e.target.quantity.value);
                formData.append("wallet", window.ethereum.selectedAddress);
                await axios.post("https://api.metawar.biz/SellItems/TransferItems", formData)
                    .then((res) => {
                        // console.log(res);
                        if (res.data.code === 0) {
                            alert(`${i18next.t('_success')}`);
                            window.location.href = `/account`;
                        }
                        return;
                    })
            } else {
                window.alert(`${i18next.t('_rejected')}`);
            }
        }


    }
    componentDidMount() {
        setTimeout(async () => {
            await this.getServerList();
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
                    <div className="row justify-content-between">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro mt-5 mt-lg-0 mb-4 mb-lg-5">
                                <div className="intro text-center">
                                    <span>{i18next.t('transfer_items').heading}</span>
                                    <h3 className="mt-3 mb-0">{i18next.t('transfer_items').content}</h3>
                                </div>
                            </div>
                            {/* Item Form */}
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
                            <div className="col-12 col-md-12 col-lg-7 col-sm-12">
                                <form className="item-form" id="transferForm" onSubmit={(e) => this.submitForm(e, this.state.dataOne.itemId)}>
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content center mt-3">
                                            <div className="form-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" for="inputGroupSelect01">{i18next.t('_server')} :</span>
                                                    </div>
                                                    <select class="form-control select-custom" id="inputGroupSelect01" form="transferForm" onChange={(event) => { this.handleChangeServer(event) }}>
                                                        {this.state.serverList.map((item, idx) => {
                                                            return (
                                                                <option key={idx} value={item.value}>{item.text}</option>
                                                            );
                                                        })}

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex justify-content-center">
                                            <div className="form-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">{i18next.t('_quantity')} :</span>
                                                    </div>
                                                    <input
                                                        className="form-control"
                                                        placeholder="Quantity"
                                                        name="quantity"
                                                        type="number"
                                                        defaultValue={this.state.dataOne.bagNum}
                                                        step={1}
                                                        onInput = {(e) =>{
                                                            e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,13);
                                                          }}
                                                        required="required"
                                                        autoComplete="off"
                                                        onChange={this.handleChangeQuantity}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {errors["quantity"] ? <div className="validation" style={{ display: "block" }}>{errors["quantity"]}</div> : null}
                                        </div>
                                        <div className="col-12 d-flex justify-content-center">
                                            <button className="btn btn-bordered-buy mt-3 mt-sm-4" type="submit">
                                                {i18next.t('_transfer_item')}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <div className="col-12 col-md-4">
                            <div className="card no-hover text-center">
                                <div className="image-over">
                                    <img className="card-img-top" src={`${this.state.dataOne.img}`} alt="" />
                                </div>
                                <div className="row card-body col-12 text-center">
                                    <div className="col-12 mt-3">
                                        <img src="/img/icons/forge.png" />
                                        <span>Level : {this.state.dataOne.level} </span>
                                    </div>
                                    <div className="col-12 d-flex justify-content-center">
                                        <div className="quality col-12">
                                            <span className={this.state.dataOne.quality === "Epic" ? "epic" : this.state.dataOne.quality === "Normal" ? "normal" : "rare"}>{this.state.dataOne.quality}</span>
                                        </div>
                                    </div>
                                    <div className="col-6 mt-3">
                                        <img src="/img/icons/lighting.png" />
                                        <span>Energy : {this.state.dataOne.energy} </span>
                                    </div>
                                    <div className="col-6 mt-3">
                                        <img src="/img/icons/swords.png" />
                                        <span> Attack: {this.state.dataOne.attack} </span>
                                    </div>
                                    <div className="attributes col-6 mt-3">
                                        <img src="/img/icons/shield.png" />
                                        <span>Defense: {this.state.dataOne.defense}</span>
                                    </div>
                                    <div className="attributes col-6 mt-3">
                                        <img src="/img/icons/speedometer.png" />
                                        <span>Speed: {this.state.dataOne.speed}</span>
                                    </div>
                                    <div className="attributes col-6 mt-3">
                                        <img src="/img/icons/four-leaf.png" />
                                        <span>Lucky: {this.state.dataOne.lucky}</span>
                                    </div>
                                    <div className="attributes col-12 mt-3">
                                        <span>* Passive: {this.state.dataOne.passive}</span>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default TransferToGame;
