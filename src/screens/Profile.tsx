import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import BottomNavigation from '../components/BottomNavigation';

const Profile = () => {
  const navigation = useNavigation();

  const recentActivity = [
    {
      id: 1,
      type: 'sold',
      item: 'iPhone 14 Pro sold',
      time: '2 hours ago',
      amount: '$899',
      icon: 'package',
    },
    {
      id: 2,
      type: 'favorite',
      item: 'MacBook Air favorited',
      time: '5 hours ago',
      icon: 'heart',
    },
  ];

  const accountOptions = [
    {label: 'My Listings', icon: 'package', route: 'MyListings'},
    {label: 'Favorites', icon: 'heart', route: 'Favorites'},
    {label: 'Notifications', icon: 'bell', route: 'Notifications'},
    {label: 'Privacy & Security', icon: 'shield', route: 'PrivacySecurity'},
    {label: 'Settings', icon: 'settings', route: 'Settings'},
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.profileInfo}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>SU</Text>
            </View>

            <View style={styles.userInfo}>
              <View style={styles.userNameContainer}>
                <Text style={styles.username}>@sujatha</Text>
                <View style={styles.verifiedBadge}>
                  <Text style={styles.verifiedText}>✓ Verified</Text>
                </View>
              </View>
              <Text style={styles.displayName}>SUJATHA</Text>
              <Text style={styles.email}>sujatha@mom.com</Text>
              <Text style={styles.location}>📍 Mumbai, India</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.editButton}>
            <Icon name="edit-2" size={16} color="#8B5CF6" />
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <TouchableOpacity style={styles.statButton}>
            <Text style={styles.statNumber}>1.2K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statButton}>
            <Text style={styles.statNumber}>345</Text>
            <Text style={styles.statLabel}>Following</Text>
          </TouchableOpacity>
        </View>

        {/* Performance Stats */}
        <View style={styles.performanceStats}>
          <TouchableOpacity
            style={styles.performanceStat}
            onPress={() => navigation.navigate('MyListings' as never)}>
            <Icon name="package" size={24} color="#8B5CF6" />
            <Text style={styles.performanceNumber}>24</Text>
            <Text style={styles.performanceLabel}>Items Sold</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.performanceStat}
            onPress={() => navigation.navigate('Reviews' as never)}>
            <Icon name="star" size={24} color="#8B5CF6" />
            <Text style={styles.performanceNumber}>4.8</Text>
            <Text style={styles.performanceLabel}>Rating</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.performanceStat}
            onPress={() => navigation.navigate('Reviews' as never)}>
            <Icon name="message-circle" size={24} color="#8B5CF6" />
            <Text style={styles.performanceNumber}>156</Text>
            <Text style={styles.performanceLabel}>Reviews</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          {recentActivity.map(activity => (
            <TouchableOpacity key={activity.id} style={styles.activityItem}>
              <View style={styles.activityIcon}>
                <Icon name={activity.icon} size={20} color="#8B5CF6" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityText}>{activity.item}</Text>
                <Text style={styles.activityTime}>{activity.time}</Text>
              </View>
              {activity.amount && (
                <Text style={styles.activityAmount}>{activity.amount}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Account Options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.accountOptions}>
            {accountOptions.map((option, index) => (
              <TouchableOpacity
                key={option.label}
                style={[
                  styles.accountOption,
                  index !== accountOptions.length - 1 && styles.accountOptionBorder,
                ]}
                onPress={() => navigation.navigate(option.route as never)}>
                <Icon name={option.icon} size={20} color="#8B5CF6" />
                <Text style={styles.accountOptionText}>{option.label}</Text>
                <Icon name="chevron-right" size={16} color="#6B7280" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Logout */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('Auth' as never)}>
          <Icon name="log-out" size={16} color="#EF4444" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appVersion}>ReOwn v1.0.0</Text>
          <Text style={styles.appTagline}>Made with ❤️ for the community</Text>
        </View>
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
  scrollView: {
    flex: 1,
  },
  profileHeader: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  profileInfo: {
    flexDirection: 'row',
    flex: 1,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#8B5CF6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  userInfo: {
    flex: 1,
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginRight: 8,
  },
  verifiedBadge: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  verifiedText: {
    fontSize: 12,
    color: '#059669',
    fontWeight: '500',
  },
  displayName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  location: {
    fontSize: 12,
    color: '#6B7280',
  },
  editButton: {
    padding: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  statButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  performanceStats: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    paddingVertical: 16,
  },
  performanceStat: {
    flex: 1,
    alignItems: 'center',
  },
  performanceNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 8,
  },
  performanceLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  activityTime: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  activityAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B5CF6',
  },
  accountOptions: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
  },
  accountOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  accountOptionBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  accountOptionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginLeft: 12,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginVertical: 8,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FEE2E2',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#EF4444',
    marginLeft: 8,
  },
  appInfo: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  appVersion: {
    fontSize: 14,
    color: '#6B7280',
  },
  appTagline: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
});

export default Profile;