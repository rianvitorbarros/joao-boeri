import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  
  const [isVisible, setIsVisible] = useState(false);
  
  // Control cursor state without triggering React re-renders
  const cursorState = useRef({
    x: -100,
    y: -100,
    ringX: -100,
    ringY: -100,
    type: 'default', // 'default', 'hover', 'cta', 'image', 'dot', 'hidden'
    isClicking: false,
    isHidden: true,
  });

  useEffect(() => {
    // Only enable on devices with hover and fine pointer
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (!mediaQuery.matches || reducedMotionQuery.matches) {
      return;
    }

    setIsVisible(true);
    document.body.classList.add('custom-cursor-enabled');

    const updatePosition = () => {
      const state = cursorState.current;
      
      // Smooth interpolation for the ring
      // Value 0.15 controls the smoothing amount (lower = smoother/more delay)
      state.ringX += (state.x - state.ringX) * 0.15;
      state.ringY += (state.y - state.ringY) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${state.x}px, ${state.y}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${state.ringX}px, ${state.ringY}px, 0) ${state.isClicking ? 'scale(0.8)' : 'scale(1)'}`;
      }

      requestRef.current = requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (e: MouseEvent) => {
      cursorState.current.x = e.clientX;
      cursorState.current.y = e.clientY;

      if (cursorState.current.isHidden) {
        cursorState.current.isHidden = false;
        cursorState.current.ringX = e.clientX;
        cursorState.current.ringY = e.clientY;
        updateVisibility();
      }

      // Check for interactive elements
      const target = e.target as HTMLElement;
      
      // Disable custom cursor over text inputs
      const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT' || target.isContentEditable;
      if (isInput) {
        setCursorType('hidden');
        return;
      }

      const interactiveEl = target.closest('[data-cursor]');
      if (interactiveEl) {
        const type = interactiveEl.getAttribute('data-cursor') || 'hover';
        setCursorType(type);
      } else if (target.closest('a') || target.closest('button')) {
        // Fallback for buttons and links without data-cursor
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseDown = () => {
      cursorState.current.isClicking = true;
      updateStyles();
    };

    const handleMouseUp = () => {
      cursorState.current.isClicking = false;
      updateStyles();
    };

    const handleMouseEnter = () => {
      cursorState.current.isHidden = false;
      updateVisibility();
    };

    const handleMouseLeave = () => {
      cursorState.current.isHidden = true;
      updateVisibility();
    };

    const setCursorType = (type: string) => {
      if (cursorState.current.type !== type) {
        cursorState.current.type = type;
        updateStyles();
      }
    };

    const updateVisibility = () => {
      if (dotRef.current && ringRef.current) {
        const opacity = cursorState.current.isHidden ? '0' : '1';
        dotRef.current.style.opacity = opacity;
        ringRef.current.style.opacity = opacity;
      }
    };

    const updateStyles = () => {
      if (!ringRef.current || !dotRef.current) return;
      
      const state = cursorState.current;
      let ringSize = 32;
      let ringBorder = 'border-[#C5A880]/40';
      let ringBg = 'bg-transparent';

      if (state.type === 'hidden') {
        dotRef.current.style.opacity = '0';
        ringRef.current.style.opacity = '0';
        return;
      } else {
        dotRef.current.style.opacity = '1';
        ringRef.current.style.opacity = '1';
      }

      switch (state.type) {
        case 'hover':
          ringSize = 48;
          ringBorder = 'border-[#C5A880]/60';
          ringBg = 'bg-[#C5A880]/5';
          break;
        case 'cta':
          ringSize = 56;
          ringBorder = 'border-[#C5A880]/80';
          ringBg = 'bg-[#C5A880]/10';
          break;
        case 'image':
          ringSize = 64;
          ringBorder = 'border-white/40';
          ringBg = 'bg-white/5';
          break;
        case 'dot':
          ringSize = 24;
          ringBorder = 'border-[#C5A880]/80';
          break;
        default:
          break;
      }

      // Update classes for color and background transitions
      ringRef.current.className = `fixed top-0 left-0 pointer-events-none rounded-full border border-solid box-border z-[9999] flex items-center justify-center transition-colors duration-300 ease-out ${ringBorder} ${ringBg}`;
      
      // Update dimensions with transition
      ringRef.current.style.width = `${ringSize}px`;
      ringRef.current.style.height = `${ringSize}px`;
      ringRef.current.style.marginLeft = `-${ringSize / 2}px`;
      ringRef.current.style.marginTop = `-${ringSize / 2}px`;
      ringRef.current.style.transition = 'width 0.3s ease-out, height 0.3s ease-out, margin 0.3s ease-out, background-color 0.3s ease-out, border-color 0.3s ease-out, opacity 0.3s ease-out';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    requestRef.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none rounded-full border border-solid border-[#C5A880]/40 box-border z-[9999] bg-transparent opacity-0"
        style={{ 
          width: '32px', 
          height: '32px', 
          marginLeft: '-16px', 
          marginTop: '-16px',
          transition: 'width 0.3s ease-out, height 0.3s ease-out, margin 0.3s ease-out, background-color 0.3s ease-out, border-color 0.3s ease-out, opacity 0.3s ease-out'
        }}
      />
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none rounded-full bg-[#C5A880] z-[10000] opacity-0"
        style={{ 
          width: '6px', 
          height: '6px', 
          marginLeft: '-3px', 
          marginTop: '-3px', 
          transition: 'opacity 0.2s ease-out' 
        }}
      />
    </>
  );
}
