import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Image,
    VStack,
    HStack,
    Tag,
    IconButton,
    useBreakpointValue,
    Flex,
} from '@chakra-ui/react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import React from "react";

const getPlaceholderImage = (text) => `https://placehold.co/600x400/e8d9c0/564a32?text=${encodeURIComponent(text)}`;

const MotionBox = motion.create(Box);

const PROJECTS = [
    {
        title: 'Groovit',
        description: 'Plataforma para crear y gestionar eventos musicales y conciertos, donde los usuarios pueden reservar boletos desde la aplicación móvil.',
        image: getPlaceholderImage('Groovit'),
        tags: ['React', 'Node.js', 'MongoDB', 'React Native'],
        githubUrl: 'https://github.com/Dariohg/Groovit_web.git',
        liveUrl: '#',
    },
    {
        title: 'DUOTASK',
        description: 'Aplicación web enfocada en la administración educativa para gestionar alumnos, calificaciones, actividades y recursos académicos de manera eficiente.',
        image: getPlaceholderImage('DUOTASK'),
        tags: ['React', 'Node.js', 'Express', 'MySQL'],
        githubUrl: 'https://github.com/Dariohg/DUOTASK-front.git',
        liveUrl: '#',
    },
    {
        title: 'Free Garden',
        description: 'Aplicación web para monitorear plantas en tiempo real, permitiendo un control preciso de su crecimiento, riego y condiciones ambientales.',
        image: getPlaceholderImage('Free Garden'),
        tags: ['React', 'IoT', 'Firebase', 'ChakraUI'],
        githubUrl: 'https://github.com/Dariohg/Free-Garden-front.git',
        liveUrl: '#',
    },
    {
        title: 'Bovara',
        description: 'Aplicación móvil para el control y gestión de ganado, monitoreo de crías y administración de vacunas y tratamientos veterinarios.',
        image: getPlaceholderImage('Bovara'),
        tags: ['React Native', 'Firebase', 'Redux', 'Node.js'],
        githubUrl: 'https://github.com/Dariohg/Bovara.git',
        liveUrl: '#',
    },
];

// Componente de tarjeta de proyecto mejorado
const ProjectCard = ({ title, description, image, tags, githubUrl, liveUrl }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const { ref, controls, variants } = useScrollAnimation({
        threshold: 0.2,
        animation: {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
        }
    });

    return (
        <MotionBox
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            position="relative"
            bg="white"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="lg"
            transition="all 0.3s ease-in-out"
            transform={isHovered ? 'translateY(-8px)' : 'translateY(0)'}
            _hover={{
                boxShadow: '2xl',
            }}
        >
            {/* Contenedor de imagen con overlay */}
            <Box position="relative" overflow="hidden" height="240px">
                <Image
                    src={image}
                    alt={title}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    transition="transform 0.6s ease-in-out"
                    transform={isHovered ? 'scale(1.1)' : 'scale(1)'}
                    fallbackSrc="https://placehold.co/600x400/e8d9c0/564a32?text=Imagen+no+disponible"
                />

                {/* Overlay oscuro */}
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg="blackAlpha.600"
                    opacity={isHovered ? 1 : 0}
                    transition="opacity 0.3s ease-in-out"
                />

                {/* Botones de acción */}
                <Flex
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    align="center"
                    justify="center"
                    gap={4}
                    opacity={isHovered ? 1 : 0}
                    transition="opacity 0.3s ease-in-out"
                >
                    <IconButton
                        aria-label="Ver código en GitHub"
                        icon={<FiGithub />}
                        size="lg"
                        colorScheme="whiteAlpha"
                        bg="white"
                        color="gray.800"
                        _hover={{ bg: 'gray.100' }}
                        as="a"
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        transition="all 0.2s ease-in-out"
                        transform={isHovered ? 'translateY(0)' : 'translateY(10px)'}
                    />
                    {liveUrl !== '#' && (
                        <IconButton
                            aria-label="Visitar sitio web"
                            icon={<FiExternalLink />}
                            size="lg"
                            colorScheme="whiteAlpha"
                            bg="white"
                            color="gray.800"
                            _hover={{ bg: 'gray.100' }}
                            as="a"
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            transition="all 0.3s ease-in-out"
                            transform={isHovered ? 'translateY(0)' : 'translateY(10px)'}
                        />
                    )}
                </Flex>
            </Box>

            {/* Contenido */}
            <Box p={6}>
                <Heading
                    as="h3"
                    size="md"
                    mb={3}
                    color="gray.800"
                    transition="color 0.3s ease-in-out"
                >
                    {title}
                </Heading>

                <Text
                    color="gray.600"
                    mb={4}
                    noOfLines={3}
                    fontSize="sm"
                    lineHeight="tall"
                >
                    {description}
                </Text>

                <HStack spacing={2} flexWrap="wrap">
                    {tags.map((tag, index) => (
                        <Tag
                            key={index}
                            size="sm"
                            bg="beige.100"
                            color="beige.800"
                            mb={1}
                            borderRadius="full"
                            fontSize="xs"
                            px={3}
                            py={1}
                            transition="all 0.2s ease-in-out"
                            _hover={{
                                bg: 'beige.200',
                                transform: 'translateY(-2px)'
                            }}
                        >
                            {tag}
                        </Tag>
                    ))}
                </HStack>
            </Box>
        </MotionBox>
    );
};

const Projects = () => {
    const { ref, controls, variants } = useScrollAnimation({
        threshold: 0.1,
        animation: {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.2
                }
            }
        }
    });

    const columns = useBreakpointValue({ base: 1, md: 2, lg: 2 });

    return (
        <Box
            id="projects"
            py={20}
            bg="beige.50"
            position="relative"
            overflow="hidden"
        >
            {/* Elementos decorativos de fondo */}
            <Box
                position="absolute"
                top="10%"
                left="-5%"
                width="200px"
                height="200px"
                borderRadius="full"
                bg="beige.200"
                opacity="0.1"
                filter="blur(40px)"
            />
            <Box
                position="absolute"
                bottom="20%"
                right="-5%"
                width="300px"
                height="300px"
                borderRadius="full"
                bg="beige.300"
                opacity="0.1"
                filter="blur(60px)"
            />

            <Container maxW="container.xl" position="relative">
                <VStack spacing={4} mb={16} align="center">
                    <Heading
                        as="h2"
                        size="2xl"
                        textAlign="center"
                        color="gray.800"
                        fontWeight="bold"
                        letterSpacing="-0.02em"
                        position="relative"
                        _after={{
                            content: '""',
                            position: 'absolute',
                            bottom: '-10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '60px',
                            height: '4px',
                            bg: 'beige.500',
                            borderRadius: 'full'
                        }}
                    >
                        Proyectos
                    </Heading>
                    <Text
                        fontSize="xl"
                        textAlign="center"
                        maxW="800px"
                        color="gray.600"
                        mt={4}
                    >
                        Estos son los proyectos en los que he trabajado recientemente.
                    </Text>
                </VStack>

                <MotionBox
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                >
                    <SimpleGrid columns={columns} spacing={8}>
                        {PROJECTS.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </SimpleGrid>
                </MotionBox>
            </Container>
        </Box>
    );
};

export default Projects;