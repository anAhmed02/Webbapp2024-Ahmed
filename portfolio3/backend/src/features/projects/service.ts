import type { Project } from "./types";
import { createProjectRepository, type ProjectRepository } from "./repository";
import { Result, ResultHandler } from "../../lib/result";
import { validateProject } from "../../utils/validator";
import db from "../../db/db";

export const createProjectService = (repo: ProjectRepository) => {
  const getProjectById = async (
    id: number
  ): Promise<Result<Project | undefined>> => {
    const project = await repo.getById(id);
    if (!project) {
      return ResultHandler.failure("Project not found", "NOT_FOUND");
    }
    return project;
  };

  const createProject = async (data: Project): Promise<Result<string>> => {
    if (!validateProject(data)) {
      return ResultHandler.failure("Invalid project data", "BAD_REQUEST");
    }
    return repo.create(data);
  };

  const listProjects = async (): Promise<Result<Project[]>> => {
    const projects = await repo.list();
    return projects;
  };

  const updateProject = async (
    data: Project
  ): Promise<Result<Partial<Project>>> => {
    const existingProject = await repo.getById(data.id);
    if (!existingProject) {
      return ResultHandler.failure("Project not found", "NOT_FOUND");
    }
    if (!validateProject(data)) {
      return ResultHandler.failure("Invalid project data", "BAD_REQUEST");
    }
    return repo.update(data);
  };

  return {
    getProjectById,
    createProject,
    listProjects,
    updateProject
  };
};

export const projectService = createProjectService(createProjectRepository(db));
export type ProjectService = ReturnType<typeof createProjectService>;
