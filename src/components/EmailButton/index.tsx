import React from "react";
import { Button, ButtonProps, Icon, Text } from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";

interface EmailButtonProps extends ButtonProps {
  emailAddress?: string;
  subject?: string;
  body?: string;
}

const EmailButton: React.FC<EmailButtonProps> = ({
  emailAddress = "Hansley@movprodutora.com.br",
  subject = "",
  body = "",
  ...props
}) => {
  const handleClick = () => {
    // Verifica se o dispositivo é mobile
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    let url;

    if (isMobile) {
      // Para dispositivos móveis, usa o esquema mailto para abrir o cliente de e-mail padrão
      url = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
      // Para desktop, redireciona para o site do Gmail
      url = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    window.open(url, "_blank");
  };

  return (
    <Button
      boxShadow={"xl"}
      rounded={"full"}
      textTransform={"none"}
      onClick={handleClick}
      colorScheme="green"
      bg="green.400"
      _hover={{ bg: "green.500" }}
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="50px"
      borderColor={"white"}
      border={"2px solid white"}
      {...props}
    >
      <Icon as={FaEnvelope} boxSize="1.3em" marginRight="8px" />
      <Text>Enviar</Text>
    </Button>
  );
};

export default EmailButton;
