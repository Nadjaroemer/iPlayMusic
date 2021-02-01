//FeaturedCard.js
import "./Featured.css"

function FeaturedCard({description,image}) {
    return(
        <article className="featured">
            <img className="featured__image" src={image} alt="albumcover"/>
            <div className="featured__headlines">
                
                <h2 className="featured__h2">{description}</h2>
            </div>
        </article>
    )

}

export default FeaturedCard;