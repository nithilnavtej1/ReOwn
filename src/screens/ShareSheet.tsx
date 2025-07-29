import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Linking,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const ShareSheet = () => {
  const navigation = useNavigation();

  const shareOptions = [
    {
      name: 'WhatsApp',
      icon: '💬',
      color: '#25D366',
      action: () => shareToWhatsApp(),
    },
    {
      name: 'Instagram',
      icon: '📷',
      color: '#E4405F',
      action: () => shareToInstagram(),
    },
    {
      name: 'X (Twitter)',
      icon: '🐦',
      color: '#000000',
      action: () => shareToX(),
    },
    {
      name: 'Facebook',
      icon: '👥',
      color: '#1877F2',
      action: () => shareToFacebook(),
    },
    {
      name: 'Copy Link',
      icon: '🔗',
      color: '#6B7280',
      action: () => copyLink(),
    },
  ];

  const shareToWhatsApp = () => {
    const text = 'Check out this amazing product on ReOwn!';
    const url = `whatsapp://send?text=${encodeURIComponent(text)}`;
    Linking.openURL(url).catch(() => {
      Alert.alert('Error', 'WhatsApp is not installed');
    });
  };

  const shareToInstagram = () => {
    Alert.alert('Share', 'Instagram sharing would be implemented here');
  };

  const shareToX = () => {
    const text = 'Check out this amazing product on ReOwn!';
    const url = `twitter://post?message=${encodeURIComponent(text)}`;
    Linking.openURL(url).catch(() => {
      Alert.alert('Error', 'Twitter app is not installed');
    });
  };

  const shareToFacebook = () => {
    Alert.alert('Share', 'Facebook sharing would be implemented here');
  };

  const copyLink = () => {
    Alert.alert('Success', 'Link copied to clipboard!');
  };

  return (
    <Modal
      visible={true}
      transparent={true}
      animationType="slide"
      onRequestClose={() => navigation.goBack()}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Share to</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="x" size={24} color="#374151" />
            </TouchableOpacity>
          </View>

          {/* Share Options */}
          <View style={styles.shareOptions}>
            {shareOptions.map(option => (
              <TouchableOpacity
                key={option.name}
                style={styles.shareOption}
                onPress={option.action}>
                <View
                  style={[
                    styles.shareIcon,
                    {backgroundColor: option.color},
                  ]}>
                  <Text style={styles.shareEmoji}>{option.icon}</Text>
                </View>
                <Text style={styles.shareName}>{option.name}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Additional Actions */}
          <View style={styles.additionalActions}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => Alert.alert('Report', 'Report feature coming soon')}>
              <Text style={styles.actionButtonText}>Report this content</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() =>
                Alert.alert('Not Interested', 'Not interested feature coming soon')
              }>
              <Text style={styles.actionButtonText}>Not interested</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '70%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  shareOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'space-around',
  },
  shareOption: {
    alignItems: 'center',
    marginBottom: 16,
    width: '20%',
  },
  shareIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  shareEmoji: {
    fontSize: 20,
  },
  shareName: {
    fontSize: 12,
    fontWeight: '500',
    color: '#111827',
    textAlign: 'center',
  },
  additionalActions: {
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  actionButton: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  actionButtonText: {
    fontSize: 16,
    color: '#374151',
  },
});

export default ShareSheet;