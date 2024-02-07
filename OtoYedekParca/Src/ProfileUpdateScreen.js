import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const ProfileUpdateScreen = ({ navigation, route }) => {
    const [id, setId] = useState('');
  const [name, setName] = useState(route.params.name || '');
  const [email, setEmail] = useState(route.params.email || '');
  const [password, setPassword] = useState('');
console.log(route.params['id']);
  useEffect(() => {
  
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`http://10.0.2.2:8000/api/users/${route.params['id']}`);
      const userProfile = response.data;
      console.log(response.data);

      setName(userProfile.name);
      setEmail(userProfile.email);
    } catch (error) {
      console.error('Profil bilgileri getirme hatası:', error);
    }
  };

  const updateProfile = async () => {
    try {
      const response = await axios.put(`http://10.0.2.2:8000/api/users/${route.params['id']}`, {
        name: name,
        email: email,
        password: password,
      });

      Alert.alert('Profil güncellendi!');
    } catch (error) {
      console.error('Profil güncelleme hatası:', error);
      Alert.alert('Profil güncellenirken bir hata oluştu.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Güncelleme</Text>
      <TextInput
        style={styles.input}
        placeholder="İsim"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Yeni Şifre"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Güncelle" onPress={updateProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default ProfileUpdateScreen;