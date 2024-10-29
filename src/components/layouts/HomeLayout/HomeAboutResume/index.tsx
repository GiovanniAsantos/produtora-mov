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
            <p className="small-about-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
              reprehenderit quasi asperiores deleniti odit expedita nulla?
              Nostrum, quos doloribus animi earum eligendi quibusdam quae
              dignissimos eaque ex culpa a quas. Ratione maiores dolorem minima,
              id exercitationem ex quam dolores numquam nobis eum magni quisquam
              odio molestiae doloremque impedit ipsa reprehenderit qui? Qui odio
              aperiam assumenda ullam perspiciatis, nemo error sit.
            </p>
          </Box>
          <Box className="small-about-icons">os ícones vão ficar aqui.</Box>
        </Box>
      </MovLayout>
    </>
  );
};
