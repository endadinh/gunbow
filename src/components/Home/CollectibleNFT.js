import React, { Component, useState } from 'react';
import Slider from "react-slick";
import i18next from 'i18next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const data = [
    {
        img: "/img/shopitems/1.png",
        attack: 1700,
        area: 100,
        attackStone: "No socket",
        healthStone: "No socket",
        defenseStone: "No socket",
        infinityStone: "No socket",
        passive: "Attribute Passive",
        name: "Rage of the Single Dog"
    },
    {
        img: "/img/shopitems/2.png",
        attack: 1700,
        area: 100,
        attackStone: "No socket",
        healthStone: "No socket",
        defenseStone: "No socket",
        infinityStone: "No socket",
        passive: "Attribute Passive",
        name: "Golden Horn Spirit Gun"
    },
    {
        img: "/img/shopitems/3.png",
        attack: 1800,
        area: 100,
        attackStone: "No socket",
        healthStone: "No socket",
        defenseStone: "No socket",
        infinityStone: "No socket",
        passive: "Attribute Passive",
        name: "Rose Wand"
    },
    {
        img: "/img/shopitems/4.png",
        attack: 1800,
        area: 100,
        attackStone: "No socket",
        healthStone: "No socket",
        defenseStone: "No socket",
        infinityStone: "No socket",
        passive: "Attribute Passive",
        name: "Sheepshead Sickle"
    },
    {
        img: "/img/shopitems/5.png",
        attack: 1800,
        area: 100,
        attackStone: "No socket",
        healthStone: "No socket",
        defenseStone: "No socket",
        infinityStone: "No socket",
        passive: "Attribute Passive",
        name: "Dragon Roar"
    },
    {
        img: "/img/shopitems/6.png",
        attack: 1800,
        area: 100,
        attackStone: "No socket",
        healthStone: "No socket",
        defenseStone: "No socket",
        infinityStone: "No socket",
        passive: "Attribute Passive",
        name: "Dragon Wall Plate"
    },
    {
        img: "/img/shopitems/7.png",
        attack: 1800,
        area: 100,
        attackStone: "No socket",
        healthStone: "No socket",
        defenseStone: "No socket",
        infinityStone: "No socket",
        passive: "Attribute Passive",
        name: "Corn Gun"
    },
    {
        img: "/img/shopitems/8.png",
        attack: 1800,
        area: 100,
        attackStone: "No socket",
        healthStone: "No socket",
        defenseStone: "No socket",
        infinityStone: "No socket",
        passive: "Attribute Passive",
        name: "Bone Dragon Resentment"
    },
];

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
            src="/img/SQF/buttonheroname.png"
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <img
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
            src="/img/SQF/buttonheroname.png"
        />
    );
}

class CollectibleNFT extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        this.setState({
            data: data
        })
    }

    render() {
        const settings = {
            autoplay: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow className="next-arrow" />,
            prevArrow: <SamplePrevArrow className="prev-arrow" />
        };
        return (
            <section className="collection-nft-section">
                <div className="container box1">
                    <div className="row">
                        <div className="intro col-12 text-center" data-aos="zoom-in">
                            <div className="heading">
                                <h3 >{i18next.t('nfts').heading}</h3>
                            </div>
                            <p>{i18next.t('nfts').content}</p>
                            <p>{i18next.t('nfts').content2}</p>
                            <p>{i18next.t('nfts').content3}</p>
                        </div>
                    </div>
                </div>

                <div className='container slick-nft'>
                    <div className='row' data-aos="zoom-in">
                        <div className='col-lg-12'>
                            <Slider {...settings}>
                                {this.state.data.map((item, idx) => {
                                    return (
                                        <div className="row" key={idx}>
                                            <div className='col-lg-12 col-md-12 col-sm-12 hero-name'>
                                                <div className="title">
                                                    <h3>{item.name}</h3>
                                                </div>
                                            </div>
                                            <div className="slick-content row">
                                                <div className="col-lg-6 col-md-12 col-sm-12 attribute-item">
                                                    <div className="item">
                                                        <div className='title col-12'>
                                                            <h5>{i18next.t('_item_attribute')}</h5>
                                                        </div>
                                                        <div className="content">
                                                            <div className="attributes col-12">
                                                                <img src="/img/icons/swords.png" />
                                                                <span>{i18next.t('_attack')} : {item.attack} </span>
                                                            </div>
                                                            <div className="attributes col-12">
                                                                <img src="/img/icons/speedometer.png" />
                                                                <span> {i18next.t('_area')} : {item.area} </span>
                                                            </div>
                                                            <div className="attributes col-12">
                                                                <img src="/img/icons/attackStone.png" />
                                                                <span>{i18next.t('_attackStone')} : {item.attackStone}</span>
                                                            </div>
                                                            <div className="attributes col-12">
                                                                <img src="/img/icons/healthStone.png" />
                                                                <span>{i18next.t('_healthStone')}: {item.healthStone}</span>
                                                            </div>
                                                            <div className="attributes col-12">
                                                                <img src="/img/icons/defenseStone.png" />
                                                                <span>{i18next.t('_defenseStone')}: {item.defenseStone}</span>
                                                            </div>
                                                            <div className="attributes col-12">
                                                                <img src="/img/icons/infinityStone.png" />
                                                                <span>{i18next.t('_infinityStone')}: {item.infinityStone}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-12 col-sm-12 item-section">
                                                    <div className="img-item">
                                                        <img src={item.img} width="200" height="200" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                    <div className="col-12 line-space">
                    </div>
                </div>
            </section>
        );
    }
}

export default CollectibleNFT;