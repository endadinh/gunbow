import React, { Component } from 'react';
import i18next from 'i18next';

const authorData = [
    {
        "id": 1,
        "img": "/img/Member/ceo11.png",
        "avatar": "/img/avatar_1.jpg",
        "author": "Brad Jackson",
        "role" : "CEO",
        "btnText": "Follow",
        "info": "Chief Executive Officer - SQF Token Game",
        "linkedin" : "https://www.linkedin.com/in/brad-jack-son225/"
    },
    {
        "id": 2,
        "img": "/img/Member/cmo11.png",
        "avatar": "/img/avatar_2.jpg",  
        "role" : "CMO",
        "author": "Peter Barta",
        "btnText": "Follow",
        "info": "Chief Marketing Officer at SQF Token Game",
        "linkedin" : "https://www.linkedin.com/in/peter-barta5/"
    },
    {
        "id": 3,
        "img": "/img/Member/cto11.png",
        "avatar": "/img/avatar_2.jpg",  
        "role" : "CTO",
        "author": "Daniel Ross",
        "btnText": "Follow",
        "info": "Chief Technology Officer at SQF Token Game",
        "linkedin" : "https://www.linkedin.com/in/daniel-ross5/"
    },  
]
const memberData = [
    {
        "id": 1,
        "img": "/img/Member/1.png",
        "avatar": "/img/avatar_1.jpg",
        "author": "Page Deana",
        "role" : "Creative director",
        "btnText": "Follow",
        "info": "Chief Executive Officer - SQF Token Game",
        "linkedin" : "https://www.linkedin.com/in/brad-jack-son225/"
    },
    {
        "id": 2,
        "img": "/img/Member/2.png",
        "avatar": "/img/avatar_2.jpg",  
        "role" : "Graphic Director",
        "author": "Ada Mary Ann",
        "btnText": "Follow",
        "info": "Chief Marketing Officer at SQF Token Game",
        "linkedin" : "https://www.linkedin.com/in/peter-barta5/"
    },
    {
        "id": 3,
        "img": "/img/Member/3.png",
        "avatar": "/img/avatar_2.jpg",  
        "role" : "Technical Artist",
        "author": "Gal Willibald",
        "btnText": "Follow",
        "info": "Chief Technology Officer at SQF Token Game",
        "linkedin" : "https://www.linkedin.com/in/daniel-ross5/"
    },  
    {
        "id": 4,
        "img": "/img/Member/4.png",
        "avatar": "/img/avatar_2.jpg",  
        "role" : "Art Director",
        "author": "Yvonne Alexus",
        "btnText": "Follow",
        "info": "Chief Technology Officer at SQF Token Game",
        "linkedin" : "https://www.linkedin.com/in/daniel-ross5/"
    },  
    {
        "id": 5,
        "img": "/img/Member/5.png",
        "avatar": "/img/avatar_2.jpg",  
        "role" : "Community Director",
        "author": "Doran Noel",
        "btnText": "Follow",
        "info": "Chief Technology Officer at SQF Token Game",
        "linkedin" : "https://www.linkedin.com/in/daniel-ross5/"
    },  
    {
        "id": 6,
        "img": "/img/Member/6.png",
        "avatar": "/img/avatar_2.jpg",  
        "role" : "Blockchain Director",
        "author": "Kennard Colten",
        "btnText": "Follow",
        "info": "Chief Technology Officer at SQF Token Game",
        "linkedin" : "https://www.linkedin.com/in/daniel-ross5/"
    },  
    {
        "id": 7,
        "img": "/img/Member/7.png",
        "avatar": "/img/avatar_2.jpg",  
        "role" : "Game leader",
        "author": "Alex Gresham",
        "btnText": "Follow",
        "info": "Chief Technology Officer at SQF Token Game",
        "linkedin" : "https://www.linkedin.com/in/daniel-ross5/"
    },  
    {
        "id": 8,
        "img": "/img/Member/8.png",
        "avatar": "/img/avatar_2.jpg",  
        "role" : "Business Director",
        "author": "Mikki Britannia",
        "btnText": "Follow",
        "info": "Chief Technology Officer at SQF Token Game",
        "linkedin" : "https://www.linkedin.com/in/daniel-ross5/"
    },  

]

class Member extends Component {
    state = {
        data: {},
        authorData: [],
        memberData: [],
        initData: {},
        info: "",
    }
    componentDidMount() {
        this.setState({
            authorData: authorData,
            memberData: memberData
        })
    }
    render() {
        return (
            <section className="members-section">
                <div className="container">
                    <div className="row">
                        <div className="intro text-center" data-aos="zoom-in">
                            <div className="heading">
                                <h3 className="mt-4">{i18next.t('team').heading}</h3>
                            </div>
                            <p className='mt-5'>{i18next.t('team').content}</p>
                            <p className='mt-3'>{i18next.t('team').content2}</p>
                        </div>
                    </div>

                    <div className="row items mt-5">
                        {this.state.authorData.map((item, idx) => {
                            return (
                                <div key={`ad_${idx}`} className="col-md-6 col-sm-12 col-lg-4 item d-flex justify-content-center">
                                    <div className="card no-hover text-center" data-aos="zoom-in">
                                        <div className="image-over" >
                                            <div>
                                                <img className="card-img-top" src={item.img} alt="" />
                                            </div>
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption p-0">
                                            {/* Card Body */}
                                            <div className="card-body d-block mt-4">
                                                <h5>{item.author}</h5>
                                                <h6>{item.role}</h6>
                                                <i>{item.info}</i>
                                                <p>
                                                    <a href={item.linkedin}><i className="fa-brands fa-linkedin"></i></a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Developer team */}

                    <div className="row mt-5">
                        <div className="intro text-center" data-aos="zoom-in">
                            <div className="heading">
                                <h3 className="mt-3">{i18next.t('team').heading2}</h3>
                            </div>
                            {/* <p className='mt-5'>{i18next.t('team').content}</p>
                            <p className='mt-3'>{i18next.t('team').content2}</p> */}
                        </div>
                    </div>

                    <div className="row items mt-2">
                        {this.state.memberData.map((item, idx) => {
                            return (
                                <div key={`ad_${idx}`} className="col-md-4 col-sm-12 col-lg-3 item">
                                    <div className="card no-hover text-center" data-aos="zoom-in">
                                        <div className="image-over" >
                                            <div>
                                                <img className="card-img-top" src={item.img} alt="" />
                                            </div>
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption p-0">
                                            {/* Card Body */}
                                            <div className="card-body d-block mt-4">
                                                <h5>{item.author}</h5>
                                                <h6>{item.role}</h6>
                                                {/* <i>{item.info}</i> */}
                                                {/* <p>
                                                    <a href={item.linkedin}><i className="fa-brands fa-linkedin"></i></a>
                                                </p> */}
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

export default Member;