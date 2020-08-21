import React from 'react';
import "../Components/Album.css"
import Photo from './Photo';


const MAX_ROWS = 3;
const NUM_COL = 4;

const Album = (props) => {
    const { id, name, selected, imgList } = props;
    const [curretImgList, setCurretImgList] = React.useState();


    const handleClick = (id) => {
        console.log("clicked: ", id)
        const arr = curretImgList.filter(item => item.id !== id);
        setCurretImgList(arr);
    }


    React.useEffect(() => {
        setCurretImgList(imgList);
        return () => {
        };
    }, [imgList]);


    let row = [null, null, null];
    if (curretImgList && curretImgList.length > 0) {
        const listLen = curretImgList.length;
        for (let i = 0; i < MAX_ROWS; i++) {
            const start = i * NUM_COL;
            if (listLen > start && (listLen < start + NUM_COL)) {
                row[i] = curretImgList.slice(start, start + 1 + (listLen % NUM_COL)).map(item => {
                    const { url, thumbnailUrl, title } = item;
                    return (
                        <div className="col" key={`${id}-${item.id}`} >
                            <Photo informClicked={() => { handleClick(item.id) }} id={item.id} title={title} url={url} thumbnailUrl={thumbnailUrl} />
                        </div>
                    )
                })
                //  empty collumn for display order column
                for (let j = listLen % NUM_COL; j < NUM_COL; j++) {
                    row[i].push(<div className="col" key={`empty-col${j}`} />)
                }
            }
            else if (listLen > start) {
                row[i] = curretImgList.slice(start, start + NUM_COL).map(item => <Photo informClicked={handleClick} key={`${id}-${item.id}`} id={item.id} title={item.title} url={item.url} thumbnailUrl={item.thumbnailUrl} />)
            }
        }
    }


    const allRows = row.map(item => <div className="row">{item}</div>)
    return (
        <div className={selected ? "album selected" : "album"}>
            <div>name: {name}</div>
            <div>id : {id}</div>
            <div>numer of open images {curretImgList ? curretImgList.length : 0}</div>
            {allRows}
        </div>
    );
}
export default Album;
