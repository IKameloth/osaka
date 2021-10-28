import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbKalmes from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalk from '../public/images/works/walknote_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => {
    return(
        <Layout title="Works">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Trabajos
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbKalmes} >
                            A markdown note-taking app
                        </WorkGridItem>
                    </Section>

                    <Section>
                        <WorkGridItem id="walknote" title="Walknote" thumbnail={thumbWalk}>
                            Music recommendation app for iOS
                        </WorkGridItem>
                    </Section>

                    <Section>
                        <WorkGridItem id="amembo" title="Amembo" thumbnail={thumbAmembo}>
                            Other app
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works