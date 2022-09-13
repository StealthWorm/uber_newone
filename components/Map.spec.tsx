import { render, screen } from '@testing-library/react-native';
import userEvent from '@testing-library/user-event';
import Map from './Map';

jest.mock('react-native-maps', () => {
  const { View } = require('react-native');
  const React = require('react');

  const MockMapView = React.forwardRef(
    ({ testID, children, ...props }:any, ref:any) => {
      if (ref?.current) {
        ref.current = {
          getMapBoundaries: async () => ({
            northEast: {
              latitude: 2,
              longitude: 2,
            },
            southWest: {
              latitude: 1,
              longitude: 1,
            },
          }),
          getCamera: async () => ({
            center: {
              latitude: 2,
              longitude: 2,
            },
            heading: 1,
            pitch: 1,
            zoom: 1,
            altitude: 1,
          }),
          animateCamera: () => {},
        };
      }

      return (
        <View testID={testID} {...props}>
          {children}
        </View>
      );
    },
  );

  const MockMarker = React.forwardRef(({ testID, children, ...props } :any, ref:any) => {
    if (ref?.current) {
      ref.current = {
        redraw: () => {},
      };
    }

    return (
      <View testID={testID} {...props}>
        {children}
      </View>
    );
  });

  const mockMapTypes = {
    STANDARD: 0,
    SATELLITE: 1,
    HYBRID: 2,
    TERRAIN: 3,
    NONE: 4,
    MUTEDSTANDARD: 5,
  };

  return {
    __esModule: true,
    default: MockMapView,
    Marker: MockMarker,
    MAP_TYPES: mockMapTypes,
    PROVIDER_DEFAULT: 'default',
    PROVIDER_GOOGLE: 'google',
  };
});
describe('<Map />', () => {


  it('should render without crashing', () => {
    const { asJSON } = render(<Map />) as any;
    expect(asJSON()).toMatchSnapshot();
  });
});
