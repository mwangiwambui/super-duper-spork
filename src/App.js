import './App.css';
import { Routes, Route } from "react-router-dom";
import CreateJournal from './components/pages/CreateJournal';
import ListEntries from './components/pages/ListEntries';
import Layout from './components/layout/Layout';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route index element={<CreateJournal />} />
        <Route exact path="listEntries" element={<ListEntries />} />
        <Route path="*" element={<NotFound />} />
      </Route>

    </Routes>


  );
}

export default App;
