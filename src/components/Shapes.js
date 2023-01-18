import {
    ActivityIndicator,
    Dimensions,
    Text,
    View,
    StyleSheet,
    Alert,
    TouchableOpacity,
} from 'react-native';

export const Square = props => {
    return (
        <View
            style={{
                width: Number(props.width),
                height: Number(props.height),
                // backgroundColor: "#000"
            }}
        >
        </View>
    );
}

export const Circle = props => {
    return (
        <View
            style={{
                width: Number(props.radius),
                height: Number(props.radius),
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                backgroundColor: props.backgroundColor
                // backgroundColor: "#4267b2",
            }}
        >
        </View>
    );
}