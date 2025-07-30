import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web Apps", "Mobile", "E-commerce", "AI/ML"];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "E-commerce",
      description: "Modern e-commerce solution with advanced analytics and inventory management.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "AI-Powered CRM",
      category: "AI/ML",
      description: "Customer relationship management system with AI-driven insights and automation.",
      technologies: ["Python", "React", "TensorFlow", "MongoDB"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Healthcare Mobile App",
      category: "Mobile",
      description: "Telemedicine app connecting patients with healthcare providers seamlessly.",
      technologies: ["React Native", "Firebase", "WebRTC", "Node.js"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Financial Dashboard",
      category: "Web Apps",
      description: "Real-time financial analytics dashboard with advanced reporting capabilities.",
      technologies: ["Vue.js", "D3.js", "Express", "MySQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Smart Home IoT Platform",
      category: "Web Apps",
      description: "Comprehensive IoT platform for smart home device management and automation.",
      technologies: ["Angular", "IoT", "AWS", "MQTT"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Food Delivery App",
      category: "Mobile",
      description: "Complete food delivery solution with real-time tracking and payments.",
      technologies: ["Flutter", "Firebase", "Google Maps", "Stripe"],
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="transition-smooth"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden shadow-card hover:shadow-hover transition-smooth"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button variant="glass" size="icon">
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                    <Button variant="glass" size="icon">
                      <Github className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3">
                  {project.category}
                </Badge>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;