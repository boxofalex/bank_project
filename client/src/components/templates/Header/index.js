import React, { Fragment } from 'react';
import ImageBlock from 'components/molecules/ImageBlock';
import Link from 'components/atoms/Link';
import Navigation from 'components/organisms/Navigation';
import BurgerMenu from 'components/organisms/BurgerMenu';

import { withContext } from 'context';
import styles from './Header.module.scss';



const Header = (props) => {

      let isMobileSized = props.mobileSized.isMobileSized ? props.mobileSized.isMobileSized: '';
      let isNavContainerExpanded = props.navContainer.isNavContainerExpanded ? props.navContainer.isNavContainerExpanded : '';
      let isMainNavigationExpanded = props.mainNav.isMainNavigationExpanded ? props.mainNav.isMainNavigationExpanded : '';
      let toggleNavContainer = props.navContainer.toggleNavContainerExpanded ? props.navContainer.toggleNavContainerExpanded : '';
      let setMainNavigationExpanded = props.mainNav.setMainNavigationExpanded ? props.mainNav.setMainNavigationExpanded : '';
      let setMainNavigationUnexpanded = props.mainNav.setMainNavigationUnexpanded ? props.mainNav.setMainNavigationUnexpanded : '';
      let headerData = props.commonData.commonData.header ? props.commonData.commonData.header : '';
      let logo = headerData.logo.details ? headerData.logo.details : '';
      let accountNavigationData = headerData.accountNavigation.details.items ? headerData.accountNavigation.details.items : '';
      let mainNavigationData = headerData.mainNavigation.details.items ? headerData.mainNavigation.details.items : '';

       
      return <Fragment>

         <header className={styles.header}>

            <div className={[styles.headbar, isMobileSized  ? styles.isMobile : ''].join(' ')}>

               <div className={styles.logo}>
                  <Link to="/">
                     <ImageBlock image={logo.image} classes={styles.logoImage}/>
                  </Link>
               </div>

               <BurgerMenu classes={[[styles.navMenu]]} onClickAction={toggleNavContainer} isRotate={isNavContainerExpanded}/>

               <div className={[styles.navContainer, !(isMobileSized && !isNavContainerExpanded)  ? '' : styles.notexpandedContainer].join(' ')} >
                     <div className={styles.accountNav}>
                        <Navigation elements={accountNavigationData} classes={[[null], [styles.accountNavElements], [styles.logIn, styles.apply]]} />
                     </div>
                     <div className={styles.mainNav} onMouseOver={setMainNavigationExpanded} onMouseLeave={setMainNavigationUnexpanded}>
                        <Navigation elements={mainNavigationData} classes={[[null], [  styles.mainNavElements, (isMainNavigationExpanded && !isMobileSized) || isMobileSized ? '' : styles.notexpanded]]} />
                     </div>
               </div>
            </div>
         </header>   
      </Fragment>
}


export default withContext(Header);