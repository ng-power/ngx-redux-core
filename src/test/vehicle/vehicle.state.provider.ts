import { ReduxState, ReduxStateProvider } from '@harmowatch/ngx-redux-core/index';

import { BikeState } from 'test/vehicle/bike/bike.state';
import { CarState } from 'test/vehicle/car/car.state';

export interface VehicleState {
  bike: BikeState;
  car: CarState;
}

@ReduxState({name: 'vehicle'})
export class VehicleStateProvider extends ReduxStateProvider<VehicleState> {

  public static readonly initialState = {
    bike: {
      velocity: {
        maximum: -1
      },
      licensePlates: [],
    },
    car: {
      velocity: {
        maximum: -1
      },
      licensePlates: [],
    },
  };

  getInitialState(): VehicleState {
    return VehicleStateProvider.initialState;
  }

}