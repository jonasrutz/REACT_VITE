import { useState } from 'react'
import reactLogo from './assets/react.svg'
import YoutubeLogo from "./Images/Youtube Logo.png"
import SpotifyLogo from "./Images/Spotify Logo.png"
import FacebookLogo from "./Images/Facebook Logo.png"
import Members from "./Images/Band Members.png"
import viteLogo from '/vite.svg'
import './App.css'
import "./store.jsx"
import "./App.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<html>
  <head>
    <title>Leaflet | About</title>
    <meta name="description" content="This is the description" />
    <link rel="stylesheet" href="App.css" />
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
    </header>

    <section class="content-section container">
      <h2 class="section-header">ABOUT</h2>
      <img class="about-band-image" src={Members} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum
        nulla accusantium perferendis quam explicabo odit quisquam ea natus?
        Saepe ducimus, minima error alias dolorum consectetur officia architecto
        voluptatem iure sunt eveniet nam, recusandae explicabo, itaque vel
        autem. Accusamus suscipit sit labore sed blanditiis a est rem harum
        expedita veritatis numquam voluptatibus dolore voluptatum sunt
        repellendus explicabo, excepturi beatae perferendis. Numquam dicta quis
        ipsum explicabo suscipit alias placeat, ea, vero minus ducimus
        voluptatibus iste repellendus deleniti? Eos, quas! Voluptatem tempora
        explicabo, corrupti dolor hic iure quo, ipsum voluptates quaerat omnis
        accusamus et vel, necessitatibus doloribus optio. Odio nobis ad
        molestias.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio qui
        consequuntur aut. Nobis debitis ipsum soluta sit itaque officiis impedit
        maiores suscipit magni id harum consequuntur quas delectus culpa, saepe
        nostrum, autem ullam! Assumenda molestiae reprehenderit sunt ducimus id
        saepe porro vitae asperiores eum accusantium? Illum aliquid excepturi
        magni quos.
      </p>
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
