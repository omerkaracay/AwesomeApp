import {View, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
export default function CardDetail({route}){

  let {tweetValue} = route.params;

    return(
        console.log({tweetValue}),
        <SafeAreaView style={{
            flex:1,
        //    backgroundColor:'tomato',
            alignItems:'center',
            justifyContent:'center'
        }}>

       <Text style={{fontSize:50, color:'tomato'}}>{tweetValue}</Text>
        </SafeAreaView>
    )
}