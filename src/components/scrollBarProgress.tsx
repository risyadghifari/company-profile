import { useScroll, motion, useSpring, MotionProps } from 'framer-motion';

interface ScrollProgressBarProps extends MotionProps {
  navbarHeight: number;
  navbarWidth: number;
}

const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  navbarHeight,
  initial,
  whileInView,
  transition,
}) => {
  const { scrollXProgress } = useScroll(); // Use scrollXProgress for horizontal scrolling
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: '0%', // Start the progress bar from the left
        height: '4px', // Thickness of the scroll progress bar
        backgroundColor: 'black',
        width: '100%', // Make the progress bar span the entire navbar width
        position: 'absolute', // Position the progress bar inside the navbar
        bottom: navbarHeight, // Adjust the top position to be below the navbar
        left: 0, // Ensure it starts from the left side of the navbar
        right: 0, // Ensure it spans the full width of the navbar
        zIndex: 0, // Set zIndex to 0 to ensure it's behind other navbar content
      }}
      initial={initial}
      whileInView={whileInView}
      transition={transition}
    />
  );
};

export default ScrollProgressBar;
