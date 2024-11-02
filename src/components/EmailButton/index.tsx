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
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      boxShadow={"xl"}
      rounded={"full"}
      textTransform={"none"}
      onClick={handleClick}
      colorScheme="red"
      bg="red.400"
      _hover={{ bg: "red.500" }}
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
      <Icon as={FaEnvelope} boxSize="2em" marginRight="8px" />{" "}
      <Text>Enviar</Text>
    </Button>
  );
};

export default EmailButton;
