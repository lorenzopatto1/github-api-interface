import React from 'react';
import { Header } from '../Header';

import { WrapperLayout } from './styled';


export const Layout = ({ children }) => {

 return (
  <WrapperLayout>
    <Header />
    {children}
  </WrapperLayout>
 )
}