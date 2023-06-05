import {
    Image, Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity, TouchableWithoutFeedback,
    View
} from "react-native";
import {useContext, useState} from "react";
import {LoginContext} from "../contexts/LoginContext";

export default function LoginScreen() {

    let { setIsLogin } = useContext(LoginContext)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [hidePassword, setHidePassword] = useState(false)
    let isCorrect = true
    function LoginRequest(){
        switch(username){
            case "omerk":
            if (password === "1234omer"){
                isCorrect = true
            }
              
                break;

            case "senem":
                if (password === "1234senem"){
                    isCorrect = true
                }
                break;
            case "serhat":
                if (password === "1234senem"){
                    isCorrect = true
                }
                break;

            case "ali":
                if (password === "1234ali"){
                    isCorrect = true
                }
                break;
            default:
                // kullanıcı bulunamadı
        }
        if (isCorrect){
            setIsLogin(true) 
        } else {setIsLogin (false)}
    }

    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "white"
            }}>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View
                        style={{
                            flex: 1,
                            alignItems: "center",
                        }}>

                        {/* sample image */}
                        <Image
                            source={require("./../assets/images/login-img.png")}
                            style={{
                                width: 200,
                                height: 200,
                                marginTop: 70,
                            }}/>

                        <View
                            style={{
                                width: "80%",
                                height: "40%",
                                alignItems: "flex-start",
                                justifyContent: "space-evenly",
                            }}>

                            {/* login title */}
                            <Text
                                style={{
                                    fontSize: 40,
                                    fontWeight: "bold",
                                    color: "black"
                                }}>

                                Login

                            </Text>

                            {/* username input */}
                            <TextInput
                                value={username}
                                onChangeText={setUsername}
                                placeholder={"Email"}
                                style={{
                                    borderWidth: 1,
                                    borderColor: "#bbbcbe",
                                    width: "100%",
                                    borderRadius: 20,
                                    paddingLeft: 20,
                                }}/>

                            {/* password input */}
                            <View style={{
                                flexDirection: 'row' ,                                    
                                justifyContent: 'space-between',
                                borderWidth: 1,
                                borderColor: "#bbbcbe",
                                width: "100%",
                                borderRadius: 20,
                                paddingLeft: 20,

                                }}>
                            <TextInput
                                value={password}
                                onChangeText={setPassword}
                                placeholder={"Password"}
                                secureTextEntry = {hidePassword}
                                style={{

                                }}/>
                                <TouchableOpacity onPress={()=> setHidePassword(!hidePassword)}>
                                <Image style={{width:40, height:40}} source={require('./../assets/images/user-img.png')} />
                                </TouchableOpacity>
                                </View>
                            {/* login button */}
                            <TouchableOpacity
                                onPress={() => {
                                    LoginRequest()
                                }}
                                style={{
                                    width: "100%",
                                    height: 40,
                                    backgroundColor: "#0164FF",
                                    borderRadius: 15,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>

                                <Text
                                    style={{
                                        color: "white",
                                        fontSize: 16,
                                        fontWeight: "bold",
                                    }}>
                                    Login
                                </Text>

                            </TouchableOpacity>

                        </View>

                    </View>

                </TouchableWithoutFeedback>

            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}
