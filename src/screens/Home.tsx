import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import BottomNavigation from '../components/BottomNavigation';

const {width} = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const categories = [
    {name: 'Electronics', icon: '📱', color: '#DBEAFE'},
    {name: 'Fashion', icon: '👗', color: '#FCE7F3'},
    {name: 'Home', icon: '🏠', color: '#D1FAE5'},
    {name: 'Sports', icon: '⚽', color: '#FED7AA'},
  ];

  const products = [
    {
      id: 1,
      title: 'iPhone 14 Pro - Excellent Condition',
      price: '$899',
      location: 'New York, NY',
      seller: '@techseller_NY',
      time: '2h',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop',
    },
    {
      id: 2,
      title: 'MacBook Air M2 - Like New',
      price: '$1,200',
      location: 'Los Angeles, CA',
      seller: '@apple_reseller',
      time: '4h',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop',
    },
  ];

  const renderProduct = ({item}: {item: any}) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate('ProductDetail' as never, {id: item.id})}>
      <Image source={{uri: item.image}} style={styles.productImage} />
      <View style={styles.productContent}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <Text style={styles.productLocation}>{item.location}</Text>
        <View style={styles.productFooter}>
          <Text style={styles.productSeller}>{item.seller}</Text>
          <Text style={styles.productTime}>{item.time}</Text>
        </View>
        <View style={styles.productActions}>
          <TouchableOpacity
            onPress={() => {
              setLikedProducts(prev =>
                prev.includes(item.id)
                  ? prev.filter(id => id !== item.id)
                  : [...prev, item.id],
              );
            }}>
            <Icon
              name="heart"
              size={16}
              color={likedProducts.includes(item.id) ? '#EF4444' : '#6B7280'}
              style={{
                ...(likedProducts.includes(item.id) && {fill: '#EF4444'}),
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="share" size={16} color="#6B7280" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <TouchableOpacity
              style={styles.locationButton}
              onPress={() => navigation.navigate('Location' as never)}>
              <Icon name="map-pin" size={20} color="#8B5CF6" />
              <Text style={styles.locationText}>New York, NY</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Notifications' as never)}>
              <Icon name="bell" size={24} color="#374151" />
            </TouchableOpacity>
          </View>

          <Text style={styles.greeting}>Hi sujatha! 👋</Text>

          <TouchableOpacity
            style={styles.searchContainer}
            onPress={() => navigation.navigate('Search' as never)}>
            <Icon name="search" size={20} color="#6B7280" />
            <Text style={styles.searchPlaceholder}>Search products, sellers...</Text>
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Categories' as never)}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.categoriesContainer}>
            {categories.map(category => (
              <TouchableOpacity
                key={category.name}
                style={styles.categoryItem}
                onPress={() =>
                  navigation.navigate('CategoryProducts' as never, {
                    category: category.name.toLowerCase(),
                  })
                }>
                <View
                  style={[
                    styles.categoryIcon,
                    {backgroundColor: category.color},
                  ]}>
                  <Text style={styles.categoryEmoji}>{category.icon}</Text>
                </View>
                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Latest Products */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Latest Products</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
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
  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
  },
  locationText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
    color: '#8B5CF6',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 24,
  },
  searchPlaceholder: {
    marginLeft: 8,
    fontSize: 16,
    color: '#6B7280',
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  seeAllText: {
    fontSize: 14,
    color: '#8B5CF6',
    fontWeight: '500',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItem: {
    alignItems: 'center',
    flex: 1,
  },
  categoryIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryEmoji: {
    fontSize: 32,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
  },
  productCard: {
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
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  productContent: {
    padding: 16,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B5CF6',
    marginBottom: 8,
  },
  productLocation: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  productSeller: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8B5CF6',
  },
  productTime: {
    fontSize: 14,
    color: '#6B7280',
  },
  productActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Home;