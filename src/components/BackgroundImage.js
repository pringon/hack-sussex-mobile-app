import React from "react";
import { Image, View, Text } from "react-native";

import nikeLogo from "../../assets/nike_logo.png";

const selectCurrency = currency => {
  if(currency === "GBP") {
    return '£';
  }
  return '';
}

const BackgroundImage = ({ brand = "Nike", amount = "0", currency = "GBP" } = {}) => (
  <View 
    style={{
      flex: 1,
      backgroundColor: "#eee",
      borderRadius: 4
    }}
  >
    <View
      style={{
        position: "absolute",
        top:0,
        bottom: 0,
        width: "100%",
        height: "100%"
      }}
    >
      <Image 
        style={{
          flex: 1,
          resizeMode: "contain",
          marginLeft: 20
        }}
        source={nikeLogo}
      />
    </View>
    <View
      style={{
        flex: 1,
        backgroundColor: "transparent",
        justifyContent: "center"
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 15,
          position: "absolute",
          right: 5,
          bottom: 0
        }}
      >
        {selectCurrency(currency)}{amount}
      </Text>
    </View>
  </View>
);

export default BackgroundImage;