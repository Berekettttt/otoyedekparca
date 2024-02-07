import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


const api = 'http://10.0.2.2:8000/api/register';


  const post = async () => {
    try {
      await axios.post(api, {
        name: name,
        email: email,
        password: password,
      });
      Alert.alert("Eklendi");
    } catch (error) {
      console.error('Veri gönderme hatası:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.createHeader}>Kullanıcı Ekle</Text>
      <View style={styles.box}>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
          placeholder="Name"
        />
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholder="E-mail"
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Button title="Kaydet" onPress={post} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createHeader: {
    fontSize: 20,
    marginBottom: 10,
  },
  box: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default RegisterScreen;