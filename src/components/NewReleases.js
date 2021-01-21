import "./NewReleases.css";

export default function NewReleases({image, album, name, number}) {
    return(
        <div className="newReleases">
            <div className="newReleases__image">
                <img src= {image} alt=""/>
            </div>
            <div className="newReleases__titles">
                <p className="newReleases__album">{album}</p>
                <p className="newReleases__name">{name}</p>
            </div>
            <p className="newReleases__songs">{number}Songs</p>
        </div>
        
    )
    
}