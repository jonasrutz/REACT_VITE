import { useState } from 'react'
import reactLogo from './assets/react.svg'
import YoutubeLogo from "./Images/Youtube Logo.png"
import SpotifyLogo from "./Images/Spotify Logo.png"
import FacebookLogo from "./Images/Facebook Logo.png"
import viteLogo from '/vite.svg'  
import './App.css'
import "./store.jsx"
import "./about.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<html>
  <head>
    <title>Leaflet</title>
    <meta name="description" content="This is the description" />
    <link rel="stylesheet" href="index.css" />
  </head>
  <body>
    <header class="main-header">
      <nav class="nav main-nav">
        <ul>
        <li><a href="index.html">HOME</a></li>
          <li><a href="store.html">STORE</a></li>
          <li><a href="about.html">ABOUT</a></li>
        </ul>
      </nav>
      <h1 class="band-name band-name-large">Leaflet</h1>
      <div class="container">
        <button type="button" class="btn btn-header">
          Get our Latest Album
        </button>
      </div>
      <button type="button" class="btn btn-header btn-play">&#9658;</button>
    </header>
    <section class="content-section container">
      <h2 class="section-header">TOURS</h2>
      <div>
        <div class="tour-row">
          <span class="tour-item tour-date">JUL 16</span>
          <span class="tour-item tour-city">DETROIT, MI</span>
          <span class="tour-item tour-arena">DTE ENERGY MUSIC THEATRE</span>
          <button type="button" class="tour-item tour-btn btn btn-primary">
            BUY TICKETS
          </button>
        </div>
        <div class="tour-row">
          <span class="tour-item tour-date">JUL 19</span>
          <span class="tour-item tour-city">TORONTO, ON</span>
          <span class="tour-item tour-arena">BUDWEISER STAGE</span>
          <button type="button" class="tour-item tour-btn btn btn-primary">
            BUY TICKETS
          </button>
        </div>
        <div class="tour-row">
          <span class="tour-item tour-date">JUL 22</span>
          <span class="tour-item tour-city">BRISTOW, VA</span>
          <span class="tour-item tour-arena">JIGGY LUBE LIVE</span>
          <button type="button" class="tour-item tour-btn btn btn-primary">
            BUY TICKETS
          </button>
        </div>
        <div class="tour-row">
          <span class="tour-item tour-date">JUL 29</span>
          <span class="tour-item tour-city">PHOENIX, AZ</span>
          <span class="tour-item tour-arena">AK-CHIN PAVILION</span>
          <button type="button" class="tour-item tour-btn btn btn-primary">
            BUY TICKETS
          </button>
        </div>
        <div class="tour-row">
          <span class="tour-item tour-date">AUG 2</span>
          <span class="tour-item tour-city">LAS VEGAS, NV</span>
          <span class="tour-item tour-arena">T-MOBILE ARENA</span>
          <button type="button" class="tour-item tour-btn btn btn-primary">
            BUY TICKETS
          </button>
        </div>
        <div class="tour-row">
          <span class="tour-item tour-date">AUG 7</span>
          <span class="tour-item tour-city">CONCORD, CA</span>
          <span class="tour-item tour-arena">CONCORD PAVILION</span>
          <button type="button" class="tour-item tour-btn btn btn-primary">
            BUY TICKETS
          </button>
        </div>
      </div>
    </section>
    <footer class="main-footer">
      <div class="container main-footer-container">
        <h3 class="band-name">The Generics</h3>
        <ul class="nav footer-nav">
          <li>
            <a href="https://www.youtube.com" target="_blank">
              <img src={YoutubeLogo}  />
            </a>
          </li>
          <li>
            <a href="https://www.spotify.com" target="_blank">
              <img src={SpotifyLogo} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank">
              <img src={FacebookLogo} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </body>
</html>

    </>
  )
}

export default App
