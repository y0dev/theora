import { Platform, StyleSheet, Dimensions } from "react-native";
import { Configuration } from "./Configuration";

const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;
const numColumns = 2;

export const Colors = {
  facebookBlue: "#4267B2",
  blue: "#3293FE",
  black:"#161616",
  white: "white",
  darkGreen: "#5EA23A",
  darkGray1: "#A0A0A0",
  darkGray2: "#8A8A8A",
  darkGray3: "#696969",
  darkGray4: "#545454",
  darkGray5: "#464646",
  grey: "grey",
  gray: "#BBBBBB",
  lightGray: "#F2F2F2",
  greenBlue: "#00AEA8",
  purple: "#C780FA",
  lightPurple: "#E3ACF9",
  yellow: "#FADA9D",
  lightYellow: "#FBF1D3", // https://colorhunt.co/palette/c780fae3acf9fada9dfbf1d3
  lightRed: "#FF5A66",
}

export const AppStyles = {
  // System Colors
  color: {
    primary: Colors.purple,
    secondary: Colors.lightPurple,
    main: Colors.darkGreen,
    text: Colors.darkGray3,
    title: Colors.darkGray5,
    subtitle: Colors.darkGray4,
    categoryTitle: Colors.black,
    tint: Colors.lightRed,
    description: Colors.gray,
    filterTitle: Colors.darkGray2,
    facebook: Colors.facebookBlue,
    placeholder: Colors.darkGray1,
    background: Colors.lightGray,
  },
  fontSize: {
    title: 30,
    content: 20,
    normal: 16
  },
  buttonWidth: {
      main: "70%" 
  },
  textInputWidth: {
      main: "80%"
  },
  borderRadius: {
      main: 15,
      small: 5
  }
};

export const AppIcon = {
  container: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 8,
    marginRight: 10
  },
  style: {
    tintColor: AppStyles.color.tint,
    width: 25,
    height: 25
  },
  images: {
    home: require("../assets/icons/home.png"),
    defaultUser: require("../assets/icons/default_user.jpg"),
    logout: require("../assets/icons/shutdown.png"),
    menu: require("../assets/icons/menu.png")
  }
};

export const HeaderButtonStyle = StyleSheet.create({
  multi: {
    flexDirection: "row"
  },
  container: {
    padding: 10
  },
  image: {
    justifyContent: "center",
    width: 35,
    height: 35,
    margin: 6
  },
  rightButton: {
    color: AppStyles.color.tint,
    marginRight: 10,
    fontWeight: "normal",
  }
});

export const ListStyle = StyleSheet.create({
  title: {
    fontSize: 16,
    color: AppStyles.color.subtitle,
    fontWeight: "bold"
  },
  subtitleView: {
    minHeight: 55,
    flexDirection: "row",
    paddingTop: 5,
    marginLeft: 10
  },
  leftSubtitle: {
    flex: 2
  },
  avatarStyle: {
    height: 80,
    width: 80
  }
});
