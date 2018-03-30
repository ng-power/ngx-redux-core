import { getActionType } from '../../../harmowatch/ngx-redux-core/index';

function compare(actual, expectedActionType): jasmine.CustomMatcherResult {

  const actionType = getActionType(actual);

  if (expectedActionType) {
    if (actionType) {
      return {
        pass: actionType === expectedActionType,
        message: `Expected to dispatch action "${expectedActionType}", but it dispatches the action "${actionType}"!`,
      };
    }

    return {
      pass: false,
      message: `Expected to dispatch action "${expectedActionType}", but the method will not dispatch any action!`,
    };
  }

  return {
    pass: !!actionType,
    message: `Expected to dispatch some action, but the method will not dispatch any action!`,
  };

}

export function toDispatchAction(): jasmine.CustomMatcher {
  return {compare};
}
