import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const Reviews = () => {
  const navigation = useNavigation();

  const reviews = [
    {
      id: 1,
      reviewer: '@techbuyer_23',
      rating: 5,
      comment: 'Excellent seller! iPhone was exactly as described and shipped super fast.',
      product: 'iPhone 14 Pro Max',
      date: '2 days ago',
      helpful: 12,
    },
    {
      id: 2,
      reviewer: '@gadgetlover',
      rating: 5,
      comment: 'Amazing condition MacBook. Great communication throughout the process.',
      product: 'MacBook Air M2',
      date: '1 week ago',
      helpful: 8,
    },
  ];

  const averageRating = 4.8;
  const totalReviews = 156;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reviews</Text>
      </View>

      {/* Rating Summary */}
      <View style={styles.ratingSummary}>
        <View style={styles.ratingContainer}>
          <Text style={styles.averageRating}>{averageRating}</Text>
          <View style={styles.starsContainer}>
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="star"
                size={20}
                color={i < Math.floor(averageRating) ? '#F59E0B' : '#D1D5DB'}
              />
            ))}
          </View>
        </View>
        <Text style={styles.totalReviews}>Based on {totalReviews} reviews</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {reviews.map(review => (
          <TouchableOpacity
            key={review.id}
            style={styles.reviewCard}
            onPress={() =>
              navigation.navigate('ProductDetail' as never, {id: review.id})
            }>
            <View style={styles.reviewHeader}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {review.reviewer.slice(1, 3).toUpperCase()}
                </Text>
              </View>
              <View style={styles.reviewerInfo}>
                <Text style={styles.reviewerName}>{review.reviewer}</Text>
                <View style={styles.reviewRating}>
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      size={14}
                      color={i < review.rating ? '#F59E0B' : '#D1D5DB'}
                    />
                  ))}
                  <Text style={styles.reviewDate}>• {review.date}</Text>
                </View>
              </View>
            </View>
            <Text style={styles.reviewComment}>{review.comment}</Text>
            <Text style={styles.productName}>Product: {review.product}</Text>
            <TouchableOpacity style={styles.helpfulButton}>
              <Icon name="thumbs-up" size={12} color="#6B7280" />
              <Text style={styles.helpfulText}>Helpful ({review.helpful})</Text>
            </TouchableOpacity>
          </TouchableOpacity>
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
  ratingSummary: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  averageRating: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginRight: 8,
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  totalReviews: {
    fontSize: 14,
    color: '#6B7280',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  reviewCard: {
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
  reviewHeader: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
  },
  reviewerInfo: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  reviewRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  reviewDate: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 8,
  },
  reviewComment: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 8,
    lineHeight: 20,
  },
  productName: {
    fontSize: 12,
    color: '#8B5CF6',
    marginBottom: 12,
  },
  helpfulButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  helpfulText: {
    fontSize: 12,
    color: '#6B7280',
  },
});

export default Reviews;