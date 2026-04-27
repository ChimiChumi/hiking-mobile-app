import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomTabInset, Spacing } from '@/constants/theme';
import { Stack } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const safeAreaInsets = useSafeAreaInsets();
  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three,
  };

  return (
    <>
      <Stack.Screen.Title>Search</Stack.Screen.Title>
      <Stack.SearchBar
        allowToolbarIntegration
        placement="automatic"
        placeholder="Search trails"
        onChangeText={(event) => {
          setQuery(event.nativeEvent.text);
        }}
      />
      <ScrollView contentInset={insets} contentContainerStyle={styles.contentContainer}>
        <ThemedView style={styles.container}>
          <ThemedText type="subtitle">Search</ThemedText>
          <ThemedText themeColor="textSecondary">
            {query.length > 0 ? `Searching for "${query}"` : 'Use native tab bar search to start searching trails.'}
          </ThemedText>
        </ThemedView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.five,
  },
  container: {
    gap: Spacing.half,
  },
});
