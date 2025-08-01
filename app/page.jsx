'use client';

import 'normalize.css';
import CardShirt from './components/cardshirt';
import CardBanner from './components/cardbanner';
import CardInvite from './components/cardinvite';
import { Box, Typography, Avatar, Container, } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Home() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box sx={{ backgroundColor: '#252323', width: '100%', overflowX: 'hidden', }}>
            {/* Header */}
            <Box
                sx={{
                    p: '1.5rem',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    borderBottom: '1px solid #9FB4C2',
                    gap: { xs: '1rem', md: 0 },
                }}
            >
                <Box
                    component="img"
                    src="/images/logo.webp"
                    alt="Logo da Neves arts"
                    sx={{
                        width: { xs: '120px', md: '170px' },
                        height: 'auto',
                        flexShrink: 0,
                    }}
                />

                <Box
                    sx={{
                        display: 'flex',
                        gap: { xs: '0.8rem', md: '1.5rem' },
                        flexWrap: 'wrap',
                        justifyContent: 'flex-end',
                        flexGrow: 1,
                    }}
                >
                    <Typography
                        onClick={() => scrollToSection('sobre')}
                        sx={{
                            color: '#7397AD',
                            fontSize: { md: '1.25rem', xs: '1rem' },
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Sobre
                    </Typography>
                    <Typography
                        onClick={() => scrollToSection('trabalhos')}
                        sx={{
                            color: '#7397AD',
                            fontSize: { md: '1.25rem', xs: '1rem' },
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Trabalhos
                    </Typography>
                    <Typography
                        onClick={() => scrollToSection('contato')}
                        sx={{
                            color: '#7397AD',
                            fontSize: { md: '1.25rem', xs: '1rem' },
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Contato
                    </Typography>
                </Box>
            </Box>



            {/* Intro */}
            <Box
                id="sobre"
                sx={{
                    mt: '4rem',
                    mb: '4rem',
                    px: { xs: 2, md: 10 },
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1.5rem',
                }}
            >
                <Avatar
                    src="/images/foto tio.webp"
                    alt="Foto de perfil"
                    sx={{
                        width: { md: '15.625rem', xs: '12rem' },
                        height: { md: '15.625rem', xs: '12rem' },
                    }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography sx={{ mt: '1.5rem', color: 'white', fontSize: { md: '2.125rem', xs: '2rem' } }}>
                        Neves Arts
                    </Typography>

                    <Typography
                        sx={{
                            mt: '0.5rem',
                            color: 'white',
                            fontSize: { md: '1.375rem', xs: '1.20rem' },
                            maxWidth: '40rem',
                            mx: { xs: 'auto', md: 0 },
                        }}
                    >
                        Somos uma marca que transforma ideias em estampas criativas, unindo estilo e personalidade. Com foco em qualidade e originalidade, levamos arte para camisetas, canecas e acessórios, criando produtos que inspiram e se destacam.
                    </Typography>
                </Box>
            </Box>

            {/* Conteúdo Principal */}
            <Container id='trabalhos' maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column' }}>
                {/* Camisas */}
                <Typography sx={{ color: 'white', fontSize: { md: '2rem', xs: '1.5rem' }, mt: '1.5rem', ml: { md: '4rem', xs: '3.5rem' } }}>
                    Camisas personalizadas
                </Typography>

                <CardShirt />

                {/* Banners */}
                <Box
                    sx={{
                        p: 1,
                        mt: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#7397AD',
                        borderRadius: '0.5rem',
                        width: { md: '85%', xs: '90%' },
                        mx: 'auto',
                        overflow: 'hidden',
                    }}
                >
                    <Typography
                        sx={{
                            color: 'white',
                            fontSize: { md: '2rem', xs: '1.5rem' },
                            mb: '1rem',
                            textAlign: 'center',
                        }}
                    >
                        {'Banners'}
                    </Typography>

                    <Box sx={{ width: '100%' }}>
                        <CardBanner />
                    </Box>
                </Box>
            </Container>

            {/* Contato */}
            <Box
                id="contato"
                sx={{
                    mt: '3rem',
                    px: { xs: 2, md: '10%' },
                    pb: '3rem',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography
                    sx={{
                        color: 'white',
                        fontSize: { md: '2.375rem', xs: '1.5rem' },
                        textAlign: 'center',
                        mt: '1rem',
                    }}
                >
                    Entre em contato com a gente e faça seu orçamento
                </Typography>

                <Box
                    sx={{
                        mt: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaWhatsapp style={{ color: 'white', fontSize: '2rem' }} />
                        <Typography sx={{ color: 'white', fontSize: { md: '1.625rem', xs: '1rem' } }}>
                            Telefone/Whatsapp: (91) 00000-0000
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <EmailIcon style={{ color: 'white', fontSize: '2rem' }} />
                        <Typography sx={{ color: 'white', fontSize: { md: '1.625rem', xs: '1rem' } }}>
                            Email: Contato@estampascriativas
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaInstagram style={{ color: 'white', fontSize: '2rem' }} />
                        <Typography sx={{ color: 'white', fontSize: { md: '1.625rem', xs: '1rem' } }}>
                            Instagram: @NevesArts
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
