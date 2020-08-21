import React from 'react';
import Modal from './Modal';
import "./Photo.css"

const Photo = (props) => {
    const { title, url, thumbnailUrl, informClicked, id } = props;
    const [imgHover, setImageHover] = React.useState(false);
    const [isModal, setIsModal] = React.useState(false);

    const handleClose = () => {
        informClicked(id);
    }


    return (
        <div>
            <div onMouseEnter={() => { setImageHover(true) }} onMouseLeave={() => { setImageHover(false) }} className="photo">
                <div>
                    <button onClick={handleClose} type="button">x</button>
                </div>
                <div>id: {id}</div>
                { <button onClick={()=>{setIsModal(true)}} type="button">
                    <p className="text-over">{imgHover ? title : "   "}</p>
                    <img src={thumbnailUrl} alt={title} />
                </button> }
            </div>

             <Modal show={isModal} url = {url} closeFunc={()=>setIsModal(false)}/> 
        </div>
    );
}

export default Photo;
