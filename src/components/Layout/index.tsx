import type { FC } from 'react'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Main } from './styles'

type Props = {
    children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => (
    <>
        <Navbar />
        <Main>
            {children}
        </Main>
        <Footer />
    </>
)

export default Layout
