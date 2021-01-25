import "./AlbumDetails.css";

export default function AlbumDetailsHeader() {
    return(
        <div className="albumDetailsHeader">
            <img className="albumDetailsHeader__image" src="./images/allbumDetails_big.svg" alt=""/>
            <div className="albumDetailsHeader__titles" >
                <h1>Old Town Road</h1>
                <h2>12 Songs</h2>
            </div>
            <div className="albumDetailsHeader__hashtags">
                <h3>Genre hashtags</h3>
                <div className="hashtagButtons">
                    <button className="hashtagButton">#country</button>
                    <button className="hashtagButton">#country road</button>
                </div>
            </div>
        </div>
    )
}