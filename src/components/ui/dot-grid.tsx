import { useEffect, useRef } from "react";

interface DotGridProps {
    gridGap?: number;
    dotSize?: number;
    dotColor?: string;
    className?: string;
}

export const DotGrid = ({
    gridGap = 30, // Gap between dots
    dotSize = 2,  // Radius of dots
    dotColor = "#cbd5e1", // Default color (slate-300)
    className,
}: DotGridProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let mouseX = -1000;
        let mouseY = -1000;

        const resizeCanvas = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
            }
        };

        const handleMouseMove = (event: MouseEvent) => {
            // Get mouse position relative to canvas
            const rect = canvas.getBoundingClientRect();
            mouseX = event.clientX - rect.left;
            mouseY = event.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouseX = -1000;
            mouseY = -1000;
        };

        const draw = () => {
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const width = canvas.width;
            const height = canvas.height;
            const spacing = gridGap;

            ctx.fillStyle = dotColor;

            for (let x = 0; x < width; x += spacing) {
                for (let y = 0; y < height; y += spacing) {
                    // Calculate distance from mouse
                    const dx = x - mouseX;
                    const dy = y - mouseY;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Wave effect parameters
                    const maxDistance = 200;
                    let size = dotSize;
                    let xOffset = 0;
                    let yOffset = 0;

                    if (distance < maxDistance) {
                        // Scale size based on distance
                        const scale = 1 + (maxDistance - distance) / maxDistance;
                        size = dotSize * scale;

                        // Optional: Move dots away slightly
                        const angle = Math.atan2(dy, dx);
                        const move = (maxDistance - distance) / 10;
                        xOffset = Math.cos(angle) * move;
                        yOffset = Math.sin(angle) * move;
                    }

                    ctx.beginPath();
                    ctx.arc(x + xOffset, y + yOffset, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        // Initial setup
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);

        // Start animation loop
        draw();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [gridGap, dotSize, dotColor]);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{ display: "block", width: "100%", height: "100%" }}
        />
    );
};
