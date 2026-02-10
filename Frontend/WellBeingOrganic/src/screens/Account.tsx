import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function AccountScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Banner */}
      <Image
        source={require("../../assets/banner.jpg")}
        style={styles.banner}
        resizeMode="cover"
      />

      {/* Login Card */}
      <View style={styles.card}>
        <Text style={styles.heading}>Welcome WellBeingOrganic</Text>

        <View style={styles.phoneInputContainer}>
          <Text style={styles.countryCode}>+91</Text>
          <TextInput
            placeholder="Enter your phone number"
            style={styles.input}
            keyboardType="phone-pad"
          />
        </View>

        <TouchableOpacity style={styles.signInBtn}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      {/* More */}
      <Text style={styles.moreTitle}>More</Text>

      <View style={styles.listContainer}>
        <MenuItem icon="truck" label="Delivery & Return" />
        <MenuItem icon="lock" label="Privacy Policy" />
        <MenuItem icon="shield" label="Terms of Service" />
        <MenuItem icon="file-document-outline" label="Shipping Policy" />
      </View>
    </ScrollView>
  );
}

const MenuItem: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.menuLeft}>
      <Icon name={icon} size={wp("5%")} />
      <Text style={styles.menuText}>{label}</Text>
    </View>
    <Icon name="chevron-right" size={wp("5%")} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  banner: {
    width: "100%",
    height: hp("22%"),
  },

  card: {
    backgroundColor: "#f3ede4",
    marginHorizontal: wp("4%"),
    marginTop: hp("2%"),
    padding: wp("4%"),
    borderRadius: wp("4%"),
  },

  heading: {
    fontSize: wp("5.5%"),
    fontWeight: "600",
    marginBottom: hp("1.5%"),
    textAlign: "center"
  },

  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: wp("3%"),
    paddingHorizontal: wp("3%"),
    marginBottom: hp("1.5%"),
    height: hp("6.5%"),
  },

  countryCode: {
    marginRight: wp("2%"),
    fontSize: wp("4%"),
    fontWeight: "500",
  },

  input: {
    flex: 1,
    fontSize: wp("4%"),
  },

  signInBtn: {
    backgroundColor: "#000",
    height: hp("6.5%"),
    borderRadius: wp("3%"),
    alignItems: "center",
    justifyContent: "center",
  },

  signInText: {
    color: "#fff",
    fontSize: wp("4.2%"),
    fontWeight: "600",
  },

  moreTitle: {
    fontSize: wp("5%"),
    fontWeight: "600",
    marginLeft: wp("4%"),
    marginTop: hp("2%"),
    marginBottom: hp("1%"),
  },

  listContainer: {
    backgroundColor: "#f3ede4",
    marginHorizontal: wp("4%"),
    borderRadius: wp("4%"),
    paddingVertical: hp("0.5%"),
    marginBottom: hp("3%"),
  },

  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp("4%"),
    paddingVertical: hp("2%"),
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },

  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp("3%"),
  },

  menuText: {
    fontSize: wp("4%"),
  },
});
