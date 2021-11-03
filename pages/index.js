import { ChevronRightIcon } from '@chakra-ui/icons';
import { Container, Box, Heading, Image, Link, useColorModeValue, Button, SimpleGrid, Icon, List, ListItem } from '@chakra-ui/react';
import NextLink from 'next/link'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item';
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoDiscord
} from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hola, Soy un desarrollador oriundo de Viña del mar!
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            CamiloMatteo (Kalmes)
                        </Heading>
                        <p>Desarrollo / Fotografia / Dibujo</p>
                    </Box>

                    <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center" >
                        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/camilo.png" alt="Profile img" />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">Work</Heading>
                    <Paragraph>
                        Hola! Me presento, soy Camilo Matteo un desarrollador que se apasiona por construir y crear software.
                        Me desempeño muy bien realizando trabajos en equipo y aprendiendo de cada uno de los integrantes, ya que siento que cada
                        persona es una mina de conocimientos por descubrir.
                        Soy extremadamente autodidacta por lo que la mayoria del tiempo estoy buscando nuevas maneras de realizar de mejor manera mi trabajo
                        o simplemente haciendo cosas nuevas. Si tienes tiempo, hecha un vistazo a mis {' '}
                        <NextLink href="/works"><Link>Proyectos</Link></NextLink> {' ;).'} 
                    </Paragraph>

                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">Mi Portafolio</Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1994</BioYear>
                        Nacimiento en Viña del Mar, Valparaiso, Chile.
                    </BioSection>
                    <BioSection>
                        <BioYear>2012</BioYear>
                        Realice el Servicio Militar de forma voluntaria en el Regimiento de alta montaña Yungay, ubicado en Los Andes, 
                        donde me desempeñe como sirviente uno apuntador del Cuerpo de Morteros 81mm obteniedo el grado
                        de Cabo Segundo Conscripto al mando de mi escuadra.
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>
                        Me gradue como Analista Programador de Sistemas Computacionales en el Instituto AIEP, Viña del Mar.
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>
                        Programador Junior en Qality SA, Viña del Mar.
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        Desarrollador Backend con Laravel en JumpittLabs, Valparaíso.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Desarrollador Backend con RubyonRails & ReactJS en Autentia, Santiago.
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        I {'<3'}
                    </Heading>
                    <Paragraph>
                        Dibujo, Musica, Video juegos, Fotografía, Desarrollador Web
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/" target="_blank">
                                <Button variant="ghost" colorScheme="tail" leftIcon={<Icon as={IoLogoGithub} />} >Github</Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page