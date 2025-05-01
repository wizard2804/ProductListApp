import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={product.image} style={styles.thumbnail} />
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 3, elevation: 3,
  },
  thumbnail: { width: 60, height: 60, borderRadius: 8 },
  info: { marginLeft: 10, justifyContent: 'center' },
  name: { fontSize: 16, fontWeight: 'bold' },
  price: { color: '#888' },
});
