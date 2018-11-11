import React from "react";
import { View, TouchableOpacity } from "react-native";
import BackgroundImage from "./BackgroundImage";

const GiftCard = ({ 
  selfDump = null, 
  brand = "nike", 
  amount = '', 
  value = "0", 
  currency = "GBP", 
  spacing = "0"
  } = {}) => (
  <TouchableOpacity
    onLongPress={() => sendGiftCards({ brand, amount, value, currency, selfDump })}
  >
    <View
      style={{
        height: 100,
        width: 175,
        marginLeft: spacing
      }}
    >
      <BackgroundImage
        value={value}
        brand={brand} 
        amount={amount}
        currency={currency} 
      />
    </View>
  </TouchableOpacity>
)

export default GiftCard;

const sendGiftCards = ({ brand, amount, value, currency, selfDump }) => {
  const baseUrl = "http://dinuvld.pythonanywhere.com/generateCard/",
        brandParam = `brand=${brand}`,
        amountParam = `amount=${amount}`,
        valueParam = `value=${value}`,
        currencyParam = `currency=${currency}`;

  fetch(`${baseUrl}?${brandParam}&${amountParam}&${valueParam}&${currencyParam}`)
    .then(data => {
      if(selfDump !== null) {
        selfDump();
      }
    })
    .catch(console.log);
}