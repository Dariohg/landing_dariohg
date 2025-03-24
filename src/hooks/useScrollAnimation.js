import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';


const useScrollAnimation = (options = {}) => {
    const {
        threshold = 0.1,
        triggerOnce = true,
        animation = {
            hidden: { opacity: 0, y: 30 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: 'easeOut' }
            }
        }
    } = options;

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold, triggerOnce });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else if (!triggerOnce) {
            controls.start('hidden');
        }
    }, [controls, inView, triggerOnce]);

    return { ref, controls, inView, variants: animation };
};

export default useScrollAnimation;