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
    Link,
    IconButton,
    useBreakpointValue,
} from '@chakra-ui/react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

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

// Componente de tarjeta de proyecto
const ProjectCard = ({ title, description, image, tags, githubUrl, liveUrl }) => {
    const { ref, controls, variants } = useScrollAnimation({
        threshold: 0.1,
        animation: {
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }
    });

    return (
        <MotionBox
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            bg="white"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            transition="all 0.3s ease"
            _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
        >
            <Box position="relative" overflow="hidden">
                <Image
                    src={image}
                    alt={title}
                    w="100%"
                    h="220px"
                    objectFit="cover"
                    transition="transform 0.5s ease"
                    _groupHover={{ transform: 'scale(1.05)' }}
                    fallbackSrc="https://placehold.co/600x400/e8d9c0/564a32?text=Imagen+no+disponible"
                />
            </Box>

            <Box p={6}>
                <Heading as="h3" size="md" mb={2} color="beige.900">
                    {title}
                </Heading>

                <Text color="beige.700" mb={4} noOfLines={3}>
                    {description}
                </Text>

                <HStack spacing={2} mb={4} flexWrap="wrap">
                    {tags.map((tag, index) => (
                        <Tag
                            key={index}
                            size="sm"
                            bg="beige.100"
                            color="beige.800"
                            mb={1}
                        >
                            {tag}
                        </Tag>
                    ))}
                </HStack>

                <HStack spacing={3} justify="flex-end">
                    <IconButton
                        aria-label="Ver código en GitHub"
                        icon={<FiGithub />}
                        size="sm"
                        variant="ghost"
                        color="beige.700"
                        as="a"
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                    {liveUrl !== '#' && (
                        <IconButton
                            aria-label="Visitar sitio web"
                            icon={<FiExternalLink />}
                            size="sm"
                            variant="ghost"
                            color="beige.700"
                            as="a"
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                    )}
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
                    staggerChildren: 0.1
                }
            }
        }
    });

    const columns = useBreakpointValue({ base: 1, md: 2, lg: 2 });

    return (
        <Box id="projects" py={20} bg="beige.100">
            <Container maxW="container.xl">
                <VStack spacing={4} mb={12} align="center">
                    <Heading
                        as="h2"
                        size="2xl"
                        textAlign="center"
                        color="beige.900"
                        fontWeight="bold"
                        letterSpacing="-0.02em"
                    >
                        Proyectos
                    </Heading>
                    <Text
                        fontSize="xl"
                        textAlign="center"
                        maxW="800px"
                        color="beige.800"
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
                    <SimpleGrid columns={columns} spacing={8} mt={8}>
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