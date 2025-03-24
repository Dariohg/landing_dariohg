import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { FiArrowUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

// Componente con animación
const MotionBox = motion.create(Box);

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Mostrar/ocultar botón según la posición de scroll
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Función para volver al inicio
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <MotionBox
                    position="fixed"
                    bottom="30px"
                    right="30px"
                    zIndex="10"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                >
                    <IconButton
                        aria-label="Volver al inicio"
                        icon={<FiArrowUp />}
                        onClick={scrollToTop}
                        size="lg"
                        colorScheme="beige"
                        bg="beige.500"
                        color="gray.800"
                        borderRadius="full"
                        boxShadow="lg"
                        _hover={{
                            bg: 'beige.600',
                            transform: 'translateY(-2px)',
                        }}
                    />
                </MotionBox>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;