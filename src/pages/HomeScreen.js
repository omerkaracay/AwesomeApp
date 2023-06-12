import {
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
} from 'react-native';
import CardItem from '../componenets/CardItem';
import {useEffect, useState} from 'react';
//import CardDetail from "./CardDetailScreen";

export default function HomeScreen({navigation}) {
  const [tweetList, setTweetList] = useState(['11İlk Tweet', 'İkinci Tweet']);

  const [isStoryModalVisible, setIsStoryModalvisible] = useState(false);

  useEffect(() => {
    //anasayfa tweet verileri getir
    setTimeout(() => {
      let listTweetData = GetTweetList();
      setTweetList(listTweetData);
    }, 2000);
  }, []);

  function GetTweetList() {
    let tweetData = [
      'İlk Tweet',
      'İkinci Tweet',
      'Üçüncü Tweet',
      'Dördüncü Tweet',
      'Beşinci Tweet',
      'Altıncı Tweet',
      'Yedinci Tweet',
      'Sekicinci Tweet',
      'Dokuzuncu Tweet',
      'Onuncu Tweet',
      'Onbirinci Tweet',
    ];
    return tweetData;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <ScrollView
        style={{paddingBottom: 30, paddingTop: 20, height: 180}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={()=> setIsStoryModalvisible(true)}>
        <Image
          source={require('./../assets/images/user-img.png')}
          style={{
            width: 70,
            height: 70,
            borderWidth: 1,
            borderColor: '#0164FF',
            borderRadius: 100,
            marginHorizontal: 10,
          }}
        />
</TouchableOpacity>
        <Image
          source={require('./../assets/images/user-img.png')}
          style={{
            width: 70,
            height: 70,
            borderWidth: 1,
            borderColor: '#0164FF',
            borderRadius: 100,
            marginHorizontal: 10,
          }}
        />

        <Image
          source={require('./../assets/images/user-img.png')}
          style={{
            width: 70,
            height: 70,
            borderWidth: 1,
            borderColor: '#0164FF',
            borderRadius: 100,
            marginHorizontal: 10,
          }}
        />

        <Image
          source={require('./../assets/images/user-img.png')}
          style={{
            width: 70,
            height: 70,
            borderWidth: 1,
            borderColor: '#0164FF',
            borderRadius: 100,
            marginHorizontal: 10,
          }}
        />

        <Image
          source={require('./../assets/images/user-img.png')}
          style={{
            width: 70,
            height: 70,
            borderWidth: 1,
            borderColor: '#0164FF',
            borderRadius: 100,
            marginHorizontal: 10,
          }}
        />

        <Image
          source={require('./../assets/images/user-img.png')}
          style={{
            width: 70,
            height: 70,
            borderWidth: 1,
            borderColor: '#0164FF',
            borderRadius: 100,
            marginHorizontal: 10,
          }}
        />
      </ScrollView>
      <FlatList
        data={tweetList}
        renderItem={({item}) => (
          <CardItem navigation={navigation} tweet={item} />
        )}
        //keyExtractor={item => item.id}
      />

      <Modal visible={isStoryModalVisible}>
        <TouchableOpacity onPress={()=> setIsStoryModalvisible(false)}>
          <Text style={{
            fontSize: 30,
            
            }}>X</Text>
        </TouchableOpacity>
        <Image
          source={require('./../assets/images/user-img.png')}
          style={{
            width: '100%',
            resizeMode: 'contain',
            //height: 70,

            marginHorizontal: 10,
          }}
        />
      </Modal>
    </SafeAreaView>
  );
}
