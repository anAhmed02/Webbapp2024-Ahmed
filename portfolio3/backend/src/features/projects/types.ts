export interface Project {
    id: number;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    status: string;
  }
  
  export type Result<T> = {
    success: boolean;
    data?: T;
    error?: string;
    code?: string;
  };

  export interface DbProject {
    id: number;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    status: string;
  }
  