import './App.css';
import { Routes, Route } from "react-router-dom";
// import CreateJournal from './components/pages/CreateJournal';
import ListEntries from './components/pages/ListEntries';
import Layout from './components/layout/Layout';
import NotFound from './components/pages/NotFound';
import CreateFunctionalJournal from './components/pages/CreateFunctionalJournal';
import Entry from './components/Entry';

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<CreateFunctionalJournal />}></Route>
        <Route exact path="/listEntries" element={<ListEntries />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/entry/:id" element={<Entry/>} />
      </Routes>
    </Layout>


  );
}

export default App;
