import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email..."
          placeholderTextColor="lightgrey"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password..."
          placeholderTextColor="lightgrey"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.button}>Register</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
  },
  inputView: {
    backgroundColor: '#fff',
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
  },
 
  button: {
    height: 30,
    marginTop: 30,
  },
 
  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#33CCFF",
  },
});
