import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

interface Home {
  id: number;
  content: string;
  profilePic: string;
  username: string;
  subject: string;
  photos: string[]; // Array of image URIs
  institutionName: string;
  donationQuantity: string;
}

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState<Home[]>([
    {
      id: 1,
      subject: 'Donation for Winter Relief',
      content: 'Hotel Sunshine is donating 200 blankets.',
      profilePic: 'https://via.placeholder.com/150',
      username: 'Hotel Sunshine',
      photos: [],
      institutionName: 'Hotel Sunshine',
      donationQuantity: '200 blankets',
    },
    {
      id: 2,
      subject: 'Food Donation for the Needy',
      content: 'Green Earth Foundation is donating 300 food packets.',
      profilePic: 'https://via.placeholder.com/150',
      username: 'Green Earth Foundation',
      photos: [],
      institutionName: 'Green Earth Foundation',
      donationQuantity: '300 food packets',
    },
  ]);

  const { control, handleSubmit, reset } = useForm();
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const onSubmit = (data: any) => {
    const newPost: Home = {
      id: posts.length + 1,
      content: data.content,
      profilePic: 'https://via.placeholder.com/150',
      username: 'New User', 
      subject: data.subject,
      photos: selectedImages,
      institutionName: data.institutionName,
      donationQuantity: data.donationQuantity,
    };
    setPosts([newPost, ...posts]);
    reset();
    setSelectedImages([]);
  };

  const handleRequestAccept = (postId: number) => {
    // Navigate to Social Worker page
    navigation.navigate('SocialWorker', { postId });
  };

  const handleImagePick = () => {
    launchImageLibrary({ mediaType: 'photo', selectionLimit: 5 }, response => {
      if (!response.didCancel) {
        setSelectedImages(response.assets.map((asset: any) => asset.uri));
      }
    });
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#f7f7f7' }}>
      {/* Form to create new posts */}
      <View style={{ marginBottom: 20 }}>
        <Controller
          control={control}
          name="subject"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Subject"
              value={value}
              onChangeText={onChange}
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                padding: 10,
                marginBottom: 10,
                borderRadius: 8,
                backgroundColor: 'white',
              }}
            />
          )}
        />
        <Controller
          control={control}
          name="content"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Content"
              value={value}
              onChangeText={onChange}
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                padding: 10,
                marginBottom: 10,
                borderRadius: 8,
                backgroundColor: 'white',
                height: 100,
                textAlignVertical: 'top',
              }}
            />
          )}
        />
        <Controller
          control={control}
          name="institutionName"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Institution/Hotel Name"
              value={value}
              onChangeText={onChange}
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                padding: 10,
                marginBottom: 10,
                borderRadius: 8,
                backgroundColor: 'white',
              }}
            />
          )}
        />
        <Controller
          control={control}
          name="donationQuantity"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Donation Quantity"
              value={value}
              onChangeText={onChange}
              style={{
                borderWidth: 1,
                borderColor: '#ccc',
                padding: 10,
                marginBottom: 10,
                borderRadius: 8,
                backgroundColor: 'white',
              }}
            />
          )}
        />
        <TouchableOpacity
          onPress={handleImagePick}
          style={{
            backgroundColor: '#007BFF',
            padding: 12,
            borderRadius: 8,
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Text style={{ color: 'white' }}>Pick Images</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={{
            backgroundColor: '#28a745',
            padding: 12,
            borderRadius: 8,
            alignItems: 'center',
          }}>
          <Text style={{ color: 'white' }}>Submit Post</Text>
        </TouchableOpacity>
      </View>

      {/* List of Community Posts */}
      <FlatList
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: 'white',
              padding: 16,
              borderRadius: 8,
              marginBottom: 16,
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowRadius: 4,
            }}>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <Image
                source={{ uri: item.profilePic }}
                style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
              />
              <Text style={{ fontWeight: 'bold' }}>{item.username}</Text>
            </View>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>
              {item.subject}
            </Text>
            <Text>{item.content}</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>
              Donation Quantity: {item.donationQuantity}
            </Text>
            <Text style={{ fontSize: 14, color: '#888' }}>{item.institutionName}</Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              {item.photos.map((uri, index) => (
                <Image key={index} source={{ uri }} style={{ width: 60, height: 60, marginRight: 5 }} />
              ))}
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => handleRequestAccept(item.id)}
                style={{
                  backgroundColor: '#28a745',
                  padding: 10,
                  borderRadius: 8,
                  marginTop: 10,
                  alignItems: 'center',
                }}>
                <Text style={{ color: 'white' }}>Request Accepted</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
