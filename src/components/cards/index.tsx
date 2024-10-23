import React from 'react'
import { Box, Text, Icon, CardBodyProps } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface CardProps extends CardBodyProps {
  icon: IconType
  title: string
  description: string
}

const CardProps: React.FC<CardProps> = ({ icon, title, description, ...props }) => {
  return (
    <Box
      width="400px"
      height="500px"
      overflow="hidden"
      p={4}
      backgroundColor="#292a2d"
      {...props}
      sx={{
        width: '400px !important',
        height: '500px !important'
      }}>
      <Icon as={icon} boxSize="40px" mb={4} color="#4497B3" />
      <Text fontSize="30px" fontWeight="bold" mt={2} color="white">
        {title}
      </Text>
      <Text mt={2} color="white">
        {description}
      </Text>
    </Box>
  )
}

export default CardProps
