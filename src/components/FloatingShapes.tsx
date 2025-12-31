import { motion } from 'framer-motion';

const shapes = [
  { type: 'cube', size: 60, x: '10%', y: '20%', delay: 0 },
  { type: 'pyramid', size: 50, x: '85%', y: '15%', delay: 0.5 },
  { type: 'octahedron', size: 40, x: '75%', y: '70%', delay: 1 },
  { type: 'torus', size: 55, x: '15%', y: '75%', delay: 1.5 },
  { type: 'cube', size: 35, x: '50%', y: '85%', delay: 2 },
];

const CubeShape = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className="text-primary">
    <g stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6">
      {/* Front face */}
      <polygon points="25,35 75,35 75,85 25,85" />
      {/* Top face */}
      <polygon points="25,35 50,15 100,15 75,35" />
      {/* Right face */}
      <polygon points="75,35 100,15 100,65 75,85" />
    </g>
  </svg>
);

const PyramidShape = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className="text-primary">
    <g stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6">
      <polygon points="50,10 10,90 90,90" />
      <line x1="50" y1="10" x2="50" y2="90" />
      <line x1="10" y1="90" x2="50" y2="60" />
      <line x1="90" y1="90" x2="50" y2="60" />
    </g>
  </svg>
);

const OctahedronShape = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className="text-primary">
    <g stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6">
      <polygon points="50,5 95,50 50,95 5,50" />
      <line x1="5" y1="50" x2="95" y2="50" />
      <line x1="50" y1="5" x2="50" y2="95" />
    </g>
  </svg>
);

const TorusShape = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className="text-primary">
    <g stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6">
      <ellipse cx="50" cy="50" rx="45" ry="20" />
      <ellipse cx="50" cy="50" rx="25" ry="10" />
      <path d="M 25 50 Q 25 30 50 30 Q 75 30 75 50" />
      <path d="M 25 50 Q 25 70 50 70 Q 75 70 75 50" />
    </g>
  </svg>
);

const getShape = (type: string, size: number) => {
  switch (type) {
    case 'cube': return <CubeShape size={size} />;
    case 'pyramid': return <PyramidShape size={size} />;
    case 'octahedron': return <OctahedronShape size={size} />;
    case 'torus': return <TorusShape size={size} />;
    default: return <CubeShape size={size} />;
  }
};

export const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: shape.x, top: shape.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [0.9, 1.1, 0.9],
            rotateX: [0, 180, 360],
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 10 + index * 2,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ 
              filter: 'drop-shadow(0 0 10px hsl(180 100% 45% / 0.3))',
              transformStyle: 'preserve-3d',
            }}
          >
            {getShape(shape.type, shape.size)}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
