import studioPhoto from '../../assets/img/studioPhoto.jpg'
import { Box, Button, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import CardProps from '../../components/cards'
import { Navbar } from '../../components/Navbar'
import MovLayout from '../../components/layouts/MovLayout'

type AboutPageProps = {}

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <MovLayout maxWidthContainer="100vw">
      <Navbar backgroundColor={'#171717'} width={'100%'} />
      <Box display="block" backgroundColor={'#171717'} textAlign={'left'}>
        <Box width={'100%'} height={600} bgGradient="linear(to-b, transparent, #171717) !important">
          <Image src={`${studioPhoto}`} alt="Imagem de Exemplo" shadow="lg" objectFit="cover" width="100%" height="100%" />
        </Box>
        <Box display={'flex'} mt={4} width={'100%'} justifyContent={'space-around'}>
          <Box width={'45%'}>
            <Text color="#4497B3" fontWeight={900} fontSize="25px">
              História___
            </Text>
            <Text color="white" fontWeight={900} fontSize="45px" textAlign={'left'}>
              Bem-vindo à nossa página sobre!
            </Text>
            <Text color="white" fontWeight={900} fontSize="25px" textAlign={'left'}>
              Aqui você encontrará informações sobre a nossa empresa e o que fazemos.
            </Text>
            <Text color="white" textAlign={'left'}>
              Somos uma equipe dedicada a fornecer as melhores soluções e serviços para nossos clientes. Nossa missão é garantir a satisfação total e
              a excelência em tudo o que fazemos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam doloremque fugiat beatae quae
              laboriosam quisquam omnis nobis, dolorum modi. Quod, voluptates, autem nam exercitationem maiores illum harum nihil totam, molestias
              itaque incidunt quibusdam ipsa sit similique vitae natus officia? Eaque numquam voluptates itaque, quas tenetur laudantium temporibus
              repellat recusandae soluta.
            </Text>
          </Box>
          <Box textAlign={'center'} width={'45%'}>
            <Text color="white" fontSize={'50px'}>
              Imagens
            </Text>
          </Box>
        </Box>

        <Box display={'block'} mt={60} width={'100%'} justifyContent={'space-around'}>
          <Box width={'100%'}>
            <Text ml={'2.5%'} color="#4497B3" fontWeight={900} fontSize="25px">
              Metodologia___
            </Text>
          </Box>
          <Box display={'flex'} justifyContent={'space-around'} width={'100%'}>
            <Box width={'45%'}>
              <Text color="white" fontWeight={900} fontSize="45px" textAlign={'left'}>
                É assim que gosto de trabalhar
              </Text>
            </Box>
            <Box width={'45%'}>
              <Text color="white" textAlign={'left'}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et distinctio esse reiciendis provident pariatur eveniet est nobis minima
                non natus reprehenderit magni corrupti consequuntur blanditiis, cupiditate cum dignissimos eligendi similique, voluptate ipsum
                repudiandae.
              </Text>
            </Box>
          </Box>

          <Box ml={20} mt={10} width={'90%'}>
            <SimpleGrid columns={3} spacing={4}>
              <CardProps title="Título 1" icon={FaInfoCircle} description="This is a sample description 1." />
              <CardProps title="Título 2" icon={FaInfoCircle} description="This is a sample description 2." />
              <CardProps title="Título 3" icon={FaInfoCircle} description="This is a sample description 3." />
              <CardProps title="Título 4" icon={FaInfoCircle} description="This is a sample description 4." />
              <CardProps title="Título 5" icon={FaInfoCircle} description="This is a sample description 5." />
              <CardProps title="Título 6" icon={FaInfoCircle} description="This is a sample description 6." />
            </SimpleGrid>{' '}
          </Box>
        </Box>

        <Box display={'block'} mt={60} width={'100%'} justifyContent={'space-around'}>
          <Box width={'100%'}>
            <Text ml={'2.5%'} color="#4497B3" fontWeight={900} fontSize="25px">
              Equipe___
            </Text>
          </Box>
          <Box display={'flex'} justifyContent={'space-around'} width={'100%'}>
            <Box width={'45%'}>
              <Text color="white" fontWeight={900} fontSize="45px" textAlign={'left'}>
                Quem tira suas fotos
              </Text>
            </Box>
            <Box width={'45%'}></Box>
          </Box>

          <Box ml={20} mt={10} width={'90%'} justifyContent={'center'} alignItems={'center'}>
            <SimpleGrid columns={3}>
              <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                <Text color="white" textAlign={'center'}>
                  Aqui fica a foto e uma descrição dinâmica.
                </Text>
              </Box>
              <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                <Text color="white" textAlign={'center'}>
                  Aqui fica a foto e uma descrição dinâmica.
                </Text>
              </Box>
              <Box bg={'#292a2d'} width={'400px'} height={'400px'}>
                <Text color="white" textAlign={'center'}>
                  Aqui fica a foto e uma descrição dinâmica.
                </Text>
              </Box>
            </SimpleGrid>{' '}
          </Box>

          <Box mt={40} display={'block'} justifyContent={'center'} alignItems={'center'}>
            <Box color="white" fontWeight={900} fontSize="45px" textAlign={'center'}>
              <Text>Orçamento</Text>
            </Box>
            <Box color="white" fontWeight={900} textAlign={'center'}>
              <Text>Reúna as informações sobre o projeto que você precisa produzir ou marque uma chamada no formulário a seguir.</Text>
            </Box>
            <Box justifyContent={'center'} alignItems={'center'} width={'100%'}>
              <Button borderRadius={'25px'} backgroundColor={'#4497b3 !important'} width={'150px'} height={'50px'}>
                Contato
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </MovLayout>
  )
}

export default AboutPage
