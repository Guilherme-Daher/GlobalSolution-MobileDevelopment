import AsyncStorage from '@react-native-async-storage/async-storage';
import { PowerOutageEvent } from '../types/Event';

const STORAGE_KEY = '@power_outage_events';

export const saveEvent = async (event: PowerOutageEvent) => {
  const events = await getEvents();
  events.push(event);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(events));
};

export const getEvents = async (): Promise<PowerOutageEvent[]> => {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const clearEvents = async () => {
  await AsyncStorage.removeItem(STORAGE_KEY);
};