import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const ReelComments = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params as {id: string};
  const [newComment, setNewComment] = useState('');
  const [likedComments, setLikedComments] = useState<number[]>([]);

  const comments = [
    {
      id: 1,
      user: '@fashionista_23',
      comment: 'This is absolutely gorgeous! 😍',
      likes: 45,
      time: '2h',
      isLiked: false,
    },
    {
      id: 2,
      user: '@luxury_collector',
      comment: 'Is this still available? Been looking for this exact model!',
      likes: 12,
      time: '1h',
      isLiked: true,
    },
  ];

  const handleSendComment = () => {
    if (newComment.trim()) {
      setNewComment('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Comments</Text>
      </View>

      <ScrollView style={styles.commentsList} showsVerticalScrollIndicator={false}>
        {comments.map(comment => (
          <View key={comment.id} style={styles.commentItem}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {comment.user.slice(1, 3).toUpperCase()}
              </Text>
            </View>

            <View style={styles.commentContent}>
              <View style={styles.commentBubble}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('SellerProfile' as never, {
                      username: comment.user.slice(1),
                    })
                  }>
                  <Text style={styles.username}>{comment.user}</Text>
                </TouchableOpacity>
                <Text style={styles.commentText}>{comment.comment}</Text>
              </View>

              <View style={styles.commentActions}>
                <Text style={styles.commentTime}>{comment.time}</Text>
                <TouchableOpacity
                  style={styles.likeButton}
                  onPress={() => {
                    setLikedComments(prev =>
                      prev.includes(comment.id)
                        ? prev.filter(id => id !== comment.id)
                        : [...prev, comment.id],
                    );
                  }}>
                  <Icon
                    name="heart"
                    size={12}
                    color={
                      comment.isLiked || likedComments.includes(comment.id)
                        ? '#EF4444'
                        : '#6B7280'
                    }
                  />
                  <Text style={styles.likeCount}>
                    {comment.likes + (likedComments.includes(comment.id) ? 1 : 0)}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.replyButton}>Reply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.commentInput}>
        <View style={styles.inputAvatar}>
          <Text style={styles.inputAvatarText}>SU</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Add a comment..."
            value={newComment}
            onChangeText={setNewComment}
            multiline
          />
          <TouchableOpacity
            style={[
              styles.sendButton,
              !newComment.trim() && styles.sendButtonDisabled,
            ]}
            onPress={handleSendComment}
            disabled={!newComment.trim()}>
            <Icon name="send" size={16} color="#ffffff" />
          </TouchableOpacity>
        </View>
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
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginLeft: 12,
  },
  commentsList: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  commentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
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
  commentContent: {
    flex: 1,
  },
  commentBubble: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
  },
  username: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8B5CF6',
    marginBottom: 4,
  },
  commentText: {
    fontSize: 14,
    color: '#111827',
  },
  commentActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  commentTime: {
    fontSize: 12,
    color: '#6B7280',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  likeCount: {
    fontSize: 12,
    color: '#6B7280',
  },
  replyButton: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  commentInput: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  inputAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#8B5CF6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  inputAvatarText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 8,
    maxHeight: 100,
    fontSize: 16,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8B5CF6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#D1D5DB',
  },
});

export default ReelComments;