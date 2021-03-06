import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { setAlbumList } from "../Actions/album"
import Album from './Album';
import "./ListAlbums.css"

const ListAlbums = () => {
    const dispatch = useDispatch();
    const [selectedAlbum, serSelectedAlbum] = React.useState(null);
    const [selectedAlbumImgs, setSelectedAlbumImgs] = React.useState(null)

    let albumList = useSelector(state => state.albumReducer.albumsList);
    if (!albumList)
        albumList = [];

    const handleClick = (id) => {
        if (id === selectedAlbum) {
            serSelectedAlbum(null);
        }
        else {
            serSelectedAlbum(id);
            axios.get(`http://jsonplaceholder.typicode.com/photos/?albumId=${id}`)
                .then(function (response) {
                    const dataLength = response.data.length
                    const length = dataLength < 12 ? dataLength : 12
                    const arr = response.data.slice(dataLength - length, dataLength);
                    setSelectedAlbumImgs(arr);
                }).catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }

    }

    React.useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(function (response) {
                // handle success
                const arr = response.data.slice(0, 25);
                dispatch(setAlbumList(arr));
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        return () => {
        };
    }, [dispatch]);


    const arr = albumList.map(album => {
        const isSelected = (album.id === selectedAlbum);
        return (
            <li key={album.id}  >
                <button className="collaps" type="button" onClick={() => handleClick(album.id)}>{isSelected ? "-" : "+"}</button>
                <Album id={album.id} selected={isSelected} name={album.title}
                    imgList={isSelected ? selectedAlbumImgs : null}
                />
            </li>
        )
    });

    return (
        <div className="galary-list">
            <ul >
                {arr}
            </ul >

        </div>
    );
}

export default ListAlbums;
