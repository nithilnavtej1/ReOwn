import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const Notifications = () => {
  const navigation = useNavigation();

  const notifications = [
    {
      id: 1,
      type: 'like',
      icon: 'heart',
      iconColor: '#EF4444',
      bgColor: '#FEE2E2',
      user: '@techseller_NY',
      message: 'liked your iPhone 14 Pro listing',
      time: '2 minutes ago',
      unread: true,
    },
    {
      id: 2,
      type: 'message',
      icon: 'message-circle',
      iconColor: '#3B82F6',
      bgColor: '#DBEAFE',
      user: '@fashionista_23',
      message: 'sent you a message about Vintage Leather Jacket',
      time: '15 minutes ago',
      unread: true,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity>
          <Text style={styles.markAllRead}>Mark all read</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {notifications.map(notification => (
          <TouchableOpacity
            key={notification.id}
            style={[
              styles.notificationItem,
              notification.unread && styles.unreadNotification,
            ]}>
            <View
              style={[
                styles.notificationIcon,
                {backgroundColor: notification.bgColor},
              ]}>
              <Icon
                name={notification.icon}
                size={20}
                color={notification.iconColor}
              />
            </View>

            <View style={styles.avatarContainer}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {notification.user.slice(1, 3).toUpperCase()}
                </Text>
              </View>
            </View>

            <View style={styles.notificationContent}>
              <Text style={styles.notificationText}>
                <Text style={styles.username}>{notification.user}</Text>{' '}
                <Text style={styles.message}>{notification.message}</Text>
              </Text>
              <Text style={styles.notificationTime}>{notification.time}</Text>
            </View>

            {notification.unread && <View style={styles.unreadDot} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
  },
  markAllRead: {
    fontSize: 14,
    color: '#8B5CF6',
    fontWeight: '500',
  },
  content: {
    flex: 1,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  unreadNotification: {
    backgroundColor: '#F8FAFC',
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarContainer: {
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
  notificationContent: {
    flex: 1,
  },
  notificationText: {
    fontSize: 14,
    lineHeight: 20,
  },
  username: {
    fontWeight: '500',
    color: '#8B5CF6',
  },
  message: {
    color: '#6B7280',
  },
  notificationTime: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#8B5CF6',
    marginTop: 8,
  },
});

export default Notifications;