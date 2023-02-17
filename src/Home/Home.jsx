import React from "react";
import './Home.css'

const Home = () => {
  return <div>
     <div>
      <div>
        <div class="products">
          <div class="container">
            <h1 class="lg-title">Special Shoes With Offers</h1>
            <p class="text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quos sit consectetur, ipsa voluptatem vitae
              necessitatibus dicta veniam, optio, possimus assumenda laudantium.
              Temporibus, quis cum.
            </p>

          </div>
          </div>

        <div class="product-collection">
          <div class="container">
            <div class="product-collection-wrapper">
              <div class="product-col-left flex">
                <div class="product-col-content">
                  <h2 class="sm-title">men's shoes </h2>
                  <h2 class="md-title">men's collection </h2>
                  <p class="text-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Molestiae consequatur facilis eligendi quibusdam
                    voluptatibus exercitationem autem voluptatum, beatae
                    architecto odit, quisquam repellat. Deleniti, architecto ab.
                  </p>
                  <button type="button" class="btn-dark">
                    Shop now
                  </button>
                </div>
              </div>

              <div class="product-col-right">
                <div class="product-col-r-top flex">
                  <div class="product-col-content">
                    <h2 class="sm-title">women's dresses </h2>
                    <h2 class="md-title">women's collection </h2>
                    <p class="text-light">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Molestiae consequatur facilis eligendi quibusdam
                      voluptatibus exercitationem autem voluptatum, beatae
                      architecto odit, quisquam repellat. Deleniti, architecto
                      ab.
                    </p>
                    <button type="button" class="btn-dark">
                      Shop now
                    </button>
                  </div>
                </div>

                <div class="product-col-r-bottom">
                  <div class="flex">
                    <div class="product-col-content">
                      <h2 class="sm-title">summer sale </h2>
                      <h2 class="md-title">Extra 50% Off </h2>
                      <p class="text-light">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Molestiae consequatur facilis eligendi quibusdam
                        voluptatibus exercitationem autem voluptatum, beatae
                        architecto odit, quisquam repellat. Deleniti, architecto
                        ab.
                      </p>
                      <button type="button" class="btn-dark">
                        Shop now
                      </button>
                    </div>
                  </div>

                  <div class="flex">
                    <div class="product-col-content">
                      <h2 class="sm-title">shoes </h2>
                      <h2 class="md-title">best sellers </h2>
                      <p class="text-light">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Molestiae consequatur facilis eligendi quibusdam
                        voluptatibus exercitationem autem voluptatum, beatae
                        architecto odit, quisquam repellat. Deleniti, architecto
                        ab.
                      </p>
                      <button type="button" class="btn-dark">
                        Shop now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="background"></div>
        {/* <div class="background-texture"></div> */}

        <section class="carousel">
          <h2 class="categories__title">My List</h2>
          <div class="carousel__container">
            <div class="carousel-item">
              <img
                class="carousel-item__img"
                src="https://ae04.alicdn.com/kf/H9ab04f1360784ef9a144ecf2897aa445A.png_350x350.png"
                alt="people"
              />
              <div class="carousel-item__details">
                <div class="controls">
                  <span class="fas fa-play-circle"></span>
                  <span class="fas fa-plus-circle"></span>
                </div>
                <h5 class="carousel-item__details--title">Descriptive Title</h5>
                <h6 class="carousel-item__details--subtitle">
                  Date and Duration
                </h6>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="carousel-item__img"
                src="https://ae04.alicdn.com/kf/S364530956363456eb424a3178dc1ed16y.jpg_350x350.jpg"
                alt="people"
              />
              <div class="carousel-item__details">
                <div class="controls">
                  <span class="fas fa-play-circle"></span>
                  <span class="fas fa-plus-circle"></span>
                </div>
                <h5 class="carousel-item__details--title">Descriptive Title</h5>
                <h6 class="carousel-item__details--subtitle">
                  Date and Duration
                </h6>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="carousel-item__img"
                src="https://img.joomcdn.net/d3d1ea98597862397c1ddf74e397df5f44703784_original.jpeg"
                alt="people"
              />
              <div class="carousel-item__details">
                <div class="controls">
                  <span class="fas fa-play-circle"></span>
                  <span class="fas fa-plus-circle"></span>
                </div>
                <h5 class="carousel-item__details--title">Descriptive Title</h5>
                <h6 class="carousel-item__details--subtitle">
                  Date and Duration
                </h6>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="carousel-item__img"
                src="https://ae04.alicdn.com/kf/Scb986d6ed1654d3faeca854ee7e4a3406.jpg_350x350.jpg"
                alt="people"
              />
              <div class="carousel-item__details">
                <div class="controls">
                  <span class="fas fa-play-circle"></span>
                  <span class="fas fa-plus-circle"></span>
                </div>
                <h5 class="carousel-item__details--title">Descriptive Title</h5>
                <h6 class="carousel-item__details--subtitle">
                  Date and Duration
                </h6>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="carousel-item__img"
                src="https://ae04.alicdn.com/kf/S4be30dceb96d435d9fa633ab2fc05ff39.jpg_350x350.jpg"
                alt="people"
              />
              <div class="carousel-item__details">
                <div class="controls">
                  <span class="fas fa-play-circle"></span>
                  <span class="fas fa-plus-circle"></span>
                </div>
                <h5 class="carousel-item__details--title">Descriptive Title</h5>
                <h6 class="carousel-item__details--subtitle">
                  Date and Duration
                </h6>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="carousel-item__img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpsQpj27NrrycSdqM7ChR2-VGrAfNxtMYKqyz58yqVzTm1rn7MvvJarI_o2zGqHqMMbiU&usqp=CAU"
                alt="people"
              />
              <div class="carousel-item__details">
                <div class="controls">
                  <span class="fas fa-play-circle"></span>
                  <span class="fas fa-plus-circle"></span>
                </div>
                <h5 class="carousel-item__details--title">Descriptive Title</h5>
                <h6 class="carousel-item__details--subtitle">
                  Date and Duration
                </h6>
              </div>
            </div>

            <div class="carousel-item">
              <img
                class="carousel-item__img"
                src="https://ae04.alicdn.com/kf/Se561313622c749179bfc80f38fafc073O.jpg_350x350.jpg"
                alt="people"
              />
              <div class="carousel-item__details">
                <div class="controls">
                  <span class="fas fa-play-circle"></span>
                  <span class="fas fa-plus-circle"></span>
                </div>
                <h5 class="carousel-item__details--title">Descriptive Title</h5>
                <h6 class="carousel-item__details--subtitle">
                  Date and Duration
                </h6>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>;
};

export default Home;
