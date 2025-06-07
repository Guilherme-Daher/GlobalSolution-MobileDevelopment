import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-gesture-handler'; // OBRIGATÓRIO: primeiro import

import React from 'react';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return <AppNavigator />;
}
