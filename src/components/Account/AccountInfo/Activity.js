import React, { Component } from 'react';
import axios from 'axios';

class Activity extends Component {
    constructor() {
        super();
        this.state = {
            activity: [],
            scanUrl:"",
        }
    }


    async getActivity() {
        // setTimeout(async () => {
        //     const formData = new FormData();
        //     formData.append("currentPage", 1);
        //     formData.append("wallet", window.ethereum.selectedAddress);
        //     const dataHash = await axios
        //         .post("https://api.metawar.biz/Users/GetHashReceivedList", formData)
        //     if (!dataHash) {
        //         this.getActivity();
        //     }
        //     else {
        //         this.setState({
        //             activity: dataHash.data.data
        //         })
        //     }
        // }, 100);
        this.setState({
                        activity: []
                    })

    }

    async getConfigNetwork() { 
        const Config = JSON.parse(localStorage.getItem('Config'));
        console.log('Config ::',Config)
        const scanUrl = Config.scanUrl;
        this.setState({
            scanUrl: scanUrl,
        })
    }

    async componentDidMount() {
        await this.getConfigNetwork();
        await this.getActivity();
    }

    render() {
        return (
            <div> 
                {
                    this.state.activity[0] ?
                        this.state.activity.map((item, idx) => {
                            return (
                                <div className="row" key={idx}>
                                    <div className="col-sm-12 activity">
                                        <a href={`${this.state.scanUrl}/tx/${item.hash}`}>
                                        <p>
                                            Receive &lsaquo; <span>{item.hash}</span> &rsaquo;   From  &lsaquo;<span>{item.walletto}</span>&rsaquo;
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

export default Activity;