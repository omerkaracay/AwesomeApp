import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {useContext} from 'react';
import {LoginContext} from '../contexts/LoginContext';

export default function LogoutModal(props) {
  let {visible, onClose} = props;

  let {setIsLogin} = useContext(LoginContext);

  return (
    <Modal 
        transparent={true}
        visible={visible}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.20)',
        }}>
        <View
          style={{
            width: '80%',
            height: '30%',
            backgroundColor: 'white',
            borderRadius: 10,
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
            <TouchableOpacity  onPress={()=> onClose()}><Text>Kapat</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=> setIsLogin(false)}><Text>Çıkış</Text></TouchableOpacity>
          </View>
      </View>
    </Modal>
  );
}
