import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import { Hero } from '../../components/Hero'
import { Navbar } from '../../components/Navbar'
import { Clients } from '../../components/layouts/HomeLayout/Clients/Clients'
import { Contact } from '../../components/layouts/HomeLayout/Contact/Contact'
import { SmallAbout } from '../../components/layouts/HomeLayout/HomeAboutResume'
import { Portfolio } from '../../components/layouts/HomeLayout/Portfolio/Portfolio'

const HomePage: React.FC = () => {
  return (
    <Box backgroundColor={'#171717'} zIndex={-1}>
      <Stack position={'relative'}>
        <Box position={'absolute'} width={'100%'} zIndex={1000}>
          <Navbar hiddenLogo bgColor={'transparent'} />
        </Box>
        <Hero />
        <SmallAbout />
        <Portfolio />
        <Contact />
        <Clients />
      </Stack>
    </Box>
  )
}

export default HomePage
