import React from 'react'
import { Button, ButtonProps, Icon } from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa'

interface WhatsAppButtonProps extends ButtonProps {
  phoneNumber: string
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, ...props }) => {
  const handleClick = () => {
    const url = `https://wa.me/+55${phoneNumber}`
    window.open(url, '_blank')
  }

  return (
    <Button
      boxShadow={'xl'}
      rounded={'full'}
      textTransform={'none'}
      onClick={handleClick}
      colorScheme="green"
      bg="green.400"
      color="white"
      paddingY={7}
      paddingX={12}
      leftIcon={<Icon as={FaWhatsapp} boxSize="1.6em" />}
      {...props}>
      Envie uma mensagem
    </Button>
  )
}

export default WhatsAppButton
