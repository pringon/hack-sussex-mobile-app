import React, { Component } from "react";
import { Platform, FlatList, View, Text } from "react-native";
import KeyboardSpacer from "react-native-keyboard-spacer";
import { GiftedChat } from "react-native-gifted-chat";
import GiftCard from "../components/GiftCard";

import { messages } from "../data/messages";
import { giftCards } from "../data/giftCards";

class Chat extends Component {
  state = {
    messages: [],
    giftCards: []
  };

  constructor() {
    super();

    this.messageCount = 4;

    this.onSend = this.onSend.bind(this);
    this.extractCardKey = this.extractCardKey.bind(this);
    this.generateBotMessage = this.generateBotMessage.bind(this);
    this.appendBotMessage = this.appendBotMessage.bind(this);
  }

  componentWillMount() {
    this.setState({
      messages,
      giftCards
    });
  }

  generateBotMessage(message) {
    return {
      _id: this.messageCount++,
      text: message,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: "Bot",
        avatar: "https://placeimg.com/140/140/any"
      }
    };
  }

  appendBotMessage(message) {
    this.setState(prevState => ({
      messages: GiftedChat.append(prevState.messages, this.generateBotMessage(message))
    }));
  }

  onSend(messages = []) {
    this.setState(prevState => ({
      messages: GiftedChat.append(prevState.messages, messages)
    }));
    
    console.log(encodeURI(messages[0].text));
    fetch(`http://dinuvld.pythonanywhere.com/?message=${encodeURIComponent(messages[0].text)}`, {
      method: "GET"
    })
      .then(console.log)
      .catch(console.log)
  }

  extractCardKey(item, index) {
    return item.id.toString();
  }

  renderCard({item, index}) {
    const margin = index === 0 ? 0 : 10;
    return (
      <GiftCard 
        brand={item.brand}
        amount={item.amount}
        spacing={margin}
      />
    );
  }

  render() {

    return (
      <View style={{ flex: 1 }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          user={{
            _id: 1
          }}
          childrenHeight={100}
        >
          <FlatList 
            data={this.state.giftCards}
            renderItem={this.renderCard}
            keyExtractor={this.extractCardKey}
            horizontal={true}
          />
        </GiftedChat>
        { Platform.OS === "android" ? <KeyboardSpacer /> : null }
      </View>
    );
  }
}

export default Chat;