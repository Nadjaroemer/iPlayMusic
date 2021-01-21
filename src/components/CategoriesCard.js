import "./Categories.css"

function CategoriesCard({ color , text }) {
    return(
        <div className="categories" style = {{backgroundColor: color}}>
            <h2 className="categories__text">{text}</h2>
            <button className="categories__button">. . .</button>
            <div></div>
        </div>
    )
}
export default CategoriesCard;
