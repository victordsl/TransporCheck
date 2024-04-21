import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import StackRoutes from './tab.routes';

export default function Routes() {
  return (
    <NavigationContainer>
        <StatusBar backgroundColor="#38A69D" barStyle="light-content"/>
        <StackRoutes/>
    </NavigationContainer>
  );
}

