var _SAGA_LOCATION = require("redux-saga").SAGA_LOCATION;

function* withEffectObjectProps() {
  yield function reduxSagaSource() {
    var res = race({
      timeout: delay(3000),
      cannelled: take('CANCELLED')
    });
    res[_SAGA_LOCATION] = {
      fileName: "/Users/mateuszburzynski/Desktop/redux-saga/packages/babel-plugin-redux-saga/test/fixtures/effect-object-props/source.js",
      lineNumber: 2,
      code: "race({\n    timeout: delay(3000),\n    cannelled: take('CANCELLED'),\n  })"
    };
    return res;
  }();
}

withEffectObjectProps[_SAGA_LOCATION] = {
  fileName: "/Users/mateuszburzynski/Desktop/redux-saga/packages/babel-plugin-redux-saga/test/fixtures/effect-object-props/source.js",
  lineNumber: 1
};