import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Component() {

  return (

      <View style={styles.container}>  
        <View style={styles.card}>

            <Image style={styles.imgContainer}
            source={require('./assets/eucalyptus.jpg')}/>

            <View style={styles.distributor}>

                <Text style={styles.headerText}>
                  Eucalyptus
                </Text>
    
                <Text style={styles.subText}>
                  CATEGORY: Myrtaceae
                </Text>

                <Text style={styles.subText}>
                ↑ 48 upvotes
                </Text>

                <Text style={styles.bodyText}>
                Eucalyptus is a fast-growing evergreen tree native to Australia.
                </Text>
                      
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>
                    Learn more
                  </Text>
                </TouchableOpacity>

            </View>

          </View>
        </View>

    );
  }


const styles = StyleSheet.create({
  
  imgContainer: {
    width: 130,
    height: 160,
    left: 10,
    top: 20,
    borderRadius: 15
  },

  distributor: {
    alignContent: 'space-between',
    width: 170,
    justifyContent: 'center',
    paddingLeft: 12
  }, 

  button: {
    width:130,
    height:30,
    backgroundColor: '#3D929A',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
    left: 10
  },

  buttonText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold'
  },

  card: {
    backgroundColor:'#FFFBF2',
    width: 300,
    height: 190,
    shadowColor: '#673939',
    shadowOpacity: .25,
    borderRadius: 12,

    shadowOffset:{
        width: 0,
        height: 5
      },
    shadowRadius: 13,
    flexDirection: 'row'
    },
  
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8F795C',
    paddingLeft: 10,
    },
  
  bodyText: {
    fontSize: 12,
    paddingLeft: 10,
    paddingTop:10,
    color: '#282C7B'
    },
  
  subText: {
    fontSize: 10,
    paddingLeft: 10,
    color: '#5E5E5E',
    paddingTop: 3,
    },
  
});
