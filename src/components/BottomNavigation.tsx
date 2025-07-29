import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const BottomNavigation = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const navItems = [
    {icon: 'home', label: 'Home', route: 'Home'},
    {icon: 'play', label: 'Reels', route: 'Reels'},
    {icon: 'plus', label: 'Sell', route: 'Sell'},
    {icon: 'message-circle', label: 'Messages', route: 'Messages'},
    {icon: 'user', label: 'Profile', route: 'Profile'},
  ];

  return (
    <View style={styles.container}>
      {navItems.map(item => {
        const isActive = route.name === item.route;
        const isSell = item.route === 'Sell';

        return (
          <TouchableOpacity
            key={item.route}
            style={[styles.navItem, isSell && styles.sellButton]}
            onPress={() => navigation.navigate(item.route as never)}>
            <Icon
              name={item.icon}
              size={24}
              color={
                isSell
                  ? '#ffffff'
                  : isActive
                  ? '#8B5CF6'
                  : '#6B7280'
              }
            />
            <Text
              style={[
                styles.navLabel,
                isActive && !isSell && styles.activeLabel,
                isSell && styles.sellLabel,
              ]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    minWidth: 60,
  },
  sellButton: {
    backgroundColor: '#8B5CF6',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  navLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
    color: '#6B7280',
  },
  activeLabel: {
    color: '#8B5CF6',
  },
  sellLabel: {
    color: '#ffffff',
  },
});

export default BottomNavigation;