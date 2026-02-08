import { View, Text, StyleSheet, ScrollView, Platform } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
const Header = () => {
    return (
        
        <View style={styles.header}>
                <Text style={styles.logo}>WELLBEINGORGANIC</Text>
                <View style={styles.headerIcons}>
                  <Icon name={'magnify'} size={22}></Icon>
                  
                  <Icon name={'heart'} size={22}></Icon>
                  <Icon name={'cart'} size={22}></Icon>
                </View>
              </View>
    )
}


export default Header;
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? hp('4%') : hp('4%'), 
    paddingHorizontal: wp('4%'),
    height: hp('7%'),
  },

  logo: {
    fontSize: wp('5%'),
    fontWeight: '700',
  },

  headerIcons: {
    flexDirection: 'row',
    gap: wp('3%'),
  },

  icon: {
    fontSize: wp('4.5%'),
  },
})
