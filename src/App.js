import './App.css';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className='App'>
    <Layout>
      <div className="flex flex-col flex-1">
        <h1 className='text-3xl font-bold underline'>
          Hello World!
        </h1>
    </div>
    </Layout>
    </div>
  );
}

export default App;
