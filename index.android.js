import React, {Component} from 'react';
import {
    AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Provider } from 'react-redux'
import configureStore from './app/store/configureStore'
import App from './app/container/App';
import Photo from './app/screens/Photo';
import Gallery from './app/components/Gallery/index';

const store = configureStore();


class HomeScreen extends Component{
    static navigationOptions = {
        title: 'Test Gallery',
    };
    render() {
        return(
            <Provider store={store}>
                <App navigate={this.props.navigation}/>
            </Provider>
        )
    }
}

const GalleryTestApp = StackNavigator({
  Home: { screen: HomeScreen },
  Photo: {screen: Photo}
});

AppRegistry.registerComponent('PlayDeezer', () => GalleryTestApp);
