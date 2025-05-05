import {
    Box,
    Container,
    Stack,
    Text,
    HStack,
    IconButton,
    Divider,
    Link,
    VStack,
    Heading,
    Flex,
} from '@chakra-ui/react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiInstagram, FiHeart } from 'react-icons/fi';
import { SiDevdotto } from 'react-icons/si';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box bg="beige.900" color="beige.100" position="relative" overflow="hidden">
            {/* Borde superior más sutil */}
            <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                height="1px"
                bgGradient="linear(to-r, transparent, beige.200, transparent)"
                opacity="0.3"
            />

            {/* Gradiente suave en la parte superior */}
            <Box
                position="absolute"
                top="-40px"
                left="0"
                right="0"
                height="40px"
                bgGradient="linear(to-b, beige.50, transparent)"
                opacity="0.05"
            />

            {/* Patrón de fondo más sutil */}
            <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                opacity="0.02"
                bgImage="radial-gradient(circle at 2px 2px, beige.100 1px, transparent 1px)"
                bgSize="30px 30px"
            />

            <Container maxW="container.xl" position="relative" pt={16} pb={8}>
                {/* Sección principal */}
                <Stack
                    direction={{ base: 'column', lg: 'row' }}
                    spacing={{ base: 10, lg: 20 }}
                    mb={16}
                >
                    {/* Información de la marca */}
                    <VStack align={{ base: 'center', lg: 'flex-start' }} spacing={4} flex={1}>
                        <Heading
                            as="h2"
                            size="lg"
                            fontWeight="bold"
                            position="relative"
                            _after={{
                                content: '""',
                                position: 'absolute',
                                bottom: '-8px',
                                left: { base: '50%', lg: '0' },
                                transform: { base: 'translateX(-50%)', lg: 'none' },
                                width: '120px',
                                height: '3px',
                                bg: 'beige.500',
                                borderRadius: 'full'
                            }}
                        >
                            DarioHG
                        </Heading>
                        <Text
                            fontSize="md"
                            color="beige.300"
                            maxW="300px"
                            textAlign={{ base: 'center', lg: 'left' }}
                            mt={4}
                        >
                            Desarrollador web apasionado por crear experiencias digitales
                            excepcionales y soluciones innovadoras.
                        </Text>
                    </VStack>

                    {/* Enlaces rápidos */}
                    <VStack align={{ base: 'center', lg: 'flex-start' }} spacing={4}>
                        <Heading as="h3" size="md" color="beige.200">
                            Enlaces Rápidos
                        </Heading>
                        <Stack spacing={2}>
                            {['Inicio', 'Sobre mí', 'Proyectos', 'Contacto'].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase().replace(' ', '')}`}
                                    color="beige.400"
                                    _hover={{ color: 'beige.200' }}
                                    transition="color 0.2s"
                                >
                                    {item}
                                </Link>
                            ))}
                        </Stack>
                    </VStack>

                    {/* Información de contacto */}
                    <VStack align={{ base: 'center', lg: 'flex-start' }} spacing={4}>
                        <Heading as="h3" size="md" color="beige.200">
                            Contacto
                        </Heading>
                        <Stack spacing={2}>
                            <Text color="beige.400">Chiapas, México</Text>
                            <Link
                                href="mailto:223186@ids.upchiapas.edu.mx"
                                color="beige.400"
                                _hover={{ color: 'beige.200' }}
                                transition="color 0.2s"
                            >
                                223186@ids.upchiapas.edu.mx
                            </Link>
                        </Stack>
                    </VStack>
                </Stack>

                {/* Redes sociales */}
                <Flex
                    justify="center"
                    mb={8}
                    position="relative"
                >
                    {/* Línea decorativa - más sutil */}
                    <Box
                        position="absolute"
                        top="50%"
                        left="10%"
                        right="10%"
                        height="1px"
                        bg="beige.800"
                        transform="translateY(-50%)"
                        opacity="0.5"
                    />

                    <HStack
                        spacing={4}
                        bg="beige.900"
                        px={6}
                        py={2}
                        position="relative"
                        zIndex={1}
                    >
                        {[
                            { icon: FiGithub, label: 'GitHub', href: 'https://github.com/dariohg' },
                            { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/rubén-dario-hernandez-gonzález-549bbb249/' },
                            { icon: FiTwitter, label: 'Twitter / X', href: 'https://x.com/_Dariohg' },
                            { icon: FiInstagram, label: 'Instagram', href: 'https://www.instagram.com/_dariohg/' },
                            { icon: SiDevdotto, label: 'Dev.to', href: 'https://dev.to/dariohg' },
                            { icon: FiMail, label: 'Email', href: 'mailto:223186@ids.upchiapas.edu.mx' }
                        ].map((social) => (
                            <MotionBox
                                key={social.label}
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    _hover={{ textDecoration: 'none' }}
                                >
                                    <IconButton
                                        aria-label={social.label}
                                        icon={<social.icon />}
                                        variant="ghost"
                                        color="beige.400"
                                        fontSize="xl"
                                        position="relative"
                                        _hover={{
                                            bg: 'beige.800',
                                            color: 'beige.200',
                                        }}
                                        sx={{
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                bottom: '0',
                                                left: '50%',
                                                transform: 'translateX(-50%) scaleX(0)',
                                                width: '80%',
                                                height: '2px',
                                                bg: 'beige.500',
                                                opacity: 0,
                                                transition: 'all 0.2s',
                                            },
                                            '&:hover::after': {
                                                opacity: 1,
                                                transform: 'translateX(-50%) scaleX(1)',
                                            }
                                        }}
                                    />
                                </Link>
                            </MotionBox>
                        ))}
                    </HStack>
                </Flex>

                {/* Copyright */}
                <Box textAlign="center" pt={8} position="relative">
                    <Text fontSize="sm" color="beige.500">
                        © {currentYear} DarioHG. Todos los derechos reservados.
                    </Text>
                    <Flex
                        justify="center"
                        align="center"
                        mt={2}
                        color="beige.500"
                        fontSize="sm"
                    >
                        Desarrollado con
                        <Box
                            as={FiHeart}
                            mx={1}
                            color="red.400"
                            animation="pulse 1.5s infinite"
                        />
                        usando React y Chakra UI
                    </Flex>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;