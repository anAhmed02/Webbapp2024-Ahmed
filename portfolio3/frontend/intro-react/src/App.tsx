import React from 'react';
import ProjectList from './komponenter/ProjectList';
import NewProjectForm from './komponenter/NewProjectForm';
import './App.css';


const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Prosjektportefølje</h1>
      <ProjectList />
      <NewProjectForm />
    </div>
  );
};

export default App;
