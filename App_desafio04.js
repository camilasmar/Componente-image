import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#f8abab', alignItems: 'center', justifyContent: 'center',
      padding: 20
    }}>

      <Image
      source={require('./img/paw-heart.png')}
          
      style={{width: 200, height: 200,
          marginBottom: 30
        }}
      />

      <Text style={{
        fontSize: 22, fontWeight: 'bold',textAlign: 'center', marginBottom: 15
      }}>
        Bem-vindo(a) ao aplicativo Cachoshow!
      </Text>

      <Text style={{
        fontSize: 16, textAlign: 'center',
        color: 'white', marginBottom: 40
      }}>
        Um aplicativo que te conecta com seu animalzinho!!
      </Text>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
      }}>

        <TouchableOpacity style={{
          borderWidth: 1, borderColor: '#4a6fa5',
          paddingVertical: 10, paddingHorizontal: 25,
          borderRadius: 20
        }}>
          <Text style={{
            color: '#4a6fa5'
          }}>Pular</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          backgroundColor: '#4a6fa5',
          paddingVertical: 10, paddingHorizontal: 25,
          borderRadius: 20
        }}>
          <Text style={{
            color: 'white'
          }}>Próximo</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

export default App;