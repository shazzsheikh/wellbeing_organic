import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductDetail = ({ route }) => {
  const navigation = useNavigation();

  const { product } = route.params;

  const rating = (Math.random() * 2 + 3).toFixed(1);
  const price = `₹${product.price}`;
  const oldPrice = `₹${(product.price * 1.2).toFixed(0)}`;

  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={26} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Product Details</Text>

        <View style={{ width: 26 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image */}

        <Image source={{ uri: product.image }} style={styles.image} />

        {/* Product Info */}

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{product.title}</Text>

          {/* Rating */}

          <View style={styles.ratingRow}>
            <Icon name="star" size={16} style={styles.star} />
            <Text style={styles.ratingText}>{rating}</Text>
            <Text style={styles.reviewText}>(120 Reviews)</Text>
          </View>

          {/* Price */}

          <View style={styles.priceRow}>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.oldPrice}>{oldPrice}</Text>
            <Text style={styles.discount}>20% OFF</Text>
          </View>

          {/* Description */}

          <Text style={styles.sectionTitle}>Product Description</Text>

          <Text style={styles.description}>
            This premium organic supplement helps improve your overall health
            and wellness. Made with natural ingredients and tested for quality.
            Suitable for daily consumption and recommended for boosting immunity
            and skin health.
          </Text>

          {/* Features */}

          <Text style={styles.sectionTitle}>Key Benefits</Text>

          <View style={styles.featureRow}>
            <Icon name="check-circle" size={18} color="#4CAF50" />
            <Text style={styles.featureText}>100% Organic Ingredients</Text>
          </View>

          <View style={styles.featureRow}>
            <Icon name="check-circle" size={18} color="#4CAF50" />
            <Text style={styles.featureText}>Improves Immunity</Text>
          </View>

          <View style={styles.featureRow}>
            <Icon name="check-circle" size={18} color="#4CAF50" />
            <Text style={styles.featureText}>No Artificial Chemicals</Text>
          </View>
        </View>
      </ScrollView>

      {/* Add to Cart */}

      <View style={styles.cartBar}>
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('2%'),
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },

  image: {
    width: '100%',
    height: hp('50%'),
    resizeMode: 'cover',
  },

  infoContainer: {
    padding: wp('5%'),
  },

  title: {
    fontSize: wp('5%'),
    fontWeight: '700',
    marginBottom: hp('1%'),
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1.5%'),
  },

  star: {
    color: '#F5A623',
  },

  ratingText: {
    marginLeft: 5,
    fontWeight: '600',
  },

  reviewText: {
    marginLeft: 5,
    color: '#777',
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },

  price: {
    fontSize: wp('5%'),
    fontWeight: '700',
    marginRight: 10,
  },

  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#999',
    marginRight: 10,
  },

  discount: {
    color: '#4CAF50',
    fontWeight: '600',
  },

  sectionTitle: {
    fontSize: wp('4%'),
    fontWeight: '700',
    marginBottom: hp('1%'),
  },

  description: {
    fontSize: wp('3.6%'),
    color: '#555',
    lineHeight: 22,
    marginBottom: hp('2%'),
  },

  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },

  featureText: {
    marginLeft: 8,
    fontSize: wp('3.6%'),
  },

  cartBar: {
    borderTopWidth: 1,
    borderColor: '#eee',
    padding: wp('4%'),
  },

  cartButton: {
    backgroundColor: '#000',
    paddingVertical: hp('1.8%'),
    borderRadius: 8,
    alignItems: 'center',
  },

  cartText: {
    color: '#fff',
    fontSize: wp('4%'),
    fontWeight: '600',
  },
});
