import Navigation from "../components/Navigation";
import NewReleases from "../components/NewReleases";
import TopNavigation from "../components/TopNavigation";

export default function AllAlbums() {
    return(
        <>
        <TopNavigation/>
        <h1 className="featured__headline">All Albums</h1>
        <NewReleases image ="./images/old-town-road.svg" album = "Old Town Road" name= "Billy Ray Cirus" number="12 "/>
        <NewReleases  image ="./images/victory-lab.svg"album = "Victory Lab" name= "Nipsey Hussle" number="8 "/>
        <NewReleases image ="./images/thank-u-next.svg" album = "Tank U, Next" name= "Aiana Grande" number="13 "/>
        <NewReleases  image ="./images/death-race-for-love.svg"album = "Death Race For Love" name= "Juice WRLD" number="11 "/>
        <Navigation/>
        </>
    )

}