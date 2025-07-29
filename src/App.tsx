import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// Import screens
import Index from './screens/Index';
import Auth from './screens/Auth';
import CreateAccount from './screens/CreateAccount';
import Home from './screens/Home';
import Reels from './screens/Reels';
import Sell from './screens/Sell';
import Messages from './screens/Messages';
import Profile from './screens/Profile';
import Chat from './screens/Chat';
import Categories from './screens/Categories';
import Notifications from './screens/Notifications';
import Settings from './screens/Settings';
import ProductDetail from './screens/ProductDetail';
import Search from './screens/Search';
import SellerProfile from './screens/SellerProfile';
import MyListings from './screens/MyListings';
import Favorites from './screens/Favorites';
import Reviews from './screens/Reviews';
import PrivacySecurity from './screens/PrivacySecurity';
import Location from './screens/Location';
import CategoryProducts from './screens/CategoryProducts';
import Saved from './screens/Saved';
import ShareSheet from './screens/ShareSheet';
import ReelComments from './screens/ReelComments';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
          <Stack.Navigator
            initialRouteName="Index"
            screenOptions={{
              headerShown: false,
              gestureEnabled: true,
              cardStyleInterpolator: ({current, layouts}) => {
                return {
                  cardStyle: {
                    transform: [
                      {
                        translateX: current.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [layouts.screen.width, 0],
                        }),
                      },
                    ],
                  },
                };
              },
            }}>
            <Stack.Screen name="Index" component={Index} />
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Reels" component={Reels} />
            <Stack.Screen name="Sell" component={Sell} />
            <Stack.Screen name="Messages" component={Messages} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="SellerProfile" component={SellerProfile} />
            <Stack.Screen name="MyListings" component={MyListings} />
            <Stack.Screen name="Favorites" component={Favorites} />
            <Stack.Screen name="Reviews" component={Reviews} />
            <Stack.Screen name="PrivacySecurity" component={PrivacySecurity} />
            <Stack.Screen name="Location" component={Location} />
            <Stack.Screen name="CategoryProducts" component={CategoryProducts} />
            <Stack.Screen name="Saved" component={Saved} />
            <Stack.Screen name="ShareSheet" component={ShareSheet} />
            <Stack.Screen name="ReelComments" component={ReelComments} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;