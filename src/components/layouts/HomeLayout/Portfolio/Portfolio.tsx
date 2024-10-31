import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  Button,
  useBreakpointValue,
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
  const [visibleCards, setVisibleCards] = useState(3);
  const showAllCards = useBreakpointValue({ base: false, md: true, lg: true }) || false;
  const cardHeight = useBreakpointValue({ base: "200px", md: "240px" });
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videoData = [
    { id: "iZMxC7wUExo", title: "Exemplo de Vídeo 1" },
    { id: "wjYzP8HuYC4", title: "Exemplo de Vídeo 2" },
    { id: "3Khjh8tKNmw", title: "Exemplo de Vídeo 3" },
    { id: "Zg6TYH25HVI", title: "Exemplo de Vídeo 4" },
    { id: "I8Y0-CQvmSc", title: "Exemplo de Vídeo 5" },
    { id: "ixrFududowI", title: "Exemplo de Vídeo 6" },
  ];

  const toggleCardsVisibility = () => {
    setVisibleCards((prev) => {
      if (prev >= videoData.length) {
        return Math.max(3, prev - 3);
      } else {
        return Math.min(prev + 3, videoData.length);
      }
    });
  };

  const openModal = (videoId: string) => {
    setSelectedVideo(videoId);
    setIsModalOpen(true);
  };

  const renderCards = () => (
    <SimpleGrid columns={[1, 1, 2, 3]} spacing={5} width="100%">
      {videoData
        .slice(0, showAllCards ? videoData.length : visibleCards)
        .map((video, index) => (
          <Box
            key={index}
            position="relative"
            bg="#292a2d"
            width="90%"
            height={cardHeight}
            mx="auto"
            borderRadius="8px"
            overflow="hidden"
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.05)" }}
            onClick={() => openModal(video.id)}
            cursor="pointer"
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

  return (
    <MovLayout maxWidthContainer="100vw">
      <Box
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
          <h1 style={{ fontSize: "50px" }}>Portfólio</h1>
          <hr style={{ color: "white", width: "80px", margin: "10px auto" }} />
        </Box>
        <Box width="100%" mt="4">
          {renderCards()}
        </Box>
        {!showAllCards && (
          <Button
            onClick={toggleCardsVisibility}
            backgroundColor="#4497B3"
            color="white"
            marginTop="20px"
            _hover={{ backgroundColor: "#357f94" }}
          >
            {visibleCards >= videoData.length ? "Mostrar menos" : "Mostrar mais"}
          </Button>
        )}

        {/* Modal para exibir o vídeo */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isCentered>
          <ModalOverlay />
          <ModalContent maxW="800px">
            <ModalCloseButton color="white" />
            <ModalBody p={0}>
              {selectedVideo && (
                <iframe
                  width="100%"
                  height="450px"
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
