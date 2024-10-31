import { Hono } from 'hono';
import { createServer } from 'http';

const app = new Hono();
let projects = [];


app.post('/projects', async (c) => {
    try {
        const project = await c.req.json();
        project.id = Date.now(); 
        projects.push(project);
        return c.json({ message: 'Project added successfully', project });
    } catch (error) {
        return c.json({ error: 'Failed to add project' }, 500);
    }
});

app.get('/projects', (c) => {
    return c.json({ projects });
});


const server = createServer(app.fetch);

server.listen(3000, () => {
    console.log('Hono server is running on http://localhost:3000');
});