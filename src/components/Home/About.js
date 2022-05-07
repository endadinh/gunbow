import React, { Component, useState } from 'react';
import i18next from 'i18next';

class About extends Component {

    render() {
        return (
            <section className="about-section">
                <div className="container">
                    <div className="row ">
                        <div className="intro col-lg-8 col-md-12 col-sm-12 text-center" data-aos="fade-right">
                            <div className="heading">
                                <h3>{i18next.t('about').heading}</h3>
                            </div>
                            <p>{i18next.t('about').content}</p>
                            {/* <p>{i18next.t('about').content2}</p>
                            <p>{i18next.t('about').content3}</p>
                            <p>{i18next.t('about').content4}</p> */}
                            {/* <p>{this.state.data.content2}</p> */}
                        </div>
                        <div className='col-lg-4 col-md-12 col-sm-12 mt-5'  data-aos="fade-up">
                            <img className="card-img-top" src="/img/SQF/capdoihoancanh.png" alt="" />
                            <div className="button-group col-lg-12 col-md-12 col-sm-12">
                                <button className="btn btn-bordered-watch video-btn" type='button' data-toggle="modal" data-src="https://www.youtube.com/embed/8g0l4ZGWfSw" data-target="#myModal">
                                    <img className='play-button' src="/img/SQF/buttonwatchvideo.png" alt="watch"></img>
                                    {/* <i class="fas fa-play-circle"></i>  */}
                                    <span>{i18next.t('_watch_video')}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;