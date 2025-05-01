import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListScreen from './screens/ProductListScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import { ProductProvider } from './context/ProductContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProductProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: "Products" }} />
          <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductProvider>
  );
}
