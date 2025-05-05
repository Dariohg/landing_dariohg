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
    SimpleGrid,
    Flex,
} from '@chakra-ui/react';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

// Componente con animación
const MotionBox = motion.create(Box);
const MotionFlex = motion.create(Flex);

// Componente de información de contacto mejorado
const ContactInfo = ({ icon, title, content, delay = 0 }) => {
    return (
        <MotionBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay }}
        >
            <HStack
                spacing={4}
                align="flex-start"
                p={4}
                borderRadius="lg"
                transition="all 0.3s"
                _hover={{
                    bg: 'beige.50',
                    transform: 'translateY(-2px)',
                    boxShadow: 'md'
                }}
            >
                <Box
                    p={3}
                    bg="beige.100"
                    color="beige.700"
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Icon as={icon} boxSize={6} />
                </Box>
                <Box>
                    <Text fontWeight="semibold" color="beige.800" fontSize="lg">
                        {title}
                    </Text>
                    <Text color="beige.600">
                        {content}
                    </Text>
                </Box>
            </HStack>
        </MotionBox>
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
        <Box id="contact" py={20} bg="white" position="relative" overflow="hidden">
            {/* Fondo decorativo con gradiente */}
            <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bgGradient="linear(to-br, beige.50, white)"
                opacity="0.5"
            />

            {/* Elementos decorativos */}
            <Box
                position="absolute"
                top="10%"
                left="-5%"
                width="300px"
                height="300px"
                borderRadius="full"
                bg="beige.100"
                opacity="0.1"
                filter="blur(60px)"
            />
            <Box
                position="absolute"
                bottom="10%"
                right="-5%"
                width="400px"
                height="400px"
                borderRadius="full"
                bg="beige.200"
                opacity="0.1"
                filter="blur(80px)"
            />

            {/* Patrón decorativo */}
            <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                opacity="0.02"
                bgImage="radial-gradient(beige.400 1px, transparent 1px)"
                bgSize="20px 20px"
            />

            <Container maxW="container.xl" position="relative">
                <VStack spacing={4} mb={16} align="center">
                    <MotionBox
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Heading
                            as="h2"
                            size="2xl"
                            textAlign="center"
                            color="beige.900"
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
                            Contacto
                        </Heading>
                    </MotionBox>
                    <Text
                        fontSize="xl"
                        textAlign="center"
                        maxW="600px"
                        color="beige.700"
                        mt={4}
                    >
                        ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas.
                    </Text>
                </VStack>

                <MotionBox
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                >
                    <Flex
                        direction={{ base: 'column', lg: 'row' }}
                        gap={12}
                        align="stretch"
                    >
                        {/* Información de contacto */}
                        <Box flex="1">
                            <VStack spacing={6} align="stretch">
                                <MotionBox
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Heading as="h3" size="lg" mb={6} color="beige.800">
                                        Información de Contacto
                                    </Heading>
                                </MotionBox>

                                <ContactInfo
                                    icon={FiMail}
                                    title="Email"
                                    content="223186@ids.upchiapas.edu.mx"
                                    delay={0.1}
                                />
                                <ContactInfo
                                    icon={FiPhone}
                                    title="Teléfono"
                                    content="+52 965 128 4983"
                                    delay={0.2}
                                />
                                <ContactInfo
                                    icon={FiMapPin}
                                    title="Ubicación"
                                    content="Chiapas, México"
                                    delay={0.3}
                                />

                                {/* Decoración adicional */}
                                <Box
                                    mt={8}
                                    p={6}
                                    bg="beige.50"
                                    borderRadius="xl"
                                    borderLeft="4px solid"
                                    borderColor="beige.400"
                                >
                                    <Text color="beige.700" fontStyle="italic">
                                        "La mejor manera de predecir el futuro es crearlo."
                                    </Text>
                                    <Text color="beige.600" fontSize="sm" mt={2}>
                                        - Peter Drucker
                                    </Text>
                                </Box>
                            </VStack>
                        </Box>

                        {/* Formulario de contacto */}
                        <Box flex="1.5">
                            <MotionBox
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                bg="white"
                                p={8}
                                borderRadius="2xl"
                                boxShadow="lg"
                                position="relative"
                                overflow="hidden"
                            >
                                {/* Decoración del formulario */}
                                <Box
                                    position="absolute"
                                    top="-50px"
                                    right="-50px"
                                    width="100px"
                                    height="100px"
                                    borderRadius="full"
                                    bg="beige.100"
                                    opacity="0.1"
                                />

                                <Heading as="h3" size="lg" mb={6} color="beige.800">
                                    Envíame un mensaje
                                </Heading>
                                <form onSubmit={handleSubmit}>
                                    <VStack spacing={5}>
                                        <FormControl isRequired>
                                            <FormLabel color="beige.700">Nombre</FormLabel>
                                            <Input
                                                name="name"
                                                placeholder="Tu nombre"
                                                value={formData.name}
                                                onChange={handleChange}
                                                focusBorderColor="beige.500"
                                                borderColor="beige.200"
                                                _hover={{ borderColor: "beige.300" }}
                                                size="lg"
                                            />
                                        </FormControl>

                                        <FormControl isRequired>
                                            <FormLabel color="beige.700">Email</FormLabel>
                                            <Input
                                                name="email"
                                                type="email"
                                                placeholder="tu@email.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                focusBorderColor="beige.500"
                                                borderColor="beige.200"
                                                _hover={{ borderColor: "beige.300" }}
                                                size="lg"
                                            />
                                        </FormControl>

                                        <FormControl isRequired>
                                            <FormLabel color="beige.700">Asunto</FormLabel>
                                            <Input
                                                name="subject"
                                                placeholder="¿En qué puedo ayudarte?"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                focusBorderColor="beige.500"
                                                borderColor="beige.200"
                                                _hover={{ borderColor: "beige.300" }}
                                                size="lg"
                                            />
                                        </FormControl>

                                        <FormControl isRequired>
                                            <FormLabel color="beige.700">Mensaje</FormLabel>
                                            <Textarea
                                                name="message"
                                                placeholder="Cuéntame sobre tu proyecto..."
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={5}
                                                focusBorderColor="beige.500"
                                                borderColor="beige.200"
                                                _hover={{ borderColor: "beige.300" }}
                                                size="lg"
                                                resize="none"
                                            />
                                        </FormControl>

                                        <Button
                                            type="submit"
                                            colorScheme="beige"
                                            size="lg"
                                            width="full"
                                            isLoading={isSubmitting}
                                            loadingText="Enviando..."
                                            rightIcon={<FiSend />}
                                            bg="beige.500"
                                            color="white"
                                            _hover={{
                                                bg: 'beige.600',
                                                transform: 'translateY(-2px)',
                                                boxShadow: 'lg'
                                            }}
                                            transition="all 0.3s"
                                        >
                                            Enviar Mensaje
                                        </Button>
                                    </VStack>
                                </form>
                            </MotionBox>
                        </Box>
                    </Flex>
                </MotionBox>

                {/* Sección adicional de métodos de contacto */}
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    mt={20}
                >
                    <Box
                        bg="beige.50"
                        p={8}
                        borderRadius="2xl"
                        position="relative"
                        overflow="hidden"
                    >
                        <Box
                            position="absolute"
                            top="0"
                            left="0"
                            width="100%"
                            height="100%"
                            opacity="0.05"
                            bgImage="radial-gradient(beige.400 1px, transparent 1px)"
                            bgSize="16px 16px"
                        />

                        <Heading as="h3" size="md" mb={6} textAlign="center" color="beige.800">
                            Otras formas de contactarme
                        </Heading>

                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                            {[
                                {
                                    title: "Horario",
                                    content: "Lun - Vie: 9:00 AM - 6:00 PM",
                                    subtext: "Tiempo de respuesta: 24-48 horas"
                                },
                                {
                                    title: "Redes Sociales",
                                    content: "Sígueme en mis redes",
                                    subtext: "Para ver mis últimos proyectos"
                                },
                                {
                                    title: "Colaboraciones",
                                    content: "Abierto a nuevos proyectos",
                                    subtext: "¡Hagamos algo increíble juntos!"
                                }
                            ].map((item, index) => (
                                <Box
                                    key={index}
                                    p={6}
                                    bg="white"
                                    borderRadius="lg"
                                    textAlign="center"
                                    boxShadow="sm"
                                    transition="all 0.3s"
                                    _hover={{
                                        transform: 'translateY(-5px)',
                                        boxShadow: 'md'
                                    }}
                                >
                                    <Text fontWeight="bold" color="beige.800" mb={2}>
                                        {item.title}
                                    </Text>
                                    <Text color="beige.600" mb={1}>
                                        {item.content}
                                    </Text>
                                    <Text fontSize="sm" color="beige.500">
                                        {item.subtext}
                                    </Text>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>
                </MotionBox>
            </Container>
        </Box>
    );
};

export default Contact;