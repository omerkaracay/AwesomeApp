import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useContext, useState} from 'react';
import {LoginContext} from '../contexts/LoginContext';
import LogoutModal from '../componenets/LogoutModal';

export default function ProfileScreen() {
  let {setIsLogin} = useContext(LoginContext);
  const [isLogoutModalVisible, setLogutModalVisible] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <View
        style={{
          width: '100%',
          height: '40%',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Image
          source={require('./../assets/images/user-img.png')}
          style={{
            width: 140,
            height: 140,
            borderWidth: 1,
            borderColor: '#0164FF',
            borderRadius: 100,
            marginHorizontal: 10,
          }}
        />

        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
          }}>
          Ömer Karaçay
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          setLogutModalVisible(true);
        }}
        style={{
          backgroundColor: 'red',
          width: '80%',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 20,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Logout
        </Text>
      </TouchableOpacity>
      <LogoutModal
        visible={isLogoutModalVisible}
        onClose={() => {setLogutModalVisible(false)}}
      />
    </SafeAreaView>
  );
}
