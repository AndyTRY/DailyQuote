import { ResError } from "./schemas";

async function tryGetThrowA<T>(
    func: () => Promise<T>,
    errorMessage?: string,
    statusCode?: number
  ): Promise<T> {
    try {
      return await func();
    } catch (error) {
    
      if (statusCode){
        const resRrror : ResError = {
            status: statusCode,
            errorMessage: errorMessage || "error",
            originalError: error,
          };
          throw resRrror
      }

      throw  {
        message: errorMessage,
        originalError: error,
      };
    }
  }

  async function tryThrowA<T>(
    func: () => Promise<T>,
    errorMessage?: string,
    statusCode?: number
  ): Promise<T> {
    try {
      return await func();
    } catch (error) {
    
      if (statusCode){
        const resRrror : ResError = {
            status: statusCode,
            errorMessage: errorMessage || "Internal Error Occured",
            originalError: error,
          };
          throw resRrror
      }

      throw  {
        message: errorMessage,
        originalError: error,
      };
    }
  }


  export {
    tryGetThrowA,
    tryThrowA
  }