import React, { Component } from 'react';

const initData = {
    pre_heading: "FAQ",
    heading: "Frequently Asked Questions",
    content: "This section includes answers to frequently asked questions concerning Sancti Quest on Frontline"
}

const data = [
    {
        id: "1",
        btnClass: "btn d-block text-left w-100 py-4",
        target: "#collapseOne",
        quote: "How do I create an Sancti Quest on Frontline account?",
        contentId: "collapseOne",
        contentClass: "collapse show",
        content: "You dont need create Sancti Quest on Frontline account, connect to your Wallet and enjoy! "
    },
    // {
    //     id: "2",
    //     btnClass: "btn d-block text-left w-100 collapsed py-4",
    //     target: "#collapseTwo",
    //     quote: "Where can I see transaction details?",
    //     contentId: "collapseTwo",
    //     contentClass: "collapse",
    //     content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
    // },
    // {
    //     id: "3",
    //     btnClass: "btn d-block text-left w-100 collapsed py-4",
    //     target: "#collapseThree",
    //     quote: "How do royalties work on Sancti Quest on Frontline?",
    //     contentId: "collapseThree",
    //     contentClass: "collapse",
    //     content: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    // },
    // {
    //     id: "4",
    //     btnClass: "btn d-block text-left w-100 collapsed py-4",
    //     target: "#collapseFour",
    //     quote: "How do I list an NFT to sell?",
    //     contentId: "collapseFour",
    //     contentClass: "collapse",
    //     content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    // }
]

class Faq extends Component {
    state = {
        initData: {},
        data: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data
        })
    }
    render() {
        return (
            <section className="faq-area pt-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                <span>{this.state.initData.pre_heading}</span>
                                <h3 className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                <p>{this.state.initData.content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            {/* FAQ Content */}
                            <div className="faq-content">
                                {/* Sancti Quest on Frontline Accordion */}
                                <div className="accordion" id="netstorm-accordion">
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-md-10">
                                            {/* Single Accordion Item */}
                                            {this.state.data.map((item, idx) => {
                                                return (
                                                    <div key={`fd_${idx}`} className="single-accordion-item p-3">
                                                        {/* Card Header */}
                                                        <div className="card-header bg-inherit border-0 p-0">
                                                            <h2 className="m-0">
                                                                <button className={item.btnClass} type="button" data-toggle="collapse" data-target={item.target}>
                                                                    {item.quote}
                                                                </button>
                                                            </h2>
                                                        </div>
                                                        <div id={item.contentId} className={item.contentClass} data-parent="#netstorm-accordion">
                                                            {/* Card Body */}
                                                            <div className="card-body py-3">
                                                                {item.content}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Faq;