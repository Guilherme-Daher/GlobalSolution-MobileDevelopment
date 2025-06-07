import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
import { saveEvent } from '../storage/storage';
import { PowerOutageEvent } from '../types/Event';
import { v4 as uuidv4 } from 'uuid';
import { colors, spacing, fontSizes } from '../styles/global';

export default function Recommendations() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { location, time, name, neighborhood, damages } = route.params;

  const [recommendations, setRecommendations] = useState<string[]>([]);

  const techtudoUrl = 'https://www.techtudo.com.br/guia/2024/10/faltou-luz-tudo-que-voce-precisa-saber-para-nao-ter-prejuizo-em-apagoes-edinfoeletro.ghtml';

  useEffect(() => {
    const event: PowerOutageEvent = {
      id: uuidv4(),
      location,
      interruptionTime: time,
      damages,
      name: route.params.name,
      neighborhood: route.params.neighborhood || '',
    };
    saveEvent(event);

    generateRecommendations();
  }, []);

  function extractHours(timeStr: string): number {
    const match = timeStr.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  }

  function generateRecommendations() {
    const hours = extractHours(time);

    if (hours <= 2) {
      setRecommendations([
        'Tenha lanternas e pilhas sempre à mão.',
        'Evite abrir a geladeira para conservar os alimentos.',
        'Mantenha-se informado sobre a situação.'
      ]);
    } else if (hours <= 6) {
      setRecommendations([
        'Mantenha estoque de água e alimentos.',
        'Desligue aparelhos eletrônicos para evitar danos.',
        'Procure manter contato com vizinhos e familiares.'
      ]);
    } else {
      setRecommendations([
        'Busque abrigo seguro se necessário.',
        'Evite usar velas, prefira lanternas.',
        'Monitore notícias oficiais sobre a situação.',
        'Em caso de equipamentos médicos elétricos, procure assistência imediata.'
      ]);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orientações Preventivas</Text>
      {recommendations.map((rec, index) => (
        <Text key={index} style={styles.text}>- {rec}</Text>
      ))}

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GeneralOverview')}>
        <Text style={styles.buttonText}>Voltar ao Início</Text>
      </TouchableOpacity>

      {/* WebView para exibir a página da Techtudo */}
      <View style={styles.webviewContainer}>
        <WebView source={{ uri: techtudoUrl }} style={styles.webview} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.large, backgroundColor: colors.background },
  title: { fontSize: fontSizes.title, marginBottom: spacing.medium, fontWeight: 'bold', color: colors.text },
  text: { fontSize: fontSizes.text, marginBottom: spacing.small, color: colors.text },
  button: { backgroundColor: colors.primary, padding: spacing.medium, borderRadius: 8, alignItems: 'center', marginTop: spacing.large },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: fontSizes.text },
  webviewContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: spacing.large
  },
  webview: {
    flex: 1
  }
});
