import type { FC } from 'react'
import React, { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Main } from './styles'
import Head from 'next/head'

type Props = {
    children: ReactNode;
    title: string;
};

const Layout: FC<Props> = ({ children, title }) => (
    <>
        <Head>
            <title>EventVerse - {title} 🎟️ Tickets y Eventos NFT</title>
            <meta name="description" content="Buy and sell tickets in NFT format on EventVerse. Discover unique and exclusive events with blockchain technology." lang='en' />
            <meta name="description" content="Compra y vende tickets en formato NFT dentro de EventVerse. Descubre eventos únicos y exclusivos de la mano de la tecnología blockchain" lang='es' />
            <meta name="keywords" content="eventverse, tickets, nft, buy, sell, blockchain, events, exclusive, eventbrite, ticketea, eventos,comprar tickets, crear eventos" />
            <meta name="author" content="EventVerse" />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content={`EventVerse | ${title} 🎟️ Tickets y Eventos NFT`} />
            <meta property="og:description" content="Buy and sell tickets in NFT format on EventVerse. Discover unique and exclusive events with blockchain technology." lang='en' />
            <meta property="og:description" content="Compra y vende tickets en formato NFT en EventVerse. Descubre eventos únicos y exclusivos con tecnología blockchain." lang='es' />
            <meta property="og:url" content="https://www.eventverse.app" />
        </Head>
        <Navbar />
        <Main>
            {children}
        </Main>
        <Footer />
    </>
)

export default Layout
