import { Box } from '@chakra-ui/react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
    return (
        <Box>
            <Layout>
                <Hero />
                <About />
                <Projects />
                <Contact />
            </Layout>
            <ScrollToTop />
        </Box>
    );
}

export default App;