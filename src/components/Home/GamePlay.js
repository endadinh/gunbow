import React, { Component, useState } from "react";
import Slider from "react-slick";
import i18next from "i18next";
const data = [
    {
        img: "/img/gameplay/gameplay1.png",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive"
    },
    {
        img: "/img/gameplay/gameplay2.png",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive"
    },
    {
        img: "/img/gameplay/gameplay3.png",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive"
    },
    {
        img: "/img/gameplay/gameplay4.png",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive"
    },
    {
        img: "/img/gameplay/gameplay5.png",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive"
    },
    {
        img: "/img/gameplay/gameplay6.png",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive"
    },
    {
        img: "/img/gameplay/gameplay7.png",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive"
    },
    {
        img: "/img/gameplay/gameplay8.png",
        energy: 19,
        attack: 8,
        defense: 12,
        speed: 26,
        lucky: 30,
        passive: "Attribute Passive"
    },
];
class GamePlay extends Component {
    state = {
        data: [],
    };
    componentDidMount() {
        this.setState({
            data: data,
        });
    }


    render() {
        const settings = {
            autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <section className="game-play-section">
                <div className="container">
                    <div className="row">
                        <div className="intro col-12 text-center" data-aos="zoom-in-out">
                            <div className="heading">
                                <h3 className="mt-4">{i18next.t('game_play').heading}</h3>
                            </div>
                            <p>{i18next.t('game_play').content}</p>
                        </div>
                    </div>
                </div>

                <div className="container slick mt-5">
                    <div className="row">
                        <div className="col-lg-12 box1">
                            <div className="img1" >
                                <img src="/img/collections/Collection9.png"></img>
                            </div>
                            <div className="img2" >
                                <img src="/img/collections/Collection1.png"></img>
                            </div>
                            <div className="content" data-aos="flip-left" data-aos-easing="ease-out-cubic">
                                <img className="img-slide" src={"/img/gif/gif1/gif2.gif"} />
                                {/* <canvas className="imgaeCanvas" imgname={"img/gif/gif1/gif1"} quantity={148} ext={".gif"}  width="300" height="250"></canvas> */}
                            </div>
                            {/* <Slider {...settings}>
                                {this.state.data.map((item, idx) => {
                                    return (
                                        <img class="img-slide" src={item.img} key={idx} />
                                    );
                                })}
                            </Slider> */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default GamePlay;
