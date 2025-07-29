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

const PrivacySecurity = () => {
  const navigation = useNavigation();
  const [settings, setSettings] = useState({
    twoFactor: true,
    loginAlerts: true,
    onlineStatus: false,
    usageAnalytics: true,
    personalizedAds: false,
  });

  const updateSetting = (key: string, value: boolean) => {
    setSettings(prev => ({...prev, [key]: value}));
  };

  const privacySettings = [
    {
      title: 'Account Security',
      items: [
        {
          label: 'Two-Factor Authentication',
          icon: 'key',
          type: 'switch',
          enabled: settings.twoFactor,
          key: 'twoFactor',
        },
        {
          label: 'Login Alerts',
          icon: 'bell',
          type: 'switch',
          enabled: settings.loginAlerts,
          key: 'loginAlerts',
        },
        {label: 'Device Management', icon: 'smartphone', type: 'link'},
      ],
    },
    {
      title: 'Privacy Controls',
      items: [
        {
          label: 'Show Online Status',
          icon: 'eye',
          type: 'switch',
          enabled: settings.onlineStatus,
          key: 'onlineStatus',
        },
        {label: 'Profile Visibility', icon: 'shield', type: 'link', value: 'Public'},
        {label: 'Contact Information', icon: 'lock', type: 'link', value: 'Friends Only'},
      ],
    },
    {
      title: 'Data & Analytics',
      items: [
        {
          label: 'Usage Analytics',
          icon: 'eye',
          type: 'switch',
          enabled: settings.usageAnalytics,
          key: 'usageAnalytics',
        },
        {
          label: 'Personalized Ads',
          icon: 'bell',
          type: 'switch',
          enabled: settings.personalizedAds,
          key: 'personalizedAds',
        },
        {label: 'Data Download', icon: 'shield', type: 'link'},
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy & Security</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {privacySettings.map(group => (
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

        {/* Privacy Policy & Terms */}
        <View style={styles.policySection}>
          <Text style={styles.policyTitle}>Privacy Policy & Terms</Text>
          <View style={styles.policyCard}>
            <View style={styles.policyItem}>
              <Text style={styles.policyItemTitle}>Data Collection</Text>
              <Text style={styles.policyItemText}>
                We collect information to provide better services to our users.
              </Text>
            </View>
            <View style={styles.policyItem}>
              <Text style={styles.policyItemTitle}>Information Sharing</Text>
              <Text style={styles.policyItemText}>
                We do not sell personal information to third parties.
              </Text>
            </View>
          </View>
        </View>

        {/* Data Requests */}
        <View style={styles.dataRequestsSection}>
          <Text style={styles.sectionTitle}>Data Requests</Text>
          <View style={styles.dataRequestsCard}>
            <TouchableOpacity style={styles.dataRequestButton}>
              <Text style={styles.dataRequestButtonText}>Download My Data</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.dataRequestButton, styles.deleteButton]}>
              <Text style={[styles.dataRequestButtonText, styles.deleteButtonText]}>
                Delete My Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Security Tips */}
        <View style={styles.securityTipsSection}>
          <View style={styles.securityTipsCard}>
            <View style={styles.securityTipsHeader}>
              <Icon name="shield" size={24} color="#8B5CF6" />
              <Text style={styles.securityTipsTitle}>Security Tips</Text>
            </View>
            <View style={styles.securityTipsList}>
              <Text style={styles.securityTip}>• Use a strong, unique password</Text>
              <Text style={styles.securityTip}>• Enable two-factor authentication</Text>
              <Text style={styles.securityTip}>• Keep your app updated</Text>
              <Text style={styles.securityTip}>• Be cautious with personal information</Text>
            </View>
          </View>
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
    paddingVertical: 12,
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
  policySection: {
    marginVertical: 16,
  },
  policyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  policyCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
  },
  policyItem: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  policyItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 8,
  },
  policyItemText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  dataRequestsSection: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  dataRequestsCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  dataRequestButton: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  deleteButton: {
    borderColor: '#FEE2E2',
  },
  dataRequestButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  deleteButtonText: {
    color: '#EF4444',
  },
  securityTipsSection: {
    marginVertical: 16,
    marginBottom: 32,
  },
  securityTipsCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 16,
  },
  securityTipsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  securityTipsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginLeft: 12,
  },
  securityTipsList: {
    gap: 4,
  },
  securityTip: {
    fontSize: 14,
    color: '#6B7280',
  },
});

export default PrivacySecurity;