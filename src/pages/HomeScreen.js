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

  let storyData = [
    {uri: 'https://i.pravatar.cc/300?u=1', isClicked: false},
    {uri: 'https://i.pravatar.cc/300?u=2', isClicked: false},
    {uri: 'https://i.pravatar.cc/300?u=3', isClicked: false},
    {uri: 'https://i.pravatar.cc/300?u=4', isClicked: false},
    {uri: 'https://i.pravatar.cc/300?u=5', isClicked: false},
    {uri: 'https://i.pravatar.cc/300?u=6', isClicked: false},
    {uri: 'https://i.pravatar.cc/300?u=7', isClicked: false},
  ];

  const [isStoryModalVisible, setIsStoryModalvisible] = useState(false);

  const [selectedImage, setSelectedImage] = useState(
    require('./../assets/images/user-img.png'),
  );

  const [storyDataList, setStoryDataList] = useState(storyData);

  function _renderStoryItem(data, index) {
    
    let imgUri = data.uri;
    let isClicked = data.isClicked;

    return (
      <TouchableOpacity
        onPress={() => {
          setIsStoryModalvisible(true);
          setSelectedImage(imgUri);

          let newArr = storyDataList;
          newArr[index].isClicked = true
          setStoryDataList(newArr)
        }}>
        <Image
          source={{uri: imgUri}}
          style={{
            width: 70,
            height: 70,
            borderWidth: 3,
            borderColor: isClicked ? 'gray' : 'tomato',
            borderRadius: 100,
            marginHorizontal: 10,
          }}
        />
      </TouchableOpacity>
    );
  }
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
        {storyDataList.map(data => {
          return _renderStoryItem(data);
        })}

 
      </ScrollView>
      <FlatList
        data={tweetList}
        renderItem={({item}) => (
          <CardItem navigation={navigation} tweet={item} />
        )}
        //keyExtractor={item => item.id}
      />

      <Modal visible={isStoryModalVisible}>
        <TouchableOpacity
          style={{alignSelf: 'flex-end', padding: 20}}
          onPress={() => setIsStoryModalvisible(false)}>
          <Text
            style={{
              fontSize: 30,
            }}>
            X
          </Text>
        </TouchableOpacity>
        <Image
          source={selectedImage}
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
