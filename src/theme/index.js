import { extendTheme } from '@chakra-ui/react';

const colors = {
    brand: {
        50: '#f8f5f0',
        100: '#f0ebe1',
        200: '#e6dfd0',
        300: '#d9cdb7',
        400: '#c7b69c',
        500: '#b29e80',
        600: '#9a8469',
        700: '#7d6c55',
        800: '#5d5040',
        900: '#3d352a',
    },
    beige: {
        50: '#fcfaf7',
        100: '#f7f2ea',
        200: '#f1e8d9',
        300: '#e8d9c0',
        400: '#dbcaa7',
        500: '#d0bc92',
        600: '#b39b71',
        700: '#96815d',
        800: '#776748',
        900: '#564a32',
    },
};

const fonts = {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
};

const components = {
    Button: {
        baseStyle: {
            borderRadius: 'md',
            fontWeight: 'medium',
            _hover: {
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
            },
            transition: 'all 0.2s ease-in-out',
        },
        variants: {
            solid: {
                bg: 'beige.500',
                color: 'gray.800',
                _hover: {
                    bg: 'beige.600',
                },
            },
            outline: {
                borderColor: 'beige.500',
                color: 'beige.700',
                _hover: {
                    bg: 'beige.50',
                },
            },
        },
    },
    Heading: {
        baseStyle: {
            fontWeight: 'semibold',
            letterSpacing: '-0.025em',
        },
    },
    Link: {
        baseStyle: {
            color: 'beige.700',
            _hover: {
                textDecoration: 'none',
                color: 'beige.600',
            },
        },
    },
};

const styles = {
    global: {
        body: {
            bg: 'beige.50',
            color: 'gray.800',
        },
    },
};

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const theme = extendTheme({
    colors,
    fonts,
    components,
    styles,
    config,
});

export default theme;