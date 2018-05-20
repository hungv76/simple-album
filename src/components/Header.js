// // Import lib for making component
// import React, { Component } from 'react';
// import { Text, View } from 'react-native';


// // Make component
// class Header extends Component {
//     constructor(props) {
//         super(props);
//         this.style = {
//             viewStyle: {
//                 backgroundColor: '#F8F8F8',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 height: 60,
//                 paddingTop: 15,

//                 shadowColor: '#000',
//                 shadowOffset: { width: 0, height: 2 },
//                 shadowOpacity: 0.2
//             },
//             textStyle: {
//                 fontSize: 20
//             }
//         };

//         this.state = {

//         };
//     }

//     render() {
//         return (
//             <View style={this.styles.viewStyle}>
//                 <Text style={this.styles.textStyle}>{this.props.headerText}</Text>
//             </View>
//         );
//     }

// }

// // Make the component available to other parts
// export default Header;

import React from 'react';
import { Text, View } from 'react-native';

function Header(props) {
    const styles = {
        viewStyle: {
            backgroundColor: '#F8F8F8',
            justifyContent: 'center',
            alignItems: 'center',
            height: 60,
            paddingTop: 15,

            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2
        },
        textStyle: {
            fontSize: 20
        }
    };

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
}

export default Header;
