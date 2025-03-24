import {
    Box,
    Container,
    Stack,
    Text,
    HStack,
    IconButton,
    Divider,
    Link,
} from '@chakra-ui/react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiInstagram } from 'react-icons/fi';
import { SiDevdotto } from 'react-icons/si';

const Footer = () => {
    return (
        <Box bg="beige.100" color="beige.800">
            <Container maxW="container.xl" py={8}>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={8}
                    justify="space-between"
                    align="center"
                >
                    <Text>© {new Date().getFullYear()} DarioHG. Todos los derechos reservados.</Text>
                    <HStack spacing={4}>
                        <IconButton
                            aria-label="GitHub"
                            icon={<FiGithub />}
                            variant="ghost"
                            color="beige.700"
                            _hover={{ bg: 'beige.200', color: 'beige.800' }}
                            as="a"
                            href="https://github.com/dariohg"
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                        <IconButton
                            aria-label="LinkedIn"
                            icon={<FiLinkedin />}
                            variant="ghost"
                            color="beige.700"
                            _hover={{ bg: 'beige.200', color: 'beige.800' }}
                            as="a"
                            href="https://www.linkedin.com/in/rubén-dario-hernandez-gonzález-549bbb249/"
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                        <IconButton
                            aria-label="Twitter / X"
                            icon={<FiTwitter />}
                            variant="ghost"
                            color="beige.700"
                            _hover={{ bg: 'beige.200', color: 'beige.800' }}
                            as="a"
                            href="https://x.com/_Dariohg"
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                        <IconButton
                            aria-label="Instagram"
                            icon={<FiInstagram />}
                            variant="ghost"
                            color="beige.700"
                            _hover={{ bg: 'beige.200', color: 'beige.800' }}
                            as="a"
                            href="https://www.instagram.com/_dariohg/"
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                        <IconButton
                            aria-label="Dev.to"
                            icon={<SiDevdotto />}
                            variant="ghost"
                            color="beige.700"
                            _hover={{ bg: 'beige.200', color: 'beige.800' }}
                            as="a"
                            href="https://dev.to/dariohg"
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                        <IconButton
                            aria-label="Email"
                            icon={<FiMail />}
                            variant="ghost"
                            color="beige.700"
                            _hover={{ bg: 'beige.200', color: 'beige.800' }}
                            as="a"
                            href="mailto:223186@ids.upchiapas.edu.mx"
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                    </HStack>
                </Stack>
                <Divider my={6} borderColor="beige.200" />
                <HStack spacing={4} justify="center" wrap="wrap">
                    <Link href="#home" color="beige.700" _hover={{ color: 'beige.900' }}>
                        Inicio
                    </Link>
                    <Text color="beige.400">•</Text>
                    <Link href="#about" color="beige.700" _hover={{ color: 'beige.900' }}>
                        Sobre mí
                    </Link>
                    <Text color="beige.400">•</Text>
                    <Link href="#projects" color="beige.700" _hover={{ color: 'beige.900' }}>
                        Proyectos
                    </Link>
                    <Text color="beige.400">•</Text>
                    <Link href="#contact" color="beige.700" _hover={{ color: 'beige.900' }}>
                        Contacto
                    </Link>
                </HStack>
                <Text fontSize="sm" textAlign="center" color="beige.600" mt={4}>
                    Desarrollado con React y Chakra UI • Chiapas, México
                </Text>
            </Container>
        </Box>
    );
};

export default Footer;