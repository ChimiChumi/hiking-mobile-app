import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapboxGL from '@rnmapbox/maps';

export function MapScreen() {
  useEffect(() => {
    const token = process.env.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN;
    if (token) {
      MapboxGL.setAccessToken(token);
    }
  }, []);

  return (
    <MapboxGL.MapView style={styles.container} styleURL={MapboxGL.StyleURL.Street}>
      <MapboxGL.Camera zoomLevel={14} centerCoordinate={[0, 0]} animationMode="flyTo" />
    </MapboxGL.MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
