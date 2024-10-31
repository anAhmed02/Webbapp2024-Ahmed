export type Result<T> = {
    success: boolean;
    data?: T;
    error?: string;
    code?: string;
  };
  
  export const ResultHandler = {
    success<T>(data: T): Result<T> {
      return { success: true, data };
    },
    failure<T = never>(error: string, code: string): Result<T> {
      return { success: false, error, code };
    },
  };