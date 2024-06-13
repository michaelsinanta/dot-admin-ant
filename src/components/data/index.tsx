import { DataAIProjects } from "./data-ai";
import { MobDevProjects } from "./mobile";
import { WebDevProjects } from "./web";

export const ProjectsData = [
  {
    type: "webdev",
    data: WebDevProjects,
  },
  {
    type: "mobdev",
    data: MobDevProjects,
  },
  {
    type: "data-ai",
    data: DataAIProjects,
  },
];
