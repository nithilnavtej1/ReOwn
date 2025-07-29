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

const Favorites = () => {
  const navigation = useNavigation();

  const favorites = [
    {
      id: 1,
      title: 'iPhone 14 Pro Max',
      price: '$899',
      seller: '@tech_deals',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200',
      location: 'Mumbai',
      time: '2h ago',
    },
    {
      id: 2,
      title: 'MacBook Air M2',
      price: '$1,200',
      seller: '@laptop_store',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200',
      location: 'Delhi',
      time: '5h ago',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Favorites</Text>
        
        {/* Toggle between Favorites and Saved */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity style={styles.activeToggle}>
            <Text style={styles.activeToggleText}>Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.inactiveToggle}
            onPress={() => navigation.navigate('Saved' as never)}>
            <Text style={styles.inactiveToggleText}>Saved</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.productsGrid}>
          {favorites.map(product => (
            <TouchableOpacity
              key={product.id}
              style={styles.productCard}
              onPress={() =>
                navigation.navigate('ProductDetail' as never, {id: product.id})
              }>
              <Image source={{uri: product.image}} style={styles.productImage} />
              <TouchableOpacity style={styles.favoriteButton}>
                <Icon name="heart" size={16} color="#EF4444" />
              </TouchableOpacity>
              <View style={styles.productInfo}>
                <Text style={styles.productTitle}>{product.title}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
                <Text style={styles.productSeller}>{product.seller}</Text>
                <Text style={styles.productLocation}>
                  {product.location} • {product.time}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {favorites.length === 0 && (
          <View style={styles.emptyState}>
            <Icon name="heart" size={48} color="#D1D5DB" />
            <Text style={styles.emptyTitle}>No favorites yet</Text>
            <Text style={styles.emptyDescription}>
              Items you like will appear here
            </Text>
          </View>
        )}
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
    marginBottom: 16,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    padding: 4,
  },
  activeToggle: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#ffffff',
    borderRadius: 6,
    alignItems: 'center',
  },
  inactiveToggle: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  activeToggleText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  inactiveToggleText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 12,
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
  productImage: {
    width: '100%',
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productInfo: {
    padding: 12,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B5CF6',
    marginBottom: 4,
  },
  productSeller: {
    fontSize: 12,
    color: '#8B5CF6',
    marginBottom: 4,
  },
  productLocation: {
    fontSize: 12,
    color: '#6B7280',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 64,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyDescription: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
});

export default Favorites;