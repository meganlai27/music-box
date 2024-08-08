import {InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { useState } from 'react';
import fetchSearchResults from '../script';
import '../style/search.css'
import NavBar from '../components/navbar'

// Album object returned by Spotify API
export interface Album {
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
          const result = await fetchSearchResults(searchInput)

            console.log(result)

        setAlbums(result)

        console.log(albums)
    }
}


    return (
      <>
        <div className = "page">
          <NavBar/>
          <div className = "search-bar">
            <InputGroup size = 'lg'>
              <FormControl className = "search-input"
                size = 'lg'
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
          </div>
          <div className = "">
            <Row>
              {albums.map( (album: Album) => {
                console.log(album);
                return(
                  <Card className = 'text-white bg-info'>
                    <Card.Img className = "card-image" src={album.images[0].url}/>
                    <Card.Body >
                      <Card.Title>{album.name}</Card.Title>
                      {/* <Button onClick = {event => {console.log('Add form here')}}>
                        Rate Me
                      </Button> */}
                      {/* <Button onClick={event => {routeReviewForm(album)}}>Rate</Button> */}
                      <Button>View</Button>
                      <Button>Rate</Button>
                    </Card.Body>
                  </Card>
                )
              })}
            </Row>
          </div>


        </div>
      </>
    )
}

export default Search;