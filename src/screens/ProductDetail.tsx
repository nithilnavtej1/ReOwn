import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const {width} = Dimensions.get('window');

const ProductDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params as {id: string};
  const [isLiked, setIsLiked] = useState(false);

  const products = {
    '1': {
      id: '1',
      title: 'iPhone 14 Pro Max',
      price: '$899',
      originalPrice: '$1099',
      description: 'Latest iPhone in pristine condition with all original accessories and warranty.',
      seller: {
        name: 'Tech Dealer',
        username: 'tech_deals',
        rating: 4.8,
        reviewCount: 156,
        verified: true,
        location: 'Mumbai, India',
      },
      images: [
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
      ],
      condition: 'Like New',
      specifications: [
        {label: 'Storage', value: '256GB'},
        {label: 'Color', value: 'Deep Purple'},
        {label: 'Battery Health', value: '100%'},
        {label: 'Network', value: 'Unlocked'},
      ],
    },
  };

  const product = products[id as keyof typeof products] || products['1'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#374151" />
        </TouchableOpacity>
        <View style={styles.headerActions}>
          <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
            <Icon
              name="heart"
              size={24}
              color={isLiked ? '#EF4444' : '#374151'}
              style={{...(isLiked && {fill: '#EF4444'})}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="share" size={24} color="#374151" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Image source={{uri: product.images[0]}} style={styles.productImage} />

        <View style={styles.productInfo}>
          <View style={styles.productHeader}>
            <Text style={styles.productTitle}>{product.title}</Text>
            <View style={styles.conditionBadge}>
              <Text style={styles.conditionText}>{product.condition}</Text>
            </View>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.originalPrice}>{product.originalPrice}</Text>
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>18% OFF</Text>
            </View>
          </View>

          <Text style={styles.description}>{product.description}</Text>

          {/* Specifications */}
          <View style={styles.specificationsCard}>
            <Text style={styles.specificationsTitle}>Specifications</Text>
            {product.specifications.map((spec, index) => (
              <View key={index} style={styles.specificationRow}>
                <Text style={styles.specLabel}>{spec.label}:</Text>
                <Text style={styles.specValue}>{spec.value}</Text>
              </View>
            ))}
          </View>

          {/* Seller Info */}
          <View style={styles.sellerCard}>
            <View style={styles.sellerHeader}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {product.seller.name[0]}
                </Text>
              </View>
              <View style={styles.sellerInfo}>
                <View style={styles.sellerNameContainer}>
                  <Text style={styles.sellerName}>{product.seller.name}</Text>
                  {product.seller.verified && (
                    <View style={styles.verifiedBadge}>
                      <Text style={styles.verifiedText}>✓ Verified</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.sellerUsername}>
                  @{product.seller.username}
                </Text>
                <View style={styles.sellerStats}>
                  <Text style={styles.rating}>
                    ⭐ {product.seller.rating} ({product.seller.reviewCount})
                  </Text>
                  <Text style={styles.location}>📍 {product.seller.location}</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.viewProfileButton}>
              <Text style={styles.viewProfileText}>View Profile</Text>
            </TouchableOpacity>

            <View style={styles.contactButtons}>
              <TouchableOpacity style={styles.contactButton}>
                <Icon name="message-circle" size={16} color="#8B5CF6" />
                <Text style={styles.contactButtonText}>Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.contactButton}>
                <Icon name="phone" size={16} color="#8B5CF6" />
                <Text style={styles.contactButtonText}>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.contactButton}>
                <Icon name="video" size={16} color="#8B5CF6" />
                <Text style={styles.contactButtonText}>Video</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomActions}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 16,
  },
  content: {
    flex: 1,
  },
  productImage: {
    width: width,
    height: 320,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 16,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    flex: 1,
    marginRight: 8,
  },
  conditionBadge: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  conditionText: {
    fontSize: 12,
    color: '#374151',
    fontWeight: '500',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8B5CF6',
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 18,
    color: '#6B7280',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  discountBadge: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  discountText: {
    fontSize: 12,
    color: '#059669',
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
    marginBottom: 24,
  },
  specificationsCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  specificationsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  specificationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  specLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  specValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  sellerCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
  },
  sellerHeader: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#8B5CF6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  sellerInfo: {
    flex: 1,
  },
  sellerNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  sellerName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginRight: 8,
  },
  verifiedBadge: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  verifiedText: {
    fontSize: 10,
    color: '#059669',
    fontWeight: '500',
  },
  sellerUsername: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  sellerStats: {
    flexDirection: 'row',
    gap: 16,
  },
  rating: {
    fontSize: 12,
    color: '#6B7280',
  },
  location: {
    fontSize: 12,
    color: '#6B7280',
  },
  viewProfileButton: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  viewProfileText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  contactButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  contactButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingVertical: 8,
    gap: 4,
  },
  contactButtonText: {
    fontSize: 14,
    color: '#8B5CF6',
    fontWeight: '500',
  },
  bottomActions: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    gap: 12,
  },
  addToCartButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#8B5CF6',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  addToCartText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8B5CF6',
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: '#8B5CF6',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buyNowText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default ProductDetail;