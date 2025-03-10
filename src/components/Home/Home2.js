import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXE-ME <span className="purple"> APRESENTAR </span>
            </h1>
            <p className="home-about-body">
              Me apaixonei por programação e aprendi muitas coisas. 🤷‍♂️
              <br />
              <br />Sou fluente em Clássicos como
              <i>
                <b className="purple">| JavaScript | TypeScrip | React | Docker | Node | MySql | SQL | Python... </b>
              </i>
              <br />
              <br />
              Minhas áreas de interesse são a construção de páginas:  &nbsp;
              <i>
                <b className="purple">Tecnologias e Web </b> e
                também em áreas realacionadas a {" "}
                <b className="purple">
                Seguranças.
                </b>
              </i>
              <br />
              <br />
              Sempre que possível, também aplico minha paixão por desenvolver produtos com
               <b className="purple">Node.js</b> e
              <i>
                <b className="purple">
                  {" "}
                  C#, .Net e seus Frameworks.
                </b>
              </i>
              &nbsp; Gosto
              <i>
                <b className="purple"> Android e Node.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ME ENCONTRO EM</h1>
            <p>
              Sinta-se á vontade para se  <span className="purple">conectar </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Riandev1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/dev_rian43360"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rian-dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_rian.code/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
