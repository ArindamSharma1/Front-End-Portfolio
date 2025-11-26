import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const [hovering, setHovering] = useState(false);

  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  const speed = 0.15; // lower = smoother

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const handleHover = () => setHovering(true);
    const handleLeave = () => setHovering(false);

    window.addEventListener("mousemove", handleMove);

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    let animationFrame: number;
    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * speed;
      pos.current.y += (target.current.y - pos.current.y) * speed;

      if (cursorRef.current) {
        const size = hovering ? 40 : 18;
        const offset = size / 2;

        cursorRef.current.style.transform = `translate(
          ${pos.current.x - offset}px,
          ${pos.current.y - offset}px
        )`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);

      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });

      cancelAnimationFrame(animationFrame);
    };
  }, [hovering]);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] transition-[width,height,background,border] duration-150 ease-out"
      style={{
        width: hovering ? "40px" : "18px",
        height: hovering ? "40px" : "18px",
        backgroundColor: "#38BDF8",          // solid fill
        border: "1.5px solid #7DD3FC",      // lighter border
        borderRadius: "9999px",
        opacity: 0.9                         // subtle softness
      }}
    />
  );
}
