import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { colors, spacing, fontSizes } from '../styles/global'; // assumindo que você tem um arquivo global de estilos

export default function EventDetails() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Evento</Text>

      <View style={styles.detailBox}>
        <Text style={styles.label}>Nome completo:</Text>
        <Text style={styles.value}>{event.name}</Text>
      </View>

      <View style={styles.detailBox}>
        <Text style={styles.label}>Cidade:</Text>
        <Text style={styles.value}>{event.location}</Text>
      </View>

      <View style={styles.detailBox}>
        <Text style={styles.label}>Bairro:</Text>
        <Text style={styles.value}>{event.neighborhood}</Text>
      </View>

      <View style={styles.detailBox}>
        <Text style={styles.label}>Tempo de Interrupção:</Text>
        <Text style={styles.value}>{event.interruptionTime}</Text>
      </View>

      <View style={styles.detailBox}>
        <Text style={styles.label}>Prejuízos:</Text>
        <Text style={styles.value}>{event.damages}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.large,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: fontSizes.title || 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.large,
    textAlign: 'center',
  },
  detailBox: {
    backgroundColor: colors.card,
    padding: spacing.medium,
    borderRadius: 10,
    marginBottom: spacing.medium,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // para Android
  },
  label: {
    fontSize: fontSizes.subtitle || 16,
    fontWeight: '600',
    color: colors.primary || '#555',
    marginBottom: 4,
  },
  value: {
    fontSize: fontSizes.text || 16,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.medium,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: spacing.large,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: fontSizes.text || 16,
  },
});
 