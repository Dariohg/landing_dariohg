
export const getImageUrl = (path) => {
    try {
        // Para imágenes en assets
        return new URL(`../assets/${path}`, import.meta.url).href;
    } catch (error) {
        console.error(`Error loading image: ${path}`, error);
        return 'https://via.placeholder.com/400x300?text=Image+Not+Found';
    }
};


export const getPlaceholder = (width = 600, height = 400, text = 'Proyecto') => {
    // Usa colores beige
    return `https://via.placeholder.com/${width}x${height}/e8d9c0/564a32?text=${encodeURIComponent(text)}`;
};