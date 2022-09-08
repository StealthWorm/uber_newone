import React, { useEffect, useRef } from 'react'
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_API_KEY } from '@env';

const Map = () => {
  const origin = useSelector(selectOrigin);//((state: RootState) => state.nav.origin)
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  const lat = 51.499960
  const lng = -0.192197


  useEffect(() => {
    if (!origin || !destination) return;

    // zoom & fit to markers
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 5, left: 5, bottom: 5, right: 5 }
    });
  }, [origin, destination])

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />)}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />)}
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})