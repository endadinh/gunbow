import React, { Component } from "react";
import Slider from "react-slick";


const data = [
  {
    img: "/img/collections/Collection1.png",
    energy: 19,
    attack: 8,
    defense: 12,
    speed: 26,
    lucky: 30,
    passive: "Attribute Passive"
  },
  {
    img: "/img/collections/Collection2.png",
    energy: 19,
    attack: 8,
    defense: 12,
    speed: 26,
    lucky: 30,
    passive: "Attribute Passive"
  },
  {
    img: "/img/collections/Collection3.png",
    energy: 19,
    attack: 8,
    defense: 12,
    speed: 26,
    lucky: 30,
    passive: "Attribute Passive"
  },
  {
    img: "/img/collections/Collection4.png",
    energy: 19,
    attack: 8,
    defense: 12,
    speed: 26,
    lucky: 30,
    passive: "Attribute Passive"
  },
  {
    img: "/img/collections/Collection5.png",
    energy: 19,
    attack: 8,
    defense: 12,
    speed: 26,
    lucky: 30,
    passive: "Attribute Passive"
  },
  {
    img: "/img/collections/Collection6.png",
    energy: 19,
    attack: 8,
    defense: 12,
    speed: 26,
    lucky: 30,
    passive: "Attribute Passive"
  },
  {
    img: "/img/collections/Collection7.png",
    energy: 19,
    attack: 8,
    defense: 12,
    speed: 26,
    lucky: 30,
    passive: "Attribute Passive"
  },
  {
    img: "/img/collections/Collection8.png",
    energy: 19,
    attack: 8,
    defense: 12,
    speed: 26,
    lucky: 30,
    passive: "Attribute Passive"
  },
];
export default class CenterMode extends Component {
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
      <div>
        <Slider {...settings}>
          {this.state.data.map((item, idx) => {
            return (
              <div className="row" key={idx}>
                <div className="col-12 slick-content">
                  <div className="col-lg-6 col-md-6 col-sm-12 img-field">
                    <img src={item.img} />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                    <div className="attributes col-12">
                      <img src="/img/icons/lighting.png" />
                      <span>Energy : {item.energy} </span>
                    </div>
                    <div className="attributes col-12">
                      <img src="/img/icons/swords.png" />
                      <span> Attack: {item.attack} </span>
                    </div>
                    <div className="attributes col-12">
                      <img src="/img/icons/shield.png" />
                      <span>Defense: {item.defense}</span>
                    </div>
                    <div className="attributes col-12">
                      <img src="/img/icons/speedometer.png" />
                      <span>Speed: {item.speed}</span>
                    </div>
                    <div className="attributes col-12">
                      <img src="/img/icons/four-leaf.png" />
                      <span>Lucky: {item.lucky}</span>
                    </div>
                    <div className="attributes col-12">
                      <span>* Passive: {item.passive}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
