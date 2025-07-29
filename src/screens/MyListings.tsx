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

const MyListings = () => {
  const navigation = useNavigation();

  const listings = [
    {
      id: 1,
      title: 'iPhone 14 Pro Max',
      price: '$899',
      status: 'active',
      views: 145,
      likes: 23,
      messages: 8,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200',
      postedDate: '2 days ago',
    },
    {
      id: 2,
      title: 'MacBook Air M2',
      price: '$1,200',
      status: 'sold',
      views: 89,
      likes: 15,
      messages: 12,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200',
      postedDate: '1 week ago',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Listings</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Sell' as never)}>
          <Icon name="plus" size={24} color="#8B5CF6" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {listings.map(listing => (
          <View key={listing.id} style={styles.listingCard}>
            <Image source={{uri: listing.image}} style={styles.listingImage} />
            <View style={styles.listingContent}>
              <View style={styles.listingHeader}>
                <Text style={styles.listingTitle}>{listing.title}</Text>
                <View
                  style={[
                    styles.statusBadge,
                    listing.status === 'sold' && styles.soldBadge,
                  ]}>
                  <Text
                    style={[
                      styles.statusText,
                      listing.status === 'sold' && styles.soldText,
                    ]}>
                    {listing.status}
                  </Text>
                </View>
              </View>
              <Text style={styles.listingPrice}>{listing.price}</Text>
              <View style={styles.listingStats}>
                <View style={styles.stat}>
                  <Icon name="eye" size={16} color="#6B7280" />
                  <Text style={styles.statText}>{listing.views}</Text>
                </View>
                <View style={styles.stat}>
                  <Icon name="heart" size={16} color="#6B7280" />
                  <Text style={styles.statText}>{listing.likes}</Text>
                </View>
                <View style={styles.stat}>
                  <Icon name="message-circle" size={16} color="#6B7280" />
                  <Text style={styles.statText}>{listing.messages}</Text>
                </View>
              </View>
              <View style={styles.listingFooter}>
                <Text style={styles.postedDate}>{listing.postedDate}</Text>
                <TouchableOpacity style={styles.editButton}>
                  <Icon name="edit-2" size={16} color="#8B5CF6" />
                  <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
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
    justifyContent: 'space-between',
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
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  listingCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  listingImage: {
    width: 96,
    height: 96,
    borderRadius: 8,
    marginRight: 12,
  },
  listingContent: {
    flex: 1,
  },
  listingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  listingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    flex: 1,
    marginRight: 8,
  },
  statusBadge: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  soldBadge: {
    backgroundColor: '#F3F4F6',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#059669',
    textTransform: 'capitalize',
  },
  soldText: {
    color: '#6B7280',
  },
  listingPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B5CF6',
    marginBottom: 8,
  },
  listingStats: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 14,
    color: '#6B7280',
  },
  listingFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postedDate: {
    fontSize: 12,
    color: '#6B7280',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8B5CF6',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 4,
  },
  editButtonText: {
    fontSize: 12,
    color: '#8B5CF6',
    fontWeight: '500',
  },
});

export default MyListings;