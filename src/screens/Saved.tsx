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

const Saved = () => {
  const navigation = useNavigation();

  const savedReels = [
    {
      id: 1,
      title: 'Vintage Watch Collection',
      thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop',
      seller: '@vintage_collector',
      price: '$150-$500',
      views: '1.2K',
      likes: '145',
    },
    {
      id: 2,
      title: 'Gaming Setup Tour',
      thumbnail: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=300&h=200&fit=crop',
      seller: '@pro_gamer',
      price: '$1200',
      views: '5.8K',
      likes: '456',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Saved</Text>

        {/* Toggle between Favorites and Saved */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={styles.inactiveToggle}
            onPress={() => navigation.navigate('Favorites' as never)}>
            <Text style={styles.inactiveToggleText}>Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.activeToggle}>
            <Text style={styles.activeToggleText}>Saved</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.reelsGrid}>
          {savedReels.map(reel => (
            <TouchableOpacity
              key={reel.id}
              style={styles.reelCard}
              onPress={() => navigation.navigate('Reels' as never, {id: reel.id})}>
              <Image source={{uri: reel.thumbnail}} style={styles.reelThumbnail} />
              <View style={styles.overlay} />
              <TouchableOpacity style={styles.playButton}>
                <Icon name="play" size={24} color="#ffffff" />
              </TouchableOpacity>
              <View style={styles.reelInfo}>
                <Text style={styles.reelTitle}>{reel.title}</Text>
                <Text style={styles.reelSeller}>{reel.seller}</Text>
              </View>
              <View style={styles.reelStats}>
                <Text style={styles.reelViews}>{reel.views} views</Text>
                <Text style={styles.reelLikes}>{reel.likes} likes</Text>
              </View>
              <Text style={styles.reelPrice}>{reel.price}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {savedReels.length === 0 && (
          <View style={styles.emptyState}>
            <Icon name="bookmark" size={48} color="#D1D5DB" />
            <Text style={styles.emptyTitle}>No saved reels yet</Text>
            <Text style={styles.emptyDescription}>
              Reels you save will appear here
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
  reelsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  reelCard: {
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
  reelThumbnail: {
    width: '100%',
    height: 128,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 128,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  playButton: {
    position: 'absolute',
    top: 52,
    left: '50%',
    marginLeft: -12,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reelInfo: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    right: 8,
  },
  reelTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 2,
  },
  reelSeller: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  reelStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  reelViews: {
    fontSize: 12,
    color: '#6B7280',
  },
  reelLikes: {
    fontSize: 12,
    color: '#6B7280',
  },
  reelPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8B5CF6',
    paddingHorizontal: 8,
    paddingBottom: 8,
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

export default Saved;