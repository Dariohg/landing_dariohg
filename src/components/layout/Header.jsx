import React, { useState, useEffect } from 'react';
import {
    Box,
    Flex,
    Text,
    HStack,
    Button,
    Container,
    IconButton,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    useDisclosure
} from '@chakra-ui/react';
import { FiMenu, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Componente con animación de Framer Motion
const MotionBox = motion.create(Box);


const NAV_ITEMS = [
    { label: 'Inicio', id: 'home' },
    { label: 'Sobre mí', id: 'about' },
    { label: 'Proyectos', id: 'projects' },
    { label: 'Contacto', id: 'contact' }
];

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [scrolled, setScrolled] = useState(false);

    // Cambiar estilo del header al hacer scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navegar a sección
    const scrollToSection = (id) => {
        onClose();
        const element = document.getElementById(id);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <MotionBox
            as="header"
            position="fixed"
            top="0"
            left="0"
            right="0"
            zIndex="1000"
            transition="all 0.3s ease-in-out"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            bg={scrolled ? 'rgba(247, 242, 234, 0.9)' : 'transparent'}
            backdropFilter={scrolled ? 'blur(8px)' : 'none'}
            boxShadow={scrolled ? 'sm' : 'none'}
            py={scrolled ? 3 : 5}
        >
            <Container maxW="container.xl">
                <Flex justify="space-between" align="center">
                    <Text
                        fontSize="xl"
                        fontWeight="bold"
                        letterSpacing="tight"
                        color="beige.800"
                    >
                        DarioHG
                    </Text>

                    {/* Navigation - Desktop */}
                    <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
                        {NAV_ITEMS.map((item) => (
                            <Button
                                key={item.id}
                                variant="ghost"
                                color="beige.800"
                                onClick={() => scrollToSection(item.id)}
                                _hover={{
                                    bg: 'beige.100',
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                        <Button
                            rightIcon={<FiExternalLink />}
                            variant="solid"
                        >
                            Currículum
                        </Button>
                    </HStack>

                    {/* Navigation - Mobile */}
                    <IconButton
                        aria-label="Open menu"
                        icon={<FiMenu />}
                        display={{ base: 'flex', md: 'none' }}
                        onClick={onOpen}
                        variant="ghost"
                        color="beige.800"
                    />

                    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                        <DrawerOverlay />
                        <DrawerContent bg="beige.50">
                            <DrawerCloseButton color="beige.800" />
                            <DrawerHeader borderBottomWidth="1px" borderColor="beige.200">
                                Menú
                            </DrawerHeader>
                            <DrawerBody>
                                <VStack spacing={4} align="start" pt={4}>
                                    {NAV_ITEMS.map((item) => (
                                        <Button
                                            key={item.id}
                                            variant="ghost"
                                            w="full"
                                            justifyContent="flex-start"
                                            onClick={() => scrollToSection(item.id)}
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                    <Button
                                        rightIcon={<FiExternalLink />}
                                        variant="solid"
                                        w="full"
                                    >
                                        Currículum
                                    </Button>
                                </VStack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Flex>
            </Container>
        </MotionBox>
    );
};

export default Header;