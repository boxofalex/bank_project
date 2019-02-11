import React, { Fragment } from 'react';
import Banner from 'components/organisms/Banner';
import LinkTypeChecker from 'components/organisms/LinkTypeChecker';
import LayoutChecker from 'components/organisms/LayoutChecker';

import homePageData from 'assets/data/home.json';
import styles from './Home.module.scss'


const Home = (props) => {

    let blocks = homePageData.blocks;
    let banner = blocks.block1.items.item1;
    let infoBlock = blocks.block2;

    return <Fragment>
        
           <section className={[styles.section, styles.banner].join(' ')}>
                <Banner image={banner.details.image.src}  >      
                 <div className={styles.bannerArticle}>
                     <LinkTypeChecker element={banner.details.onImage}/>
                 </div>      
                 </Banner> 
            </section>

            <section className={[styles.section, styles.blocks].join(' ')}>
                  <LayoutChecker block={infoBlock} classes={[[styles.block], [styles.left], [styles.right]]}/>
           </section>
    </Fragment>
 }


 export default Home;