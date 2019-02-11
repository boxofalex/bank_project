import React, { Fragment } from 'react';
import LayoutChecker from 'components/organisms/LayoutChecker';
import LinkTypeChecker from 'components/organisms/LinkTypeChecker';
import Banner from 'components/organisms/Banner';

import blogPageData from 'assets/data/blog.json';
import styles from './Blog.module.scss';

const Blog = (props) => {

    let blocks = blogPageData.blocks;
    let banner = blocks.block1.items.item1;
    let title1 = blocks.block2;
    let stories = blocks.block3;
    let title2 = blocks.block4;
    let tips = blocks.block5;
    let title3 = blocks.block6;
    let budgets1 = blocks.block7;
    let budgets2 = blocks.block8;


    return <Fragment>

        <section className={[styles.section, styles.banner].join(' ')}>
            <Banner image={banner.details.image.src}>
                <div className={styles.bannerArticle}>
                    <LinkTypeChecker element={banner.details.onImage}/>
                </div>
            </Banner>
        </section>

        <section className={[styles.section].join(' ')}>

           <div className={styles.title1}>
               <LayoutChecker block={title1}/>
           </div>
           <div>
               <LayoutChecker block={stories} classes={[[styles.row], [styles.itemRow]]}/>
           </div>
        </section>

        <section className={[styles.section].join(' ')}>

           <div className={styles.title1}>
               <LayoutChecker block={title2}/>
           </div>
           <div>
               <LayoutChecker block={tips} classes={[[styles.row], [styles.itemRow]]}/>
           </div>
        </section>

        <section className={[styles.section].join(' ')}>

            <div className={styles.title1}>
                <LayoutChecker block={title3}/>
            </div>
            <div>
                <LayoutChecker block={budgets1} classes={[[styles.row], [styles.itemRow]]}/>
            </div>
            <div>
                <LayoutChecker block={budgets2} classes={[[styles.row], [styles.itemRow]]}/>
            </div>
        </section>
    </Fragment>
}

export default Blog;