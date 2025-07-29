import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const CategoryProducts = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {category} = route.params as {category: string};

  const products = {
    electronics: [
      {
        id: 1,
        title: 'iPhone 14 Pro Max',
        price: '$999',
        originalPrice: '$1199',
        image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop',
        seller: '@techdealer',
        rating: 4.8,
        reviews: 234,
        location: 'New York',
        condition: 'Like New',
      },
      {
        id: 2,
        title: 'MacBook Air M2',
        price: '$1099',
        originalPrice: '$1299',
        image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop',
        seller: '@applereseller',
        rating: 4.9,
        reviews: 156,
        location: 'California',
        condition: 'Excellent',
      },
    ],
    fashion: [
      {
        id: 3,
        title: 'Designer Handbag',
        price: '$450',
        originalPrice: '$800',
        image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=200&fit=crop',
        seller: '@fashionista',
        rating: 4.7,
        reviews: 89,
        location: 'Paris',
        condition: 'Good',
      },
    ],
  };

  const categoryProducts = products[category as keyof typeof products] || products.electronics;
  const categoryName = category?.charAt(0).toUpperCase() + category?.slice(1) || 'Electronics';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{categoryName}</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.productsGrid}>
          {categoryProducts.map(product => (
            <TouchableOpacity
              key={product.id}
              style={styles.productCard}
              onPress={() =>
                navigation.navigate('ProductDetail' as never, {id: product.id})
              }>
              <Image source={{uri: product.image}} style={styles.productImage} />
              <TouchableOpacity style={styles.favoriteButton}>
                <Icon name="heart" size={16} color="#6B7280" />
              </TouchableOpacity>
              <View style={styles.conditionBadge}>
                <Text style={styles.conditionText}>{product.condition}</Text>
              </View>

              <View style={styles.productInfo}>
                <Text style={styles.productTitle}>{product.title}</Text>
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>{product.price}</Text>
                  <Text style={styles.originalPrice}>{product.originalPrice}</Text>
                </View>

                <View style={styles.ratingContainer}>
                  <Icon name="star" size={12} color="#F59E0B" />
                  <Text style={styles.rating}>
                    {product.rating} ({product.reviews})
                  </Text>
                </View>

                <View style={styles.productFooter}>
                  <Text style={styles.seller}>{product.seller}</Text>
                  <View style={styles.locationContainer}>
                    <Icon name="map-pin" size={12} color="#6B7280" />
                    <Text style={styles.location}>{product.location}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
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
  conditionBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#10B981',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  conditionText: {
    fontSize: 10,
    color: '#ffffff',
    fontWeight: '500',
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
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B5CF6',
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 12,
    color: '#6B7280',
    textDecorationLine: 'line-through',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seller: {
    fontSize: 12,
    color: '#8B5CF6',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
});

export default CategoryProducts;