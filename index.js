/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import loginUI from './loginUI';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => loginUI);
