import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const OrderHistoryScreen = ({ route }) => {
  const { orders } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Siparişlerim</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.orderContainer}>
            <Text style={styles.orderText}>Sipariş ID: {item.id}</Text>
            <Text style={styles.orderText}>Ödeme Yöntemi: {item.paymentMethod}</Text>
            <Text style={styles.orderText}>Toplam Tutar: {calculateTotalPrice(item.items)} TL</Text>
            <Text style={styles.orderText}>Ürünler:</Text>
            <FlatList
            data={item.items}
            keyExtractor={(products) => products.id.toString()}
            renderItem={({ item }) => (
            <View style={styles.productContainer}>
            <Text style={styles.productText}>{item.name} - {item.price} TL</Text>
            </View>
             )}
            />
          </View>
        )}
      />
    </View>
  );
};

const calculateTotalPrice = (items) => {
  return items.reduce((total, product) => total + product.price, 0);
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
  orderContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#bdc3c7',
    paddingVertical: 10,
    marginBottom: 10,
  },
  orderText: {
    fontSize: 16,
  },
  productContainer: {
    marginLeft: 20,
  },
  productText: {
    fontSize: 14,
  },
});

export default OrderHistoryScreen;