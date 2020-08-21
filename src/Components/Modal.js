import React from 'react';
import "./Modal.css"




const Modal = (props) => {
    const { show, closeFunc ,url} = props
    return (
        show ?
            <div id="Modal" className="modal">
                <div className="modal-content">
                    <span onClick={closeFunc} className="close">&times;</span>
                    <img src={url} alt={"fullPic"} />
                </div>
            </div>
            : null
    );
}

export default Modal;
