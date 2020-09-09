import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            title="The LeanStartup2: How constant innovative creators"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={3}
          />
          <Product
            title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
            price={15.96}
            image="https://images-na.ssl-images-amazon.com/images/I/41DQoLIfsRL._AC_US327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
            price={15.96}
            image="https://images-na.ssl-images-amazon.com/images/I/41DQoLIfsRL._AC_US327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
            price={15.96}
            image="https://images-na.ssl-images-amazon.com/images/I/41DQoLIfsRL._AC_US327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
            price={15.96}
            image="https://images-na.ssl-images-amazon.com/images/I/41DQoLIfsRL._AC_US327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
            price={15.96}
            image="https://images-na.ssl-images-amazon.com/images/I/41DQoLIfsRL._AC_US327_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
