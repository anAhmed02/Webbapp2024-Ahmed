import type { Project } from "../features/projects/types";

export const validateProject = (project: Project): boolean => {
  if (!project.name || typeof project.name !== "string") return false;
  if (!project.description || typeof project.description !== "string") return false;
  if (!project.startDate || !isValidDate(project.startDate)) return false;
  if (!project.endDate || !isValidDate(project.endDate)) return false;
  if (!project.status || typeof project.status !== "string") return false;
  return true;
};


const isValidDate = (date: string): boolean => {
  return !isNaN(Date.parse(date));
};