import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform
} from 'react-native';

const Dashboard = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>WELLBEINGORGANIC</Text>
        <View style={styles.headerIcons}>
          <Text style={styles.icon}>🔍</Text>
          <Text style={styles.icon}>🤍</Text>
          <Text style={styles.icon}>👜</Text>
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>India's Most Trusted</Text>
      <Text style={styles.subtitle}>Health Supplement Brand</Text>

      {/* Trust Badges */}
      <View style={styles.badgeRow}>
        <Badge title="4L+" subtitle="Happy Customers" />
        <Badge title="US FDA" subtitle="Approved" />
        <Badge title="100+" subtitle="Clinical Studies" />
        <Badge title="FSSAI" subtitle="Certified" />
      </View>

      {/* Best Seller */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Best Seller</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      {/* Product Cards */}
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
      </View>
    </ScrollView>
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
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 30 : 0,
  },
  logo: {
    fontSize: 22,
    fontWeight: '700',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 14,
  },
  icon: {
    fontSize: 18,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
  },

  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  badge: {
    alignItems: 'center',
    width: '23%',
  },
  badgeCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 6,
  },
  badgeTitle: {
    fontWeight: '600',
    fontSize: 13,
  },
  badgeSubtitle: {
    fontSize: 11,
    color: '#666',
    textAlign: 'center',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  viewAll: {
    fontSize: 14,
    textDecorationLine: 'underline',
    cursor: 'pointer'
  },

  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    backgroundColor: '#FFF7EE',
    borderRadius: 12,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 10,
  },
  category: {
    fontSize: 12,
    color: '#E48B2A',
    marginBottom: 4,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 6,
  },
  star: {
    color: '#F5A623',
  },
  priceRow: {
    flexDirection: 'row',
    gap: 8,
  },
  price: {
    fontWeight: '700',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});
