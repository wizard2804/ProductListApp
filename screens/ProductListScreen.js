import React, { useContext, useState } from 'react';
import { View, FlatList, TextInput, StyleSheet } from 'react-native';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

export default function ProductListScreen({ navigation }) {
  const { products } = useContext(ProductContext);
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search products..."
        style={styles.searchInput}
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f5f5f5' },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1
  },
});
