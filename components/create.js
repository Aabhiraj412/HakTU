import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView,isDarkMode } from 'react-native';
import { Colors  } from 'react-native/Libraries/NewAppScreen';

export default function YourComponent() {
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
};

return(
    <SafeAreaView style={backgroundStyle}>
      {/* <View> */}
      <View style={{height:60,marginBottom:40,backgroundColor:'rgb(19, 174, 205)'}}>
        <Text style={{fontSize:30,textAlign:'center',padding:10}}>SATYA</Text>
      </View>
    
    <View style={{ width: '100%', padding: 16}}>
        <View>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#888'}}>Title</Text>
          <TextInput style={{ borderWidth: 1, borderColor: '#ccc',marginBottom:20, borderRadius: 4, padding: 8 }} placeholder="Enter the title" />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#888' }}>Content</Text>
          <TextInput style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8, manHeight: 150}} multiline={true} placeholder="Enter the content" />
        </View>
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#888' }}>Image</Text>
          <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8 }}>
            <Text style={{ color: '#888' }}>Select an image</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ backgroundColor: 'rgb(19, 174, 205)', padding: 12, borderRadius: 4, alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
