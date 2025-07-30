import { useState } from "react";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contact.messageSent'),
      description: t('contact.messageSentDescription'),
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('contact.title')} <span className="text-gradient">{t('contact.titleHighlight')}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('contact.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{t('contact.sendMessage')}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">{t('contact.fullName')} *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">{t('contact.emailAddress')} *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="mobile-development">Mobile Development</SelectItem>
                        <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
                        <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                        <SelectItem value="data-analytics">Data Analytics</SelectItem>
                        <SelectItem value="ai-integration">AI Integration</SelectItem>
                        <SelectItem value="consulting">General Consulting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    {t('contact.sendMessageButton')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="gradient-card shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-muted-foreground">info@techcorp.com</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Phone</div>
                        <div className="text-muted-foreground">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Address</div>
                        <div className="text-muted-foreground">
                          123 Tech Street<br />
                          San Francisco, CA 94105
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium">Business Hours</div>
                        <div className="text-muted-foreground">
                          Mon - Fri: 9:00 AM - 6:00 PM PST<br />
                          Sat - Sun: Emergency support only
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Why Choose TechCorp?</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Free initial consultation and project assessment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Transparent pricing with no hidden costs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Dedicated project manager for seamless communication</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Agile development methodology for faster delivery</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Ongoing support and maintenance services</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="gradient-card shadow-card bg-gradient-hero text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
                  <p className="mb-6">
                    Schedule a free 30-minute consultation to discuss your project requirements and get a custom quote.
                  </p>
                  <Button variant="glass" size="lg" className="w-full">
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our services and process.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity. Simple websites take 4-6 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes! We offer comprehensive maintenance and support packages including updates, security monitoring, performance optimization, and technical support."
              },
              {
                question: "What is your development process?",
                answer: "We follow an agile methodology with regular sprints, client feedback sessions, and continuous integration. You'll have full visibility into progress through our project management tools."
              },
              {
                question: "Can you work with our existing technology stack?",
                answer: "Absolutely! Our team has expertise across a wide range of technologies and can adapt to your existing infrastructure or recommend the best solutions for your needs."
              }
            ].map((faq, index) => (
              <Card key={index} className="gradient-card shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;