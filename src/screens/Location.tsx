import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { colors, spacing, fontSizes } from '../styles/global';

export default function Location() {
  const [location, setLocation] = useState('');
  const [name, setname] = useState('');
  const [neighborhood, setneighborhood] = useState('');
  const navigation = useNavigation<any>();

  // URL do Google Maps centralizado no Brasil (você pode ajustar para sua região)
  const googleMapsUrl = 'https://www.google.com/maps/@-14.235004,-51.92528,4z';


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome Completo</Text>
      <TextInput
        placeholder="Digite seu nome..."
        value={name}
        onChangeText={setname}
        style={styles.input}
      />

      <Text style={styles.title}>Informe sua cidade</Text>
      <TextInput
        placeholder="Digite sua cidade..."
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />

       <Text style={styles.title}>Informe sua Bairro</Text>
      <TextInput
        placeholder="Digite bairro ou CEP..."
        value={neighborhood}
        onChangeText={setneighborhood}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('InterruptionTime', { location,name,neighborhood })} // Passando a localização e o nome para a próxima tela
      >
        <Text style={styles.buttonText}>Próximo</Text>
      </TouchableOpacity>

      {/* WebView do Google Maps abaixo do botão */}
      <View style={styles.mapContainer}>
        <WebView source={{ uri: googleMapsUrl }} style={styles.map} />
      </View>
    </View>
  );
}





const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.large, backgroundColor: colors.background },
  title: { fontSize: fontSizes.subtitle, marginBottom: spacing.medium, fontWeight: 'bold', color: colors.text },
  input: { borderWidth: 1, borderColor: colors.border, borderRadius: 8, padding: spacing.medium, marginBottom: spacing.medium, backgroundColor: colors.card },
  button: { backgroundColor: colors.primary, padding: spacing.medium, borderRadius: 8, alignItems: 'center', marginBottom: spacing.medium },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: fontSizes.text },
  mapContainer: {
    flex: 1, // para ocupar o espaço restante da tela
    borderRadius: 10,
    overflow: 'hidden',
  },
  map: {
    flex: 1,
  },
});
