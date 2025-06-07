import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { colors, spacing, fontSizes } from '../styles/global';

export default function InterruptionTime() {
  const [time, setTime] = useState('');
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { location, name, neighborhood } = route.params;

  // URL da Enel
  const enelUrl = 'https://www.enel.com.br/pt-saopaulo.html';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tempo de Interrupção</Text>
      <TextInput
        placeholder="Ex.: 2 horas"
        value={time}
        onChangeText={setTime}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Damages', { location, name, neighborhood, time })}
      >
        <Text style={styles.buttonText}>Próximo</Text>
      </TouchableOpacity>

      {/* WebView da Enel abaixo do botão */}
      <View style={styles.webviewContainer}>
        <WebView source={{ uri: enelUrl }} style={styles.webview} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.large, backgroundColor: colors.background },
  title: { fontSize: fontSizes.subtitle, marginBottom: spacing.medium, fontWeight: 'bold', color: colors.text },
  input: { borderWidth: 1, borderColor: colors.border, borderRadius: 8, padding: spacing.medium, marginBottom: spacing.large, backgroundColor: colors.card },
  button: { backgroundColor: colors.primary, padding: spacing.medium, borderRadius: 8, alignItems: 'center', marginBottom: spacing.medium },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: fontSizes.text },
  webviewContainer: {
    flex: 1, // para ocupar o espaço restante da tela
    borderRadius: 10,
    overflow: 'hidden',
  },
  webview: {
    flex: 1,
  },
});
