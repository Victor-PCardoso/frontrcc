import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatBubble = ({ message, isSender, senderName, timestamp }) => {
  const bubbleStyle = isSender ? styles.senderBubble : styles.receiverBubble;

  return (
    <View style={styles.container}>
      <View style={[styles.bubble, bubbleStyle]}>
        <Text style={styles.messageText}>{message}</Text>
        <Text style={styles.timestamp}>{timestamp}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  bubble: {
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  senderBubble: {
    backgroundColor: 'lightblue',
  },
  receiverBubble: {
    backgroundColor: 'lightgray',
  },
  messageText: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
    alignSelf: 'flex-end',
  },
});

export default ChatBubble;