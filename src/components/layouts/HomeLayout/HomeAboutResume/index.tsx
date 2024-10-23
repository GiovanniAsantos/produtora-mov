import React from 'react'
import { Box } from '@chakra-ui/react'
import MovLayout from '../../MovLayout'

type SmallAboutProps = {}

export const SmallAbout: React.FC<SmallAboutProps> = () => {
  return (
    <>
      <MovLayout maxWidthContainer="100vw">
        <Box
          height="50vh"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          textAlign="center"
          width="100%"
          backgroundColor="#171717"
          color="white"
          paddingTop="0px">
          <Box width="100%" alignItems={'center'} justifyContent={'center'} textAlign={'center'}>
            <h1 style={{ fontSize: '50px' }}>Quem sou</h1>
            <hr style={{ color: 'white', width: '80px', marginLeft: '47%' }} />
          </Box>
          <Box height="30vh" textAlign="center" width="90%" display="flex" justifyContent="center" alignItems="center">
            <p style={{ fontSize: '20px', margin: 0 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe reprehenderit quasi asperiores deleniti odit expedita nulla? Nostrum,
              quos doloribus animi earum eligendi quibusdam quae dignissimos eaque ex culpa a quas. Ratione maiores dolorem minima, id exercitationem
              ex quam dolores numquam nobis eum magni quisquam odio molestiae doloremque impedit ipsa reprehenderit qui? Qui odio aperiam assumenda
              ullam perspiciatis, nemo error sit.
            </p>
          </Box>
          <Box height="40px" width="200px" display="flex" justifyContent="center" alignItems="center">
            os ícones vão ficar aqui.
          </Box>
        </Box>
      </MovLayout>
    </>
  )
}
