import React from 'react';
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

const Dashboard = () => {
  return (
    <>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>    
      {/* Title */}
      <Text style={styles.title}>India's Most Trusted</Text>
      <Text style={styles.subtitle}>Health Supplement Brand</Text>

      {/* Badges */}
      <View style={styles.badgeRow}>
        <Badge title="4L+" subtitle="Happy Customers" />
        <Badge title="US FDA" subtitle="Approved" />
        <Badge title="100+" subtitle="Clinical Studies" />
        <Badge title="FSSAI" subtitle="Certified" />
      </View>

      {/* Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Best Seller</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>
 
      {/* Products */}
      <View style={styles.productRow}>
        <ProductCard
          title="Plant Protein + Veg Collagen"
          price="₹2494"
          oldPrice="₹2895"
          rating="4.5"
          image={{ uri: 'https://via.placeholder.com/300' }}
        />
        <ProductCard
          title="Skin: AcneClear - Powder"
          price="₹1339"
          oldPrice="₹1700"
          rating="4.5"
          image={{ uri: 'https://via.placeholder.com/300' }}
        />
        <ProductCard
          title="Plant Protein + Veg Collagen"
          price="₹2494"
          oldPrice="₹2895"
          rating="4.5"
          image={{ uri: 'https://via.placeholder.com/300' }}
        />
        <ProductCard
          title="Skin: AcneClear - Powder"
          price="₹1339"
          oldPrice="₹1700"
          rating="4.5"
          image={{ uri: 'https://via.placeholder.com/300' }}
        />
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
        <Text style={styles.star}>⭐</Text>
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

  viewAll:{
    fontSize: wp('3.5%'),
    textDecorationLine: 'underline',
    cursor: 'pointer'
  },

  productRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: wp('4%'),
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
});
