import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box
      marginTop={"15vh"}
      bg="#292a2d"
      width={"100%"}
      height="100px"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      padding="20px"
    >
      <Text color="white" fontSize="sm">
        made by Giovanni Azevedo
      </Text>
    </Box>
  );
};

export default Footer;
