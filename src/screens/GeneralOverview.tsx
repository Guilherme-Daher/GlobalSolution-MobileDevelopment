import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { getEvents, clearEvents } from '../storage/storage';
import { PowerOutageEvent } from '../types/Event';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, fontSizes } from '../styles/global';

export default function GeneralOverview() {
  const [events, setEvents] = useState<PowerOutageEvent[]>([]);
  const navigation = useNavigation<any>();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const data = await getEvents();
    setEvents(data);
  };

  const handleClearEvents = async () => {
    await clearEvents();
    setEvents([]); // Atualiza o estado para refletir a limpeza
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo dos Eventos</Text>

      {events.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum evento cadastrado.</Text>
      ) : (
        <FlatList
          data={events}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.card}
              onPress={() => navigation.navigate('EventDetails', { event: item })}
            >
              <Text style={styles.cardText}>{item.location} - {item.name}</Text>
              <Text style={styles.cardSubText}>{item.interruptionTime}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Location')}>
        <Text style={styles.buttonText}>Nova Localização</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.clearButton} onPress={handleClearEvents}>
        <Text style={styles.clearButtonText}>Limpar Eventos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.large, backgroundColor: colors.background },
  title: { fontSize: fontSizes.title, fontWeight: 'bold', marginBottom: spacing.medium, color: colors.text },
  emptyText: { fontSize: fontSizes.text, color: colors.text, textAlign: 'center', marginTop: spacing.large },
  card: { 
    backgroundColor: colors.card, 
    padding: spacing.medium, 
    borderRadius: 10, 
    marginBottom: spacing.small, 
    borderWidth: 1, 
    borderColor: colors.border 
  },
  cardText: { fontSize: fontSizes.subtitle, fontWeight: 'bold', color: colors.text },
  cardSubText: { fontSize: fontSizes.text, color: colors.text },
  button: { 
    backgroundColor: colors.primary, 
    padding: spacing.medium, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginTop: spacing.large 
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: fontSizes.text },
  clearButton: { 
    backgroundColor: colors.danger || '#FF5555', 
    padding: spacing.medium, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginTop: spacing.medium 
  },
  clearButtonText: { color: '#fff', fontWeight: 'bold', fontSize: fontSizes.text },
});
