import {
    Box,
    Container,
    Heading,
    Text,
    Button,
    Stack,
    Flex,
    useBreakpointValue,
} from '@chakra-ui/react';
import { FiArrowRight, FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';
import React from "react";

// Componentes con animación
const MotionBox = motion.create(Box);
const MotionHeading = motion.create(Heading);
const MotionText = motion.create(Text);
const MotionStack = motion.create(Stack);

// Variantes de animación mejoradas
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }
};

// Componente de ilustración animada mejorada
const AnimatedIllustration = () => {
    const floatingVariants = {
        float: {
            y: [0, -20, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const rotatingVariants = {
        rotate: {
            rotate: 360,
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    return (
        <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            w="full"
            h="full"
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            {/* Círculo principal con gradiente */}
            <MotionBox
                position="absolute"
                width={{ base: "250px", md: "350px", lg: "450px" }}
                height={{ base: "250px", md: "350px", lg: "450px" }}
                borderRadius="full"
                bgGradient="linear(to-br, beige.200, beige.400)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                boxShadow="0 0 60px rgba(0,0,0,0.1)"
            />

            {/* Círculo secundario rotatorio */}
            <MotionBox
                position="absolute"
                width={{ base: "180px", md: "250px", lg: "350px" }}
                height={{ base: "180px", md: "250px", lg: "350px" }}
                borderRadius="full"
                border="3px dashed"
                borderColor="beige.300"
                variants={rotatingVariants}
                animate="rotate"
            />

            {/* Elementos flotantes con glassmorphism */}
            <MotionBox
                position="absolute"
                top={{ base: "10%", md: "15%" }}
                left={{ base: "10%", md: "15%" }}
                width={{ base: "60px", md: "80px" }}
                height={{ base: "60px", md: "80px" }}
                borderRadius="lg"
                bg="rgba(255, 255, 255, 0.7)"
                backdropFilter="blur(10px)"
                border="1px solid rgba(255, 255, 255, 0.3)"
                boxShadow="xl"
                display="flex"
                alignItems="center"
                justifyContent="center"
                variants={floatingVariants}
                animate="float"
            >
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" color="beige.800">
                    {"</>"}
                </Text>
            </MotionBox>

            <MotionBox
                position="absolute"
                bottom={{ base: "10%", md: "15%" }}
                right={{ base: "10%", md: "15%" }}
                width={{ base: "80px", md: "100px" }}
                height={{ base: "80px", md: "100px" }}
                borderRadius="full"
                bg="rgba(255, 255, 255, 0.7)"
                backdropFilter="blur(10px)"
                border="1px solid rgba(255, 255, 255, 0.3)"
                boxShadow="xl"
                display="flex"
                alignItems="center"
                justifyContent="center"
                variants={floatingVariants}
                animate="float"
                transition={{ delay: 0.5 }}
            >
                <Box
                    width="60%"
                    height="60%"
                    borderRadius="md"
                    bg="beige.400"
                />
            </MotionBox>

            {/* Partículas decorativas */}
            {[...Array(6)].map((_, i) => (
                <MotionBox
                    key={i}
                    position="absolute"
                    width={{ base: "4px", md: "6px" }}
                    height={{ base: "4px", md: "6px" }}
                    borderRadius="full"
                    bg="beige.300"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        x: Math.random() * 400 - 200,
                        y: Math.random() * 400 - 200,
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.4,
                    }}
                />
            ))}
        </MotionBox>
    );
};

const Hero = () => {
    const headingSize = useBreakpointValue({ base: '3xl', md: '4xl', lg: '5xl' });

    return (
        <Box
            id="home"
            minH="100vh"
            pt="100px"
            display="flex"
            alignItems="center"
            background="linear-gradient(135deg, rgba(247, 242, 234, 0.9), rgba(241, 232, 217, 0.7), rgba(232, 217, 192, 0.6))"
            position="relative"
            overflow="hidden"
        >
            {/* Fondo animado con partículas */}
            <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                zIndex="0"
                opacity="0.3"
            >
                {[...Array(20)].map((_, i) => (
                    <MotionBox
                        key={i}
                        position="absolute"
                        width="2px"
                        height="2px"
                        borderRadius="full"
                        bg="beige.400"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            y: [null, -window.innerHeight - 100],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </Box>

            <Container maxW="container.xl" position="relative" zIndex="1">
                <Flex
                    direction={{ base: "column", lg: "row" }}
                    alignItems={{ base: "center", lg: "center" }}
                    justifyContent="space-between"
                    gap={{ base: 12, lg: 4 }}
                >
                    {/* Contenido textual */}
                    <MotionBox
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        width={{ base: "100%", lg: "50%" }}
                    >
                        <Flex
                            direction="column"
                            alignItems={{ base: "center", lg: "flex-start" }}
                            textAlign={{ base: "center", lg: "left" }}
                        >
                            <MotionBox variants={itemVariants} mb={6}>
                                <Text
                                    fontSize="lg"
                                    color="beige.700"
                                    fontWeight="medium"
                                >
                                    ¡Hola! Soy
                                </Text>
                            </MotionBox>

                            <MotionHeading
                                as="h1"
                                size={headingSize}
                                mb={4}
                                fontWeight="bold"
                                color="beige.900"
                                letterSpacing="-0.02em"
                                lineHeight="1.2"
                                variants={itemVariants}
                            >
                                Dario HG
                                <MotionBox
                                    as="span"
                                    display="block"
                                    color="beige.700"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                >
                                    Desarrollador Web
                                </MotionBox>
                            </MotionHeading>

                            <MotionText
                                fontSize={{ base: 'lg', md: 'xl' }}
                                color="beige.800"
                                mb={8}
                                maxW="550px"
                                variants={itemVariants}
                            >
                                Especializado en crear experiencias web modernas e intuitivas.
                                Mi pasión es construir soluciones digitales elegantes para problemas complejos.
                            </MotionText>

                            <MotionStack
                                direction={{ base: 'column', sm: 'row' }}
                                spacing={4}
                                variants={itemVariants}
                            >
                                <Button
                                    rightIcon={<FiArrowRight />}
                                    size="lg"
                                    bg="beige.500"
                                    color="gray.800"
                                    _hover={{
                                        bg: 'beige.600',
                                        transform: 'translateY(-2px)',
                                        boxShadow: 'lg',
                                    }}
                                    transition="all 0.3s"
                                    onClick={() => {
                                        const element = document.getElementById('projects');
                                        if (element) {
                                            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
                                            window.scrollTo({
                                                top: offsetTop,
                                                behavior: 'smooth'
                                            });
                                        }
                                    }}
                                >
                                    Ver proyectos
                                </Button>
                                <Button
                                    leftIcon={<FiGithub />}
                                    variant="outline"
                                    borderColor="beige.500"
                                    color="beige.700"
                                    size="lg"
                                    _hover={{
                                        bg: 'beige.50',
                                        transform: 'translateY(-2px)',
                                        boxShadow: 'lg',
                                    }}
                                    transition="all 0.3s"
                                    as="a"
                                    href="https://github.com/dariohg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </Button>
                            </MotionStack>
                        </Flex>
                    </MotionBox>

                    {/* Ilustración animada del lado derecho */}
                    <Box
                        width={{ base: "100%", lg: "50%" }}
                        height={{ base: "300px", md: "400px", lg: "500px" }}
                        display={{ base: "block", lg: "block" }}
                    >
                        <AnimatedIllustration />
                    </Box>
                </Flex>

                {/* Indicador de scroll mejorado */}
                <MotionBox
                    position="absolute"
                    bottom="40px"
                    left="50%"
                    transform="translateX(-50%)"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 1
                    }}
                    display={{ base: 'none', md: 'block' }}
                    cursor="pointer"
                    onClick={() => {
                        const element = document.getElementById('about');
                        if (element) {
                            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
                            window.scrollTo({
                                top: offsetTop,
                                behavior: 'smooth'
                            });
                        }
                    }}
                >
                    <Box
                        width="30px"
                        height="50px"
                        border="2px solid"
                        borderColor="beige.500"
                        borderRadius="full"
                        position="relative"
                        _before={{
                            content: '""',
                            position: "absolute",
                            top: "8px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "5px",
                            height: "5px",
                            borderRadius: "full",
                            bg: "beige.500",
                            animation: "scrollIndicator 1.5s infinite"
                        }}
                    >
                    </Box>
                </MotionBox>
            </Container>
        </Box>
    );
};

export default Hero;