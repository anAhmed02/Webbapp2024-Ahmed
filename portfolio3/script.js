fetch('projects.json')
  .then(response => response.json())
  .then(data => {
    const projectList = document.getElementById('projects');
    data.forEach(project => {
      const li = document.createElement('li');
      li.textContent = `${project.name} - ${project.status}`;
      projectList.appendChild(li);
    });
  })
  .catch(error => console.error('Error:', error));


const projectForm = document.getElementById('project-form');
projectForm.addEventListener('submit', function (event) {
  event.preventDefault();
  
  const name = document.getElementById('project-name').value;
  const description = document.getElementById('project-description').value;
  const status = document.getElementById('project-status').value;
  const newProject = { name, description, status };


  fetch('projects.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newProject)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Prosjekt lagt til:', data);
    const projectList = document.getElementById('projects');
    const li = document.createElement('li');
    li.textContent = `${newProject.name} - ${newProject.status}`;
    projectList.appendChild(li);
  })
  .catch(error => console.error('Error:', error));
});