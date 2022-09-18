import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import InputText from './components/InputText';
import Posts from './components/Posts';
import RenderedText from './components/RenderedText';

function App() {
  return (
    <div className='App'>
      <h1>This is the counter functionality</h1>
      <Counter />
      <Button>Increment</Button>
      <Button>Decrement</Button>
      <h2>This is the input text functionality</h2>
      <RenderedText />
      <InputText />
      <h2>This is the posts functionality</h2>
      <Posts />
    </div>
  );
}

export default App;
