import "./PlaylistsHeader.css";

export default function PlaylistsHeader() {
    return (
        <div className="playlistsHeader">
            <h1 className="playlists__h1">Playlists</h1>
            <img className="playlistsHeader__soundwave" src="./images/sound-wave.svg" alt="soundwave"/>
            <div className="playlistsHeader__gallery">
                <img className="imageLeft" src="./images/playlistsBand.svg" alt=""/>
            </div>

        </div>
    )
}