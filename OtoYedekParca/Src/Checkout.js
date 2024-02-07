import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Input } from 'react-native-elements';
import OrderHistoryScreen from './OrderHistoryScreen';

const CheckoutScreen = ({ route, navigation }) => {
  const { cartItems } = route.params;
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const Purchase = () => {
    if (selectedPaymentMethod) {
      if (selectedPaymentMethod === 'Kredi Kartı' && (!cardNumber || !expiryDate || !cvv)) {
        alert('Lütfen kredi kartı bilgilerini eksiksiz girin.');
      } else {
        const order = {
          id: new Date().getTime(),
          items: cartItems,
          paymentMethod: selectedPaymentMethod,
        };
  
        navigation.navigate('OrderHistory', { orders: [order] });
      }
    } else {
      alert('Lütfen bir ödeme yöntemi seçin.');
    }
  };
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sepetiniz</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.price} TL</Text>
          </View>
        )}
      />
      <Text style={styles.totalText}>Toplam: {calculateTotalPrice()} TL</Text>

      <Text style={styles.paymentText}>Ödeme Yöntemi:</Text>
      <TouchableOpacity
        style={[styles.paymentOption, selectedPaymentMethod === 'Kredi Kartı' && styles.selectedOption]}
        onPress={() => setSelectedPaymentMethod('Kredi Kartı')}>
        <Text style={styles.paymentOptionText}>Kredi Kartı</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.paymentOption, selectedPaymentMethod === 'Kapıda Ödeme' && styles.selectedOption]}
        onPress={() => setSelectedPaymentMethod('Kapıda Ödeme')}>
        <Text style={styles.paymentOptionText}>Kapıda Ödeme</Text>
      </TouchableOpacity>

      {selectedPaymentMethod === 'Kredi Kartı' && (
        <View>
          <Input
            placeholder="Kart Numarası"
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={(text) => setCardNumber(text)}
          />
          <Input
            placeholder="Son Kullanma Tarihi (MM/YYYY)"
            keyboardType="numeric"
            value={expiryDate}
            onChangeText={(text) => setExpiryDate(text)}
          />
          <Input
            placeholder="CVV"
            keyboardType="numeric"
            value={cvv}
            onChangeText={(text) => setCvv(text)}
          />
        </View>
      )}

      <Button title="Satın Al" onPress={Purchase} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#bdc3c7',
    paddingVertical: 10,
  },
  itemText: {
    fontSize: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  paymentText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  paymentOption: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  paymentOptionText: {
    color: '#ecf0f1',
    fontWeight: 'bold',
  },
  selectedOption: {
    backgroundColor: '#2c3e50',
  },
});

export default CheckoutScreen;