export const handleMouseMove = (ref) => (event) => {
    const container = ref.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const offsetX = event.clientX - containerRect.left;
    const containerWidth = container.offsetWidth;

    if (offsetX < containerWidth * 0.1) {
        container.scrollLeft -= 10; 
    } else if (offsetX > containerWidth * 0.9) {
        container.scrollLeft += 10; 
    }
};
