'use client';

import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const createDot = () => {
      const dot = document.createElement('div');
      dot.className = 'absolute w-2 h-2 rounded-full';

      // Random position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;

      // Brighter, more saturated colors with higher opacity
      const hue = Math.floor(Math.random() * 60) + 200; // Blues and purples
      const saturation = 60 + Math.random() * 30; // 60-90%
      const opacity = 0.2 + Math.random() * 0.3; // 20-50% opacity
      dot.style.backgroundColor = `hsla(${hue}, ${saturation}%, 70%, ${opacity})`;

      // More dynamic animation
      const duration = 20 + Math.random() * 15; // 20-35s
      const delay = -1 * (Math.random() * 20); // 0-20s negative delay
      const scale = 15 + Math.random() * 10; // 15-25 scale
      const translate = -30 + Math.random() * 60; // -30 to 30px

      dot.style.left = `${posX}%`;
      dot.style.top = `${posY}%`;
      dot.style.animation = `float ${duration}s ${delay}s infinite ease-in-out alternate`;
      dot.style.setProperty('--scale', String(scale));
      dot.style.setProperty('--translate', `${translate}px`);

      return dot;
    };

    // Create more dots for better visibility
    const dots = Array.from({ length: 80 }, () => createDot());
    dots.forEach((dot) => containerRef.current?.appendChild(dot));

    // Cleanup
    return () => {
      dots.forEach((dot) => containerRef.current?.removeChild(dot));
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      style={{
        mixBlendMode: 'screen',
      }}
    />
  );
};

export default AnimatedBackground;
