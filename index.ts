import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import 'react-native-gesture-handler';  // OBRIGATÓRIO: primeiro import

import { registerRootComponent } from 'expo';
import App from './src/App';

registerRootComponent(App);
// O registerRootComponent garante que o App seja o componente raiz da aplicação,
// independentemente de como a aplicação é iniciada (Expo Go, standalone app, etc.).                