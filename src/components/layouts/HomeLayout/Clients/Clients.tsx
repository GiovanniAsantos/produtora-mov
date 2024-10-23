import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import MovLayout from '../../../../components/layouts/MovLayout'

type ClientsProps = {}

export const Clients: React.FC<ClientsProps> = () => {
  return (
    <>
      <MovLayout maxWidthContainer="100vw">
        <Box
          marginTop={'25vh'}
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
            <h1 style={{ fontSize: '50px' }}>Clients</h1>
            <hr style={{ color: 'white', width: '80px', marginLeft: '47%' }} />
          </Box>
          <br />
          <br />
          <Box ml={20} mt={10} width={'90%'} justifyContent={'center'} alignItems={'center'}>
            <SimpleGrid columns={5} row={3}>
              <Box bg={'#292a2d'} width={'200px'} height={'200px'}>
                <Text color="white" textAlign={'center'}>
                  Aqui fica a imagem do cliente
                </Text>
              </Box>
              <Box bg={'#292a2d'} width={'200px'} height={'200px'}>
                <Text color="white" textAlign={'center'}>
                  Aqui fica a imagem do cliente
                </Text>
              </Box>
              <Box bg={'#292a2d'} width={'200px'} height={'200px'}>
                <Text color="white" textAlign={'center'}>
                  Aqui fica a imagem do cliente
                </Text>
              </Box>
              <Box bg={'#292a2d'} width={'200px'} height={'200px'}>
                <Text color="white" textAlign={'center'}>
                  Aqui fica a imagem do cliente
                </Text>
              </Box>
              <Box bg={'#292a2d'} width={'200px'} height={'200px'}>
                <Text color="white" textAlign={'center'}>
                  Aqui fica a imagem do cliente
                </Text>
              </Box>
              <Box bg={'#292a2d'} width={'200px'} height={'200px'}>
                <Text color="white" textAlign={'center'}>
                  Aqui fica a imagem do cliente
                </Text>
              </Box>
              <Box bg={'#292a2d'} width={'200px'} height={'200px'}>
                <Text color="white" textAlign={'center'}>
                  Aqui fica a imagem do cliente
                </Text>
              </Box>
              <Box bg={'#292a2d'} width={'200px'} height={'200px'}>
                <Text color="white" textAlign={'center'}>
                  Aqui fica a imagem do cliente
                </Text>
              </Box>
              <Box bg={'#292a2d'} width={'200px'} height={'200px'}>
                <Text color="white" textAlign={'center'}>
                  Aqui fica a imagem do cliente
                </Text>
              </Box>
              <Box bg={'#292a2d'} width={'200px'} height={'200px'}>
                <Text color="white" textAlign={'center'}>
                  Aqui fica a imagem do cliente
                </Text>
              </Box>
              <Box bg={'#292a2d'} width={'200px'} height={'200px'}>
                <Text color="white" textAlign={'center'}>
                  Aqui fica a imagem do cliente
                </Text>
              </Box>
              <Box bg={'#292a2d'} width={'200px'} height={'200px'}>
                <Text color="white" textAlign={'center'}>
                  Aqui fica a imagem do cliente
                </Text>
              </Box>
              <Box bg={'#292a2d'} width={'200px'} height={'200px'}>
                <Text color="white" textAlign={'center'}>
                  Aqui fica a imagem do cliente
                </Text>
              </Box>
              <Box bg={'#292a2d'} width={'200px'} height={'200px'}>
                <Text color="white" textAlign={'center'}>
                  Aqui fica a imagem do cliente
                </Text>
              </Box>
              <Box bg={'#292a2d'} width={'200px'} height={'200px'}>
                <Text color="white" textAlign={'center'}>
                  Aqui fica a imagem do cliente
                </Text>
              </Box>
            </SimpleGrid>{' '}
          </Box>
        </Box>
      </MovLayout>
    </>
  )
}
