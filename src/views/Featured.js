import FeaturedCard from "../components/FeaturedCard";
import Navigation from "../components/Navigation";
import TopNavigation from "../components/TopNavigation";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import TokenContext from "../TokenContext";

export default function Featured() {
    const [token] = useContext(TokenContext);
    const [content, setContent] = useState({});
    const [songs, setSongs] = useState([]);

    useEffect(function() {
        axios.get("https://api.spotify.com/v1/browse/featured-playlists", {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(response => {
            console.log('response is: ', response);
            setContent(response.data);
            setSongs(response.data.playlists.items);
        });
    },[token, setContent]);

    console.log(content);

    return(
        <>
        <h1 className="featured__headline">Featured</h1>
        <TopNavigation/>
        <div>  
            {songs.map((song, index) => {
            return (
            <FeaturedCard
                key={index}
                name={song.name}
                description={song.description}
                image={song.images[0].url}
            />
            );
            })}
            <Navigation/>
     </div>
     </>
     )
}