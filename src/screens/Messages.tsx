import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import BottomNavigation from '../components/BottomNavigation';

const Messages = () => {
  const navigation = useNavigation();

  const conversations = [
    {
      id: 1,
      name: 'iPhone 14 Pro',
      username: '@techseller_NY',
      lastMessage: 'Is the iPhone still available?',
      time: '2h',
      unread: 2,
      isOnline: true,
    },
    {
      id: 2,
      name: 'Vintage Leather Jacket',
      username: '@vintage_lover',
      lastMessage: 'Thanks for the quick response!',
      time: '15m',
      unread: 0,
      isOnline: false,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
        <Text style={styles.headerSubtitle}>
          Secure & anonymous communication
        </Text>

        <View style={styles.searchContainer}>
          <Icon name="search" size={16} color="#6B7280" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search conversations..."
            placeholderTextColor="#6B7280"
          />
        </View>
      </View>

      <ScrollView style={styles.conversationsList}>
        {conversations.map(conversation => (
          <TouchableOpacity
            key={conversation.id}
            style={styles.conversationItem}
            onPress={() =>
              navigation.navigate('Chat' as never, {id: conversation.id})
            }>
            <View style={styles.productImage} />

            <View style={styles.avatarContainer}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {conversation.username.slice(1, 3).toUpperCase()}
                </Text>
              </View>
              {conversation.isOnline && <View style={styles.onlineIndicator} />}
            </View>

            <View style={styles.conversationContent}>
              <View style={styles.conversationHeader}>
                <View>
                  <Text style={styles.conversationName}>
                    {conversation.name}
                  </Text>
                  <Text style={styles.conversationUsername}>
                    {conversation.username}
                  </Text>
                </View>
                <View style={styles.conversationMeta}>
                  {conversation.unread > 0 && (
                    <View style={styles.unreadBadge}>
                      <Text style={styles.unreadText}>
                        {conversation.unread}
                      </Text>
                    </View>
                  )}
                  <Text style={styles.conversationTime}>
                    {conversation.time}
                  </Text>
                </View>
              </View>
              <Text style={styles.lastMessage}>{conversation.lastMessage}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#111827',
  },
  conversationsList: {
    flex: 1,
  },
  conversationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  productImage: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#8B5CF6',
    marginRight: 12,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#10B981',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  conversationContent: {
    flex: 1,
  },
  conversationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  conversationName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  conversationUsername: {
    fontSize: 12,
    color: '#8B5CF6',
  },
  conversationMeta: {
    alignItems: 'flex-end',
    gap: 4,
  },
  unreadBadge: {
    backgroundColor: '#8B5CF6',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 20,
    alignItems: 'center',
  },
  unreadText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
  },
  conversationTime: {
    fontSize: 12,
    color: '#6B7280',
  },
  lastMessage: {
    fontSize: 14,
    color: '#6B7280',
  },
});

export default Messages;