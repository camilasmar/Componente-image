import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between' }}>

      <View style={{ width: '100%', backgroundColor: 'pink', paddingVertical: 18, alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>
          Mundo do Cachorro
        </Text>
      </View>

      <View style={{ width: '100%', backgroundColor: 'red', paddingVertical: 8 }}></View>

      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>

        <Image
        source={require('./img/corgi.png')}
          style={{ width: 130, height: 130, marginBottom: 20 }}
        />

        <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold', textAlign: 'center', width: '70%', marginBottom: 25 }}>
          Tenha mais alegria, carinho e amizade com seu cachorro todos os dias!
        </Text>

        <TouchableOpacity style={{ backgroundColor: 'pink', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 20 }}>
          <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>
            Contato
          </Text>
        </TouchableOpacity>

      </View>

      <View style={{ width: '100%', backgroundColor: 'red', paddingVertical: 18 }}></View>

    </View>
  );
}

export default App;
