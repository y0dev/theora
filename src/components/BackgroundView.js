import {
    ActivityIndicator,
    Dimensions,
    Text,
    View,
    StyleSheet,
    Alert,
    TouchableOpacity,
} from 'react-native';
import { AppStyles, Colors } from '../AppStyles';
import { Circle } from './Shapes';

export const BackgroundView = () => {
    return (
        <View style={styles.containers.main} >
            <View style={styles.views.outerCircle}>
                <View style={styles.views.innerCircle} />
            </View>
            {/* <Text > Some Text</Text> */}
        </View>
    );
}
 
const styles = StyleSheet.create({
    containers: {
      main: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.lightYellow,
      }
    },
    views: {
      innerCircle: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 1.1,
        height: Dimensions.get('window').width * 1.1,
        backgroundColor: AppStyles.color.primary,
      },
      outerCircle: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 1.4,
        height: Dimensions.get('window').width * 1.4,
        backgroundColor: AppStyles.color.secondary,
        // alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -10,
        elevatedElement: {
          zIndex: -3, // works on ios
          elevation: -3, // works on android
        }
      },
    },
  });
  