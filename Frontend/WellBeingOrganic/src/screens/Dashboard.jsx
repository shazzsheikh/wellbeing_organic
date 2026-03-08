import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {
  products as getProducts,
  collections as getCollections,
  banner as getBanner,
} from '../apis/api';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Dashboard = () => {
  const navigation = useNavigation();

  const [productList, setProductList] = useState([]);
  const [collectionList, setCollectionList] = useState([]);
  const [bannerList, setBannerList] = useState([]);

  const [productLoading, setProductLoading] = useState(true);
  const [collectionLoading, setCollectionLoading] = useState(true);
  const [bannerLoading, setBannerLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [productsRes, collectionsRes, bannerRes] = await Promise.all([
        getProducts(),
        getCollections(),
        getBanner(),
      ]);

      /* PRODUCTS */

      const productsData =
        productsRes?.data?.products?.edges?.map(item => ({
          id: item.node.id,
          title: item.node.title,
          price: item.node.priceRange.minVariantPrice.amount,
          image: item.node.images?.edges?.[0]?.node?.url,
        })) || [];

      setProductList(productsData);
      setProductLoading(false);

      /* COLLECTIONS */

      const collectionsData =
        collectionsRes?.data?.collections?.edges?.map(item => ({
          id: item.node.id,
          title: item.node.title,
          image: item.node.image?.url,
        })) || [];

      setCollectionList(collectionsData);
      setCollectionLoading(false);

      /* BANNERS */

      const banners =
        bannerRes?.data?.metaobjects?.edges?.map(item => {
          const imageField = item.node.fields.find(f => f.key === 'image');

          return {
            id: item.node.id,
            image: imageField?.reference?.image?.url,
          };
        }) || [];

      setBannerList(banners);
      setBannerLoading(false);
    } catch (err) {
      console.log('Dashboard Error:', err);
    }
  };

  /* PRODUCT CARD */

  const ProductCard = ({ item }) => {
    const rating = (Math.random() * 2 + 3).toFixed(1);
  
    return (
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.imageWrapper}
          onPress={() => navigation.navigate('ProductDetail', { product: item })}
        >
          <Image source={{ uri: item.image }} style={styles.productImage} />
        </TouchableOpacity>
  
        <View style={styles.cardContent}>
          <Text style={styles.category}>Skin Care</Text>
  
          <Text numberOfLines={2} style={styles.productTitle}>
            {item.title}
          </Text>
  
          <View style={styles.ratingRow}>
            <Icon name="star" size={14} color="#FFA41C" />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
  
          <View style={styles.priceRow}>
            <Text style={styles.price}>₹{item.price}</Text>
            <Text style={styles.oldPrice}>₹{(item.price * 1.2).toFixed(0)}</Text>
          </View>
        </View>
  
        {/* ADD TO CART Button outside TouchableOpacity so it stays at bottom */}
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    );
  };

  /* PRODUCT SKELETON */

  const ProductSkeleton = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {[1, 2, 3, 4].map(item => (
          <View
            key={item}
            style={{
              width: '48%',
              backgroundColor: '#fff',
              marginBottom: 15,
              borderRadius: 10,
              padding: 10,
            }}
          >
            {/* Image Skeleton */}
            <View
              style={{
                height: 150,
                backgroundColor: '#e0e0e0',
                borderRadius: 8,
              }}
            />

            {/* Title Skeleton */}
            <View
              style={{
                height: 15,
                backgroundColor: '#e0e0e0',
                marginTop: 10,
                borderRadius: 4,
              }}
            />

            {/* Price Skeleton */}
            <View
              style={{
                height: 15,
                width: '50%',
                backgroundColor: '#e0e0e0',
                marginTop: 6,
                borderRadius: 4,
              }}
            />
          </View>
        ))}
      </View>
    );
  };

  /* COLLECTION SKELETON */



  if (productLoading || collectionLoading || bannerLoading) {
    return (
      <ScrollView style={{ padding: 10 }}>
        <View style={{ marginVertical: 20 }}>
          <View
            style={{
              width: '100%',
              height: hp('20%'),
              backgroundColor: '#e0e0e0',
              borderRadius: 10,
            }}
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3, 4, 5].map(i => (
            <View key={i} style={styles.collectionItem}>
              <View style={styles.collectionLoader} />
              <View style={styles.loaderText} />
            </View>
          ))}
        </ScrollView>

        <ProductSkeleton />
      </ScrollView>
    );
  }

  return (
    <FlatList
      data={productList}
      numColumns={2}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View>
          <Text style={styles.title}>India's Most Trusted</Text>
          <Text style={styles.subtitle}>Health Supplement Brand</Text>

          {/* BANNERS */}

          <FlatList
            data={bannerList}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Image source={{ uri: item.image }} style={styles.bannerImage} />
            )}
          />

          {/* COLLECTIONS */}

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Collections</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {collectionList.map(item => (
              <View key={item.id} style={styles.collectionItem}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.collectionImage}
                />
                <Text style={styles.collectionText}>{item.title}</Text>
              </View>
            ))}
          </ScrollView>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Best Seller</Text>
          </View>
        </View>
      }
      renderItem={({ item }) =>
        productLoading ? <ProductLoader /> : <ProductCard item={item} />
      }
      contentContainerStyle={{ paddingBottom: 40 }}
    />
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  title: {
    fontSize: wp('6%'),
    fontWeight: '700',
    textAlign: 'center',
    marginTop: hp('2%'),
  },

  subtitle: {
    fontSize: wp('4%'),
    textAlign: 'center',
    color: '#555',
    marginBottom: hp('2%'),
  },

  bannerImage: {
    width: wp('100%'),
    height: hp('20%'),
    borderRadius: 10,
  },

  sectionHeader: {
    marginVertical: hp('2%'),
    paddingHorizontal: wp('4%'),
  },

  sectionTitle: {
    fontSize: wp('4.5%'),
    fontWeight: '700',
  },

  collectionItem: {
    alignItems: 'center',
    marginLeft: wp('4%'),
  },

  collectionImage: {
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
  },

  collectionText: {
    fontSize: wp('3%'),
    marginTop: 5,
    textAlign: 'center',
  },

  collectionLoader: {
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('9%'),
    backgroundColor: '#E5E5E5',
  },

  loaderText: {
    width: wp('14%'),
    height: 8,
    backgroundColor: '#E5E5E5',
    marginTop: 6,
    borderRadius: 4,
  },

  card: {
    width: wp('44%'),
    backgroundColor: '#fff',
    borderRadius: 14,
    margin: wp('2%'),
    elevation: 4,
    overflow: 'hidden',
    justifyContent: 'space-between', // ensures button stays at bottom
  },
  
  cardContent: {
    padding: wp('3%'),
    flexGrow: 1, // lets content grow but not push button
  },
  
  cartButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    alignItems: 'center',
  },

  imageWrapper: {
    height: hp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  category: {
    fontSize: wp('2.8%'),
    color: '#E48B2A',
    marginBottom: 4,
  },

  productTitle: {
    fontSize: wp('3.6%'),
    fontWeight: '600',
    marginBottom: 6,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },

  ratingText: {
    marginLeft: 4,
    fontSize: wp('3%'),
  },

  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  price: {
    fontSize: wp('4%'),
    fontWeight: '700',
    marginRight: 6,
  },

  oldPrice: {
    fontSize: wp('3%'),
    color: '#999',
    textDecorationLine: 'line-through',
  },


  cartText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: wp('3.2%'),
  },

  loaderImage: {
    height: hp('20%'),
    backgroundColor: '#E5E5E5',
  },

  loaderLine: {
    height: 10,
    backgroundColor: '#E5E5E5',
    marginVertical: 6,
    borderRadius: 4,
  },

  loaderLineSmall: {
    height: 8,
    width: '60%',
    backgroundColor: '#E5E5E5',
    borderRadius: 4,
  },
});
