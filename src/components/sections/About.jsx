import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Flex,
    Icon,
    VStack,
    HStack,
    useColorModeValue,
} from '@chakra-ui/react';
import { FiCode, FiLayout, FiSmartphone, FiDatabase } from 'react-icons/fi';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

// Componente de FiServer (añadido manualmente ya que no viene por defecto en react-icons/fi)
const FiServer = (props) => (
    <Box as="svg" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </Box>
);

// Componente con animación - Actualizamos motion() a motion.create()
const MotionBox = motion.create(Box);

// Datos de habilidades
const SKILLS = [
    {
        title: 'Frontend Development',
        icon: FiLayout,
        description: 'Creo interfaces modernas y responsivas usando React, HTML, CSS y JavaScript.',
    },
    {
        title: 'Backend Development',
        icon: FiServer,
        description: 'Desarrollo APIs robustas y escalables con Node.js, Express y MongoDB.',
    },
    {
        title: 'Diseño UI/UX',
        icon: FiSmartphone,
        description: 'Diseño experiencias de usuario intuitivas y visualmente atractivas.',
    },
    {
        title: 'Bases de Datos',
        icon: FiDatabase,
        description: 'Trabajo con bases de datos SQL y NoSQL para almacenar y gestionar datos.',
    },
];

// Componente de tarjeta de habilidad
const SkillCard = ({ title, icon, description }) => {
    const { ref, controls, variants } = useScrollAnimation({
        threshold: 0.2,
        animation: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }
    });

    return (
        <MotionBox
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            bg="white"
            p={6}
            borderRadius="lg"
            boxShadow="md"
            _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
            transition="all 0.3s ease"
        >
            <Flex direction="column" align="flex-start">
                <Flex
                    w={12}
                    h={12}
                    align="center"
                    justify="center"
                    borderRadius="full"
                    bg="beige.100"
                    color="beige.800"
                    mb={4}
                >
                    <Icon as={icon} boxSize={5} />
                </Flex>
                <Heading as="h3" size="md" mb={2} color="beige.900">
                    {title}
                </Heading>
                <Text color="beige.700">{description}</Text>
            </Flex>
        </MotionBox>
    );
};

const About = () => {
    const { ref, controls, variants } = useScrollAnimation({
        threshold: 0.1,
        animation: {
            hidden: { opacity: 0, y: 30 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    staggerChildren: 0.1
                }
            }
        }
    });

    return (
        <Box id="about" py={20} bg="beige.50">
            <Container maxW="container.xl">
                <MotionBox
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                >
                    <VStack spacing={4} mb={12} align="center">
                        <Heading
                            as="h2"
                            size="2xl"
                            textAlign="center"
                            color="beige.900"
                            fontWeight="bold"
                            letterSpacing="-0.02em"
                        >
                            Sobre Mí
                        </Heading>
                        <Text
                            fontSize="xl"
                            textAlign="center"
                            maxW="800px"
                            color="beige.800"
                        >
                            Soy un desarrollador web apasionado por crear experiencias digitales excepcionales.
                            Me especializo en el desarrollo de aplicaciones web modernas y responsivas utilizando las últimas tecnologías.
                        </Text>
                    </VStack>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mt={10}>
                        {SKILLS.map((skill, index) => (
                            <SkillCard key={index} {...skill} />
                        ))}
                    </SimpleGrid>
                </MotionBox>
            </Container>
        </Box>
    );
};

export default About;