import React from 'react';
import { View, TextInput, StyleSheet, Text} from 'react-native';

export default class WriteScreen extends React.Component{
    render(){
        return(
          <View>
          <View style={{backgroundColor:"lightgreen",marginTop:40}}>
<Text style={styles.title}>BedTime Stories</Text>
          </View>
<View style={styles.inputView}>

<TextInput style={styles.textBox} 
placeholder="Write Your Story Here"
multiline={true}
/>

</View>
</View>
        );
  }
}

const styles = StyleSheet.create({
  textBox: {
      width:300,
      height:400,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
  },
  inputView:{
    flexDirection: 'row',
    margin: 50
  },
  title:{
    fontSize:25,
    padding:10,
    textAlign:'center'
  }
});