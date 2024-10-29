import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import newLogo from "../../assets/img/newLogo.png";
import heroMovie from "../../assets/videos/business.mp4";
import WhatsAppButton from "../WhatsappButton";
import InstagramButton from "../InstagramButton";
import './style.css'

type HeroProps = {};

export const Hero: React.FC<HeroProps> = () => {
  return (
    <Box
      zIndex={1}
      position="relative"
      width="100%"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <Box as="video" autoPlay loop muted playsInline className="hero-video">
        <source src={heroMovie} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </Box>
      <Stack position="absolute" width="100vw" className="hero-stack">
        <img className="hero-logo" src={newLogo} alt="Logo" />
        <Text className="hero-text">
          Produzindo Filmes que Impulsionam Negócios
        </Text>
      </Stack>
      <Box className="hero-buttons">
        <WhatsAppButton phoneNumber="85996394456" />
        <InstagramButton username="mov_produtora" />
      </Box>
    </Box>
  );
};
