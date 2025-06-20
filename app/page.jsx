'use client';

import 'normalize.css';
import CardShirt from './components/cardshirt';
import { Box, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Home() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
            <Box
                sx={{
                    p: 3,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #9FB4C2',
                }}
            >
                <Typography sx={{ color: '#3A7CA5', fontSize: '24px', display: 'flex' }}>
                    Sua logo aqui
                </Typography>

                <Box
                    sx={{
                        gap: 6,
                        display: 'flex',
                    }}
                >
                    <Typography sx={{ color: '#7397AD', fontSize: '20px', cursor: 'pointer' }}>
                        Trabalhos
                    </Typography>
                    <Typography sx={{ color: '#7397AD', fontSize: '20px', cursor: 'pointer' }}>
                        Sobre
                    </Typography>
                    <Typography sx={{ color: '#7397AD', fontSize: '20px', cursor: 'pointer' }}>
                        Contato
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    width: '80%',
                    height: '1100px',
                    display: 'flex',
                    margin: '20px auto',
                    borderRadius: '10px',
                    flexDirection: 'column',
                    backgroundColor: '#7397AD',
                }}
            >
                <Typography sx={{ color: 'white', fontSize: '38px', ml: 70, mt: 4 }}>Meus trabalhos</Typography>

                <Typography sx={{ color: 'white', fontSize: '28px', ml: 10, mt: 3 }}>Camisas personalizadas</Typography>

                <CardShirt />

                <Typography sx={{ color: 'white', fontSize: '28px', ml: 10, mt: 3 }}>Banners</Typography>

                <CardShirt />
            </Box>

            <Box
                sx={{
                    mt: 4,
                    width: '80%',
                    height: '380px',
                    display: 'flex',
                    margin: '20px auto',
                    borderRadius: '10px',
                    flexDirection: 'column',
                    backgroundColor: '#7397AD',
                }}
            >
                <Typography sx={{ color: 'white', fontSize: '38px', ml: 80, mt: 4, }}>Sobre</Typography>

                <Typography
                    sx={{
                        mt: 4,
                        color: 'white',
                        fontSize: '26px',
                        ml: 10,
                        mr: 10,
                    }}
                >
                    Somos uma marca dedicada a transformar ideias em estampas únicas e criativas,
                    que expressam personalidade e estilo. Com foco em qualidade e inovação,
                    nosso objetivo é levar arte e originalidade para produtos do dia a dia, como
                    camisetas, canecas e acessórios. Cada estampa é criada com cuidado e paixão,
                    buscando inspirar e conectar pessoas através do design. Seja para uso pessoal ou
                    para divulgação da sua marca, nossas criações são pensadas para se destacar e
                    causar impacto.
                </Typography>
            </Box>

            <Box
                sx={{
                    mt: 4,
                    width: '80%',
                    height: '380px',
                    display: 'flex',
                    margin: '20px auto',
                    borderRadius: '10px',
                    flexDirection: 'column',
                    backgroundColor: '#7397AD',
                }}
            >
                <Typography sx={{ color: 'white', fontSize: '38px', ml: 79, mt: 4, }}>Contato</Typography>

                <Box
                    sx={{
                        mt: 4,
                        ml: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                        <FaWhatsapp style={{ color: 'white', fontSize: 32 }} />
                        <Typography sx={{ color: 'white', fontSize: '26px' }}>Telefone/Whatsapp: (91) 00000-0000</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                        <EmailIcon style={{ color: 'white', fontSize: 32 }} />
                        <Typography sx={{ color: 'white', fontSize: '26px' }}>Email: Contato@estampascriativas</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                        <FaInstagram style={{ color: 'white', fontSize: 32 }} />
                        <Typography sx={{ color: 'white', fontSize: '26px' }}>Instagram: @NevesArts</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
