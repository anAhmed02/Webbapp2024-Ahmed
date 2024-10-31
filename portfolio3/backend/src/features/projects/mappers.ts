import type { DbProject, Project } from "./types";


export const fromDbProject = (data: DbProject): Project => {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      startDate: data.startDate,
      endDate: data.endDate,
      status: data.status 
    };
  };


export const toDbProject = (data: Project): DbProject => {
  return {
    ...data,
    startDate: data.startDate,
    endDate: data.endDate
  };
};


