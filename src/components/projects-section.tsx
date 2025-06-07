"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// Placeholder image component
const PlaceholderImage = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => (
  <div
    className={`bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center ${className}`}
  >
    <div className="text-center p-4">
      <motion.div
        className="w-16 h-16 bg-blue-500/20 rounded-lg mx-auto mb-2 flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: 10 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <span className="text-2xl">⚡</span>
      </motion.div>
      <p className="text-sm text-muted-foreground font-medium">{title}</p>
    </div>
  </div>
);

const projects = [
  {
    title: "Student Management API",
    description:
      "A RESTful API built with Node.js and Express for managing student data, grades, and course enrollments. Features authentication, data validation, and comprehensive CRUD operations with PostgreSQL database.",
    image: "/placeholder-image.svg",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "JWT", "bcrypt"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/farhanEditya/student-management-api",
    featured: true,
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "A Python-based data analytics tool that processes university enrollment data and generates insights through statistical analysis and visualizations. Built with pandas, matplotlib, and seaborn.",
    image: "/placeholder-image.svg",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/farhanEditya/analytics-dashboard",
    featured: true,
  },
  {
    title: "Algorithm Visualization Tool",
    description:
      "An educational web application that visualizes common sorting and searching algorithms. Created to help students understand algorithmic concepts through interactive demonstrations.",
    image: "/placeholder-image.svg",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS", "Algorithm Design"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/farhanEditya/algorithm-visualizer",
    featured: false,
  },
  {
    title: "Database Design Project",
    description:
      "Comprehensive database design for a library management system with normalization, indexing, and stored procedures. Includes ER diagrams and SQL implementation.",
    image: "/placeholder-image.svg",
    technologies: ["SQL", "PostgreSQL", "Database Design", "ER Modeling"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/farhanEditya/library-db-design",
    featured: false,
  },
  {
    title: "OOP Practice Projects",
    description:
      "Collection of object-oriented programming projects demonstrating design patterns, inheritance, and polymorphism concepts. Used as teaching materials for OOP practicum sessions.",
    image: "/placeholder-image.svg",
    technologies: ["Java", "OOP Principles", "Design Patterns", "UML"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/farhanEditya/oop-examples",
    featured: false,
  },
  {
    title: "Data Structures Implementation",
    description:
      "Complete implementation of fundamental data structures including linked lists, trees, graphs, and hash tables with comprehensive test suites and documentation.",
    image: "/placeholder-image.svg",
    technologies: ["Java", "Data Structures", "Algorithms", "Unit Testing"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/farhanEditya/data-structures",
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: featuredRef, isInView: featuredInView } = useScrollAnimation();
  const { ref: otherRef, isInView: otherInView } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my academic projects and personal work focused on
            backend development, data analytics, and educational tools.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          ref={featuredRef}
          className="grid lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={featuredInView ? "visible" : "hidden"}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-muted/20">
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PlaceholderImage
                      title={project.title}
                      className="w-full h-full"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate={featuredInView ? "visible" : "hidden"}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        variants={cardVariants}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                  <div className="flex gap-3">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="sm"
                        asChild
                        className="hover:shadow-md transition-all duration-300"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover:shadow-md transition-all duration-300"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          ref={otherRef}
          initial={{ opacity: 0, y: 30 }}
          animate={otherInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Other Projects
          </h3>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={otherInView ? "visible" : "hidden"}
          >
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <PlaceholderImage
                        title={project.title}
                        className="w-full h-full"
                      />
                    </motion.div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 w-full"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Demo
                          </a>
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 w-full"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
