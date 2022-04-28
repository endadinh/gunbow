import React, { Component } from 'react';
import axios from 'axios';
import i18next from 'i18next';

class BuyToken extends Component {
    constructor() {
        super();
        this.state = {
            activity: [],
            scanUrl: "",

        }
    }

    async getActivity() {
        // const formData = new FormData();
        // formData.append("currentPage", 1);
        // formData.append("wallet", window.ethereum.selectedAddress);
        // await axios
        //     .post("https://api.metawar.biz/Users/GetHashTokenList", formData)
        //     .then((res) => {
        //         console.log('res', res.data.data)
        //         this.setState({
        //             activity: res.data.data
        //         })
        //     })
        this.setState({
            activity: []
        })
    }
    async getConfigNetwork() {
        const Config = JSON.parse(localStorage.getItem('Config'));
        console.log('Config ::', Config)
        const scanUrl = Config.scanUrl;
        this.setState({
            scanUrl: scanUrl,
        })
    }

    componentDidMount() {
        this.getConfigNetwork();
        this.getActivity();
    }



    render() {
        return (
            <div>
                {
                    this.state.activity[0] ?
                        this.state.activity.map((item, idx) => {
                            return (
                                <div className="row" key={idx}>
                                    <div className="col-12 activity">
                                        <a href={`${this.state.scanUrl}/tx/${item.hash}`}>
                                            <p>
                                                Send &lsaquo; <span>{item.hash}</span> &rsaquo;   to  &lsaquo;<span>{item.walletto}</span>&rsaquo;
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                        :
                        (
                            <div className="row">
                                <div className="col-sm-12 activity">
                                    <p>
                                        No activity yet!
                                    </p>
                                </div>
                            </div>
                        )
                }
            </div>
        );
    }
}

export default BuyToken;