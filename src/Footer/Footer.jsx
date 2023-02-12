import React from "react";
import "./Footer.css";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <footer class="footer">
        <div class="footer_wrap">
          <div class="row">
            <div class="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">affiliate program</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">shipping</a>
                </li>
                <li>
                  <a href="#">returns</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <a href="#">watch</a>
                </li>
                <li>
                  <a href="#">bag</a>
                </li>
                <li>
                  <a href="#">shoes</a>
                </li>
                <li>
                  <a href="#">dress</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#">
                  <i class="">
                    <MDBBtn
                      outline
                      color="light"
                      floating
                      className="m-1"
                      href="https://ru-ru.facebook.com/rentikkg/"
                      role="button"
                    >
                      <MDBIcon fab icon="facebook-f" />
                    </MDBBtn>
                  </i>
                </a>
                <a href="#">
                  <i class="">
                    <MDBBtn
                      outline
                      color="light"
                      floating
                      className="m-1"
                      href="https://twitter.com/Rentik_ES"
                      role="button"
                    >
                      <MDBIcon fab icon=" fa-twitter" />
                    </MDBBtn>
                  </i>
                </a>
                <a href="#">
                  <i class="">
                    <MDBBtn
                      outline
                      color="light"
                      floating
                      className="m-1"
                      href="https://instagram.com/rentik.kg?igshid=Yzg5MTU1MDY="
                      role="button"
                    >
                      <MDBIcon fab icon="instagram" />
                    </MDBBtn>
                  </i>
                </a>
                <a href="#">
                  <i class="">
                    <MDBBtn
                      outline
                      color="light"
                      floating
                      className="m-1"
                      href="https://rentik.kg/rucw3"
                      role="button"
                    >
                      <MDBIcon fab icon="fab fa-google" />
                    </MDBBtn>
                  </i>
                </a>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
