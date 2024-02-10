import { isDarkMode, SafeAreaView, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default function Nav(){
  const background = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return(
    <SafeAreaView style={background}>
      <View style={{height:60,backgroundColor:'rgb(19, 174, 205)'}}>
        <Text style={{fontSize:30,textAlign:'center',padding:10}}>HackTU APP</Text>
      </View>
    </SafeAreaView>
  )
}
