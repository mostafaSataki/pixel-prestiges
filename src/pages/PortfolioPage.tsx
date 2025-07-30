import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ExternalLink, Github, Search } from "lucide-react";

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filters = ["All", "Web Apps", "Mobile", "E-commerce", "AI/ML", "Cloud Solutions"];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "E-commerce",
      description: "Modern e-commerce solution with advanced analytics, inventory management, and seamless payment integration.",
      fullDescription: "A comprehensive e-commerce platform built for a major retailer, featuring real-time inventory tracking, advanced analytics dashboard, multi-payment gateway integration, and mobile-responsive design. The platform handles over 10,000 transactions daily.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      year: "2023",
      client: "RetailCorp Inc."
    },
    {
      id: 2,
      title: "AI-Powered CRM",
      category: "AI/ML",
      description: "Customer relationship management system with AI-driven insights, automated lead scoring, and predictive analytics.",
      fullDescription: "Revolutionary CRM system that uses machine learning to predict customer behavior, automate lead scoring, and provide actionable insights. Features include sentiment analysis, chatbot integration, and automated workflow management.",
      technologies: ["Python", "React", "TensorFlow", "MongoDB", "FastAPI", "Celery"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      year: "2023",
      client: "SalesForce Pro"
    },
    {
      id: 3,
      title: "Healthcare Mobile App",
      category: "Mobile",
      description: "Telemedicine app connecting patients with healthcare providers through secure video calls and appointment scheduling.",
      fullDescription: "HIPAA-compliant telemedicine platform enabling secure patient-doctor consultations. Features include real-time video calls, electronic health records, prescription management, and integrated payment processing.",
      technologies: ["React Native", "Firebase", "WebRTC", "Node.js", "Express", "JWT"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      year: "2023",
      client: "HealthTech Solutions"
    },
    {
      id: 4,
      title: "Financial Dashboard",
      category: "Web Apps",
      description: "Real-time financial analytics dashboard with advanced reporting, data visualization, and portfolio management.",
      fullDescription: "Comprehensive financial dashboard providing real-time market data, portfolio analytics, risk assessment tools, and automated reporting. Integrates with multiple financial APIs and supports complex trading strategies.",
      technologies: ["Vue.js", "D3.js", "Express", "MySQL", "WebSocket", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      year: "2022",
      client: "FinanceFlow Ltd."
    },
    {
      id: 5,
      title: "Smart Home IoT Platform",
      category: "Cloud Solutions",
      description: "Comprehensive IoT platform for smart home device management, automation, and energy optimization.",
      fullDescription: "Cloud-based IoT platform managing thousands of smart home devices. Features include device automation, energy optimization algorithms, predictive maintenance, and mobile app for remote control.",
      technologies: ["Angular", "AWS IoT", "Lambda", "DynamoDB", "MQTT", "Terraform"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      year: "2022",
      client: "SmartHome Inc."
    },
    {
      id: 6,
      title: "Food Delivery App",
      category: "Mobile",
      description: "Complete food delivery solution with real-time tracking, payment processing, and restaurant management.",
      fullDescription: "End-to-end food delivery platform with separate apps for customers, restaurants, and delivery drivers. Features include real-time GPS tracking, payment processing, order management, and analytics dashboard.",
      technologies: ["Flutter", "Firebase", "Google Maps", "Stripe", "Cloud Functions", "Firestore"],
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      year: "2022",
      client: "FoodieExpress"
    },
    {
      id: 7,
      title: "Corporate Learning Platform",
      category: "Web Apps",
      description: "Enterprise learning management system with course creation, progress tracking, and certification management.",
      fullDescription: "Scalable LMS platform serving over 50,000 employees across multiple organizations. Features include interactive course creation, progress analytics, certification management, and integration with HR systems.",
      technologies: ["React", "GraphQL", "PostgreSQL", "Redis", "Elasticsearch", "Docker"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      year: "2023",
      client: "LearnCorp Enterprise"
    },
    {
      id: 8,
      title: "Supply Chain Optimizer",
      category: "AI/ML",
      description: "AI-powered supply chain optimization platform with predictive analytics and automated decision making.",
      fullDescription: "Machine learning platform optimizing complex supply chains for manufacturing companies. Uses predictive analytics to forecast demand, optimize inventory levels, and automate purchasing decisions.",
      technologies: ["Python", "scikit-learn", "React", "PostgreSQL", "Apache Airflow", "Kubernetes"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      year: "2023",
      client: "ManufacturingPro"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === "All" || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore our successful projects and see how we've helped businesses across various industries achieve their digital transformation goals.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.slice(0, 2).map((project) => (
              <Card key={project.id} className="group overflow-hidden shadow-card hover:shadow-hover transition-smooth">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
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
                  <Badge variant="secondary" className="absolute top-4 left-4">
                    Featured
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="outline">{project.category}</Badge>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.fullDescription}</p>
                  <p className="text-sm text-muted-foreground mb-4">Client: {project.client}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="default" size="sm" className="flex-1">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">All Projects</h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
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
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
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
                  {project.featured && (
                    <Badge variant="secondary" className="absolute top-2 left-2">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="outline">{project.category}</Badge>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/80">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help bring your ideas to life with cutting-edge technology solutions.
          </p>
          <Button variant="hero" size="lg">
            Start Your Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;