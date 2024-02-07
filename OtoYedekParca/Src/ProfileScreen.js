import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileScreen = ({ route, navigation }) => {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (route.params && route.params.userName) {
        setUserId(route.params);
    }
  }, [route.params]);
      const goToProfileUpdate = () => {
    navigation.navigate('ProfileUpdate', {
      id: route.params['id'],
    });
  };

  console.log("x",route.params['id']);

  const goToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Sayfası</Text>
      <Text style={styles.text}>Hoşgeldiniz </Text>
      <Button title="Profilini Güncelle" onPress={goToProfileUpdate} />
      
      <TouchableOpacity style={styles.homeButton} onPress={goToHome}>
        <Text style={styles.homeButtonText}>Ürün Sayfasına Git</Text>
      </TouchableOpacity>
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
  text: {
    fontSize: 18,
    marginBottom: 16,
  },
  homeButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#3498db',
  },
  homeButtonText: {
    color: '#ecf0f1',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;