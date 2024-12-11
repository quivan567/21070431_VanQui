import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Screen01 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.title}>
      <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/8daa7432b13b7ec1facbd8739402a336'  }} style={styles.image1}/>
        <Text style={styles.title1}>Discover Your Dream House</Text>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => { navigation.navigate("Screen02") }} style={{ height: 50, width: 200, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
          <Text style={{ color: 'white', fontSize: 15 }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 50, width: 200, backgroundColor: 'White', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
          <Text style={{ color: 'black', fontSize: 15 }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View>
           <TouchableOpacity style={{ height: 50, width: 400, backgroundColor: 'White', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
          <Text style={{color: 'black', fontSize: 12}}>or login with</Text>
          </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
          <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/1728f48c0ef3059767e3eb7e2b5d00ae' }} style={styles.image} />
          <TouchableOpacity style={{ height: 50, width: 300, backgroundColor: 'White', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
          <Text style={{color: 'black', fontSize: 15, alignItems: 'center', justifyContent: 'center'}}>Continue with Google</Text>
          </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/f7de3e97570741b23630b46233716259' }} style={styles.image} />
         <TouchableOpacity style={{ height: 50, width: 300, backgroundColor: 'White', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
          <Text style={{color: 'black', fontSize: 15, alignItems: 'center', justifyContent: 'center'}}>Continue with Apple</Text>
          </TouchableOpacity>
      </View>

      <View  style={{flexDirection: 'row'}}>
        <Image source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/a7ea6be33d16407c2e87d86e19718409' }} style={styles.image} />
         <TouchableOpacity style={{ height: 50, width: 300, backgroundColor: 'White', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
            <Text style={{color: 'black', fontSize: 15, alignItems: 'center', justifyContent: 'center'}}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "White",
    paddingHorizontal: 20,
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80,
    marginTop: 30,
  },
  title1: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  image1: {
    width: 400,
    height: 200,
    position: "absolute"
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginRight: 15,
  }
});
export default Screen01;
