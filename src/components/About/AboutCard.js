import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá a todos, eu sou <span className="purple">Rian Silva </span>
            de <span className="purple"> Recife, Pernambuco, Brasil.</span>
            <br /> Sou um estudante da Trybe, estou concluindo o curso em breve.
            <br />
            Mas eu sou um desenvolvedor FullStack.
            <br />
            <br />
            Além da codificação, algumas outras atividades que adoro fazer!!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar jogos.
            </li>
            <li className="about-activity">
              <ImPointRight /> Ler livros.
            </li>
            <li className="about-activity">
              <ImPointRight /> Exercícios.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Acredite nos seus sonhos, foi Deus quem criou!"{" "}
          </p>
          <footer className="blockquote-footer">Rian</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
