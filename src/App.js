import {RecoilRoot} from 'recoil'
import CharacterCounter from './Components/CharacterCounter'

function App() {
  return (
    <RecoilRoot>
    <div className="App">
      <h2>Recoil.js Test</h2>
      <CharacterCounter/>
    </div>
    </RecoilRoot>
  );
}

export default App;
