import React, { Fragment } from 'react';
import LinkTypeChecker from 'components/organisms/LinkTypeChecker';
import LayoutChecker from 'components/organisms/LayoutChecker';

import mobileBankingPageData from 'assets/data/mobileBanking.json';
import styles from './MobileBanking.module.scss';


const MobileBanking = (props) => {

    let blocks = mobileBankingPageData.blocks;
    let title1 = blocks.block1;
    let title2 = blocks.block2;
    let image1 = blocks.block3;
    let article1 = blocks.block4;
    let flexcontainer = blocks.block5;
    let article2 = blocks.block6;

    return <Fragment>

        <section className={styles.title1}>

            <LayoutChecker block={title1}/>
        </section>

        <section className={styles.title2}>

            <LayoutChecker block={title2}/>
        </section>

        <section className={styles.image1}>

            <LayoutChecker block={image1}/>
        </section>
        
        <section className={styles.article1}>

            <LayoutChecker block={article1}/>
        </section>

        <section className={styles.features}>

            <LayoutChecker block={flexcontainer} classes={[[styles.row], [styles.itemRow]]}/>
        </section>
        
        <section className={styles.twocolumns}>

            <LayoutChecker block={article2} classes={[[styles.container], [styles.left], [styles.right]]}/>
        </section>

    </Fragment>

}

export default MobileBanking;