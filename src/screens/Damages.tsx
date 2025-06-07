import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { colors, spacing, fontSizes } from '../styles/global';

export default function Damages() {
  const [damages, setDamages] = useState('');
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { location, name, neighborhood, time } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Descreva os Prejuízos</Text>
      <TextInput
        placeholder="Ex.: Estabelecimentos afetados..."
        value={damages}
        onChangeText={setDamages}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Recommendations', { location, time, name, neighborhood, damages,  })}> //nome adicionado
        <Text style={styles.buttonText}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: spacing.large, backgroundColor: colors.background },
  title: { fontSize: fontSizes.subtitle, marginBottom: spacing.medium, fontWeight: 'bold', color: colors.text },
  input: { borderWidth: 1, borderColor: colors.border, borderRadius: 8, padding: spacing.medium, marginBottom: spacing.large, backgroundColor: colors.card },
  button: { backgroundColor: colors.primary, padding: spacing.medium, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: fontSizes.text },
});
