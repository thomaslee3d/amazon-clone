import React from 'react'
import "./Home.css"
import Products from "./Products.js"
function Home() {
    return (
      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        {/* product params(props) id title price rating image */}
        <div className="home__row">
          <Products
            id="12221341"
            title="Rubber Ducky"
            price={1.99}
            rating={5}
            image={
              "https://www.ourgreenhouse.com/v/vspfiles/photos/1131DUCK-2T.jpg"
            }
          />
          <Products
            id="12321041"
            title="The Shadows"
            price={13.99}
            rating={5}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/41U1hD774eL._SX327_BO1,204,203,200_.jpg"
            }
          />
        </div>
        <div className="home__row">
          <Products
            id="12321241"
            title="I Pad"
            price={499.99}
            rating={4}
            image={
              "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-201911_FMT_WHH?wid=2000&amp;hei=2000&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1573800147324"
            }
          />
          <Products
            id="12921341"
            title="Lego Playset"
            price={49.99}
            rating={5}
            image={
              "https://www.lego.com/cdn/cs/set/assets/blt5c961fa3e9b716ec/10698.jpg?fit=bounds&format=jpg&quality=80&auto=webp&width=528&height=528&dpr=1"
            }
          />
          <Products
            id="12321348"
            title="Umbrella"
            price={13.99}
            rating={5}
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTg_uAjIKZ4u8CZj4puNyhC5HpEQ9nXadANaw&usqp=CAU"
            }
          />
        </div>
        <div className="home__row">
          <Products
            id="12351341"
            title="Blender"
            price={49.99}
            rating={5}
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2D0bbn7yEeBUo1IhCiMvaQ0hbcqez4al0AHvA5rxnssMVFzTAm3v1zE8hTCS7zZj5OU6i3MQ&usqp=CAc"
            }
          />
        </div>
      </div>
    );
}
export default Home
