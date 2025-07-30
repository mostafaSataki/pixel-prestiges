import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '-4s' }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            {t('hero.title')}
            <span className="block text-gradient">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="glass" size="lg" className="group">
              {t('hero.startProject')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
              <Play className="mr-2 h-5 w-5" />
              {t('hero.watchDemo')}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-scale-in">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-white/80">{t('hero.stats.projects')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">150+</div>
            <div className="text-white/80">{t('hero.stats.clients')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-white/80">{t('hero.stats.success')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/80">{t('hero.stats.support')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;