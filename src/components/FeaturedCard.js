//FeaturedCard.js
import "./Featured.css"

function FeaturedCard() {
    return(
        <article className="featured">
            <img className="featured__shadow" src="./images/shadow.png" alt="shadow"/>
            <img className="featured__image" src="./images/featured.png" alt="albumcover"/>
            <div className="featured__headlines">
                <h1 className="featured__h1">The Greatest Showman</h1>
                <h2 className="featured__h2">Soundtrack</h2>
            </div>
        </article>
    )

}

export default FeaturedCard;