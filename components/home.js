import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,isDarkMode, ScrollView, Button, Image } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation,StackActions } from '@react-navigation/native'

// const Stack = createStackNavigator();

export default function Home(){
  // const navigation = useNavigation();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
};

// const handlePress = () => {
//     // Navigate to the Details screen
//     navigation.navigate('sign');
// };


  return (
    <View>
      <View style={{height:60,backgroundColor:'rgb(19, 174, 205)'}}>
        <Text style={{fontSize:30,textAlign:'center',padding:10}}>SATYA</Text>
        {/* <Text style={{fontSize:30,textAlign:'center',padding:10}}>SATYA</Text>
        <Image source={require('./props/placeholder.png')} style={{ width: 40, height: 40, borderRadius: 50 }}/> */}
      </View>
    <ScrollView style={backgroundStyle}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
      
      <View style={{ flex: 1, flexDirection: 'column', padding: 16 }}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
            
        <View style={{  flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold',minWidth:'85%' }}>Breaking News: An Asteroid is Approaching Earth</Text>
          <Text style={{ fontSize: 12, fontWeight: 'bold' }}>2 hours ago</Text>
          </View>
          <Text style={{ fontSize: 16, color: 'gray' }}>
            Scientists have discovered a new asteroid that is rapidly approaching Earth. The asteroid, named "Doomsday," is estimated to be 10 kilometers in diameter and poses a significant threat to our planet.
          </Text>
          <View style={styles.hrLine} />


        </View>
        <View style={{flexDirection:'column'}}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Article')}> */}
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold',minWidth:'85%' }}>New Asteroid "Doomsday" Threatens Earth</Text>
                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>2 hours ago</Text>
              </View>
              <Text style={{ fontSize: 16, color: 'gray' }}>
                Astronomers around the world are closely monitoring the trajectory of the asteroid and are working to determine the likelihood of impact. While initial calculations suggest that the asteroid will pass...
              </Text>
              <View style={styles.hrLine} />


          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Article')}> */}
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold',minWidth:'85%' }}>The Search for Extraterrestrial Life: Are We Alone in the Universe?
                </Text>
                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>2 hours ago</Text>
              </View>
              <Text style={{ fontSize: 16, color: 'gray' }}>
                The question of whether life exists beyond our planet has fascinated scientists and the public for
                centuries. While definitive evidence of extraterrestrial life has remained elusive, ongoing
                discoveries...
              </Text>
              <View style={styles.hrLine} />


          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Article')}> */}
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold',minWidth:'85%' }}>Uncovering the Mysteries of the Deep Sea: The Fascinating World Beneath the Waves
                </Text>
                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>2 hours ago</Text>
              </View>
              <Text style={{ fontSize: 16, color: 'gray' }}>
                The ocean covers more than 70% of the Earth's surface, yet much of it remains unexplored. The deep sea,
                in particular, is a realm of mystery and wonder, home to a wide variety of fascinating creatures and...
              </Text>
              <View style={styles.hrLine} />


          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 16 }}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            {/* <TouchableOpacity onPress={() => navigation.navigate('Article')}> */}
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold',minWidth:'85%' }}>Uncovering the Mysteries of the Deep Sea: The Fascinating World Beneath the Waves
                </Text>
                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>2 hours ago</Text>
              </View>
              <Text style={{ fontSize: 16, color: 'gray' }}>
                The ocean covers more than 70% of the Earth's surface, yet much of it remains unexplored. The deep sea,
                in particular, is a realm of mystery and wonder, home to a wide variety of fascinating creatures and...
              </Text>
              <View style={styles.hrLine} />


          </View>
        </View>
        </View>
        
      </View>
    </View>
  
     </ScrollView>
    
    </View>
    );
}

const styles = StyleSheet.create({
  hrLine: {
    marginTop:10,
    height: 1,
    backgroundColor: '#1D3E5E',
    width: '100%',
  },
});

// export default Home;