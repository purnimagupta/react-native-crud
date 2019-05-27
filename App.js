// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     console.log("I'm inside app.js")
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './app/store'; //Import the store
import Main from './app/index' //Import the app/index.js file

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}