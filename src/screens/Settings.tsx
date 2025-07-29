import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const Settings = () => {
  const navigation = useNavigation();
  const [settings, setSettings] = useState({
    darkMode: false,
    emailNotifications: true,
    phoneNotifications: false,
    showActivityStatus: true,
  });

  const updateSetting = (key: string, value: boolean) => {
    setSettings(prev => ({...prev, [key]: value}));
  };

  const settingsGroups = [
    {
      title: 'Account',
      items: [
        {
          label: 'Email Notifications',
          icon: 'mail',
          type: 'switch',
          enabled: settings.emailNotifications,
          key: 'emailNotifications',
        },
        {
          label: 'Phone Notifications',
          icon: 'smartphone',
          type: 'switch',
          enabled: settings.phoneNotifications,
          key: 'phoneNotifications',
        },
      ],
    },
    {
      title: 'Privacy',
      items: [
        {
          label: 'Show Activity Status',
          icon: 'eye',
          type: 'switch',
          enabled: settings.showActivityStatus,
          key: 'showActivityStatus',
        },
        {label: 'Privacy Policy', icon: 'shield', type: 'link'},
      ],
    },
    {
      title: 'Preferences',
      items: [
        {
          label: 'Dark Mode',
          icon: 'moon',
          type: 'switch',
          enabled: settings.darkMode,
          key: 'darkMode',
        },
        {label: 'Language', icon: 'globe', type: 'link', value: 'English'},
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView style={styles.content}>
        {settingsGroups.map(group => (
          <View key={group.title} style={styles.settingsGroup}>
            <Text style={styles.groupTitle}>{group.title}</Text>
            <View style={styles.settingsCard}>
              {group.items.map((item, index) => (
                <View
                  key={item.label}
                  style={[
                    styles.settingItem,
                    index !== group.items.length - 1 && styles.settingItemBorder,
                  ]}>
                  <Icon name={item.icon} size={20} color="#8B5CF6" />
                  <Text style={styles.settingLabel}>{item.label}</Text>

                  {item.type === 'switch' && (
                    <Switch
                      value={item.enabled}
                      onValueChange={value =>
                        item.key && updateSetting(item.key, value)
                      }
                      trackColor={{false: '#D1D5DB', true: '#A855F7'}}
                      thumbColor={item.enabled ? '#ffffff' : '#ffffff'}
                    />
                  )}

                  {item.type === 'link' && (
                    <View style={styles.linkContainer}>
                      {item.value && (
                        <Text style={styles.linkValue}>{item.value}</Text>
                      )}
                      <Icon name="chevron-right" size={16} color="#6B7280" />
                    </View>
                  )}
                </View>
              ))}
            </View>
          </View>
        ))}

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appTitle}>ReOwn</Text>
          <Text style={styles.appVersion}>Version 1.0.0</Text>
          <Text style={styles.appTagline}>Made with ❤️ for the community</Text>
        </View>
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
    marginLeft: 12,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  settingsGroup: {
    marginVertical: 16,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  settingsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  settingItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  settingLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginLeft: 12,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkValue: {
    fontSize: 14,
    color: '#6B7280',
    marginRight: 8,
  },
  appInfo: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  appTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  appVersion: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  appTagline: {
    fontSize: 12,
    color: '#6B7280',
  },
});

export default Settings;