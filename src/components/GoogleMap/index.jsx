import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

import { Container } from './styles';

export function GoogleMap() {
  const position = {lat: -23.194262102076923, lng: -45.889750409514235};

  return (
    <Container>
      <APIProvider apiKey={'AIzaSyCFeoWNtffmAnf8aHMY7vDcQWHhRWbH3P0'}>
        <Map
          className='GoogleMap'
          center={{lat: -23.194148692684074, lng: -45.889806735878466}}
          zoom={17}
          style={{width: '100%', height: '40rem'}}
          disableDefaultUI={true}
          gestureHandling='greedy'
          >

        </Map>
      </APIProvider>
    </Container>
  );
}

