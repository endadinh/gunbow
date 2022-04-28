import React, { Component } from 'react';
import i18next from 'i18next';

const authorData = [
    {
        "id": 1,
        "img": "/img/Member/member.png",
        "avatar": "/img/avatar_1.jpg",
        "author": "Junaid Hasan",
        "btnText": "Follow",
        "info": "CFO & CIO at Wings Ventures, 3 years experience in Blockchain1",
    },
    {
        "id": 2,
        "img": "/img/Member/member.png",
        "avatar": "/img/avatar_2.jpg",
        "author": "Arham",
        "btnText": "Follow",
        "info": "CFO & CIO at Wings Ventures, 3 years experience in Blockchain2",
    },
]

class Advisors extends Component {
    state = {
        data: {},
        authorData: [],
        initData: {},
        info: "",
    }
    componentDidMount() {
        this.setState({
            authorData: authorData,
        })
    }
    render() {
        return (
            <section className="members-section bg-img12">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center">
                            <span>{i18next.t('advisor').pre_heading}</span>
                            <h1 className="mt-4">{i18next.t('advisor').heading}</h1>
                            <p>{i18next.t('advisor').content}</p>
                        </div>
                    </div>
                    <div className="row items mt-5 justify-content-center">
                        {this.state.authorData.map((item, idx) => {
                            return (
                                <div key={`ad_${idx}`} className="col-12 col-sm-6 col-lg-3 item" >
                                    <div className="card no-hover text-center">
                                        <div className="image-over">
                                            <a href="/author">
                                                <img className="card-img-top" src={item.img} alt="" />
                                            </a>
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body mt-4">
                                                <h4>{item.author}</h4>
                                                <h6>{"CTO"}</h6>
                                                <div className='col-12 info'>
                                                    <i>CFO & CIO at Wings Ventures, 3 years experience in Blockchain</i>
                                                </div>
                                                <div className='col-12'>
                                                    <a href="https://www.linkedin.com/in/endadinh/"><i className="fa-brands fa-linkedin"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default Advisors;