import React, { Component } from 'react';
import axios from 'axios';
import { data } from '../Home/TokenEconomics';
import { unLoad } from '../../utils/Loader';

const Data = {
    "img": "/img/battle/N003.png",
    "author": "Yuan Cheng",
    "content": "The exchange will use tokens as the currency, and players can set the price of their NFT products as they like.",
    "authorId": "ZqpthncaYTsd0579hasfu00st",
    "btnText": "Follow",
    "socialData": [
      {
        "id": 1,
        "link": "facebook",
        "icon": "fab fa-facebook-f"
      },
      {
        "id": 2,
        "link": "twitter",
        "icon": "fab fa-twitter"
      },
      {
        "id": 3,
        "link": "google-plus",
        "icon": "fab fa-google-plus-g"
      },
      {
        "id": 4,
        "link": "vine",
        "icon": "fab fa-vine"
      }
    ]
  }

class ItemProfile extends Component {

    constructor(props){ 
        super(props);
        this.state = {
            initData: {},
            data: [],
            AmountValue: 0,
            socialData:{},
            dataOne:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event) {
        this.setState({AmountValue: event.target.value});
      }
    
    handleSubmit(event) {
        // event.preventDefault();
      }
      async getItem(type,id) { 
        console.log('id ne',id);
        console.log('type ne',type);
        if(type ==1 ) { 
            const formData= new FormData();
            formData.append("id",id);
            await axios.post("https://api.metawar.biz/ItemDetails/ByAdmin",formData)
            .then((res) => { 
            this.setState({ data : res.data})

                // console.log(res);

            })
        }
        else { 
          const formData= new FormData();
            formData.append("id",id);
            await axios.post("https://api.metawar.biz/ItemDetails/ByUser",formData)
            .then((res) => { 
            this.setState({ data : res.data})
            })
        }
    }
    async getItemOwner(id) {
      const formData = new FormData();
      formData.append("currentPage", 1);
      formData.append("wallet", window.ethereum.selectedAddress);
      axios
        .post("https://api.metawar.biz/Users/GetInventoryList", formData)
        .then(async (res) => {
          console.log('res', res)
          if (res.data) {
            await res.data.data.map(item => {
              console.log(item);
              if (item.productsId == id) {
                console.log('item match ne', item)
                this.setState({
                  dataOne: item,
                })
              }
            })
          }
        })
    }

    async componentDidMount() {
      setTimeout( async () => {
        await this.getItemOwner(this.props.id).then( () => { 
          unLoad();
    });
      }, 100);
      await this.getItem(this.props.type, this.props.id)

    }
    render() {
      console.log('abcd',this.state.dataOne)
        return (
            <div className="card no-hover text-center">
                <div className="image-over">
                    <img className="card-img-top" src={`/img/battle/${this.state.dataOne.productsPic}`} alt="" />
                </div>
                <div className="card-caption col-12 p-0">
                    <div className="card-body mt-4">
                        <h5 className="mb-3">{this.state.dataOne.productsName}</h5>
                        <p className="my-3">{this.state.dataOne.productsContent2}</p>
                        <p className="my-3">{this.state.dataOne.productsContent}</p>
                        {/* <div className="input-group">
                            <input type="text" className="form-control" placeholder={this.state.data.authorId} disabled/>
                            <div className="input-group-append">
                                <button><i className="icon-docs" /></button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemProfile;