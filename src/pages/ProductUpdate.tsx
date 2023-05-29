import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Alert, Button} from 'react-native';
import axiosInstance from '../utils/axios';

export default function ProductCreate() {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: 'https://i.dummyjson.com/data/products/29/thumbnail.webp',
    images: [
      'https://i.dummyjson.com/data/products/29/1.jpg',
      'https://i.dummyjson.com/data/products/29/2.jpg',
      'https://i.dummyjson.com/data/products/29/3.webp',
      'https://i.dummyjson.com/data/products/29/4.webp',
      'https://i.dummyjson.com/data/products/29/thumbnail.webp',
    ],
  });

  const OnChangeText = (key: string, value: string) => {
    setProduct({...product, [key]: value});
  };

  const productCreate = () => {
    axiosInstance.post('products', product).then(response => {
      const {data, status} = response;

      if (status === 200) {
        Alert.alert('Başarılı', `Ürün Eklendi ${data.title}`);
      }
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          onChangeText={text => OnChangeText('title', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          onChangeText={text => OnChangeText('description', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          onChangeText={text => OnChangeText('price', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Discount Percentage"
          onChangeText={text => OnChangeText('discountPercentage', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Rating"
          onChangeText={text => OnChangeText('rating', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Stock"
          onChangeText={text => OnChangeText('stock', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Brand"
          onChangeText={text => OnChangeText('brand', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Category"
          defaultValue="Smartphones"
          onChangeText={text => OnChangeText('category', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Thumbnail"
          onChangeText={text => OnChangeText('thumbnail', text)}
          value={product.thumbnail}
        />
        <Button title="ürün ekle" onPress={() => productCreate()} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
    borderRadius: 10,
  },
  inputContainer: {
    gap: 15,
    borderColor: 'gray',
    width: '100%',
    borderRadius: 10,
  },
});
