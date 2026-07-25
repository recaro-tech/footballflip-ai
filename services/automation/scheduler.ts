export interface ScheduleConfig {
  intervalMinutes:number;
}

export function createSchedule(config:ScheduleConfig){
  return {
    enabled:true,
    intervalMinutes:config.intervalMinutes
  };
}
