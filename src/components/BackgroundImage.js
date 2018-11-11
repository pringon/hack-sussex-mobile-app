import React from "react";
import { Image, View, Text } from "react-native";

import debenhamsLogo from "../../assets/debenhams.png";
import footLockerLogo from "../../assets/foot_locker.png";
import halfordsLogo from "../../assets/halfords.png";
import nikeLogo from "../../assets/nike_logo.png";
import tescoLogo from "../../assets/tesco.png";

const selectCurrency = currency => {
  if(currency === "GBP") {
    return '£';
  }
  return '';
}

const selectLogo = brand => {
  if(brand === "debenhams") {
    return debenhamsLogo
  }
  if(brand === "foot-locker") {
    return footLockerLogo;
  }
  if(brand === "halfords") {
    return halfordsLogo;
  }
  if(brand === "nike") {
    return nikeLogo;
  }
  if(brand === "tesco") {
    return tescoLogo;
  }
  return '';
}

const BackgroundImage = ({ brand = "nike", value = "0", amount = "0", currency = "GBP" } = {}) => (
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
        source={selectLogo(brand)}
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
          left: 5,
          top: 0
        }}
      >
        {amount}
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 15,
          position: "absolute",
          right: 5,
          bottom: 0
        }}
      >
        {selectCurrency(currency)}{value}
      </Text>
    </View>
  </View>
);

export default BackgroundImage;