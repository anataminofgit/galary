import React from 'react';
import "../Components/Album.css"
import Photo from './Photo';

const Album = (props) => {
    const { id, name, selected, imgList } = props;

    let row1 = null, row2 = null, row3 = null;

    if (imgList) {
        const listLen = imgList.length;
        //let maxcol;
        if (listLen > 4)
            row1 = imgList.slice(0, 4).map((item) => <Photo key={`${id}-${item.id}`} url={item.url} thumbnailUrl={item.thumbnailUrl} />)
        else //0-3
            row1 = imgList.slice(0, listLen % 4).map(item => <Photo key={`${id}-${item.id}`} url={item.url} thumbnailUrl={item.thumbnailUrl} />)

        if (listLen > 8)
            row2 = imgList.slice(4, 8).map(item => <Photo key={`${id}-${item.id}`} url={item.url} thumbnailUrl={item.thumbnailUrl} />)
        else if (listLen > 4 && listLen < 8)
            row2 = imgList.slice(4, 5 + listLen % 4).map(item => <Photo key={`${id}-${item.id}`} url={item.url} thumbnailUrl={item.thumbnailUrl} />)

        if (listLen >= 12)
            row3 = imgList.slice(8, 12).map(item => {
                return <Photo key={`${id}-${item.id}`} url={item.url} thumbnailUrl={item.thumbnailUrl} />
            })

        else if (listLen > 8 && listLen < 12)
            row3 = imgList.slice(8, 9 + listLen % 4).map(item => <Photo key={`${id}-${item.id}`} url={item.url} thumbnailUrl={item.thumbnailUrl} />)



    }


    return (
        <div className="album">
            <div>name: {name}</div>
            <div>id : {id}</div>
            <div>is selected = {selected}</div>
            <div className="row">
                {row1}
            </div>
            <div className="row">
                {row2}
            </div>
            <div className="row">
                {row3}
            </div>
        </div>
    );
}

export default Album;
