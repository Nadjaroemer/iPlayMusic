import CategoriesCard from "../components/CategoriesCard";
import Navigation from "../components/Navigation";
import TopNavigation from "../components/TopNavigation";

export default function Categories() {
    return(
    <>
        <TopNavigation/>
        <h1 className="categories__headline">Categories</h1>
        <CategoriesCard text="Alternative" color="var(--primaryColor)" />
        <CategoriesCard text="Blues" color="var(--blues)"  />
        <CategoriesCard text="Classical" color="var(--orange)"  />
        <CategoriesCard text="Country" color= "var(--yellow)"  />
        <CategoriesCard text="Dance" color="var(--lightgreen)"  />
        <CategoriesCard text="Electronic" color="var(--green)"  />
        <CategoriesCard text="Fitness & Workout" color="var(--turquoise)"  />
        <CategoriesCard text="Hip-Hop/Rap" color="var(--lightblue)"  />
        <CategoriesCard text="Industrial" color="var(--blue)"  />
        <Navigation/>
    </>
    )
}