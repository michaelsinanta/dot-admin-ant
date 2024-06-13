"use client";
import { ProjectCard } from "@/components/elements/ProjectCard";
import { ProjectsData } from "@/components/data";
import { SetStateAction, useState } from "react";
import { Button } from "antd";

export default function Project() {
  const [currentType, setCurrentType] = useState("webdev");

  const handleTypeChange = (type: SetStateAction<string>) => {
    setCurrentType(type);
  };

  return (
    <div className="m-5 ">
      <div>
        <Button
          type={currentType === "webdev" ? "primary" : "default"}
          onClick={() => handleTypeChange("webdev")}
          style={{ marginRight: "10px" }}
        >
          Web Development
        </Button>
        <Button
          type={currentType === "mobdev" ? "primary" : "default"}
          onClick={() => handleTypeChange("mobdev")}
          style={{ marginRight: "10px" }}
        >
          Mobile Development
        </Button>
        <Button
          type={currentType === "data-ai" ? "primary" : "default"}
          onClick={() => handleTypeChange("data-ai")}
        >
          Data / AI
        </Button>
      </div>
      <div>
        {ProjectsData.map((category) => {
          if (category.type === currentType) {
            return category.data.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ));
          }
          return null;
        })}
      </div>
    </div>
  );
}
