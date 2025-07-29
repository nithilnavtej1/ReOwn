import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import BottomNavigation from '../components/BottomNavigation';

const {width, height} = Dimensions.get('window');

const Reels = () => {
  const navigation = useNavigation();
  const flatListRef = useRef<FlatList>(null);

  const reels = [
    {
      id: 1,
      title: 'Vintage Watch Collection',
      description: 'Check out this amazing vintage watch collection! Each piece tells a story...',
      seller: '@vintage_collector',
      price: '$150-$500',
      likes: '1.2K',
      comments: '145',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=600&fit=crop',
    },
    {
      id: 2,
      title: 'Sneaker Collection',
      description: 'Rare and limited edition sneakers in perfect condition...',
      seller: '@sneaker_head',
      price: '$200-$800',
      likes: '3.5K',
      comments: '289',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=600&fit=crop',
    },
  ];

  const [reelStates, setReelStates] = useState(
    reels.map(reel => ({
      isLiked: false,
      isSaved: false,
      likes: reel.likes,
    })),
  );

  const renderReel = ({item, index}: {item: any; index: number}) => (
    <View style={styles.reelContainer}>
      <Image source={{uri: item.image}} style={styles.reelImage} />
      <View style={styles.overlay} />

      {/* Content Info */}
      <View style={styles.contentInfo}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('SellerProfile' as never, {
              username: item.seller.slice(1),
            })
          }>
          <Text style={styles.seller}>{item.seller}</Text>
        </TouchableOpacity>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>🏷️ {item.price}</Text>
      </View>

      {/* Right Side Actions */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={[
            styles.actionButton,
            reelStates[index]?.isLiked && styles.likedButton,
          ]}
          onPress={() => {
            const newStates = [...reelStates];
            newStates[index].isLiked = !newStates[index].isLiked;
            setReelStates(newStates);
          }}>
          <Icon
            name="heart"
            size={24}
            color={reelStates[index]?.isLiked ? '#EF4444' : '#ffffff'}
          />
          <Text style={styles.actionText}>{item.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() =>
            navigation.navigate('ReelComments' as never, {id: item.id})
          }>
          <Icon name="message-circle" size={24} color="#ffffff" />
          <Text style={styles.actionText}>{item.comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('ShareSheet' as never)}>
          <Icon name="share" size={24} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => {
            const newStates = [...reelStates];
            newStates[index].isSaved = !newStates[index].isSaved;
            setReelStates(newStates);
          }}>
          <Icon
            name="bookmark"
            size={24}
            color="#ffffff"
            style={{
              ...(reelStates[index]?.isSaved && {fill: '#ffffff'}),
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={reels}
        renderItem={renderReel}
        keyExtractor={item => item.id.toString()}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        snapToAlignment="start"
        decelerationRate="fast"
      />
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  reelContainer: {
    width,
    height: height - 80, // Account for bottom navigation
    position: 'relative',
  },
  reelImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  contentInfo: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 80,
  },
  seller: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  description: {
    color: '#ffffff',
    fontSize: 14,
    opacity: 0.9,
    marginBottom: 8,
  },
  price: {
    color: '#ffffff',
    fontSize: 12,
  },
  actionsContainer: {
    position: 'absolute',
    right: 16,
    bottom: 80,
    alignItems: 'center',
  },
  actionButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  likedButton: {
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
  },
  actionText: {
    color: '#ffffff',
    fontSize: 12,
    marginTop: 4,
  },
});

export default Reels;