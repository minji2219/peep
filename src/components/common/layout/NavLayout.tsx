import {Outlet} from 'react-router-dom';
import {LightBox} from './LightBox';
import {NavigationBar} from './NavigationBar';
import {BackgroundModeProvider} from 'provider/BackgroundMode';

export const NavLayout = () => {
  return (
    <BackgroundModeProvider>
      <LightBox>
        <NavigationBar />
        <Outlet />
      </LightBox>
    </BackgroundModeProvider>
  );
};
