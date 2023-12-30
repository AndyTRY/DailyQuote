async function runJob(jobName: string, jobFunction: () => Promise<void> | void): Promise<void> {
    const jobStartTime = new Date();
    console.log(`[${jobName}] job started at:`, jobStartTime);
  
    try {
        const result = jobFunction();
        if (result instanceof Promise) {
          await result;
        }
      
      const jobEndTime = new Date();
      console.log(`[${jobName}] job finished successfully at:`, jobEndTime);
    } catch (error) {
      console.error(`Error in [${jobName}] job:`, error);
  
      const jobFailureTime = new Date();
      console.log(`[${jobName}] job failed at:`, jobFailureTime);
    }
  }

export {
    runJob
}