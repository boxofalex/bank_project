import React, { Fragment } from 'react';
import LayoutChecker from 'components/organisms/LayoutChecker';

import goalsPageData from 'assets/data/goals.json';
import styles from './Goals.module.scss';


const Goals = (props) => {
    
    let blocks = goalsPageData.blocks;
    let mainTitle = blocks.block1;
    let pageBnner = blocks.block2;
    let twocolumns1 = blocks.block3;
    let title1 = blocks.block4;
    let flexcontainer1 = blocks.block5;
    let twocolumns2 = blocks.block6;
    let twocolumns3 = blocks.block7;

    return <Fragment>

        <section className={[styles.section, styles.mainTitle].join(' ')}>

            <LayoutChecker block={mainTitle}/>
        </section>

        <section className={[styles.section, styles.pageBanner].join(' ')}>

            <LayoutChecker block={pageBnner}/>
        </section>

        <section className={[styles.section, styles.twocolumns1].join(' ')}>

            <LayoutChecker block={twocolumns1} classes={[[styles.container1], [styles.left1], [styles.right1]]}/>
        </section>

        <section className={[styles.section, styles.points].join(' ')}>
             
             <div className={styles.title1}>
                <LayoutChecker block={title1} />
             </div>
             <div className={styles.flexcontainer1}>
                <LayoutChecker block={flexcontainer1} classes={[[styles.row], [styles.itemRow]]}/>
             </div>
            
        </section>

        <section className={[styles.section, styles.twocolumns2].join(' ')}>

            <div>
                 <LayoutChecker block={twocolumns2} classes={[[styles.container2], [styles.left2], [styles.right2]]}/>
            </div>
            <div>
                 <LayoutChecker block={twocolumns3} classes={[[styles.container3], [styles.left3], [styles.right3]]}/>
            </div>
        </section>


    </Fragment>

}

export default Goals;