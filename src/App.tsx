
import './App.css'

import CharacterCounter from './components/CharacterCounter';
function App() {

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
      <h1 className="text-green-600 text-xl font-semibold mb-4"> Character Counter App</h1>

    <CharacterCounter minWords={10} maxWords={20} targetReadingTime={2}/>
    <div style={{marginTop:8, fontSize:14, color:"#888"}}>
    
    </div>
    </div>
    </div>
  )
}

export default App;

