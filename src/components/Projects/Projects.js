import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus trabalhos <strong className="purple">Recentes </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns projetos que trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Zoo-Functions"
              description="O Zoo Functions foi desenvolvido durante o módulo de fundamentos na Trybe, ele foi proposto como forma de praticar HOFs, Higher Order Functions, que são funções que aceitam outras funções como parâmetros e também podem retornar uma função.

              A estrutura pretendida simulava uma aplicação de relatório de um zoológico; com sistema de informações a respeito dos animais presentes no zoológico, colaboradores, horários de funcionamento e uma tabela de preços variando de acordo com a idade das pessoas que o visitam."
              ghLink="https://github.com/Riandev1/zoo-functions"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Project-Tunes"
              description="O objetivo deste projeto é criar um aplicativo de reprodução de música usando React. Com esta aplicação, é possível selecionar sua banda ou álbum favorito, ouvir previews das músicas, salvar suas músicas favoritas e ainda criar um perfil personalizado com uma foto, nome, email e descrição. Tudo isso utilizando uma interface amigável e intuitiva. O projeto foi uma ótima oportunidade para aprender mais sobre desenvolvimento web com React e aprimorar minhas habilidades em programação."
              ghLink="https://github.com/Riandev1/project-tunes"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Trybe-Warts"
              description="Neste projeto, criei uma página de formulário inspirada na Escola de Magia de Trybewarts, onde os estudantes podem compartilhar seus comentários e opiniões. A temática do projeto é uma homenagem à famosa obra Harry Potter de J.K. Rowling, pois a programação é nossa maneira de nos aproximarmos do mundo mágico da criatividade e da inovação. Mas fique tranquilo, mesmo que você não seja um fã da série, ainda pode apreciar a magia da programação neste projeto!"
              ghLink="https://github.com/Riandev1/project-trybewarts"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Pixel Art"
              description="Neste projeto, foi implementado um editor de arte com pixels em que a pessoa usuária poderá escolher uma cor em uma paleta de cores e poderá pintar o que quiser em um quadro branco. Foi um projeto realizado enquanto estudante de web full-stack na Trybe."
              ghLink="https://github.com/Riandev1/pixel-art"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Unit-Tests"
              description="O teste unitário é uma verificação feita com uma pequena porção de código, uma unidade de um software. Ou seja, é diferente do teste geral, que se dedica a atestar o fluxo do sistema, com as funcionalidades principais."
              ghLink="https://github.com/Riandev1/Unit-Tests"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Trybe Wallet"
              description="No projeto Trybe Wallet, eu desenvolvi uma poderosa ferramenta de controle financeiro com um conversor de moedas integrado. Com esta aplicação, os usuários podem facilmente gerenciar suas despesas, adicionando, removendo e editando gastos com facilidade. Além disso, a Trybe Wallet fornece uma visão clara de todas as despesas em uma tabela, simplificando o entendimento de como o dinheiro está sendo gasto."
              ghLink="https://github.com/Riandev1/Trybe-Wallet"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
