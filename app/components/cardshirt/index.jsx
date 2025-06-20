'use client';

import { Box, Typography, IconButton, Card, CardContent } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const data = [
    { id: 1, title: 'Projeto 1', description: 'Descrição do projeto 1' },
    { id: 2, title: 'Projeto 2', description: 'Descrição do projeto 2' },
    { id: 3, title: 'Projeto 3', description: 'Descrição do projeto 3' },
    { id: 4, title: 'Projeto 4', description: 'Descrição do projeto 4' },
];

export default function CardShirt() {
    const [startIndex, setStartIndex] = useState(0);
    const [direction, setDirection] = useState(0); // 1 para direita, -1 para esquerda

    const handlePrev = () => {
        if (startIndex > 0) {
            setDirection(-1);
            setStartIndex((prev) => Math.max(prev - 1, 0));
        }
    };

    const handleNext = () => {
        if (startIndex + 3 < data.length) {
            setDirection(1);
            setStartIndex((prev) => prev + 1);
        }
    };

    const visibleCards = data.slice(startIndex, startIndex + 3);

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#7397AD',
                padding: 2,
                gap: 4,
                mt: 4,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Seta esquerda */}
            <IconButton
                onClick={handlePrev}
                sx={{
                    visibility: startIndex === 0 ? 'hidden' : 'visible',
                }}
            >
                <ChevronLeft sx={{ color: '#fff' }} />
            </IconButton>

            {/* Área animada */}
            <Box sx={{ display: 'flex', overflow: 'hidden', width: 800 }}>
                <AnimatePresence initial={false} mode="wait">
                    <motion.div
                        key={startIndex}
                        initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{ display: 'flex', gap: '32px' }}
                    >
                        {visibleCards.map((item) => (
                            <Card
                                key={item.id}
                                sx={{
                                    width: 250,
                                    height: 350,
                                    backgroundColor: '#98ADBA',
                                    transition: 'all 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                                        borderRadius: '8px',
                                    },
                                }}
                            >
                                <CardContent>

                                </CardContent>
                            </Card>
                        ))}

                    </motion.div>
                </AnimatePresence>
            </Box>

            {/* Seta direita */}
            <IconButton
                onClick={handleNext}
                sx={{
                    visibility: startIndex + 3 >= data.length ? 'hidden' : 'visible',
                }}
            >
                <ChevronRight sx={{ color: '#fff' }} />
            </IconButton>
        </Box>
    );
}
