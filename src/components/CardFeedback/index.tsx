// import { Avatar, Box, Text, VStack } from '@chakra-ui/react'
// import { ClientComments } from '../../services/serverApi/home/home.type'

// type ClientCardProps = {
//   feedbackData: ClientComments
// }

// const avatarDataMock = [
//   'https://bit.ly/dan-abramov',
//   'https://bit.ly/tioluwani-kolawole',
//   'https://bit.ly/kent-c-dodds',
//   'https://bit.ly/ryan-florence',
//   'https://bit.ly/prosper-baba',
//   'https://bit.ly/code-beast',
//   'https://bit.ly/sage-adebayo'
// ]

// export const CardFeedback: React.FC<ClientCardProps> = ({ feedbackData }) => {
//   const userName = feedbackData?.user?.username || ''
//   const comments = feedbackData?.body || ''
//   const avatars = avatarDataMock[Math.floor(Math.random() * avatarDataMock.length)]

//   return (
//     <VStack p={6} borderWidth={1} borderColor={'gray.700'} borderRadius="3xl" spacing={4} align="center" bg="gray.900" shadow="lg" minW={'sm'}>
//       <Avatar name={userName} src={avatars} size="xl" />
//       <Text color={'gray.50'} fontWeight="bold" textAlign="center">
//         {userName}
//       </Text>
//       <Text color={'gray.50'} textAlign="center">
//         {comments}
//       </Text>
//       <Box w="full" pt={4}></Box>
//     </VStack>
//   )
// }
