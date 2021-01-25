import AlbumDetailsCard from "../components/AlbumDetailsCard";
import AlbumDetailsHeader from "../components/AlbumDetailsHeader";
import Navigation from "../components/Navigation";
import TopNavigation from "../components/TopNavigation";

export default function AlbumDetails() {
    return(
        <section>
            <TopNavigation/>
            <AlbumDetailsHeader/>
            <h1 className="allSongs__h1">All Songs</h1>
            <AlbumDetailsCard album = "Old Town Road" artistname= "Billy Ray Cirus" time="3:58"/>
            <AlbumDetailsCard album = "Don‘t Call Me Up" artistname= "Mabel" time="5:58"/>
            <AlbumDetailsCard album = "Let Me Down Slowly" artistname= "Billy Ray Cirus" time="4:58"/>
            <AlbumDetailsCard album = "Paradise" artistname= "Billy Ray Cirus" time="2:59"/>
            <AlbumDetailsCard album = "Sucker" artistname= "Jonas Brothers" time="7:58"/>
            <AlbumDetailsCard album = "Kill This Love" artistname= "BLACKPINK" time="9:58"/>
            <Navigation/>
        </section>
    )
}
