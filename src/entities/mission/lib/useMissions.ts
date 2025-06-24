import { DEFAULT_MISSIONS } from "../mission.data";
import { MissionItem } from "../mission.types";

export const useMissions = (initialMissions?: MissionItem[]) => {
  return initialMissions || DEFAULT_MISSIONS;
};
