import React from 'react';

const Photo = (props) => {
    const { title, url, thumbnailUrl } = props;
    return (
        <div className="photo">
            <p>{title}</p>
            <button type="button">x</button>
            <img src={thumbnailUrl} alt={title} />
        </div>
    );
}

export default Photo;
