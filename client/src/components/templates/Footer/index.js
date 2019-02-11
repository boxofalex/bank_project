import React, { Fragment } from 'react';
import Navigation from 'components/organisms/Navigation';
import Element from 'components/atoms/Element';
import TwoColumn from 'components/organisms/Layout/TwoColumn';
import SignupForm from 'components/organisms/SignupForm';
import List from 'components/molecules/List';


import { withContext } from 'context';
import styles from './Footer.module.scss';


const Footer = (props) => {

    let footerData = props.commonData.commonData.footer ? props.commonData.commonData.footer : '';
    let titleForContacts = footerData.socialMedia.details.items.item1.details;
    let titleForSignUp = footerData.signup.details.items.item1.details;
    let signUpForm = footerData.signup.details.items.item2;
    let copyrights = footerData.copyrights.details.items.item1.details;


    return <Fragment>
        <footer className={styles.footer}>
            <div className={styles.bottomNavigation}>
                <Navigation elements={footerData.footerNavigation.details.items} classes={[[null], [styles.navElements]]}/>
            </div>
            <TwoColumn classes={[[styles.contact], [styles.socialLinks], [styles.signupForm]]}>
                <div>
                    <Element tag={titleForContacts.tag} text={titleForContacts.text}/>
                    <List elements={footerData.socialMedia.details.items.item2.details.items}/>
                </div>
                <div>
                    <Element tag={titleForSignUp.tag} text={titleForSignUp.text}/>
                    <SignupForm data={signUpForm}/>
                </div> 
            </TwoColumn>
            <div className={styles.copyright}>
                 <Element tag={copyrights.tag} text={copyrights.text}/>
            </div>
        </footer>
    </Fragment>
}

export default withContext(Footer);