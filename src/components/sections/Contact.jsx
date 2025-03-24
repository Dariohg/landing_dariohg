import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    HStack,
    Icon,
    useToast,
} from '@chakra-ui/react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

// Componente con animación
const MotionBox = motion.create(Box);

// Componente de información de contacto
const ContactInfo = ({ icon, title, content }) => {
    return (
        <HStack spacing={4} align="flex-start">
            <Box
                p={2}
                bg="beige.100"
                color="beige.700"
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Icon as={icon} boxSize={5} />
            </Box>
            <Box>
                <Text fontWeight="medium" color="beige.800">
                    {title}
                </Text>
                <Text color="beige.600">{content}</Text>
            </Box>
        </HStack>
    );
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const toast = useToast();

    const { ref, controls, variants } = useScrollAnimation({
        threshold: 0.1,
        animation: {
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulación de envío de formulario
        setTimeout(() => {
            setIsSubmitting(false);
            toast({
                title: 'Mensaje enviado',
                description: 'Tu mensaje ha sido enviado correctamente. Me pondré en contacto contigo pronto.',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        }, 1500);
    };

    return (
        <Box id="contact" py={20} bg="beige.50">
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
                        Contacto
                    </Heading>
                    <Text
                        fontSize="xl"
                        textAlign="center"
                        maxW="800px"
                        color="beige.800"
                    >
                        ¿Tienes algún proyecto en mente? ¡Ponte en contacto conmigo!
                    </Text>
                </VStack>

                <MotionBox
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                >
                    <Box
                        display="flex"
                        flexDirection={{ base: 'column', lg: 'row' }}
                        gap={8}
                        bg="white"
                        borderRadius="xl"
                        overflow="hidden"
                        boxShadow="md"
                    >
                        {/* Información de contacto */}
                        <Box
                            p={8}
                            bg="beige.200"
                            color="beige.900"
                            flex="1"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <Heading as="h3" size="lg" mb={6}>
                                Información de Contacto
                            </Heading>
                            <VStack spacing={6} align="flex-start">
                                <ContactInfo
                                    icon={FiMail}
                                    title="Email"
                                    content="223186@ids.upchiapas.edu.mx"
                                />
                                <ContactInfo
                                    icon={FiPhone}
                                    title="Teléfono"
                                    content="+52 965 128 4983"
                                />
                                <ContactInfo
                                    icon={FiMapPin}
                                    title="Ubicación"
                                    content="Chiapas, México"
                                />
                            </VStack>
                        </Box>

                        {/* Formulario de contacto */}
                        <Box p={8} flex="2">
                            <Heading as="h3" size="lg" mb={6} color="beige.900">
                                Envíame un mensaje
                            </Heading>
                            <form onSubmit={handleSubmit}>
                                <VStack spacing={4} align="stretch">
                                    <FormControl isRequired>
                                        <FormLabel htmlFor="name" color="beige.800">Nombre</FormLabel>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Tu nombre"
                                            value={formData.name}
                                            onChange={handleChange}
                                            focusBorderColor="beige.500"
                                            bg="beige.50"
                                        />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel htmlFor="email" color="beige.800">Email</FormLabel>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Tu email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            focusBorderColor="beige.500"
                                            bg="beige.50"
                                        />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel htmlFor="subject" color="beige.800">Asunto</FormLabel>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            placeholder="Asunto del mensaje"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            focusBorderColor="beige.500"
                                            bg="beige.50"
                                        />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel htmlFor="message" color="beige.800">Mensaje</FormLabel>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tu mensaje"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            focusBorderColor="beige.500"
                                            bg="beige.50"
                                        />
                                    </FormControl>
                                    <Button
                                        type="submit"
                                        isLoading={isSubmitting}
                                        loadingText="Enviando"
                                        size="lg"
                                        alignSelf="flex-end"
                                        mt={4}
                                    >
                                        Enviar Mensaje
                                    </Button>
                                </VStack>
                            </form>
                        </Box>
                    </Box>
                </MotionBox>
            </Container>
        </Box>
    );
};

export default Contact;