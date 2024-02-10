import { SafeAreaView,View,Text,isDarkMode,Image } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen";


export default function Profile(){
    
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return(
        <SafeAreaView style={backgroundStyle}>
        <View style={{ padding: 10, flexDirection: 'row', backgroundColor:'rgb(19, 174, 205)',borderBottomWidth: 1, borderBottomColor: 'gray' }}>
          
        <Image source={require('./props/arrow.png')} style={{width:40,height:40,borderRadius:50,backgroundColor:'white',margin:5}}/>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Abhiraj Dixit</Text>
          <Text style={{ fontSize: 14, color: 'white' }}>0 posts</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center', paddingTop: 20, paddingBottom: 10 }}>
        {/* <Avatar> */}
          <Image source={require('./props/placeholder.png')} style={{ width: 100, height: 100, borderRadius: 50 }} />
        {/* </Avatar> */}
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#888' }}>Abhiraj Dixit</Text>
        <Text style={{ fontSize: 14, color: '#888' }}>@AbhirajDixit12</Text>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <View style={{ alignItems: 'center', marginRight: 20 }}>
            <Text style={{ fontWeight: 'bold', color: '#888' }}>0</Text>
            <Text style={{ fontSize: 14, color: '#888' }}>Following</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: '#888' }}>0</Text>
            <Text style={{ fontSize: 14, color: '#888' }}>Followers</Text>
          </View>
        </View>
        <Text style={{ fontSize: 14, color: '#888', marginTop: 10 }}>Joined September 2021</Text>
      </View>
      <View style={{ borderTopWidth: 1, borderTopColor: 'gray', paddingTop: 10, paddingHorizontal: 10 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text style={{ backgroundColor: 'transparent', borderWidth: 0 }}>
            Posts
          </Text>
          <Text style={{ backgroundColor: 'transparent', borderWidth: 0 }}>
            Replies
          </Text>
          <Text style={{ backgroundColor: 'transparent', borderWidth: 0 }}>
            Media
          </Text>
        </View>
      </View>
    </SafeAreaView>
    )
}

