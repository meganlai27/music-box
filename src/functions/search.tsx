import { useState, useEffect } from 'react';
import { getAccessToken } from '../script';

// Returns a list of json albums
const Search = (searchInput : string, spotifyToken : string) => {
    const [albums, setAlbums] = useState([]);

    async function fetchArtistID(searchParameters) {
        await fetch('https:api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
            .then(response => response.json())
            .then(data => {console.log(data)
              return data.artists.items[0].id});
    }

    useEffect(() => {
        let searchParameters = {
            method: 'GET',
            headers: {
              'Content-Type' : 'application/json',
              'Authorization'  :'Bearer ' + spotifyToken
            }
          }
          let artistID = fetchArtistID(searchParameters);
       
          console.log('Artist ID is ' + artistID)
          // Get request with Artist ID grab all albums
          let returnedAlbums = await fetch('https:api.spotify.com/v1/artists/'+artistID+'/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
            .then(response => response.json())
            .then(data => {
              console.log(data);
              setAlbums(data.items);
            })
          // Display albums
          console.log(albums)
    })
     

   return (
    albums
   )
}

export default Search;