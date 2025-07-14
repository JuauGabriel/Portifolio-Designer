'use client';

import { Box } from '@mui/material';
import { useState } from 'react';
import { motion } from 'framer-motion';

const convites = [
    { id: 1, title: 'Convite 1' },
    { id: 2, title: 'Convite 2' },
    { id: 3, title: 'Convite 3' },
    { id: 4, title: 'Convite 4' },
    { id: 5, title: 'Convite 5' },
];

export default function CardConvites() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                overflow: 'hidden',
                mt: 4,
            }}
        >
            {convites.map((item, index) => {
                const isHovered = hoveredIndex === index;
                const width = isHovered ? 270 : 250;
                const height = isHovered ? 320 : 300;
                const margin = isHovered ? 2 : 1;

                return (
                    <motion.div
                        key={item.id}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        animate={{
                            width,
                            height,
                            margin,
                            zIndex: isHovered ? 2 : 1,
                        }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        style={{
                            borderRadius: '10px',
                            overflow: 'hidden',
                            backgroundColor: '#98ADBA',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                        }}
                    >
                        
                    </motion.div>
                );
            })}
        </Box>
    );
}
