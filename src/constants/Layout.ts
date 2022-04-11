import { Dimensions } from 'react-native';
import { getStatusBarHeight } from "react-native-status-bar-height";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};


export const STATUS_BAR_HEIGHT: number = getStatusBarHeight()
export const SCREEN_HEIGHT: number = Math.round(Dimensions.get('window').height)
