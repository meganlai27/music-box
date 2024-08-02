import {Container, InputGroup, FormControl, Button, Row, Cards, Card } from 'react-bootstrap';
import { useState } from 'react';
import fetchSearchResults from '../script';

interface Album {
        album_type: string,
        total_tracks: number,
        available_markets: [string],
        external_urls: {
          spotify: string
        },
        href: string,
        id: string,
        images: [
          {
            url: string,
            height: number,
            width: number
          }
        ],
        name: string,
        release_date: string,
        release_date_precision: string,
        restrictions: {
          reason: string
        },
        type: string,
        uri: string,
        artists: [
          {
            external_urls: {
              spotify: string
            },
            href: string,
            id: string,
            name: string,
            type: string,
            uri: string
          }
        ]
}

const Search = () => {
    const[searchInput, setSearchInput] = useState("");
    const[albums, setAlbums] = useState([]);

    const params = new URLSearchParams(window.location.search);

    async function search() {
        const code = params.get("code")
        if (!code) {
            return(
                <>
                <script src="src/script.tsx" type="module"></script>
                </>
            )
        } else {
        //     const accessToken = await getAccessToken(code);
        // const result = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', {
        //     method: "GET", headers: { Authorization: `Bearer ${accessToken}` }
        // })
        const result = await fetchSearchResults(searchInput)

            console.log(result)

        setAlbums(result)

        console.log(albums)
    }
}


    return (
        <>
            <div>

<Container>
  <InputGroup className = "mb-3" size = "lg">
    <FormControl 
      placeholder = 'Search For Artist'
      type = "input"
      onKeyPress={event => {
        if (event.key == 'Enter'){
          search();
        }
      }}
      onChange = {event => setSearchInput(event.target.value) }
    />
    <Button onClick={search}>
      Search
    </Button>
  </InputGroup>
</Container>
<Container>
  <Row className='no-gutters row row-cols-4'>
    {albums.map( (album: Album, i) => {
      console.log(album);
      return(
        <Card className = 'text-white bg-info'>
          <Card.Img src={album.images[0].url} />
          <Card.Body>
            <Card.Title>{album.name}</Card.Title>
            {/* <Button onClick = {console.log('Add form here')}>
              Rate Me
            </Button> */}
            {/* <Button onClick={event => {routeReviewForm(album)}}>Rate</Button> */}
          </Card.Body>
        </Card>
      )
    })}
  </Row>
</Container>


</div>
        </>
  )
}

export default Search;