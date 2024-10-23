import { Box, Button, Input, Stack, Textarea } from '@chakra-ui/react'
import React from 'react'
import MovLayout from '../../../../components/layouts/MovLayout'

type ContactProps = {}

export const Contact: React.FC<ContactProps> = () => {
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
            <h1 style={{ fontSize: '50px' }}>Contato</h1>
            <hr style={{ color: 'white', width: '80px', marginLeft: '47%' }} />
            <br />
            <p>Avenida Bem ali - Bairro LOnge que Só, Ceará - CE Brasil</p>
            <p>99999-8888</p>
          </Box>
          <br />
          <br />
          <Box width={'60%'}>
            <Stack gap={3}>
              <Input placeholder="Nome" size="lg" />
              <Input placeholder="Telefone" size="lg" />
              <Input placeholder="Endereço de E-mail" size="lg" />
              <Textarea placeholder="Mensagem" />
              <Button backgroundColor={'#4497b3 !important'} size="lg">
                Fale Conosco
              </Button>
            </Stack>
          </Box>
        </Box>
      </MovLayout>
    </>
  )
}
