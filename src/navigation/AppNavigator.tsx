
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import EventDetails from '../screens/EventDetails';
import GeneralOverview from '../screens/GeneralOverview';
import Location from '../screens/Location';
import InterruptionTime from '../screens/InterruptionTime';
import Damages from '../screens/Damages';
import Recommendations from '../screens/Recommendations';



export type RootStackParamList = {
  GeneralOverview: undefined;
  Location: undefined;
  InterruptionTime: undefined;
  Damages: undefined;
  Recommendations: undefined;
  EventDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GeneralOverview">
        <Stack.Screen name="GeneralOverview" component={GeneralOverview} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="InterruptionTime" component={InterruptionTime} />
        <Stack.Screen name="Damages" component={Damages} />
        <Stack.Screen name="Recommendations" component={Recommendations} />
         <Stack.Screen name="EventDetails" component={EventDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
