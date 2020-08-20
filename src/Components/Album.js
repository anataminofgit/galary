import React from 'react';
import "../Components/Album.css"
import Photo from './Photo';

const Album = (props) => {
    const { id, name , selected, imgList } = props;

    let imgs = [];
    if (imgList)
         imgs =  imgList.map(item =>{
            return  (
                <div  key = {`${id}-${item.id}`}>
                    <Photo url={item.url} thumbnailUrl= {item.thumbnailUrl}/>
                </div>
            )    
        })


    return (
        <div className="album">
            <div>name: {name}</div>
            <div>id : {id}</div>
            <div>is selected = {selected}</div>
            {imgs}
        </div>
    );
}

export default Album;
