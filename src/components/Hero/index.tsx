import React from 'react'
import { Box, Stack, Text } from '@chakra-ui/react'
import logoMovWhite from '../../assets/img/logo-white.png'
import heroMovie from '../../assets/videos/business.mp4'
import WhatsAppButton from '../WhatsappButton'

type HeroProps = {}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <>
      <Box zIndex={1} position="relative" width="100%" height="100vh" display="flex" alignItems="center" justifyContent="center" overflow="hidden">
        <Box
          as="video"
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            top: 0,
            left: 0,
            zIndex: -1
          }}>
          <source src={heroMovie} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </Box>
        <Stack
          position="absolute"
          width="100vw"
          height="110px"
          bgColor="rgba(30, 30, 30, 0.066)"
          backdropFilter="blur(30px)"
          display="flex"
          alignItems="center"
          justifyContent="center">
          <img width="30%" height="auto" src={logoMovWhite} alt="Logo" />
          <Text
            textShadow={'0px 0px 10px rgba(0, 0, 0, 0.5), 0px 0px 90px rgba(0, 0, 0, 0.5), 0px 0px 30px rgba(0, 0, 0, 0.5)'}
            fontWeight={400}
            textColor={'white'}
            letterSpacing={6}
            fontSize={'20px'}>
            Produzindo Filmes que Impulsionam Negócios
          </Text>
        </Stack>
        <Box position="absolute" bottom={160}>
          <WhatsAppButton phoneNumber="85996285377" />
        </Box>
      </Box>
    </>
  )
}
