// pages/about.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
    return (
        <>
            <Head>
                <title>About Us</title>
            </Head>

            <Header />

            <main style={{ padding: '4rem 2rem' }}>
                <h1>About Us</h1>
                <p>
                    Our Story: Our mission is to provide the highest level of education …
                </p>
            </main>

            <Footer />
        </>
    );
}
