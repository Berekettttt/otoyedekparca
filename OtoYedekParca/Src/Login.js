
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity,Alert} from 'react-native';
import axios from 'axios';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Login = () => {
        axios.post("http://10.0.2.2:8000/api/login", {
            email : email,
            password: password,
        })
        .then(res => {
          navigation.navigate('Home', { id: res.data["status"] });
      })
        .catch(e => {
            Alert.alert("Hatalı giriş yaptınız!");
            console.log(`login error ${e}`);
        });

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}

      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="Login" onPress={Login} />

      <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  registerText: {
    marginRight: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
