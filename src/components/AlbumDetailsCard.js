import "./AlbumDetails.css";

export default function AlbumDetailsCard({album, artistname, time}) {
    return(
        <div className="albumDetailsCard">
            <button className="albumDetailsCard__playButton"><img src="./images/ionicons_svg_ios-play.svg" alt=""/></button>
            <div className="albumDetailsCard__titles">
                <p className="albumDetailsCard__album">{album}</p>
                <p className="albumDetailsCard__name">{artistname}</p>
            </div>
            <p className="albumDetailsCard__time">{time}</p>
    </div>
    )
}