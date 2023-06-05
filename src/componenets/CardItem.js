import { View, Image, Text, TouchableOpacity } from "react-native"
export default function CardItem(props){

    let {tweet, navigation} = props;
   
        
   
    return(
        
    <TouchableOpacity onPress={()=> navigation.navigate('CardDetail', {tweetValue:tweet})}
    style={{
        flexDirection: "row",
        backgroundColor: "white",
        paddingVertical: 20,
        borderBottomColor: "#cbcece",
        borderBottomWidth: 0.7,
    }}>

    <Image
        source={require("./../assets/images/user-img.png")}
        style={{
            width: 70,
            height: 70,
            borderWidth: 1,
            borderColor: "#0164FF",
            borderRadius: 100,
            marginHorizontal: 10,
        }}/>

    <Text
        numberOfLines={4}
        style={{
            flex: 1,
            
        }}>

       {tweet}

    </Text>

</TouchableOpacity>
)
}