import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const Search = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('products');

  const searchResults = {
    products: [
      {
        id: 1,
        title: 'iPhone 14 Pro Max',
        price: '$899',
        seller: '@tech_deals',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200',
        category: 'Electronics',
        location: 'Mumbai',
        time: '2h ago',
      },
    ],
    sellers: [
      {
        username: '@tech_deals',
        name: 'Tech Dealer',
        followers: '1.2K',
        rating: 4.8,
        verified: true,
        posts: 45,
      },
    ],
  };

  const filteredResults = {
    products: searchResults.products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.seller.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
    sellers: searchResults.sellers.filter(seller =>
      seller.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      seller.name.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#374151" />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <Icon name="search" size={16} color="#6B7280" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products, sellers..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity>
          <Icon name="filter" size={20} color="#374151" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'products' && styles.activeTab]}
          onPress={() => setActiveTab('products')}>
          <Icon name="package" size={16} color={activeTab === 'products' ? '#8B5CF6' : '#6B7280'} />
          <Text style={[styles.tabText, activeTab === 'products' && styles.activeTabText]}>
            Products
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'sellers' && styles.activeTab]}
          onPress={() => setActiveTab('sellers')}>
          <Icon name="user" size={16} color={activeTab === 'sellers' ? '#8B5CF6' : '#6B7280'} />
          <Text style={[styles.tabText, activeTab === 'sellers' && styles.activeTabText]}>
            Sellers
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {activeTab === 'products' && (
          <View>
            {filteredResults.products.map(product => (
              <TouchableOpacity
                key={product.id}
                style={styles.productCard}
                onPress={() =>
                  navigation.navigate('ProductDetail' as never, {id: product.id})
                }>
                <Image source={{uri: product.image}} style={styles.productImage} />
                <View style={styles.productInfo}>
                  <Text style={styles.productTitle}>{product.title}</Text>
                  <Text style={styles.productPrice}>{product.price}</Text>
                  <View style={styles.productMeta}>
                    <Text style={styles.productSeller}>{product.seller}</Text>
                    <View style={styles.categoryBadge}>
                      <Text style={styles.categoryText}>{product.category}</Text>
                    </View>
                  </View>
                  <Text style={styles.productLocation}>
                    {product.location} • {product.time}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {activeTab === 'sellers' && (
          <View>
            {filteredResults.sellers.map(seller => (
              <TouchableOpacity key={seller.username} style={styles.sellerCard}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{seller.name[0]}</Text>
                </View>
                <View style={styles.sellerInfo}>
                  <View style={styles.sellerHeader}>
                    <Text style={styles.sellerName}>{seller.name}</Text>
                    {seller.verified && (
                      <View style={styles.verifiedBadge}>
                        <Text style={styles.verifiedText}>Verified</Text>
                      </View>
                    )}
                  </View>
                  <Text style={styles.sellerUsername}>{seller.username}</Text>
                  <View style={styles.sellerStats}>
                    <Text style={styles.sellerStat}>{seller.followers} followers</Text>
                    <Text style={styles.sellerStat}>⭐ {seller.rating}</Text>
                    <Text style={styles.sellerStat}>{seller.posts} posts</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.followButton}>
                  <Text style={styles.followButtonText}>Follow</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {((activeTab === 'products' && filteredResults.products.length === 0) ||
          (activeTab === 'sellers' && filteredResults.sellers.length === 0)) &&
          searchQuery && (
            <View style={styles.noResults}>
              <Text style={styles.noResultsText}>
                No {activeTab} found for "{searchQuery}"
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    gap: 12,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#111827',
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 8,
  },
  activeTab: {
    backgroundColor: '#F3F4F6',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#8B5CF6',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
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
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B5CF6',
    marginBottom: 4,
  },
  productMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  productSeller: {
    fontSize: 12,
    color: '#6B7280',
  },
  categoryBadge: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  categoryText: {
    fontSize: 10,
    color: '#374151',
  },
  productLocation: {
    fontSize: 12,
    color: '#6B7280',
  },
  sellerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
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
  sellerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  sellerName: {
    fontSize: 16,
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
  },
  sellerUsername: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  sellerStats: {
    flexDirection: 'row',
    gap: 12,
  },
  sellerStat: {
    fontSize: 12,
    color: '#6B7280',
  },
  followButton: {
    borderWidth: 1,
    borderColor: '#8B5CF6',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  followButtonText: {
    fontSize: 14,
    color: '#8B5CF6',
    fontWeight: '500',
  },
  noResults: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  noResultsText: {
    fontSize: 16,
    color: '#6B7280',
  },
});

export default Search;