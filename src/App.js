import React from 'react';
import './App.css';

import {
  createInstance,
  OptimizelyProvider,
  OptimizelyFeature,
} from '@optimizely/react-sdk'

const optimizely = createInstance({
  sdkKey: '2mc5jT4WaaNqNp44W5Hr14',
})

class App extends React.Component {
  render() {
    return (
      <OptimizelyProvider
        optimizely={optimizely}
        user={{
          id: 'user123',
        }}
      >
        <div className='App'>
          <h1>This is an AB test app</h1>
          <OptimizelyFeature feature='feature_rollout_test'>
            {(isEnabled) => (
              isEnabled ?
                <button className='primary'>Primary Button</button> :
                <button className='secondary'>Secondary Button</button>
            )}
          </OptimizelyFeature>
        </div>
      </OptimizelyProvider>
    )
  }
}

export default App;
