import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/button';

export default function Sign() {
  return (
    <View>
      <View style={{height:60,backgroundColor:'rgb(19, 174, 205)'}}>
        <Text style={{fontSize:30,textAlign:'center',padding:10}}>SATYA</Text>
      </View>
    
    <View style={{ padding: 30, marginHorizontal: 'auto' }}>
      <View style={{ alignItems: 'center', marginVertical: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Sign UP</Text>
        <Text>Enter your Details to Create your account.</Text>
      </View>
      <View style={{ marginVertical: 20 }}>
        <View style={{ marginBottom: 10 }}>
          <Text>Full Name</Text>
          <TextInput style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8 }} placeholder="Aman Kumar" autoCapitalize='none' />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text>Email</Text>
          <TextInput style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8 }} placeholder="m@example.com" keyboardType="email-address" autoCapitalize="none" />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text>Password</Text>
          <TextInput style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 4, padding: 8 }} secureTextEntry={true} />
        </View>
      </View>
      <View style={{ flexDirection: 'column', marginVertical: 20 }}>
        <TouchableOpacity style={{ backgroundColor: 'rgb(19, 174, 205)', padding: 12, borderRadius: 4, alignItems: 'center', marginBottom: 10 }}>
          <Text style={{ color: 'white' }}>Sign UP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderWidth: 1, borderColor: 'rgb(19, 174, 205)', padding: 12, borderRadius: 4, alignItems: 'center' }}>
          <Text style={{ color: 'rgb(19, 174, 205)' }}>Sign Up with Google</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontSize: 14 }}>
          Already have an account?{' '}
          <Text style={{ textDecorationLine: 'underline',color:'rgb(19, 174, 205)' }}>Log In</Text>
        </Text>
      </View>
    </View>
    </View>
  );
}
