import React, { useState } from 'react';
import { Box, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Select } from '@chakra-ui/react';
import MovLayout from '../../MovLayout';

export const Portfolio: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('FIlmes Publicitários');

  const tabs = [
    'FIlmes Publicitários',
    'Vídeos Institucionais',
    'Conteúdo',
    'Varejo',
    'REEL',
  ];

  const renderCards = () => (
    <SimpleGrid columns={[1, 1, 2, 3]} spacing={5} width="100%">
      {[...Array(3)].map((_, index) => (
        <Box key={index} bg={'#292a2d'} width={'90%'} height={'300px'} mx="auto" display="flex" justifyContent="center" alignItems="center">
          <Text color="white" textAlign={'center'}>
            Aqui fica o conteúdo da panel específica para {selectedTab}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );

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
          <Box display={{ base: 'none', md: 'block' }}>
            <Tabs isFitted variant="enclosed">
              <TabList>
                {tabs.map((tab) => (
                  <Tab key={tab} onClick={() => setSelectedTab(tab)}>
                    {tab}
                  </Tab>
                ))}
              </TabList>
              <TabPanels>
                {tabs.map((tab) => (
                  <TabPanel key={tab}>
                    <p>{tab}!</p>
                    {renderCards()}
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
          </Box>
          <Box display={{ base: 'block', md: 'none' }} width="90%">
            <Select
              onChange={(e) => setSelectedTab(e.target.value)}
              bg="#292a2d"
              color="white"
              _hover={{ bg: '#373b3f' }}
              mb={4}
              value={selectedTab} // Set the selected value for controlled component
            >
              {tabs.map((tab) => (
                <option key={tab} value={tab} style={{ backgroundColor: '#292a2d', color: 'white' }}>
                  {tab}
                </option>
              ))}
            </Select>
            {renderCards()}
          </Box>
        </Box>
      </MovLayout>
    </>
  );
};
