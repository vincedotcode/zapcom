import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import useGetProducts from '../hooks/useGetProducts';

export default function HomeScreen() {
  const navigation = useNavigation();
  const { products, loading, error } = useGetProducts();

  const categories = ['Category 1', 'Category 2', 'Category 3'];

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <View className="flex-row justify-center items-center py-24">
      <Text>Error: {error.message}</Text>
    </View>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 24, fontFamily: "Poppins_700Bold" }}>Marketplace</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Image source={{ uri: "https://placehold.co/600x400" }} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
          {categories.map((category) => (
            <View key={category} style={{ marginHorizontal: 10 }}>
              <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 16 }}>{category}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.productsContainer}>
          {products.map((product) => (
            <View key={product._id} style={styles.productCard}>
              <Image source={{ uri: product.images[0]?.url }} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>${product.price}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  productCard: {
    width: '30%',
    margin: '1.666%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productName: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    marginTop: 10,
  },
  productPrice: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14,
    color: themeColors.bg,
  },
});
