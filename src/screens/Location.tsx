import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const Location = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const suggestedLocations = [
    {id: 1, name: 'Mumbai, India', distance: 'Current Location'},
    {id: 2, name: 'Delhi, India', distance: '1,415 km away'},
    {id: 3, name: 'Bangalore, India', distance: '984 km away'},
    {id: 4, name: 'Pune, India', distance: '149 km away'},
    {id: 5, name: 'Ahmedabad, India', distance: '492 km away'},
  ];

  const recentLocations = [
    {id: 1, name: 'Andheri West, Mumbai'},
    {id: 2, name: 'Bandra, Mumbai'},
    {id: 3, name: 'Powai, Mumbai'},
  ];

  const handleLocationSelect = (locationName: string) => {
    navigation.goBack();
  };

  const getCurrentLocation = () => {
    Alert.alert('Location Access', 'Current location feature would be implemented here');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Choose Location</Text>
      </View>

      <View style={styles.content}>
        {/* Search */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={16} color="#6B7280" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for a location..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Current Location */}
        <TouchableOpacity style={styles.currentLocationButton} onPress={getCurrentLocation}>
          <Icon name="target" size={20} color="#8B5CF6" />
          <Text style={styles.currentLocationText}>Use current location</Text>
        </TouchableOpacity>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Recent Locations */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Locations</Text>
            {recentLocations.map(location => (
              <TouchableOpacity
                key={location.id}
                style={styles.locationItem}
                onPress={() => handleLocationSelect(location.name)}>
                <Icon name="map-pin" size={16} color="#6B7280" />
                <Text style={styles.locationName}>{location.name}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Suggested Locations */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Suggested Locations</Text>
            {suggestedLocations.map(location => (
              <TouchableOpacity
                key={location.id}
                style={styles.locationItem}
                onPress={() => handleLocationSelect(location.name)}>
                <Icon name="map-pin" size={16} color="#6B7280" />
                <View style={styles.locationInfo}>
                  <Text style={styles.locationName}>{location.name}</Text>
                  <Text style={styles.locationDistance}>{location.distance}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#111827',
  },
  currentLocationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  currentLocationText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#8B5CF6',
    marginLeft: 12,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  locationInfo: {
    flex: 1,
    marginLeft: 12,
  },
  locationName: {
    fontSize: 16,
    color: '#111827',
    marginLeft: 12,
  },
  locationDistance: {
    fontSize: 14,
    color: '#6B7280',
  },
});

export default Location;