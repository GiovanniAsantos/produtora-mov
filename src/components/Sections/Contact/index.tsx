import { Box, Button, Container, FormControl, Grid, GridItem, HStack, Icon, Input, Link, Text, Textarea, useToast, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

type ContactFormProps = {
  onSubmit: (formData: FormData) => Promise<void>
}

type FormData = {
  name: string
  email: string
  whatsapp: string
  subject: string
  message: string
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    whatsapp: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await onSubmit(formData)
      toast({
        title: 'Mensagem enviada com sucesso!',
        status: 'success',
        duration: 3000,
        isClosable: true
      })
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      toast({
        title: 'Ocorreu um erro ao enviar a mensagem.',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container padding={0} maxW="container.xl">
      <HStack spacing={8} align="center" justify="space-between">
        <VStack align="start" maxW={'xl'} spacing={4}>
          <Text fontSize="70px" color="gray.300" lineHeight={0.9} fontWeight="bold">
            Entre em contato com a gente!
          </Text>
          <Box maxW="sm">
            <Text fontSize="md" color="gray.300">
              E-mail, whatsapp, ou prencha o formulario ao lado para gente entender como podemos ajudar.
            </Text>
          </Box>
          <Text fontSize="md" textColor="gray.300">
            <Link href="tel:+5511999999999" isExternal>
              +55 11 99999-9999
            </Link>
          </Text>

          <Text fontSize="md" textColor="gray.300">
            <Link href="mailto:contato@exemplo.com" isExternal>
              contato@exemplo.com
            </Link>
          </Text>

          <HStack spacing={4}>
            <Link href="https://www.instagram.com" isExternal>
              <Icon as={FaInstagram} boxSize={6} color={'gray.400'} />
            </Link>
            <Link href="https://www.facebook.com" isExternal>
              <Icon as={FaFacebookF} boxSize={6} color={'gray.400'} />
            </Link>
            <Link href="https://www.youtube.com" isExternal>
              <Icon as={FaYoutube} boxSize={6} color={'gray.400'} />
            </Link>
          </HStack>
        </VStack>
        <Box
          as="form"
          onSubmit={handleSubmit}
          background={'black'}
          maxW="2xl"
          p={8}
          borderWidth={1}
          borderColor="gray.700"
          borderRadius="3xl"
          boxShadow="xl"
          flex={1}>
          <Text fontSize={'4xl'} color="gray.300">
            Envie uma mensagem
          </Text>
          <Text fontSize="sm" color="gray.400" mb={8}>
            Preencha o formulário abaixo.
          </Text>
          <FormControl id="name" isRequired mb={4}>
            <Input
              rounded={'xl'}
              paddingY={'22px'}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu nome"
              borderColor="gray.700"
              color="gray.50"
            />
          </FormControl>

          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4} mb={4}>
            <GridItem>
              <FormControl id="email" isRequired>
                <Input
                  rounded={'xl'}
                  paddingY={'22px'}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Digite seu email"
                  borderColor="gray.700"
                  color="gray.50"
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="whatsapp" isRequired>
                <Input
                  rounded={'xl'}
                  paddingY={'22px'}
                  type="text"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="Digite seu WhatsApp"
                  borderColor="gray.700"
                  color="gray.50"
                />
              </FormControl>
            </GridItem>
          </Grid>

          <FormControl id="subject" isRequired mb={4}>
            <Input
              rounded={'xl'}
              paddingY={'22px'}
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Digite o assunto"
              borderColor="gray.700"
              color="gray.50"
            />
          </FormControl>

          <FormControl id="message" isRequired mb={4}>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Digite sua mensagem"
              rows={4}
              borderColor="gray.700"
              color="gray.50"
            />
          </FormControl>

          <Button
            width={'40%'}
            type="submit"
            mt={4}
            isLoading={isLoading}
            colorScheme="gray"
            bg="gray.800"
            _hover={{ bg: 'gray.700' }}
            ml="auto"
            display="block">
            Enviar
          </Button>
        </Box>
      </HStack>
    </Container>
  )
}
