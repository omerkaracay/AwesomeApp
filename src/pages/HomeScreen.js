import {SafeAreaView, ScrollView, FlatList} from "react-native";
import CardItem from "../componenets/CardItem";
import { useEffect, useState } from "react";
//import CardDetail from "./CardDetailScreen";

export default function HomeScreen({navigation}) {
const [tweetList, setTweetList] = useState(["11İlk Tweet", "İkinci Tweet"])

useEffect(()=>{
    //anasayfa tweet verileri getir
    setTimeout(()=> {
        let listTweetData = GetTweetList()
        setTweetList(listTweetData)
    }, 2000)

}, [])

function GetTweetList(){
    let tweetData = ["İlk Tweet", "İkinci Tweet", "Üçüncü Tweet", "Dördüncü Tweet", "Beşinci Tweet", "Altıncı Tweet", "Yedinci Tweet", "Sekicinci Tweet", "Dokuzuncu Tweet", "Onuncu Tweet", "Onbirinci Tweet"]
    return tweetData;
}
    return(
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "white",
            }}>
        <FlatList
        data={tweetList}
        renderItem={({item}) => <CardItem navigation={navigation} tweet={item} />}
        //keyExtractor={item => item.id}
      />   

        </SafeAreaView>
    )
}
