import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useAppContext } from '../AppContext';

const CartScreen = ({ navigation }) => {
  const {cart, setCart} = useAppContext();
  const [cartItems, setCartItems] = useState(cart);


  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price} TL</Text>
    </View>
  );

  const Checkout = () => {
    if (cartItems.length > 0) {
      navigation.navigate('SatınAlma', { cartItems });

    } else {
      alert('Sepetiniz boş. Lütfen ürün ekleyin.');
      navigation.navigate('Home');

    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        key={(item) => item.id}
        renderItem={renderItem}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Toplam: {calculateTotalPrice()} TL</Text>
        <TouchableOpacity style={styles.checkoutButton} onPress={Checkout}>
          <Text style={styles.checkoutButtonText}>Satın Al</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#bdc3c7',
  },
  itemText: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: '#bdc3c7',
    paddingVertical: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checkoutButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  checkoutButtonText: {
    color: '#ecf0f1',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CartScreen;