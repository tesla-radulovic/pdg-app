import React from 'react';
import PropTypes from 'prop-types';
//import './index.scss';
import { StyleSheet, Text, View } from 'react-native';

const Canvas = ({draw, height, width}) => {
    /*const canvas = React.useRef();

    React.useEffect(() => {
	const context = canvas.current.getContext('2d');
	draw(context);
    });*/
    return ( <Text>Open up App.js to start working on your app AAAAAAAA22!</Text> );
    /*return (
	<canvas className="Canvas" ref={canvas} height={height} width={width} />
    );*/
};

Canvas.propTypes = {
    draw: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
};

export default Canvas;