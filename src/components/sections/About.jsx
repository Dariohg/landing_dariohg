import {
    Box,
    Container,
    Heading,
    Text,
    SimpleGrid,
    Flex,
    Icon,
    VStack,
} from '@chakra-ui/react';
import { FiCode, FiLayout, FiSmartphone, FiDatabase } from 'react-icons/fi';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import React from "react";

// Componente de FiServer
const FiServer = (props) => (
    <Box as="svg" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" {...props}>
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </Box>
);

const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);

// Datos de habilidades actualizados
const SKILLS = [
    {
        title: 'Frontend Development',
        icon: FiLayout,
        description: 'Creo interfaces modernas y responsivas usando React, HTML, CSS y JavaScript.',
        color: 'blue.400',
        gradient: 'linear(to-br, blue.400, blue.600)',
    },
    {
        title: 'Backend Development',
        icon: FiServer,
        description: 'Desarrollo APIs robustas y escalables con Node.js, Express y MongoDB.',
        color: 'green.400',
        gradient: 'linear(to-br, green.400, green.600)',
    },
    {
        title: 'Diseño UI/UX',
        icon: FiSmartphone,
        description: 'Diseño experiencias de usuario intuitivas y visualmente atractivas.',
        color: 'purple.400',
        gradient: 'linear(to-br, purple.400, purple.600)',
    },
    {
        title: 'Bases de Datos',
        icon: FiDatabase,
        description: 'Trabajo con bases de datos SQL y NoSQL para almacenar y gestionar datos.',
        color: 'orange.400',
        gradient: 'linear(to-br, orange.400, orange.600)',
    },
];

// Componente de tarjeta de habilidad mejorado
const SkillCard = ({ title, icon, description, color, gradient }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const { ref, controls, variants } = useScrollAnimation({
        threshold: 0.3,
        animation: {
            hidden: { opacity: 0, y: 50, scale: 0.9 },
            visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    duration: 0.6,
                    ease: [0.6, -0.05, 0.01, 0.99]
                }
            }
        }
    });

    return (
        <MotionBox
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            bg="white"
            borderRadius="2xl"
            boxShadow={isHovered ? "2xl" : "lg"}
            position="relative"
            overflow="hidden"
            transition="all 0.3s ease"
            transform={isHovered ? "translateY(-5px)" : "translateY(0)"}
            border="1px solid"
            borderColor={isHovered ? `${color}` : "gray.100"}
        >
            {/* Fondo decorativo */}
            <Box
                position="absolute"
                top="-50%"
                right="-50%"
                width="200%"
                height="200%"
                opacity={isHovered ? 0.08 : 0.03}
                bgGradient={gradient}
                transform={isHovered ? "rotate(-12deg) scale(1)" : "rotate(-12deg) scale(0.8)"}
                transition="all 0.5s ease"
                borderRadius="50%"
            />

            <Flex direction="column" p={6} position="relative">
                <MotionFlex
                    w={16}
                    h={16}
                    align="center"
                    justify="center"
                    borderRadius="xl"
                    bg={isHovered ? color : "gray.50"}
                    mb={4}
                    animate={{
                        rotate: isHovered ? 360 : 0,
                        scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <Icon
                        as={icon}
                        boxSize={8}
                        color={isHovered ? "white" : color}
                        transition="all 0.3s ease"
                    />
                </MotionFlex>

                <Heading as="h3" size="md" mb={3} color="gray.800">
                    {title}
                </Heading>

                <Text color="gray.600" lineHeight="tall">
                    {description}
                </Text>

                {/* Indicador expandible */}
                <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    width={isHovered ? "100%" : "0%"}
                    height="3px"
                    bgGradient={gradient}
                    transition="width 0.3s ease"
                />
            </Flex>
        </MotionBox>
    );
};

const About = () => {
    const { ref, controls, variants } = useScrollAnimation({
        threshold: 0.1,
        animation: {
            hidden: { opacity: 0, y: 50 },
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
        <Box
            id="about"
            py={20}
            position="relative"
            overflow="hidden"
            bg="gray.50"
        >
            {/* Fondo animado */}
            <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                opacity="0.3"
                bgImage="radial-gradient(circle at 2px 2px, beige.300 1px, transparent 1px)"
                bgSize="40px 40px"
            />

            {/* Elementos decorativos */}
            <MotionBox
                position="absolute"
                top="10%"
                left="-10%"
                width="500px"
                height="500px"
                borderRadius="full"
                bg="beige.100"
                opacity="0.2"
                filter="blur(100px)"
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <Container maxW="container.xl" position="relative">
                <MotionBox
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                >
                    <VStack spacing={4} mb={16} align="center">
                        <MotionBox
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
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
                                Sobre Mí
                            </Heading>
                        </MotionBox>

                        <Text
                            fontSize="xl"
                            textAlign="center"
                            maxW="800px"
                            color="gray.600"
                            mt={4}
                            lineHeight="1.8"
                        >
                            Soy un desarrollador web apasionado por crear experiencias digitales excepcionales.
                            Me especializo en el desarrollo de aplicaciones web modernas y responsivas utilizando las últimas tecnologías.
                        </Text>
                    </VStack>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
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