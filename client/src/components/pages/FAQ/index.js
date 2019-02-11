import React, { Fragment } from 'react';
import LayoutChecker from 'components/organisms/LayoutChecker';

import helpPageData from 'assets/data/help.json';
import styles from './FAQ.module.scss';

const FAQ = (props) => {

    let blocks = helpPageData.blocks;
    let mainTitle = blocks.block1;
    let title1 = blocks.block2;
    let fundamentals = blocks.block3;

    return <Fragment>
         
        <section className={[styles.section, styles.mainTitle].join(' ')}>

                <LayoutChecker block={mainTitle} />
           
        </section>

        <section className={[styles.section, styles.fundamentals].join(' ')}>
            
            <div className={styles.title1}>
                <LayoutChecker  block={title1}/>
            </div>
            <div>
                <LayoutChecker block={fundamentals} classes={[[styles.row], [styles.itemRow]]}/>
            </div>    

        </section>
        
    </Fragment>
}

export default FAQ;
