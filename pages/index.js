import { Container, Box, Heading, } from '@chakra-ui/react';

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hola, Soy un desarrollador oriundo de Viña del mar!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        CamiloMatteo (Kalmes)
                    </Heading>
                    <p>Desarrollo / Fotografia / Dibujo</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page