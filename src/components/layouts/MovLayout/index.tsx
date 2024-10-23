import { Container } from '@chakra-ui/react'
import React from 'react'

interface MovLayoutProps {
  children: React.ReactNode
  maxWidthContainer?: string
}

const MovLayout: React.FC<MovLayoutProps> = ({ children, maxWidthContainer = 'Container.xl' }) => {
  return (
    <>
      <Container centerContent maxW={maxWidthContainer} padding={0}>
        {children}
      </Container>
    </>
  )
}

export default MovLayout
