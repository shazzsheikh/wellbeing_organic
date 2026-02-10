import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as apis from '../apis/api';

const Dashboard = () => {
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const response = await apis.products();
        setProducts(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchproducts();
  }, []);

  const renderProducts = () => {
    return products.map((product: any, index: number) => (
      <ProductCard
        key={index}
        title={product.title}
        price={`₹${product.price}`}
        oldPrice={`₹${(product.price * 1.2).toFixed(0)}`}
        rating={(Math.random() * 2 + 3).toFixed(1)} 
        image={{ uri: product.image }}
      />
    ));
  };
  if (loading) {
    return (
      <>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>India's Most Trusted</Text>
          <Text style={styles.subtitle}>Health Supplement Brand</Text>
          <View style={styles.productRow}>
            {[1, 2, 3, 4].map((_, index) => (
              <View key={index} style={styles.card}>
                <View style={styles.loaderImage} />
                <View style={styles.cardContent}>
                  <View style={styles.loaderLineSmall} />
                  <View style={styles.loaderLine} />
                  <View style={styles.loaderLineSmall} />
                  <View style={styles.loaderPriceRow}>
                    <View style={styles.loaderPrice} />
                    <View style={styles.loaderOldPrice} />
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </>
    );
  }

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Title */}
        <Text style={styles.title}>India's Most Trusted</Text>
        <Text style={styles.subtitle}>Health Supplement Brand</Text>

        <View style={styles.badgeRow}>
          <Badge title="4L+" subtitle="Happy Customers" />
          <Badge title="US FDA" subtitle="Approved" />
          <Badge title="100+" subtitle="Clinical Studies" />
          <Badge title="FSSAI" subtitle="Certified" />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Seller</Text>
          <Text style={styles.viewAll}>View All</Text>
        </View>

        <View style={styles.productRow}>
          {renderProducts()}
        </View>
      </ScrollView>
    </>
  );
};

export default Dashboard;

/* ---------------- Components ---------------- */

const Badge = ({ title, subtitle }: any) => (
  <View style={styles.badge}>
    <View style={styles.badgeCircle} />
    <Text style={styles.badgeTitle}>{title}</Text>
    <Text style={styles.badgeSubtitle}>{subtitle}</Text>
  </View>
);

const ProductCard = ({ title, price, oldPrice, rating, image }: any) => (
  <TouchableOpacity style={styles.card}>
    <Image source={image} style={styles.productImage} />
    <View style={styles.cardContent}>
      <Text style={styles.category}>✨ Skin</Text>
      <Text style={styles.productTitle}>{title}</Text>

      <View style={styles.ratingRow}>
        <Icon name={'star'} style={styles.star}></Icon>
        <Text>{rating}</Text>
      </View>

      <View style={styles.priceRow}>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.oldPrice}>{oldPrice}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

/* ---------------- Styles ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp('4%'),
  },
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
    marginBottom: hp('2.5%'),
  },

  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('3%'),
  },

  badge: {
    alignItems: 'center',
    width: wp('22%'),
  },

  badgeCircle: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('6%'),
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: hp('0.8%'),
  },

  badgeTitle: {
    fontWeight: '600',
    fontSize: wp('3.2%'),
  },

  badgeSubtitle: {
    fontSize: wp('2.7%'),
    color: '#666',
    textAlign: 'center',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('1.5%'),
  },

  sectionTitle: {
    fontSize: wp('4.5%'),
    fontWeight: '700',
  },

  viewAll: {
    fontSize: wp('3.5%'),
    textDecorationLine: 'underline',
    cursor: 'pointer',
  },

  productRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: wp('3%'),
  },

  card: {
    width: wp('44%'),
    backgroundColor: '#FFF7EE',
    borderRadius: wp('3%'),
    overflow: 'hidden',
  },

  productImage: {
    width: '100%',
    height: hp('20%'),
  },

  cardContent: {
    padding: wp('2.5%'),
  },

  category: {
    fontSize: wp('2.8%'),
    color: '#E48B2A',
    marginBottom: hp('0.5%'),
  },

  productTitle: {
    fontSize: wp('3.5%'),
    fontWeight: '600',
    marginBottom: hp('0.6%'),
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('1%'),
    marginBottom: hp('0.6%'),
  },

  star: {
    color: '#F5A623',
  },

  priceRow: {
    flexDirection: 'row',
    gap: wp('2%'),
  },

  price: {
    fontWeight: '700',
    fontSize: wp('3.6%'),
  },

  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#999',
    fontSize: wp('3%'),
  },
  loaderImage: {
    width: '100%',
    height: hp('20%'),
    backgroundColor: '#E5E5E5',
    },
    
    loaderLine: {
    height: hp('1.8%'),
    backgroundColor: '#E5E5E5',
    marginBottom: hp('1%'),
    borderRadius: 4,
    },
    
    loaderLineSmall: {
    height: hp('1.2%'),
    width: '40%',
    backgroundColor: '#E5E5E5',
    marginBottom: hp('1%'),
    borderRadius: 4,
    },
    
    loaderPriceRow: {
    flexDirection: 'row',
    gap: wp('2%'),
    },
    
    loaderPrice: {
    width: '30%',
    height: hp('1.8%'),
    backgroundColor: '#E5E5E5',
    borderRadius: 4,
    },
    
    loaderOldPrice: {
    width: '25%',
    height: hp('1.6%'),
    backgroundColor: '#E5E5E5',
    borderRadius: 4,
    },
    
});
