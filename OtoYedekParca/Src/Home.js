import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import CartScreen from './Cart';
import { useAppContext } from '../AppContext';

const HomeScreen = ({ route, navigation }) => {
  const { cart, setCart } = useAppContext();
  const updateCart = (selectedProduct) => {
    const updatedData = [...cart];
    updatedData.push(selectedProduct);
    setCart(updatedData);
  };

  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  console.log(route.params);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:8000/api/products/all');
      setData(response.data);
    } catch (error) {
      console.error('Veri getirme hatası:', error);
    }
  };

  const addToCart = (productId) => {
    const selectedProduct = data.find((product) => product.id === productId);
    updateCart(selectedProduct);
   Alert.alert(`Başarılı`,`Ürün sepete eklendi`);
  };

  const renderItem = ({ item }) => {

    if (
      searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return (
        <View style={styles.itemContainer}>
          <TouchableOpacity onPress={() => addToCart(item.id)}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.DesText}>{item.description}</Text>
            <Text style={styles.DesText}>{item.price}TL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => addToCart(item.id)}>
            <Text style={styles.addToCartButtonText}>Sepete Ekle</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null; 
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity
          style={styles.headerButton}
          onPress={() => {
            navigation.navigate('AddProduct');
          }}>
          <Text style={styles.headerButtonText}>Ürün Ekle</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => {
            navigation.navigate('Profile',route.params);
          }}>
          <Text style={styles.headerButtonText}>Profil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <Text style={styles.headerButtonText}>Sepet</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Ürün Ara"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#3498db',
  },
  headerButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#2c3e50',
  },
  headerButtonText: {
    color: '#ecf0f1',
    fontWeight: 'bold',
  },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#bdc3c7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 15,
  },
  DesText: {
    fontSize: 11,
  },
  addToCartButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#27ae60',
  },
  addToCartButtonText: {
    color: '#ecf0f1',
    fontWeight: 'bold',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 5,
  },
});

export default HomeScreen;