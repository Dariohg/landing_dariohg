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

// Componente de ilustración animada para el lado derecho
const AnimatedIllustration = () => {
    return (
        <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            w="full"
            h="full"
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            {/* Círculo decorativo principal */}
            <MotionBox
                position="absolute"
                width={{ base: "200px", md: "300px", lg: "400px" }}
                height={{ base: "200px", md: "300px", lg: "400px" }}
                borderRadius="full"
                bg="beige.100"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* Círculo decorativo secundario */}
            <MotionBox
                position="absolute"
                width={{ base: "150px", md: "220px", lg: "300px" }}
                height={{ base: "150px", md: "220px", lg: "300px" }}
                borderRadius="full"
                border="2px dashed"
                borderColor="beige.300"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 1, delay: 0.4, rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
            />

            {/* Elemento flotante 1 */}
            <MotionBox
                position="absolute"
                top={{ base: "30%", md: "25%" }}
                left={{ base: "20%", md: "25%" }}
                width={{ base: "40px", md: "60px" }}
                height={{ base: "40px", md: "60px" }}
                borderRadius="lg"
                bg="beige.400"
                initial={{ y: 0 }}
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Elemento flotante 2 */}
            <MotionBox
                position="absolute"
                bottom={{ base: "30%", md: "25%" }}
                right={{ base: "20%", md: "25%" }}
                width={{ base: "50px", md: "70px" }}
                height={{ base: "50px", md: "70px" }}
                borderRadius="full"
                bg="beige.300"
                initial={{ y: 0 }}
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Elemento flotante 3 - código */}
            <MotionBox
                position="absolute"
                top={{ base: "20%", md: "15%" }}
                right={{ base: "30%", md: "20%" }}
                width={{ base: "60px", md: "80px" }}
                height={{ base: "40px", md: "50px" }}
                borderRadius="md"
                bg="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxShadow="md"
                initial={{ y: 0, rotate: 0 }}
                animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
                transition={{
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
            >
                <Text fontFamily="monospace" fontSize={{ base: "xs", md: "sm" }} color="beige.800">
                    {"</>"}
                </Text>
            </MotionBox>

            {/* Elemento flotante 4 - diseño */}
            <MotionBox
                position="absolute"
                bottom={{ base: "20%", md: "15%" }}
                left={{ base: "30%", md: "20%" }}
                width={{ base: "60px", md: "80px" }}
                height={{ base: "60px", md: "80px" }}
                borderRadius="md"
                bg="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxShadow="md"
                initial={{ y: 0, rotate: 0 }}
                animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                transition={{
                    y: { duration: 2.7, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 2.7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
                }}
            >
                <Box width="60%" height="60%" borderRadius="sm" bg="beige.300" />
            </MotionBox>
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
            background="linear-gradient(to bottom, rgba(247, 242, 234, 0.8), rgba(247, 242, 234, 0.4))"
        >
            <Container maxW="container.xl">
                <Flex
                    direction={{ base: "column", lg: "row" }}
                    alignItems={{ base: "center", lg: "center" }}
                    justifyContent="space-between"
                    gap={{ base: 12, lg: 4 }}
                >
                    {/* Contenido textual */}
                    <Flex
                        direction="column"
                        alignItems={{ base: "center", lg: "flex-start" }}
                        textAlign={{ base: "center", lg: "left" }}
                        width={{ base: "100%", lg: "50%" }}
                    >
                        <MotionBox
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            mb={6}
                        >
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
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Dario HG
                            <Box as="span" display="block" color="beige.700">
                                Desarrollador Web
                            </Box>
                        </MotionHeading>

                        <MotionText
                            fontSize={{ base: 'lg', md: 'xl' }}
                            color="beige.800"
                            mb={8}
                            maxW="550px"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Especializado en crear experiencias web modernas e intuitivas.
                            Mi pasión es construir soluciones digitales elegantes para problemas complejos.
                        </MotionText>

                        <MotionStack
                            direction={{ base: 'column', sm: 'row' }}
                            spacing={4}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <Button
                                rightIcon={<FiArrowRight />}
                                size="lg"
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
                                size="lg"
                                as="a"
                                href="https://github.com/dariohg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </Button>
                        </MotionStack>
                    </Flex>

                    {/* Ilustración animada del lado derecho */}
                    <Box
                        width={{ base: "100%", lg: "50%" }}
                        height={{ base: "300px", md: "400px", lg: "500px" }}
                        display={{ base: "block", lg: "block" }}
                    >
                        <AnimatedIllustration />
                    </Box>
                </Flex>

                {/* Indicador de scroll */}
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
                >
                    <Box
                        width="30px"
                        height="50px"
                        border="2px solid"
                        borderColor="beige.500"
                        borderRadius="full"
                        position="relative"
                    >
                        <Box
                            position="absolute"
                            top="8px"
                            left="50%"
                            transform="translateX(-50%)"
                            width="5px"
                            height="5px"
                            borderRadius="full"
                            bg="beige.500"
                        />
                    </Box>
                </MotionBox>
            </Container>
        </Box>
    );
};

export default Hero;