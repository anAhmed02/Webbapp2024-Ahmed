import { DB } from "./db";
import fs from 'fs';



interface Project {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
  
}

export const seedDatabase = async (db: DB) => {
    const file = await fs.promises.readFile("data.json", "utf-8");

    const { projects} = JSON.parse(file) as {
      projects: Project[];
    };
  
    const insertProject = db.prepare(`
      INSERT INTO projects (id, name, description, startDate, endDate, status) VALUES (?, ?, ?, ?, ?, ?)
    `);

    
    
    db.transaction(() => {
      for (const project of projects) {
        insertProject.run(project.id, project.name, project.description, project.startDate, project.endDate, project.status);
      }

  
    });
  };