import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Alert } from 'react-native';
import axios from 'axios';

const AddProduct = ( ) => {
  const [name, setname] = useState('');
  const [description, setdescription] = useState('');
  const [price, setprice] = useState('');

  const api = 'http://10.0.2.2:8000/api/products';
  
  const post = async () => {
    try {
      await axios.post(api, {
      name : name,
      description : description,
      price : price,
    });
    Alert.alert("Eklendi");
  } catch (error) {
    console.error('Veri gönderme hatası:', error);
  }
};
  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ürün Adı:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setname(text)}
        placeholder="Ürün Adı"
      />

      <Text style={styles.label}>Ürün Tanımı:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={(text) => setdescription(text)}
        placeholder="Ürün Tanımı"
      />

      <Text style={styles.label}>Ürün Fiyatı:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={(text) => setprice(text)}
        placeholder="Ürün Fiyatı"
      />

      <Button title="Ürün Ekle" onPress={post} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddProduct;