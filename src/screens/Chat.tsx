import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const Chat = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params as {id: string};
  const [message, setMessage] = useState('');

  const chatData: Record<string, {name: string; username: string}> = {
    '1': {name: 'iPhone 14 Pro', username: '@techseller_NY'},
    '2': {name: 'Vintage Leather Jacket', username: '@vintage_lover'},
  };

  const chat = chatData[id] || chatData['1'];
  const messages = [
    {id: 1, text: 'Hi! Is this still available?', time: '2:30 PM', sender: 'them'},
    {id: 2, text: 'Yes, it\'s still available!', time: '2:32 PM', sender: 'me'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#374151" />
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {chat.username.slice(1, 3).toUpperCase()}
            </Text>
          </View>
          <View>
            <Text style={styles.chatName}>{chat.name}</Text>
            <Text style={styles.chatUsername}>{chat.username}</Text>
          </View>
        </View>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="phone" size={20} color="#374151" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="video" size={20} color="#374151" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.messagesContainer}>
        {messages.map(msg => (
          <View
            key={msg.id}
            style={[
              styles.messageContainer,
              msg.sender === 'me' ? styles.myMessage : styles.theirMessage,
            ]}>
            <View
              style={[
                styles.messageBubble,
                msg.sender === 'me' ? styles.myBubble : styles.theirBubble,
              ]}>
              <Text
                style={[
                  styles.messageText,
                  msg.sender === 'me' ? styles.myMessageText : styles.theirMessageText,
                ]}>
                {msg.text}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message..."
          multiline
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => setMessage('')}>
          <Icon name="send" size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
  },
  chatName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  chatUsername: {
    fontSize: 12,
    color: '#8B5CF6',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  headerButton: {
    padding: 8,
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  messageContainer: {
    marginBottom: 16,
  },
  myMessage: {
    alignItems: 'flex-end',
  },
  theirMessage: {
    alignItems: 'flex-start',
  },
  messageBubble: {
    maxWidth: '80%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 18,
  },
  myBubble: {
    backgroundColor: '#8B5CF6',
  },
  theirBubble: {
    backgroundColor: '#F3F4F6',
  },
  messageText: {
    fontSize: 14,
  },
  myMessageText: {
    color: '#ffffff',
  },
  theirMessageText: {
    color: '#111827',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 8,
    maxHeight: 100,
    fontSize: 16,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8B5CF6',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Chat;