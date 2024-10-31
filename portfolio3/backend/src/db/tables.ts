import { db } from "./db";

export const createTables = () => {
  const createProjectsTable = `
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      description TEXT,
      startDate TEXT,
      endDate TEXT,
      status TEXT
    );`;

  

  db.exec(createProjectsTable);
  
};