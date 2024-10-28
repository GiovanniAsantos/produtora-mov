import React from "react";
import { Button, ButtonProps, Icon } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa"; // Importa o ícone do Instagram

interface InstagramButtonProps extends ButtonProps {
  username: string;
}

const InstagramButton: React.FC<InstagramButtonProps> = ({
  username,
  ...props
}) => {
  const handleClick = () => {
    const url = `https://www.instagram.com/${username}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      boxShadow="xl"
      rounded="full"
      textTransform="none"
      onClick={handleClick}
      colorScheme="pink"
      bg="pink.500"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="60px"
      height="60px"
      borderColor="white"
      border="2px solid white"
      _hover={{ bg: "pink.600" }}
      {...props}
    >
      <Icon as={FaInstagram} boxSize="2em" />
    </Button>
  );
};

export default InstagramButton;
