import React, { useState, useEffect, useReducer, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';
import Navigation from './Navigation/Navigation';
import MainContainer from './Main/MainContainer';
import { supportsWebp } from './Common/SupportsWebp';
import { ViewportContext } from './Common/Context';
import Scrollbutton from './Main/Scrollbutton';
import CookieConsentBar from './Main/CookieConsentBar';
import PrivacyPolicy from './Main/PrivacyPolicy';
import Error404 from './Main/Error404';

//const MainContainer = lazy(() => import('./Main/MainContainer'));

const App = props => {
  
  const [activeItem, setActiveItem] = useState('home');
  const [invertedBg, setInvertedBg] = useState(false);
  const [menuItemClicked, setMenuItemClicked] = useState('');
  const [breakpoint, setBreakpoint] = useState('computer');
  const [stackable, setStackable] = useState(false);
  const [imgExtension, setImgExtension] = useState('');
  const [headerVisible, displayHeader] = useState(false);
  const [loaderVisible, setLoaderToVisible] = useState(true);
  
  const [dataLoaded, setDataLoaded] = useState(false);
  const [sectionLoaded, setSectionLoaded] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      projects: false,
      skills: false,
      about: false,
      contact: false
    }
  );

  useEffect( () => {
    setContext();
    window.addEventListener('resize', setContext);
    
    return () => {
      window.removeEventListener('resize', setContext);
    }
  }, []);

  useEffect(
    () => {
      
      for (let key in sectionLoaded) {
        if (sectionLoaded[key] === false) {
          if (dataLoaded) setDataLoaded(false);
            return;
          }
        }
      
      setDataLoaded(true);
    }, [sectionLoaded]
  );

  useEffect( () => {
    if (loaderVisible && activeItem && sectionLoaded.home){
      setLoaderToVisible(false);

    } 
  }, [sectionLoaded]); 

  const setContext = () => {
    const screenWidth = document.documentElement.clientWidth;
    setStackable(screenWidth < 992);

    switch (true) {
      case screenWidth < 375: 
      setBreakpoint('mobile-small');    
      break;
      case screenWidth < 768:
        setBreakpoint('mobile');
        break;
      case screenWidth < 992:
        setBreakpoint('tablet');
        break;
      case screenWidth < 1200:
        setBreakpoint('computer');
        break;
      case screenWidth < 1920:
        setBreakpoint('largeMonitor');
        break;
      default:
        setBreakpoint('wideScreen');
        break;
    }
  }

  useEffect( () => {
    supportsWebp('lossless', setExtension);
    function setExtension(feature, result) {
      const extension = result? 'webp' : 'jpg';
      setImgExtension(extension);
    }
  }, []);

  const commonProps = { dataLoaded, activeItem, invertedBg, setInvertedBg, menuItemClicked, setMenuItemClicked };
  const naviProps = { ...commonProps, displayHeader };
  const mainProps = { ...commonProps, setSectionLoaded, headerVisible, setActiveItem };

  return (
    <ViewportContext.Provider value={{stackable, breakpoint, imgExtension}}>

      { loaderVisible && 
        <Dimmer active inverted>
          <Loader />
        </Dimmer>
      }
      <Switch>
        <Route exact path="/">
          <Navigation {...naviProps} />
         {/*  <Suspense fallback={<Dimmer active inverted>
          <Loader />
        </Dimmer>}> */}
            <MainContainer {...mainProps} />
          {/* </Suspense> */}
          <Scrollbutton activeItem={activeItem} setActiveItem={setActiveItem} />
          { dataLoaded && 
            <CookieConsentBar />
          }
        </Route>
        <Route path="/privacypolicy">
          <PrivacyPolicy setMenuItemClicked={setMenuItemClicked} setActiveItem={setActiveItem} />
        </Route>
        <Route component={Error404} />
      </Switch>

    </ViewportContext.Provider>
  );
};

export default App;