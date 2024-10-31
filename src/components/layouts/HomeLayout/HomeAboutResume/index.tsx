import React from "react";
import { Box } from "@chakra-ui/react";
import MovLayout from "../../MovLayout";
import "./style.css"; // Importando o CSS

type SmallAboutProps = {};

export const SmallAbout: React.FC<SmallAboutProps> = () => {
  return (
    <>
      <MovLayout maxWidthContainer="100vw">
        <Box className="small-about-container">
          <Box className="small-about-header">
            <h1 className="small-about-title">Quem somos</h1>
            <hr className="small-about-divider" />
          </Box>
          <Box className="small-about-description">
            <h1 className="small-about-subtitle">
              {" "}
              Bem-vindo à MOV Produtora!
            </h1>
            <p className="small-about-text">
              Aqui transformamos suas ideias em imagens incríveis! Com mais de
              1000 vídeos produzidos, e centenas de clientes satisfeitos, somos
              especialistas em capturar momentos inesquecíveis e criar conteúdos
              visuais de alta qualidade. Nossos serviços incluem:
            </p>
            <ul className="custom-checklist">
              <li className="small-about-text">
                Fotografia Corporativa e Institucional: Capturamos a essência da
                sua marca, destacando o que a torna autêntica e memorável.
              </li>
              <li className="small-about-text">
                Cobertura de Eventos: De aniversários a eventos corporativos,
                registramos cada detalhe com cuidado e criatividade para
                eternizar esses momentos especiais.
              </li>
              <li className="small-about-text">
                Filmagens Aéreas: Oferecemos uma visão diferenciada e
                impressionante, realçando a beleza e a grandiosidade de cada
                projeto.
              </li>
              <li className="small-about-text">
                Animações e Motion Graphics: Transformamos ideias em animações
                envolventes, que informam e encantam o público.
              </li>
            </ul>

            <p className="small-about-text">
              Na MOV acreditamos que cada projeto merece um toque único para ser
              inesquecível. Estamos prontos para transformar suas ideias em
              imagens que emocionam, engajam e inspiram. Conte com a gente para
              dar vida à sua visão e mostrar o melhor da sua história. Vamos
              criar algo incrível juntos!
            </p>
          </Box>
          <Box className="small-about-icons">os ícones vão ficar aqui.</Box>
        </Box>
      </MovLayout>
    </>
  );
};