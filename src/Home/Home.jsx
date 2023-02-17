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

            <div class="product-items">
              <div class="product">
                <div class="product-content">
                  <div class="product-img">
                    <img className="home-img"

                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNgCrcZ_S4dWJxpjltfwUpSrv0QYjsH8xNBQ&usqp=CAU"
                      alt="product image"
                    />
                  </div>
                  <div class="product-btns">
                    <button type="button" class="btn-cart">
                      {" "}
                      add to cart
                      <span>
                        <i class="fas fa-plus"></i>
                      </span>
                    </button>
                    <button type="button" class="btn-buy">
                      {" "}
                      buy now
                      <span>
                        <i class="fas fa-shopping-cart"></i>
                      </span>
                    </button>
                  </div>
                </div>

                <div class="product-info">
                  <div class="product-info-top">
                    <h2 class="sm-title">lifestyle</h2>
                    <div class="rating">
                      <div class="rating-stars">
                        <input type="radio" name="rating" id="rs0" checked />
                        <label for="rs0"></label>
                        <input type="radio" name="rating" id="rs1" />
                        <label for="rs1"></label>
                        <input type="radio" name="rating" id="rs2" />
                        <label for="rs2"></label>
                        <input type="radio" name="rating" id="rs3" />
                        <label for="rs3"></label>
                        <input type="radio" name="rating" id="rs4" />
                        <label for="rs4"></label>
                        <input type="radio" name="rating" id="rs5" />
                        <label for="rs5"></label>
                        <span class="rating-counter"></span>
                      </div>
                    </div>
                  </div>
                  <a href="#" class="product-name">
                    mens shoes DN 23XX, new product
                  </a>
                  <p class="product-price">$ 150.00</p>
                  <p class="product-price">$ 133.00</p>
                </div>

                <div class="off-info">
                  <h2 class="sm-title">25% off</h2>
                </div>
              </div>

              <div class="product">
                <div class="product-content">
                  <div class="product-img">
                    <img className="home-img"
                      src="https://i.pinimg.com/736x/93/d5/eb/93d5ebbf6fcd1618dda88e52f02533f7.jpg"
                      alt="product image"
                    />
                  </div>
                  <div class="product-btns">
                    <button type="button" class="btn-cart">
                      {" "}
                      add to cart
                      <span>
                        <i class="fas fa-plus"></i>
                      </span>
                    </button>
                    <button type="button" class="btn-buy">
                      {" "}
                      buy now
                      <span>
                        <i class="fas fa-shopping-cart"></i>
                      </span>
                    </button>
                  </div>
                </div>

                <div class="product-info">
                  <div class="product-info-top">
                    <h2 class="sm-title">lifestyle</h2>
                    <div class="rating">
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="far fa-star"></i>
                      </span>
                    </div>
                  </div>
                  <a href="#" class="product-name">
                    mens shoes DN 23XX, new product
                  </a>
                  <p class="product-price">$ 150.00</p>
                  <p class="product-price">$ 133.00</p>
                </div>
              </div>

              <div class="product">
                <div class="product-content">
                  <div class="product-img">
                    <img className="home-img"
                      src="data:image/jpeg;base64,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"
                      alt="product image"
                    />
                  </div>
                  <div class="product-btns">
                    <button type="button" class="btn-cart">
                      {" "}
                      add to cart
                      <span>
                        <i class="fas fa-plus"></i>
                      </span>
                    </button>
                    <button type="button" class="btn-buy">
                      {" "}
                      buy now
                      <span>
                        <i class="fas fa-shopping-cart"></i>
                      </span>
                    </button>
                  </div>
                </div>

                <div class="product-info">
                  <div class="product-info-top">
                    <h2 class="sm-title">lifestyle</h2>
                    <div class="rating">
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="far fa-star"></i>
                      </span>
                    </div>
                  </div>
                  <a href="#" class="product-name">
                    mens shoes DN 23XX, new product
                  </a>
                  <p class="product-price">$ 150.00</p>
                  <p class="product-price">$ 133.00</p>
                </div>
              </div>

              <div class="product">
                <div class="product-content">
                  <div class="product-img">
                    <img className="home-img"
                      src="data:image/jpeg;base64,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"
                      alt="product image"
                    />
                  </div>
                  <div class="product-btns">
                    <button type="button" class="btn-cart">
                      {" "}
                      add to cart
                      <span>
                        <i class="fas fa-plus"></i>
                      </span>
                    </button>
                    <button type="button" class="btn-buy">
                      {" "}
                      buy now
                      <span>
                        <i class="fas fa-shopping-cart"></i>
                      </span>
                    </button>
                  </div>
                </div>

                <div class="product-info">
                  <div class="product-info-top">
                    <h2 class="sm-title">lifestyle</h2>
                    <div class="rating">
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="far fa-star"></i>
                      </span>
                    </div>
                  </div>
                  <a href="#" class="product-name">
                    mens shoes DN 23XX, new product
                  </a>
                  <p class="product-price">$ 150.00</p>
                  <p class="product-price">$ 133.00</p>
                </div>

                <div class="off-info">
                  <h2 class="sm-title">25% off</h2>
                </div>
              </div>

              <div class="product">
                <div class="product-content">
                  <div class="product-img">
                    <img className="home-img"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxJFCocBsuEM7Eb6dvumOBLU-wGF8kjJbOqQ&usqp=CAU"
                      alt="product image"
                    />
                  </div>
                  <div class="product-btns">
                    <button type="button" class="btn-cart">
                      {" "}
                      add to cart
                      <span>
                        <i class="fas fa-plus"></i>
                      </span>
                    </button>
                    <button type="button" class="btn-buy">
                      {" "}
                      buy now
                      <span>
                        <i class="fas fa-shopping-cart"></i>
                      </span>
                    </button>
                  </div>
                </div>

                <div class="product-info">
                  <div class="product-info-top">
                    <h2 class="sm-title">lifestyle</h2>
                    <div class="rating">
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="far fa-star"></i>
                      </span>
                    </div>
                  </div>
                  <a href="#" class="product-name">
                    womens shoes DN 23XX, new product
                  </a>
                  <p class="product-price">$ 150.00</p>
                  <p class="product-price">$ 133.00</p>
                </div>
              </div>

              <div class="product">
                <div class="product-content">
                  <div class="product-img">
                    <img className="home-img"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEkpIbj7oCBy1mXZERhHNvCoEQIAjZZZgTH2BirbKCgbNZZYMN_Fuj_E4Y-tEE2KF_xO0&usqp=CAU"
                      alt="product image"
                    />
                  </div>
                  <div class="product-btns">
                    <button type="button" class="btn-cart">
                      {" "}
                      add to cart
                      <span>
                        <i class="fas fa-plus"></i>
                      </span>
                    </button>
                    <button type="button" class="btn-buy">
                      {" "}
                      buy now
                      <span>
                        <i class="fas fa-shopping-cart"></i>
                      </span>
                    </button>
                  </div>
                </div>

                <div class="product-info">
                  <div class="product-info-top">
                    <h2 class="sm-title">lifestyle</h2>
                    <div class="rating">
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="far fa-star"></i>
                      </span>
                    </div>
                  </div>
                  <a href="#" class="product-name">
                    womens shoes DN 23XX, new product
                  </a>
                  <p class="product-price">$ 150.00</p>
                  <p class="product-price">$ 133.00</p>
                </div>
              </div>

              <div class="product">
                <div class="product-content">
                  <div class="product-img">
                    <img className="home-img"
                      src="https://ae01.alicdn.com/kf/S44e52fcd52434347a073252c561a1897v.jpg?width=800&height=800&hash=1600"
                      alt="product image"
                    />
                  </div>
                  <div class="product-btns">
                    <button type="button" class="btn-cart">
                      {" "}
                      add to cart
                      <span>
                        <i class="fas fa-plus"></i>
                      </span>
                    </button>
                    <button type="button" class="btn-buy">
                      {" "}
                      buy now
                      <span>
                        <i class="fas fa-shopping-cart"></i>
                      </span>
                    </button>
                  </div>
                </div>

                <div class="product-info">
                  <div class="product-info-top">
                    <h2 class="sm-title">lifestyle</h2>
                    <div class="rating">
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="far fa-star"></i>
                      </span>
                    </div>
                  </div>
                  <a href="#" class="product-name">
                    womens shoes DN 23XX, new product
                  </a>
                  <p class="product-price">$ 150.00</p>
                  <p class="product-price">$ 133.00</p>
                </div>
              </div>

              <div class="product">
                <div class="product-content">
                  <div class="product-img">
                    <img className="home-img"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNgFjveaOjcAJ-lO87nvH8FfupFoUVDuVozw&usqp=CAU"
                      alt="product image"
                    />
                  </div>
                  <div class="product-btns">
                    <button type="button" class="btn-cart">
                      {" "}
                      add to cart
                      <span>
                        <i class="fas fa-plus"></i>
                      </span>
                    </button>
                    <button type="button" class="btn-buy">
                      {" "}
                      buy now
                      <span>
                        <i class="fas fa-shopping-cart"></i>
                      </span>
                    </button>
                  </div>
                </div>

                <div class="product-info">
                  <div class="product-info-top">
                    <h2 class="sm-title">lifestyle</h2>
                    <div class="rating">
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="fas fa-star"></i>
                      </span>
                      <span>
                        <i class="far fa-star"></i>
                      </span>
                    </div>
                  </div>
                  <a href="#" class="product-name">
                    womens shoes DN 23XX, new product
                  </a>
                  <p class="product-price">$ 150.00</p>
                  <p class="product-price">$ 133.00</p>
                </div>

                <div class="off-info">
                  <h2 class="sm-title">35% off</h2>
                </div>
              </div>
            </div>
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
