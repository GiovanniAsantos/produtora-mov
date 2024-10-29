import { Box, Button, Text } from "@chakra-ui/react";
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

  return (
    <>
      <MovLayout maxWidthContainer="100vw">
        <Box className="clients-container">
          <Box className="clients-title">
            <h1>Clients</h1>
            <hr />
          </Box>
          <br />
          <br />
          <Box className="clients-grid">
            {[...Array(visibleCards)].map((_, index) => (
              <Box key={index} className="clients-card">
                <Text className="clients-card-text">
                  Aqui fica a imagem do cliente
                </Text>
              </Box>
            ))}
          </Box>
          {visibleCards < totalCards && ( // Only show the button if there are more cards to load
            <Button
              onClick={loadMoreCards}
              backgroundColor="#4497B3" // Set the button color
              color="white" // Ensure text color is white
              marginTop="50px"
              _hover={{ backgroundColor: "#357f94" }}
            >
              Load More
            </Button>
          )}
        </Box>
      </MovLayout>
    </>
  );
};
