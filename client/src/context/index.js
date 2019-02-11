import React, { Component, Fragment } from 'react';

import commonData from 'assets/data/common.json';

const mainNavigationContext = React.createContext();
const navContainerContext = React.createContext();
const commonDataContext = React.createContext();
const mobileSizedContext = React.createContext();
 

export class Store extends Component {
   
    state = {

        mainNavigationExpanded: false,
        navContainerExpanded: false,
        commonData: commonData,
        width: 0,
        height: 0
    }

    componentDidMount() {

        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {

        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {

        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    setMainNavigationExpanded = (e) => {
    
        e.preventDefault();
        this.setState({mainNavigationExpanded: true})
    }
    
    setMainNavigationUnexpanded = (e) => {

        e.preventDefault();
        this.setState({mainNavigationExpanded: false})
    }
    
    toggleNavContainerExpanded = (e) => {

    e.preventDefault();
    this.setState( ( prevState ) => {
        return { navContainerExpanded: !prevState.navContainerExpanded }
    } )
    }

    render() {

        return <Fragment>

        <mobileSizedContext.Provider value={{isMobileSized: this.state.width < 959}}>
            <mainNavigationContext.Provider value={{isMainNavigationExpanded: this.state.mainNavigationExpanded, setMainNavigationExpanded: this.setMainNavigationExpanded, setMainNavigationUnexpanded: this.setMainNavigationUnexpanded}}>
                <navContainerContext.Provider value={{isNavContainerExpanded: this.state.navContainerExpanded, toggleNavContainerExpanded: this.toggleNavContainerExpanded}}>
                    <commonDataContext.Provider value={{commonData: this.state.commonData}}>
                            {this.props.children}
                    </commonDataContext.Provider>

                </navContainerContext.Provider>
            </mainNavigationContext.Provider>
        </mobileSizedContext.Provider>
           
        </Fragment>
    }
    

}

export const withContext = (WrappedComponent) => {

    return class extends Component {

        render() {

            return <Fragment>

                <mobileSizedContext.Consumer>
                    {mobileSized => (
                        <mainNavigationContext.Consumer>
                         {mainNav => (
                             <navContainerContext.Consumer>
                                 {navContainer => (
                                     <commonDataContext.Consumer>
                                         {commonData => (
                                             <WrappedComponent {...this.props} mainNav={mainNav} navContainer={navContainer} commonData={commonData} mobileSized={mobileSized}/>
                                         )}
                                     </commonDataContext.Consumer>
                                 )}
                             </navContainerContext.Consumer>
                         )}
                        </mainNavigationContext.Consumer>
                    )}
                   
                </mobileSizedContext.Consumer>
            </Fragment>
        }
    }
}