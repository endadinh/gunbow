import React, { Component } from 'react';
import i18next from 'i18next';
// import axios from 'axios';

// const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json-2/blog";
const initData = {
    "blogData": [
        {
            "id": 1,
            "img": "/img/blog/1.png",
            "author": "Junaid Hasan",
            "date": "Feb 19, 2021",
            "title": "NFT sales and blockchain games continue to grow despite the recent market slump.",
            "content": "Gen Z and growing interest throughout Asia have helped NFTs to shine brightly amidst volatility, according to a report from DappRadar...",
            "btnText": "Read More"
        },
        {
            "id": 2,
            "img": "/img/blog/2.png",
            "author": "Mac Doe",
            "date": "Jul 29, 2021",
            "title": " 7 NFT Games to Play-to-Earn in 2022",
            "content": "Earning an income from playing video games has traditionally been limited to e-sport athletes or content creators. With play-to-earn, the average gamer can now monetize their playing time via buying and selling in-game NFTs...",
            "btnText": "Read More"
        },
        {
            "id": 3,
            "img": "/img/blog/3.png",
            "author": "Sara Scotch",
            "date": "Jul 17, 2021",
            "title": "Will NFT backlash stop the blockchain gaming boom?",
            "content": "The non-fungible token debate has moved from the art world to the gaming industry, and it’s morphed into an all-consuming fight about the future of entertainment and what role...",
            "btnText": "Read More"
        },

    ]
}

class News extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        // axios.get(`${BASE_URL}`)
        //     .then(res => {
        //         this.setState({
        //             data: res.data.blogData
        //         })
        //         // console.log(this.state.data)
        //     })
        // .catch(err => console.log(err))
        this.setState({
            data: initData.blogData
        })
    }
    render() {
        return (
            <section className="blog-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center mb-4">
                                <span>{i18next.t('news').pre_heading}</span>
                                <h3 className="mt-3 mb-0">{i18next.t('news').heading}</h3>
                                <p>{i18next.t('news').content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {this.state.data.map((item, idx) => {
                            return (
                                <div key={`bd_${idx}`} className="col-12 col-md-4 item">
                                    {/* Single Blog */}
                                    <div className="card blog-card">
                                        {/* Blog Thumb */}
                                        <div className="blog-thumb">
                                            <a href={`/blog-single/${item.id}`}><img className="img-fluid" src={item.img} alt="" /></a>

                                        </div>
                                        {/* Blog Content */}
                                        <div className="blog-content">
                                            {/* Meta Info */}
                                            <ul className="meta-info d-flex justify-content-between list-unstyled mt-4">
                                                {/* <li><a href={`/blog-single/${item.id}`}>{""}</a></li> */}
                                                <li className="float-end"><a href="#">{item.date}</a></li>
                                            </ul>
                                            {/* Blog Title */}
                                            <a href={`/blog-single/${item.id}`}>
                                                <h4>{item.title}</h4>
                                            </a>
                                            <p>{item.content}</p>
                                            {/* Blog Button */}
                                            <a className="btn content-btn" href={`/blog-single/${item.id}`}>{item.btnText}</a>
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

export default News;