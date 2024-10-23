import React from 'react'
import { Box, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import MovLayout from '../../MovLayout'

type PortfolioProps = {}

export const Portfolio: React.FC<PortfolioProps> = () => {
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
            <h1 style={{ fontSize: '50px' }}>Portfólio</h1>
            <hr style={{ color: 'white', width: '80px', marginLeft: '47%' }} />
          </Box>
          <br />
          <br />
          <Tabs isFitted variant="enclosed">
            <TabList>
              <Tab>FIlmes Publicitários</Tab>
              <Tab>Vídeos Institucionais</Tab>
              <Tab>Conteúdo</Tab>
              <Tab>Varejo</Tab>
              <Tab>REEL</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>FIlmes Publicitários!</p>
                <Box ml={20} mt={10} width={'90%'} justifyContent={'center'} alignItems={'center'}>
                  <SimpleGrid columns={3}>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                  </SimpleGrid>{' '}
                </Box>
              </TabPanel>
              <TabPanel>
                <p>Vídeos Institucionais!</p>
                <Box ml={20} mt={10} width={'90%'} justifyContent={'center'} alignItems={'center'}>
                  <SimpleGrid columns={3}>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                  </SimpleGrid>{' '}
                </Box>
              </TabPanel>
              <TabPanel>
                <p>Conteudo!</p>
                <Box ml={20} mt={10} width={'90%'} justifyContent={'center'} alignItems={'center'}>
                  <SimpleGrid columns={3}>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                  </SimpleGrid>{' '}
                </Box>
              </TabPanel>
              <TabPanel>
                <p>Varejo!</p>
                <Box ml={20} mt={10} width={'90%'} justifyContent={'center'} alignItems={'center'}>
                  <SimpleGrid columns={3}>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                  </SimpleGrid>{' '}
                </Box>
              </TabPanel>
              <TabPanel>
                <p>REEL!</p>
                <Box ml={20} mt={10} width={'90%'} justifyContent={'center'} alignItems={'center'}>
                  <SimpleGrid columns={3}>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                    <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                      <Text color="white" textAlign={'center'}>
                        Aqui fica o conteúdo da panel específica
                      </Text>
                    </Box>
                  </SimpleGrid>{' '}
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </MovLayout>
    </>
  )
}
