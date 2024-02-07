
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Home from './Src/Home';
import Login from './Src/Login';
import ProfileScreen from './Src/ProfileScreen';
import Register from './Src/Register';
import CartScreen from './Src/Cart';
import AddProductScreen from './Src/AddProduct';
import CheckoutScreen from './Src/Checkout';
import OrderHistoryScreen from './Src/OrderHistoryScreen';
import ProfileSUpdatecreen from './Src/ProfileUpdateScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="ProfileUpdate" component={ProfileSUpdatecreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddProduct" component={AddProductScreen}/>
        <Stack.Screen name="Cart" component={CartScreen}/>
        <Stack.Screen name="SatınAlma" component={CheckoutScreen}/>
        <Stack.Screen name="OrderHistory" component={OrderHistoryScreen}/>

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
