import React, { useState } from 'react';

const NewProjectForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Ikke startet');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject = { name, description, status };

    fetch('http://localhost:3000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProject),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Prosjekt lagt til:', data);
        
        setName('');
        setDescription('');
        setStatus('Ikke startet');
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <section id="new-project">
      <h2>Opprett Nytt Prosjekt</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="project-name">Prosjektnavn:</label>
        <input type="text" id="project-name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="project-description">Beskrivelse:</label>
        <textarea id="project-description" value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label htmlFor="project-status">Status:</label>
        <select id="project-status" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Ikke startet">Ikke startet</option>
          <option value="Pågående">Pågående</option>
          <option value="Fullført">Fullført</option>
        </select>

        <button type="submit">Opprett Prosjekt</button>
      </form>
    </section>
  );
};

export default NewProjectForm;
