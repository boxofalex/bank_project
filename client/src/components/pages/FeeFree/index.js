import React, { Fragment } from 'react';
import LayoutChecker from 'components/organisms/LayoutChecker';


import feeFreePageData from 'assets/data/feeFree.json';
import styles from './FeeFree.module.scss';

const FeeFree = (props) => {

     let blocks = feeFreePageData.blocks;
     let title1 = blocks.block1;
     let title2 = blocks.block2;
     let image1 = blocks.block3;
     let article1 = blocks.block4;
     let article2 = blocks.block5;
     let article3 = blocks.block6;
     let table1 = blocks.block7;
     let table2 = blocks.block8;
     let article6 = blocks.block9;

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

           <LayoutChecker block={article1} classes={[[styles.container1], [styles.left1], [styles.right1]]}/>

        </section>

        <section className={styles.article2}>
            
            <LayoutChecker block={article2} classes={[[styles.container2], [styles.left2], [styles.right2]]}/>

        </section>

        <section className={styles.article3}>

            <LayoutChecker block={article3} classes={[[styles.container3], [styles.left3], [styles.right3]]}/>

        </section>

        <section className={styles.article4}>

            <LayoutChecker block={table1} classes={[[styles.table1]]}/>

        </section>

        <section className={styles.article5}>

            <LayoutChecker block={table2} classes={[[styles.table2]]}/>
        </section>

        <section className={styles.article6}>
 
            <LayoutChecker block={article6} classes={[[styles.container4], [styles.left4], [styles.right4]]}/>
        </section>

     </Fragment>
}

export default FeeFree;