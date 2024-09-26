import { useState } from 'react'
import reactLogo from './assets/react.svg'
import YoutubeLogo from "./Images/Youtube Logo.png"
import SpotifyLogo from "./Images/Spotify Logo.png"
import FacebookLogo from "./Images/Facebook Logo.png"
import Album1 from "./Images/Album 1.png"
import Album2 from "./Images/Album 2.png"
import Album3 from "./Images/Album 3.png"
import Album4 from "./Images/Album 4.png"
import Shirt from "./Images/Shirt.png"
import Coffee from "./Images/Cofee.png"
import viteLogo from '/vite.svg'
import './App.css'
import "./about.jsx"
import "./App.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<html>
  <head>
    <title>Leaflet | Store</title>
    <meta name="description" content="This is the description" />
    <link rel="stylesheet" href="App.css" />
  </head>
  <body>
    <header class="main-header">
      <nav class="main-nav nav">
        <ul>
        <li><a href="index.html">HOME</a></li>
          <li><a href="store.html">STORE</a></li>
          <li><a href="about.html">ABOUT</a></li>
        </ul>
      </nav>
      <h1 class="band-name band-name-large">Leaflet</h1>
    </header>
    <section class="container content-section">
      <h2 class="section-header">MUSIC</h2>
      <div class="shop-items">
        <div class="shop-item">
          <span class="shop-item-title">Album 1</span>
          <img class="shop-item-image" src={Album1} />
          <div class="shop-item-details">
            <span class="shop-item-price">$12.99</span>
            <button class="btn btn-primary shop-item-button" type="button">
              ADD TO CART
            </button>
          </div>
        </div>
        <div class="shop-item">
          <span class="shop-item-title">Album 2</span>
          <img class="shop-item-image" src={Album2} />
          <div class="shop-item-details">
            <span class="shop-item-price">$14.99</span>
            <button class="btn btn-primary shop-item-button" type="button">
              ADD TO CART
            </button>
          </div>
        </div>
        <div class="shop-item">
          <span class="shop-item-title">Album 3</span>
          <img class="shop-item-image" src={Album3} />
          <div class="shop-item-details">
            <span class="shop-item-price">$9.99</span>
            <button class="btn btn-primary shop-item-button" type="button">
              ADD TO CART
            </button>
          </div>
        </div>
        <div class="shop-item">
          <span class="shop-item-title">Album 4</span>
          <img class="shop-item-image" src={Album4} />
          <div class="shop-item-details">
            <span class="shop-item-price">$19.99</span>
            <button class="btn btn-primary shop-item-button" type="button">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="container content-section">
      <h2 class="section-header">MERCH</h2>
      <div class="shop-items">
        <div class="shop-item">
          <span class="shop-item-title">T-Shirt</span>
          <img class="shop-item-image" src={Shirt} />
          <div class="shop-item-details">
            <span class="shop-item-price">$19.99</span>
            <button class="btn btn-primary shop-item-button" type="button">
              ADD TO CART
            </button>
          </div>
        </div>
        <div class="shop-item">
          <span class="shop-item-title">Coffee Cup</span>
          <img class="shop-item-image" src={Coffee} />
          <div class="shop-item-details">
            <span class="shop-item-price">$6.99</span>
            <button class="btn btn-primary shop-item-button" type="button">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="container content-section">
      <h2 class="section-header">CART</h2>
      <div class="cart-row">
        <span class="cart-item cart-header cart-column">ITEM</span>
        <span class="cart-price cart-header cart-column">PRICE</span>
        <span class="cart-quantity cart-header cart-column">QUANTITY</span>
      </div>
      <div class="cart-items">
        <div class="cart-row">
          <div class="cart-item cart-column">
            <img
              class="cart-item-image"
              src={Shirt}
              width="100"
              height="100"
            />
            <span class="cart-item-title">T-Shirt</span>
          </div>
          <span class="cart-price cart-column">$19.99</span>
          <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" />
            <button class="btn btn-danger" type="button">REMOVE</button>
          </div>
        </div>
        <div class="cart-row">
          <div class="cart-item cart-column">
            <img
              class="cart-item-image"
              src={Album3}
              width="100"
              height="100"
            />
            <span class="cart-item-title">Album 3</span>
          </div>
          <span class="cart-price cart-column">$9.99</span>
          <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="2" />
            <button class="btn btn-danger" type="button">REMOVE</button>
          </div>
        </div>
      </div>
      <div class="cart-total">
        <strong class="cart-total-title">Total</strong>
        <span class="cart-total-price">$39.97</span>
      </div>
      <button class="btn btn-primary btn-purchase" type="button">
        PURCHASE
      </button>
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
