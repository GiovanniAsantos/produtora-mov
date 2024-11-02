import { Box, Image, Input, Stack, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import MovLayout from "../../../../components/layouts/MovLayout";
import EmailButton from "../../../EmailButton";
import vetorEmail from "../../../../assets/img/vetorEmail.svg";

type ContactProps = {};

export const Contact: React.FC<ContactProps> = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailBody = `
    Nome: ${name}
    Telefone: ${phone}
    Email: ${email}
    Mensagem: ${message}
  `;

  return (
    <MovLayout maxWidthContainer="100vw">
      <Box
        marginTop={"10vh"}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        textAlign="center"
        width="100%"
        backgroundColor="#171717"
        color="white"
        paddingTop="0px"
      >
        <Box
          width="100%"
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Box textAlign="center">
            <h1 style={{ fontSize: "50px" }}>Contato</h1>
            <hr
              style={{ color: "white", width: "80px", margin: "10px auto" }}
            />
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"space-around"} width={"100%"} paddingX={5}>
          <Box
            width={{ base: "0%", md: "40%" }} // Ocultar em telas pequenas
            display={{ base: "none", md: "block" }} // Ocultar em telas pequenas
          >
            <Image
              src={vetorEmail}
              alt=""
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </Box>
          <Box
            alignItems={"center"}
            width={{ base: "100%", md: "40%" }} // Mudando de 60% para 40% para igualar
            display="flex" // Usar flex para centralizar
            justifyContent="center" // Centralizar
          >
            <Stack
              width={{ base: "80%", md: "100%" }} // Ajustar largura do Stack
              gap={3}
              alignItems="center" // Centralizar
              justifyContent="center" // Centralizar
              display="flex" // Flex para o Stack
            >
              <Input
                placeholder="Nome"
                size="lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder="Telefone"
                size="lg"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Input
                placeholder="Endereço de E-mail"
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Textarea
                placeholder="Mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <EmailButton
                emailAddress="Hansley@movprodutora.com.br"
                subject="Contato via Site MOV"
                body={emailBody}
              />
            </Stack>
          </Box>
        </Box>
      </Box>
    </MovLayout>
  );
};
