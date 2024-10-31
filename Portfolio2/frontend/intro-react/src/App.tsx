import React from 'react';
import ProjectList from './ProjectList';
import NewProjectForm from './NewProjectForm';
import './style.css';


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
