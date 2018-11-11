import React from "react";
import { View } from "react-native";
import BackgroundImage from "./BackgroundImage";

const GiftCard = ({ brand = "Nike", amount = "0", currency = "GBP", spacing } = {}) => (
  <View
      style={{
        height: 100,
        width: 175,
        marginLeft: spacing
      }}
    >
      <BackgroundImage 
        brand={brand} 
        amount={amount}
        currency={currency} 
      />
    </View>
);

export default GiftCard;