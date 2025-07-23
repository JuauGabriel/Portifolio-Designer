'use client';

import 'normalize.css';
import CardShirt from './components/cardshirt';
import CardBanner from './components/cardbanner';
import CardInvite from './components/cardinvite';
import { Box, Typography, Avatar, Container } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Home() {
    return (
        <Box sx={{ backgroundColor: '#252323' }}>
            {/* Header */}
            <Box
                sx={{
                    p: '1.5rem',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    borderBottom: '1px solid #9FB4C2',
                }}
            >
                <Typography sx={{ color: '#7397AD', fontSize: '1.5rem' }}>
                    Sua logo aqui
                </Typography>

                <Box sx={{ display: 'flex', gap: '1.5rem', mt: { xs: '1rem', md: 0 } }}>
                    <Typography sx={{ color: '#7397AD', fontSize: '1.25rem' }}>Sobre</Typography>
                    <Typography sx={{ color: '#7397AD', fontSize: '1.25rem' }}>Trabalhos</Typography>
                    <Typography sx={{ color: '#7397AD', fontSize: '1.25rem' }}>Contato</Typography>
                </Box>
            </Box>

            {/* Intro */}
            <Box
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
                <Avatar sx={{ width: '15.625rem', height: '15.625rem' }} />

                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography sx={{ mt: '1.5rem', color: 'white', fontSize: '2.125rem' }}>
                        Neves Arts
                    </Typography>

                    <Typography
                        sx={{
                            mt: '0.5rem',
                            color: 'white',
                            fontSize: '1.375rem',
                            maxWidth: '40rem',
                            mx: { xs: 'auto', md: 0 },
                        }}
                    >
                        Somos uma marca que transforma ideias em estampas criativas, unindo estilo e personalidade. Com foco em qualidade e originalidade, levamos arte para camisetas, canecas e acessórios, criando produtos que inspiram e se destacam.
                    </Typography>
                </Box>
            </Box>

            {/* Conteúdo Principal */}
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column' }}>
                {/* Camisas */}
                <Typography sx={{ color: 'white', fontSize: '2rem', mt: '1.5rem' }}>
                    Camisas personalizadas
                </Typography>

                <CardShirt />

                {/* Banners */}
                <Box
                    sx={{
                        mt: '2rem',
                        gap: '1.25rem',
                        px: '1rem',
                        py: '2rem',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#7397AD',
                        borderRadius: '0.5rem',
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ color: 'white', fontSize: '2rem', mb: '1rem' }}>
                            Banners
                        </Typography>

                        <CardBanner />
                    </Box>

                    <Typography
                        sx={{
                            color: 'white',
                            fontSize: '1.375rem',
                            maxWidth: '25rem',
                            textAlign: 'justify',
                            px: { xs: 2, md: 0 },
                        }}
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt molestiae sed velit asperiores ullam dolore maiores quisquam eos quo rerum similique obcaecati veritatis, nesciunt optio architecto dolores quod porro at?
                    </Typography>
                </Box>

                {/* Convites */}
                <Typography
                    sx={{
                        color: 'white',
                        fontSize: '2.375rem',
                        mx: 'auto',
                        mt: '3rem',
                        mb: '1rem',
                        textAlign: 'center',
                    }}
                >
                    Convites
                </Typography>

                <CardInvite />
            </Container>

            {/* Contato */}
            <Box
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
                        fontSize: '2.375rem',
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
                        <Typography sx={{ color: 'white', fontSize: '1.625rem' }}>
                            Telefone/Whatsapp: (91) 00000-0000
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <EmailIcon style={{ color: 'white', fontSize: '2rem' }} />
                        <Typography sx={{ color: 'white', fontSize: '1.625rem' }}>
                            Email: Contato@estampascriativas
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaInstagram style={{ color: 'white', fontSize: '2rem' }} />
                        <Typography sx={{ color: 'white', fontSize: '1.625rem' }}>
                            Instagram: @NevesArts
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
