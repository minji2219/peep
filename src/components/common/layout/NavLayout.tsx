import {Outlet} from 'react-router-dom';
import {LightBox} from './LightBox';
import {NavigationBar} from './NavigationBar';

export const NavLayout = () => {
  return (
    <LightBox>
      <NavigationBar />
      <Outlet />
    </LightBox>
  );
};
