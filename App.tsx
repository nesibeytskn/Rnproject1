/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {StyleSheet, View} from 'react-native/types';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './src/pages/Products';
import Product from './src/pages/Product';
import Carts from './src/pages/Carts';
import ProductCreate from './src/pages/ProductUpdate';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Carts" component={Carts} />
        <Stack.Screen name="ProductCreate" component={ProductCreate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
