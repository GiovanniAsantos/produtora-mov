import { Box, Button, Text, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
import MovLayout from "../../../../components/layouts/MovLayout";
import "./style.css";

type ClientsProps = {};

export const Clients: React.FC<ClientsProps> = () => {
  const [visibleCards, setVisibleCards] = useState(3); // Start by showing 3 cards
  const totalCards = 15; // Total number of cards

  // Function to load more cards
  const loadMoreCards = () => {
    setVisibleCards((prev) => Math.min(prev + 3, totalCards)); // Increase by 3, but don't exceed total
  };

  // Determine if we should show all cards based on screen size
  const showAllCards =
    useBreakpointValue({ base: false, md: true, lg: true }) || false;

  return (
    <MovLayout maxWidthContainer="100vw">
      <Box className="clients-container">
        <Box className="clients-title">
          <h1>Clients</h1>
          <hr />
        </Box>
        <br />
        <br />
        <Box className="clients-grid">
          {/* Show all cards if screen is large enough, otherwise show visible cards */}
          {[
            ...Array(
              showAllCards ? totalCards : Math.min(visibleCards, totalCards)
            ),
          ].map((_, index) => (
            <Box key={index} className="clients-card">
              <Text className="clients-card-text">
                Aqui fica a imagem do cliente {index + 1}
              </Text>
            </Box>
          ))}
        </Box>
        {/* Only show the button if there are more cards to load and the screen size is small */}
        {!showAllCards && visibleCards < totalCards && (
          <Button
            onClick={loadMoreCards}
            backgroundColor="#4497B3" // Set the button color
            color="white" // Ensure text color is white
            marginTop="20px"
            _hover={{ backgroundColor: "#357f94" }} // Optional: Add a hover effect
          >
            Load More
          </Button>
        )}
      </Box>
    </MovLayout>
  );
};
