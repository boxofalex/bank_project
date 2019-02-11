import React, { Fragment } from 'react';
import LayoutChecker from 'components/organisms/LayoutChecker';

import aboutPageData from 'assets/data/about.json';
import styles from './About.module.scss';


const About = (props) => {

    let blocks = aboutPageData.blocks;
    let title = blocks.block1;
    let image = blocks.block2;
    let article = blocks.block3;

    return <Fragment>

        <section className={[styles.section, styles.title].join(' ')}>
        
            <LayoutChecker block={title}/>
        </section>

        <section className={[styles.section, styles.image].join(' ')}>

            <LayoutChecker block={image}/>
        </section>
        
        <section className={[styles.section, styles.article].join(' ')}>

            <LayoutChecker block={article}/>
        </section>

    </Fragment>

}


export default About;