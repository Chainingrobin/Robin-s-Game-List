export function applyTiltEffect(card: HTMLElement) {
  let animationFrameId: number | null = null;

const handleMouseMove = (e: MouseEvent) => {
  if (animationFrameId !== null) return;

  animationFrameId = requestAnimationFrame(() => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    card.style.boxShadow = `${-rotateY}px ${rotateX}px 8px rgba(0, 0, 0, 0.4)`;

    animationFrameId = null;
  });
};

  const handleMouseLeave = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.4)';
  };

  card.addEventListener('mousemove', handleMouseMove);
  card.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    card.removeEventListener('mousemove', handleMouseMove);
    card.removeEventListener('mouseleave', handleMouseLeave);
  };
}
