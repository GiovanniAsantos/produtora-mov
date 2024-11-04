import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  SimpleGrid,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import MovLayout from "../../MovLayout";
import PlayIcon from "../../../../assets/img/playIcon.png";

export const Portfolio: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const portfolioRef = useRef<HTMLDivElement>(null);

  const videoData = [
    { id: "ixrFududowI", title: "Exemplo de Vídeo 6" },
    { id: "I8Y0-CQvmSc", title: "Exemplo de Vídeo 5" },
    { id: "Zg6TYH25HVI", title: "Exemplo de Vídeo 4" },
    { id: "3Khjh8tKNmw", title: "Exemplo de Vídeo 3" },
    { id: "wjYzP8HuYC4", title: "Exemplo de Vídeo 2" },
    { id: "iZMxC7wUExo", title: "Exemplo de Vídeo 1" },
  ];

  const openModal = (videoId: string) => {
    setSelectedVideo(videoId);
    setIsModalOpen(true);
  };

  const renderCards = () => (
    <SimpleGrid columns={[1, 1, 2, 3]} spacing={5} width="100%">
      {videoData.map((video, index) => (
        <Box
          key={index}
          position="relative"
          bg="#292a2d"
          width="90%"
          height="195px"
          mx="auto"
          borderRadius="20px"
          overflow="hidden"
          transition={`transform 0.3s ease`}
          transform={animationTriggered ? `translateX(0)` : `translateX(0)`}
          opacity={animationTriggered ? 1 : 0}
          animation={
            animationTriggered
              ? index < 3
                ? "fadeInFromLeft 1.5s forwards"
                : "fadeInFromRight 1.5s forwards"
              : "none"
          }
          onClick={() => openModal(video.id)}
          cursor="pointer"
          _hover={{
            transform: "scale(1.35)",
          }}
        >
          <Image
            src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
            alt={`Thumbnail do ${video.title}`}
            width="100%"
            height="100%"
            objectFit="cover"
          />
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            bg="rgba(0, 0, 0, 0.6)"
            borderRadius="50%"
            width="50px"
            height="50px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image src={PlayIcon} alt="Play" width="24px" height="24px" />
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );

  useEffect(() => {
    const handleScroll = () => {
      const section = portfolioRef.current;
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

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
        ref={portfolioRef}
        marginTop="10vh"
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
          <h1 style={{ fontSize: "50px" }}>Portfólio</h1>
          <hr style={{ color: "white", width: "80px", margin: "10px auto" }} />
        </Box>
        <Box width="100%" mt="4">
          {renderCards()}
        </Box>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          isCentered
        >
          <ModalOverlay />
          <ModalContent
            justifyContent={"center"}
            paddingBottom={"50px"}
            paddingTop={"50px"}
            height={"500px"}
            maxW={{ base: "90%", md: "800px" }}
            marginX="auto"
            mx={3}
            backgroundColor={"black"}
          >
            <ModalCloseButton color="white" />
            <ModalBody p={0}>
              {selectedVideo && (
                <iframe
                  aspect-ratio="16/9"
                  width="100%"
                  height="400px"
                  src={`https://www.youtube.com/embed/${selectedVideo}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </MovLayout>
  );
};
