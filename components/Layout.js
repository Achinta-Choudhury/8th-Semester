import React from 'react';
import {Container} from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

export default props => {
    return (
        //<Container>
        //<div style={{background: `linear-gradient(45deg, #4ca1af ,#c4e0e5)`}}>
        <div>
            <Head>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"></link>
            </Head>
            <Header/>
            <Container >
                {props.children}
            </Container>
            <Footer/>
        </div>
            // <Head>
            //     <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"></link>
            // </Head>
            // <Header/>
            // {props.children}
            // <Footer/>
        //</Container>
    )
}