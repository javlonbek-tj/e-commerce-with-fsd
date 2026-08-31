import { AppRouter } from './providers';
import { useAppInit } from './lib/useAppInit';

function App() {
  useAppInit();

  return <AppRouter />;
}

export default App;
