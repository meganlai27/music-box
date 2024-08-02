// Authenticates User
// Code found on Spotify API Documentation: https://developer.spotify.com/documentation/web-api/howtos/web-app-profile 

const clientId = "70c52e441bd440e189c70ad6d23f88b8";
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

let accessToken : string = "";

// Sign in with Spotify Account
if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
    accessToken = await getAccessToken(code);
    console.log(accessToken)

}

export async function redirectToAuthCodeFlow(clientId: string) {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://localhost:5173/callback");
    params.append("scope", "user-read-currently-playing");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateCodeVerifier(length: number) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier: string) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

// export async function getAccessToken(clientId: string, code: string): Promise<string> {
// export async function getAccessToken(code: string): Promise<string> {
  export async function getAccessToken(code: string): Promise<string> {
    const verifier = localStorage.getItem("verifier");

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", "http://localhost:5173/callback");
    params.append("code_verifier", verifier!);

    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params
    });

    const { access_token } = await result.json();
    return access_token;
}

// Fetch albums from search results with given search input
async function fetchSearchResults(searchInput: string): Promise<any> {

  // Fetch the first Artist ID
  const artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', {
      method: "GET", headers: { Authorization: `Bearer ${accessToken}` }
  })
  .then(response => response.json())
  .then(data => {console.log(data)
  return data.artists.items[0].id})

  // Fetch the albums of the artist found
  const returnedAlbums = await fetch('https://api.spotify.com/v1/artists/'+artistID+'/albums' + '?include_groups=album&market=US&limit=50', {
    method: "GET", headers: { Authorization: `Bearer ${accessToken}` }
})
      .then(response => response.json())
      .then(data => {
        console.log(data)
        return data.items
      })


      return returnedAlbums

  }

export default fetchSearchResults;
