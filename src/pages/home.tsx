import '../style/home.css'
import Search from './search'
import {Container, InputGroup, FormControl, Button, Row, Cards, Card } from 'react-bootstrap';
import { useState, useEffect, useNavigate } from "react";
import fetchSearchResults from '../script'


const Home = () => {
    console.log("At Home page")

    // const navigate = useNavigate();
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
    }
}

    return (
        <>
        <div>
            <div> 
      <h1>MusicBox</h1>
      <nav>
            <div id="nav-left">
                <img
                    alt="Star Logo"
            src="https://static.vecteezy.com/system/resources/thumbnails/001/189/165/small/star.png"

                width="80px"/>
                <ul id="menu-list">
                    <li>New Review</li>
                    <a id="userProfile.html" href="sign-in">Profile</a>
                    <a id="login.html" href="sign-in">Log In</a>
                    </ul>
            </div>


            <div id="nav-right">
                <input placeholder="Search for a song..."/>
    <InputGroup className = "mb-3" size = "lg">
      <FormControl 
        placeholder = 'Search For Artist'
        type = "input"
        onKeyPress={event => {
          if (event.key == 'Enter'){
            search()
          }
        }}
        onChange = {event => setSearchInput(event.target.value) }
      />
      {/* <Button onClick={search}> */}
      <Button>
        Search
      </Button>
    </InputGroup>
    </div>

        </nav>
        <section id="banner">Global Reviews</section>

        <header>
            <section id="movie-cards">
                <div className="card">
                    <img
                        className="card-image"
                        alt="Lover Album"
                src="https://upload.wikimedia.org/wikipedia/en/c/cd/Taylor_Swift_-_Lover.png"/>
                <div className="card-content">
                    <h3 className="title">Cruel Summer: Taylor Swift</h3>
                    <a className="link" href="https://open.spotify.com/track/1BxfuPKGuaTgP7aM0Bbdwr?si=99418b387fff4efc">LISTEN HERE</a>
                    </div>
                </div>
    
                <div className="card">
                        <img
                        className="card-image"
                        alt="FATD album"
                        src="https://static.stereogum.com/uploads/2023/08/For-All-The-Dogs-1692825000-1000x997.jpeg"/>
                        <div className="card-content">
                        <h3 className="title">IDGAF - Drake ft. Yeat</h3>
                        <a className="link" href="https://open.spotify.com/track/2YSzYUF3jWqb9YP9VXmpjE?si=8a859c9588ec44d0">LISTEN HERE</a>
                </div>
            </div>
    
                <div className="card">
                    <img
                    className="card-image"
                    alt="Bad Bunny"
                    src="https://s.abcnews.com/images/GMA/bad-bunny-3-ht-thg-231013_1697210407180_hpEmbed_1x1_992.jpg"/>
                    <div className="card-content">
                    <h3 className="title">MONACO - Bad Bunny</h3>
                    <a className="link" href="https://open.spotify.com/track/4MjDJD8cW7iVeWInc2Bdyj?si=f8411939d556406f">LISTEN HERE</a>
                </div>
            </div>
          </section>

        </header>
        
        <section id="banner">Your Friends</section>
        <section id="movie-cards">
            <div className="card">
                <img
                    className="card-image"
                    alt="Fred Again"
            src="https://www.fredagain.com/assets/img/albumArt.png"/>
            <div className="card-content">
                <h3 className="title">Deliliah (Pull me out of this) - Fred again...</h3>
                <div className="subtitle"> Love this song!!</div>
            
                <a className="link" href="to-infinity">LISTEN HERE</a>
                </div>
            </div>

            <div className="card">
                    <img
                    className="card-image"
                    alt="the 1975"
                    src="https://upload.wikimedia.org/wikipedia/en/0/03/The_1975_%28album%29_by_The_1975.png"/>
                    <div className="card-content">
                    <h3 className="title">Robbers - The 1975</h3>
                    <div className="subtitle">classNameic all time favorite. Always on loop.</div>
                    <a className="link" href="to-infinity">LISTEN HERE</a>
            </div>
            </div>

            <div className="card">
                <img
                className="card-image"
                alt="Faye Webster"
                src="https://media.pitchfork.com/photos/5cc0cb6c71b196b2a447fe9a/1:1/w_800,h_800,c_limit/FayeWebster_AtlantaMillionairesClub.jpg"/>
                <div className="card-content">
                <h3 className="title">Kingston - Faye Webster</h3>
                <div className="subtitle">New song I just found! Need to put you guys onto this ASAP!</div>
                <a className="link" href="to-infinity">LISTEN HERE</a>
        </div>

            </div>
        </section>
        </div>
        </div>
        </>
    )
}

export default Home;