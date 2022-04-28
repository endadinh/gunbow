import React from 'react';

const ModalVideo = () => {
    return (
        <div className="container">
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className='modal-dialog modal-dialog-video' role="document">
                    <div className='modal-content h-50'>
                        <div className="modal-header" data-dismiss="modal">
                            <span></span>
                             <i className="far fa-times-circle icon-close"/>
                        </div>
                        <div className="modal-body modal-body-video"> 
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="" id="video" allowscriptaccess="always" allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* <div className="modal-dialog-video" role="document">
                    <div className="modal-content">
                        <div className="modal-body-video">
                            <button type="button" className="close-video" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="" id="video" allowscriptaccess="always" allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ModalVideo;