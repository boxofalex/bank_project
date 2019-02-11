import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from 'components/pages/Home';
import About from 'components/pages/About';
import MobileBanking from 'components/pages/MobileBanking';
import Goals from 'components/pages/Goals';
import FAQ from 'components/pages/FAQ';
import Blog from 'components/pages/Blog';
import FeeFree from 'components/pages/FeeFree';
import Layout from 'components/templates/Layout';

import './index.scss';


const App = (props) => {

        return <Fragment>
            <BrowserRouter>
                <Layout>
                      <Route path="/about" exact component={About} />
                      <Route path="/mobile-banking" component={MobileBanking}/>
                      <Route path="/goals" component={Goals}/>
                      <Route path="/fee-free" component={FeeFree}/>
                      <Route path="/blog" component={Blog}/>
                      <Route path="/help" component={FAQ} />
                      <Route path="/" exact component={Home} />
                </Layout> 
            </BrowserRouter>
        </Fragment>
        
}

export default App;