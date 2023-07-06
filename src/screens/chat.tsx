import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Header from '../Components/Header';
import ChatBubble from '../Components/ChatBubble' 
import Icon from 'react-native-vector-icons/FontAwesome';


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setMessages([
      { id: 1, text: 'Bem-vindo, como posso ajudar?', isSender: false, senderName: 'L I Z A', timestamp: getCurrentTimestamp() }
    ]);
  }, []);
  
  const handleMicrophonePress = () => {
    console.log('Botão do microfone pressionado');
    // Implemente a lógica para enviar a mensagem de voz aqui
  };

  const getCurrentTimestamp = () => {
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        isSender: true,
        senderName: 'Eu',
        timestamp: getCurrentTimestamp(),
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  return (

    <View style={styles.container}>
    
    
 <View style={styles.messages}>
  {messages.map((message) => (
    <ChatBubble
      key={message.id}
      message={message.text}
      isSender={message.isSender}
      senderName={message.senderName}
      timestamp={message.timestamp}
    />
  ))}
</View>


<View styles={styles.microphoneContainer}>
        <TouchableOpacity style={styles.microphoneButton} onPress={handleMicrophonePress}>
          <Icon name="microphone" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 20,
  },
  iconContainer: {
    marginRight: 10,
    marginLeft: 20, 
  },
  
   
  headerText: {
    color: '#fff',
    fontSize: 24,
  },
  avatarContainer: {
    marginLeft: 10,
  },

  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  arrowContainer: {
    marginLeft: 10,
  },
  messages: {
    flex: 1,
    padding: 20,
  },
  microphoneContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  microphoneButton: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 25,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  sendButton: {
    padding: 10,
    backgroundColor: '#075e54',
    borderRadius:5,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
};

export default Chat;