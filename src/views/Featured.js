import FeaturedCard from "../components/FeaturedCard";
import Navigation from "../components/Navigation";
import TopNavigation from "../components/TopNavigation";

export default function Featured() {
    return(
        <div>  
            <h1 className="featured__headline">Featured</h1>
            <TopNavigation/>
            <FeaturedCard/>
            <FeaturedCard/>
            <FeaturedCard/>
            <FeaturedCard/>
            <FeaturedCard/>
            <Navigation/>
        </div>
    )
}