import AlbumDetailsCard from "../components/AlbumDetailsCard";
import Navigation from "../components/Navigation";
import PlaylistsHeader from "../components/PlaylistsHeader";
import TopNavigation from "../components/TopNavigation";
import "./Playlists.css";

export default function Playlists() {
    return (
        <section>
            <TopNavigation/>
            <PlaylistsHeader/>
            <h1 className="playlists__top50">Top 50</h1>
            <h2 className="playlists__rock">Rock Ballads</h2>
            <AlbumDetailsCard album = "Old Town Road" artistname= "Billy Ray Cirus" time="3:58"/>
            <AlbumDetailsCard album = "Don‘t Call Me Up" artistname= "Mabel" time="5:58"/>
            <AlbumDetailsCard album = "Let Me Down Slowly" artistname= "Billy Ray Cirus" time="4:58"/>
            <AlbumDetailsCard album = "Paradise" artistname= "Billy Ray Cirus" time="2:59"/>
            <AlbumDetailsCard album = "Sucker" artistname= "Jonas Brothers" time="7:58"/>
            <AlbumDetailsCard album = "Kill This Love" artistname= "BLACKPINK" time="9:58"/>
            <AlbumDetailsCard album = "Old Town Road" artistname= "Billy Ray Cirus" time="3:58"/>
            <AlbumDetailsCard album = "Sucker" artistname= "Jonas Brothers" time="7:58"/>
            <button className="listenAll__button">Listen All</button>
            <Navigation/> 
        </section>
    )
}