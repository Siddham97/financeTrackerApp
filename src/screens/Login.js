import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.profile} />
        </View>
        <View style={styles.container}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email..."
              placeholderTextColor="#003f5c"
              onChangeText={(text) => this.setState({ email: text })}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..."
              placeholderTextColor="#003f5c"
              onChangeText={(text) => this.setState({ password: text })}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.signUpText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-around",
  },
  container: {
    // flex: 1,
    backgroundColor: "#FFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    width: "80%",
    backgroundColor: "#FFFF",
    borderRadius: 25,
    borderColor: "#1261A0",
    borderWidth: 1,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "#1261A0",
  },
  forgot: {
    color: "#1261A0",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#1261A0",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
  signUpText: {
    color: "#1261A0",
  },
  profile: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#fff",
    marginLeft: 16,
  },
});

export default Login;
