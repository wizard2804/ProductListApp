import React from 'react';
import { View, Text, Image, Button, Alert, StyleSheet } from 'react-native';

export default function ProductDetailsScreen({ route }) {
  const { product } = route.params;

  const handleBuy = () => {
    Alert.alert('Purchase', `You selected to buy: ${product.name}`);
  };

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button title="Buy Now" onPress={handleBuy} color="#007bff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  image: { width: 200, height: 200, marginBottom: 20, borderRadius: 10 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 5 },
  price: { fontSize: 18, color: '#444', marginBottom: 15 },
  description: { textAlign: 'center', marginBottom: 20 },
});
