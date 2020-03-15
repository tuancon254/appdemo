import React from 'react';
import { TouchableHighlight, Image } from 'react-native';
import PropTypes from 'prop-types';

export default class BackButtonBlack extends React.Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress} style={{
                alignItems: 'center',
                backgroundColor: '#151522',
                marginTop: 20,
                marginLeft: 18,
            }}>
                <Image source={require('../../../assets/icons/white.png')} style={{
                    height: 30,
                    
                    width: 30,
                    backgroundColor: '#151522'
                }} />
            </TouchableHighlight>
        );
    }
}

BackButtonBlack.propTypes = {
    onPress: PropTypes.func,
    source: PropTypes.number,
    title: PropTypes.string
};
