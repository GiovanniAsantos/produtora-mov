import React from "react";
import { Button, ButtonProps, Icon } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps extends ButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  ...props
}) => {
  const handleClick = () => {
    const url = `https://wa.me/+55${phoneNumber}`;
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
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="60px"
      height="60px"
      borderColor={"white"}
      border={"2px solid white"}
      {...props}
    >
      {" "}
      <Icon as={FaWhatsapp} boxSize="2em" />
    </Button>
  );
};

export default WhatsAppButton;
