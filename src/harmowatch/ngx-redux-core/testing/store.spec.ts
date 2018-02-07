import { async, TestBed } from '@angular/core/testing';

import { ReduxTestingStore } from '@harmowatch/ngx-redux-core/testing/store';
import { ReduxTestingModule } from '@harmowatch/ngx-redux-core/testing/module';
import { TestingStateProvider } from '@harmowatch/ngx-redux-core/testing/state';

describe('ReduxTestingStore', () => {

  let store: ReduxTestingStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReduxTestingModule.forRoot({
          state: {
            provider: TestingStateProvider,
          }
        }),
      ],
      // schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    store = TestBed.get(ReduxTestingStore);
  }));

  describe('setState', () => {

    it('returns a promise that is resolved after the state was set', (done) => {
      const expectedState = TestingStateProvider.INITIAL_STATE;
      store.setState(TestingStateProvider, expectedState).then((givenState) => {
        expect(givenState).toEqual({
          'testing-7c66b613-20bd-4d35-8611-5181ca4a0b72': expectedState,
        });
        done();
      });

    });

  });

});
