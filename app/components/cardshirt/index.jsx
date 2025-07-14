'use client';

import { Box, Card } from '@mui/material';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const data = [
    {
        id: 1,
        frente: 'camisa azul frente.png',
        costa: 'camisa azul costa.png',
    },
    {
        id: 2,
        frente: 'camisa amarela frente.png',
        costa: 'camisa amarela costa.png',
    },
    {
        id: 3,
        frente: 'camisa raimundo frente.png',
        costa: 'camisa raimundo costa.png',
    },
    {
        id: 4,
        frente: 'camisa roxa frente.png',
        costa: 'camisa roxa costa.png',
    },
    {
        id: 5,
        frente: 'manga longa frente.png',
        costa: 'manga longa costa.png',
    },
];

export default function CardShirt() {
    const [showBackArray, setShowBackArray] = useState(data.map(() => false));

    useEffect(() => {
        const interval = setInterval(() => {
            setShowBackArray(prev =>
                prev.map(val => !val)
            );
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const margin = 24;
    const width = 500;

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 2,
                mt: 4,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    overflow: 'hidden',
                    width: 1400,
                    justifyContent: 'flex-start',
                    gap: 0,
                }}
            >
                {data.map((item, index) => {
                    const showBack = showBackArray[index];

                    return (
                        <motion.div
                            key={item.id}
                            animate={{
                                width,
                                opacity: 1,
                                zIndex: 4,
                            }}
                            transition={{ duration: 0.6 }}
                            style={{
                                height: 400,
                                marginInline: margin,
                                transformOrigin: 'center',
                            }}
                        >
                            <Card
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: '#98ADBA',
                                    borderRadius: '8px',
                                    boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                    position: 'relative',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        position: 'relative',
                                    }}
                                >
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={showBack ? item.costa : item.frente}
                                            src={`/images/${showBack ? item.costa : item.frente}`}
                                            alt={`Imagem ${item.id}`}
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            transition={{ duration: 0.6 }}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                borderRadius: '8px',
                                            }}
                                        />
                                    </AnimatePresence>
                                </Box>
                            </Card>
                        </motion.div>
                    );
                })}
            </Box>
        </Box>
    );
}
