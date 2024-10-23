// import { Box, Container, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react'
// import React, { useCallback, useEffect, useState } from 'react'
// import { CardFeedback } from '../../../components/CardFeedback'
// import { getClientFeedbacks } from '../../../services/serverApi/home'
// import { ClientComments } from '../../../services/serverApi/home/home.type'

// export const ClientFeedback: React.FC = () => {
//   const [feedbacks, setFeedbacks] = useState<ClientComments[]>([])
//   const [error, setError] = useState<string | null>(null)
//   const [loading, setLoading] = useState<boolean>(true)

//   const getFeedbacks = useCallback(async () => {
//     const response = await getClientFeedbacks()
//     if (!!response?.data) {
//       setFeedbacks(response?.data?.comments)
//     } else {
//       setError('Error fetching data')
//     }
//   }, [])

//   useEffect(() => {
//     getFeedbacks()
//   }, [getFeedbacks])

//   return (
//     <Stack bgColor={'black'} py={10}>
//       <Container centerContent maxW="container.xl" padding={0}>
//         <Flex mb={12} direction={'column'} width={'100%'}>
//           <Heading color={'gray.100'} as="h2" size="xl">
//             O que nossos clientes dizem
//           </Heading>
//           <Text color="gray.300" fontSize="lg">
//             Confira abaixo alguns dos depoimentos.
//           </Text>
//           <Box mt={2} mb={2} width={'70px'} height={1} bgColor="gray.200" />
//         </Flex>
//         {error && <Text color="red.500">{error}</Text>}
//         <HStack maxWidth="100%" overflowX="hidden" whiteSpace="nowrap">
//           {feedbacks?.map((feedback, index) => <CardFeedback key={index} feedbackData={feedback} />)}
//         </HStack>
//       </Container>
//     </Stack>
//   )
// }
