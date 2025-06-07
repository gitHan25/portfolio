"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Database, Users, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skills = [
  "Python",
  "Java",
  "JavaScript",
  "Node.js",
  "Express.js",
  "SQL",
  "PostgreSQL",
  "Data Structures",
  "Algorithms",
  "OOP",
  "REST APIs",
  "Git",
  "Laravel",
];

const experiences = [
  {
    title: "Practicum Assistant - Data Structures",
    company: "University",
    period: "Current",
    description:
      "Teaching and mentoring students in fundamental data structures concepts, helping them understand algorithms and problem-solving approaches through hands-on practice sessions.",
  },
  {
    title: "Practicum Assistant - Programming Algorithms",
    company: "University",
    period: "Current",
    description:
      "Guiding students through algorithmic thinking and implementation, focusing on optimization techniques and computational complexity analysis.",
  },
  {
    title: "Practicum Assistant - Object-Oriented Programming",
    company: "University",
    period: "Current",
    description:
      "Assisting students in mastering OOP principles, design patterns, and best practices in object-oriented software development.",
  },
];

const highlights = [
  {
    icon: Code,
    title: "Backend Development",
    description:
      "Building robust server-side applications with clean architecture and efficient database design.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description:
      "Analyzing data patterns and creating insights through statistical analysis and data visualization.",
  },
  {
    icon: Users,
    title: "Teaching & Mentoring",
    description:
      "Sharing knowledge and helping fellow students grasp complex programming concepts effectively.",
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description:
      "Pursuing Informatics degree with strong focus on computer science fundamentals and practical application.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export function AboutSection() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: contentRef, isInView: contentInView } = useScrollAnimation();
  const { ref: skillsRef, isInView: skillsInView } = useScrollAnimation();
  const { ref: experienceRef, isInView: experienceInView } =
    useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-blue-500/5 rounded-full animate-float"></div>
        <div
          className="absolute bottom-1/4 -right-20 w-60 h-60 bg-purple-500/5 rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Junior backend developer and data analytics enthusiast, currently in
            final year of Informatics studies with passion for teaching and
            learning.
          </p>
        </motion.div>

        <motion.div
          ref={contentRef}
          className="grid lg:grid-cols-2 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
        >
          {/* Personal Story */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <motion.p
              className="text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              I'm Muhammad Farhan Editya, currently in my final year pursuing an
              Informatics degree. My journey in tech began with a curiosity
              about how systems work behind the scenes, which naturally led me
              to backend development and data analytics.
            </motion.p>
            <motion.p
              className="text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              As a Practicum Assistant, I've had the privilege of teaching Data
              Structures, Programming Algorithms, and Object-Oriented
              Programming. This experience has not only deepened my
              understanding of these fundamental concepts but also enhanced my
              ability to break down complex problems into manageable solutions.
            </motion.p>
            <motion.p
              className="text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              I'm passionate about building efficient backend systems and
              uncovering insights from data. My goal is to contribute to
              meaningful projects where I can apply my academic knowledge and
              teaching experience to create robust, data-driven solutions.
            </motion.p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <CardHeader className="pb-3">
                    <motion.div
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <CardTitle className="text-lg">{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {highlight.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills */}
        <motion.div
          ref={skillsRef}
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Skills & Technologies
          </h3>
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
            initial="hidden"
            animate={skillsInView ? "visible" : "hidden"}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  variant="secondary"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Experience */}
        <motion.div
          ref={experienceRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Teaching Experience
          </h3>
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={experienceInView ? "visible" : "hidden"}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="border-l-4 border-l-primary hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <Badge variant="outline" className="w-fit">
                          {exp.period}
                        </Badge>
                      </motion.div>
                    </div>
                    <CardDescription className="text-lg font-medium text-primary">
                      {exp.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
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
