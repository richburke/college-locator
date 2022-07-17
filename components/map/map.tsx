import { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { MdSchool as MortarBoard } from 'react-icons/md';
import styles from './map.module.css';

const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string;

const Marker = ({ text }: { text: string }) => (
  <div className={styles.marker}>
    <MortarBoard />
    {text}
  </div>
);

type Props = {
  name?: string;
  latitude?: number;
  longitude?: number;
};

const Map = ({
  name = '',
  latitude = 39.183609,
  longitude = -96.571671,
}: Props) => {
  const [coordinates, setCordinates] = useState({
    lat: latitude,
    lng: longitude,
  });

  useEffect(() => {
    setCordinates({ lat: latitude, lng: longitude });
  }, [latitude, longitude]);

  return (
    <div className={styles.container}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
        yesIWantToUseGoogleMapApiInternals={true}
        center={coordinates}
        defaultZoom={11}
      >
        {name.length && <Marker text={name} />}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
