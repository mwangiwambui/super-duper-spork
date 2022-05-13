import './App.css';
import CreateJournal from './components/CreateJournal';
import Layout from './components/layout/Layout';

function App() {
  return (
   
    <Layout>
      <div className="flex flex-col flex-1">
        <CreateJournal />
    </div>
    </Layout>
   
  );
}

export default App;
