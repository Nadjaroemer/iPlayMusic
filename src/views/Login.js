import quersystring from "querystring";

export default function Login() {

    var queryParameters = quersystring.stringify({
        response_type: "code",
        client_id: "2b787d11d1964fd180d7dc7e6f0f9f4f",
        scope: "user-read-private user-read-email",
        redirect_uri: "http://localhost:8888/callback",
        state: "thisisastate"
    });

    return(
        <>
        <h1>Login</h1>
        <a href={`https://accounts.spotify.com/authorize?${queryParameters}`}>Login with Spotify</a>
        </>
    )
}