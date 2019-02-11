import React, { Fragment } from 'react';
import Header from 'components/templates/Header';
import Footer from 'components/templates/Footer';

import styles from './Layout.module.scss';


const Layout = (props) => {
    
    let children = props.children ? props.children : '';

    return <Fragment >

        <Header />
        <main className={styles.main}>
            {children}
        </main>
        <Footer /> 
    </Fragment>
}

export default Layout;
