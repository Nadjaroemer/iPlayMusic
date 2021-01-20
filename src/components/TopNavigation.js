import "./TopNavigation.css"

export default function TopNavigation() {
    return(
        <section className="topNavigation">
            <img className="topNavigation__back" src="./images/chevron-back-outline.svg" alt=""/>
            <h1 className="topNavigation__h1">Featured</h1>
            <img className="topNavigation__search" src="./images/search-outline.svg" alt=""/>
        </section>
    )
}