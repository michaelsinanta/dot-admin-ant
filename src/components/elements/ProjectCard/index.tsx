"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpAnimation, techBadgeAnimation } from "./animation";
import { Badge, Button } from "antd";

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    image: string;
    site: string[][];
    tech: string[];
  };
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      className="flex gap-6 lg:gap-12 flex-col lg:flex-row m-10"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full"
        style={{ height: "250px" }}
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Image
          src={project.image}
          alt={`Project Thumbnail ${project.title}`}
          width={420}
          height={250}
          className="w-full h-full object-contain rounded-lg shadow-md bg-blue-200"
        />
      </motion.div>
      <div className="flex-1 lg:py-[5px]">
        <motion.h3
          className="flex items-center text-lg text-blue-600 font-bold"
          {...fadeUpAnimation}
          transition={{ duration: 0.7 }}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="my-3 text-left text-sm text-with-newlines"
          {...fadeUpAnimation}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          {project.description}
        </motion.p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          {project.tech.map((tech: string, i: number) => (
            <Badge
              key={`${project.title}-tech-${i}`}
              count={tech}
              {...techBadgeAnimation}
            />
          ))}
        </div>
        <div className="flex flex-row space-x-3 justify-start w-full">
          {project.site.map((siteLink, index) => (
            <Link key={index} href={siteLink[1]} passHref>
              <Button type="primary" className="w-max shadow-button">
                {siteLink[0]}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
