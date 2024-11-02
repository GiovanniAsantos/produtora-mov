import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import MovLayout from "../../../../components/layouts/MovLayout";
import "./style.css";

export const Clients: React.FC = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const clientsRef = useRef<HTMLDivElement>(null);

  const clientNames = [
    "Cliente 1",
    "Cliente 2",
    "Cliente 3",
    "Cliente 4",
    "Cliente 5",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = clientsRef.current;
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // 30% of the section must be visible
        if (
          top < windowHeight * 0.7 &&
          bottom > windowHeight * 0.3 &&
          !animationTriggered
        ) {
          setAnimationTriggered(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationTriggered]);

  return (
    <MovLayout maxWidthContainer="100vw">
      <Box
        ref={clientsRef}
        marginTop="25vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        width="100%"
        backgroundColor="#171717"
        color="white"
        paddingTop="0px"
      >
        <Box textAlign="center">
          <h1 style={{ fontSize: "50px" }}>Clients</h1>
          <hr style={{ color: "white", width: "80px", margin: "10px auto" }} />
        </Box>
        <Box width="100%" mt="4">
          <SimpleGrid columns={[1, 1, 2, 3]} spacing={5}>
            {clientNames.map((client, index) => (
              // Ajuste no Box dos cards na seção Clients
              <Box
                key={index}
                position="relative"
                bg="#292a2d"
                width={["250px", "250px", "300px", "300px"]} // Largura responsiva
                height={["250px", "250px", "300px", "300px"]} // Altura responsiva
                mx="auto"
                borderRadius="50%" // Borda arredondada
                overflow="hidden"
                transition={`transform 0.8s ease, opacity 0.3s ease`} // Diminui a duração da transição
                transform={
                  animationTriggered ? `translateX(0)` : `translateX(-10%)`
                } // Muda o deslocamento
                opacity={animationTriggered ? 1 : 0}
                animation={
                  animationTriggered
                    ? index < 3
                      ? "fadeInFromLeft 0.8s forwards" // Aumenta a duração para 0.8s
                      : "fadeInFromRight 0.8s forwards" // Aumenta a duração para 0.8s
                    : "none"
                }
                cursor="pointer"
              >
                <Text
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  color="white"
                  textAlign="center"
                >
                  {client}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </MovLayout>
  );
};
