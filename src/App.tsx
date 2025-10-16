import { useEffect, useState } from 'react';
import { Clock, FileText, BarChart3, Mic, CheckCircle, ArrowRight, Menu, User, Settings, Zap, Shield, Users, X } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import heroImage from './assets/hero.png';
import logoImage from './assets/logo.png';
import Blog1 from './blog/blog1';
import Blog2 from './blog/blog2';

function App() {
  const [activeBadge, setActiveBadge] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBadge((prev) => (prev + 1) % 4); // Cycle through 0, 1, 2, 3
    }, 1000); // Change every 1 second
    return () => clearInterval(interval);
  }, []);

  // Close sidebar when clicking on a link
  const handleNavClick = () => {
    setIsSidebarOpen(false);
  };

  // Scroll animation for sections
  const useScrollAnimation = () => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
    });

    return {
      ref,
      className: `transition-all duration-1000 ease-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`,
    };
  };

  const ctaLink = 'https://studio--studio-2835712508-c6d6d.us-central1.hosted.app';

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="Scribing.io Logo" className="w-8 h-8" />
            <span className="font-semibold text-xl">Scribing.io</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition">How it Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href={ctaLink} className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
              Get Started
            </a>
          </div>
          <button 
            className="md:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
        
        {/* Sidebar Panel */}
        <div className="absolute top-0 right-0 h-full w-80 bg-white shadow-2xl">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <img src={logoImage} alt="Scribing.io Logo" className="w-8 h-8" />
                <span className="font-semibold text-xl">Scribing.io</span>
              </div>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-6">
              <div className="space-y-6">
                <a 
                  href="#features" 
                  className="block text-lg font-medium text-gray-900 hover:text-orange-500 transition py-2"
                  onClick={handleNavClick}
                >
                  Features
                </a>
                <a 
                  href="#how-it-works" 
                  className="block text-lg font-medium text-gray-900 hover:text-orange-500 transition py-2"
                  onClick={handleNavClick}
                >
                  How it Works
                </a>
                <a 
                  href="#pricing" 
                  className="block text-lg font-medium text-gray-900 hover:text-orange-500 transition py-2"
                  onClick={handleNavClick}
                >
                  Pricing
                </a>
                <a 
                  href="#faq" 
                  className="block text-lg font-medium text-gray-900 hover:text-orange-500 transition py-2"
                  onClick={handleNavClick}
                >
                  FAQ
                </a>
              </div>
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200">
              <a 
                href={ctaLink}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 px-6 rounded-full hover:shadow-lg transition flex items-center justify-center gap-2 font-medium"
                onClick={handleNavClick}
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div {...useScrollAnimation()} className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              AI-Powered Medical<br />Scribe for Every<br />Doctor
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Automate clinical documentation and SOAP notes with AI.<br />Save hours every day and focus on patient care.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a href={ctaLink} className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </a>
              <button 
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-gray-400 transition"
                onClick={() => setShowModal(true)}
              >
                Watch Demo
              </button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div {...useScrollAnimation()} className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 rounded-3xl transform rotate-3 opacity-60"></div>
            <div 
              className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
              style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-600">Today's Patients</span>
                    <Clock className="w-5 h-5 text-orange-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    <CountUp end={12} duration={2} useEasing={true} start={0} triggerOnce={true}>
                      {({ countUpRef, start }) => {
                        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
                        useEffect(() => { if (inView) start(); }, [inView, start]);
                        return <span ref={ref}><span ref={countUpRef} /></span>;
                      }}
                    </CountUp>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-600">Notes Generated</span>
                    <FileText className="w-5 h-5 text-pink-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    <CountUp end={47} duration={2} useEasing={true} start={0} triggerOnce={true}>
                      {({ countUpRef, start }) => {
                        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
                        useEffect(() => { if (inView) start(); }, [inView, start]);
                        return <span ref={ref}><span ref={countUpRef} /></span>;
                      }}
                    </CountUp>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-600">Time Saved</span>
                    <BarChart3 className="w-5 h-5 text-purple-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    <CountUp end={8.5} decimals={1} duration={2} useEasing={true} start={0} triggerOnce={true}>
                      {({ countUpRef, start }) => {
                        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
                        useEffect(() => { if (inView) start(); }, [inView, start]);
                        return <span ref={ref}><span ref={countUpRef} />h</span>;
                      }}
                    </CountUp>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-2xl p-6 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Mic className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Recording Session</div>
                      <div className="text-sm text-gray-600">Patient: John Smith</div>
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 space-y-2">
                    <div className="h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full w-3/4"></div>
                    <div className="h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full w-1/2"></div>
                    <div className="h-2 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full w-2/3"></div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full blur-3xl opacity-30"></div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div {...useScrollAnimation()} className="flex items-center justify-center gap-8 mt-16 flex-wrap">
            <div className="flex items-center gap-2 text-gray-600">
              <Shield className="w-5 h-5" />
              <span className={`text-sm transition-all duration-300 ${activeBadge === 0 ? 'font-bold' : 'font-normal'}`}>
                HIPAA Compliant
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <CheckCircle className="w-5 h-5" />
              <span className={`text-sm transition-all duration-300 ${activeBadge === 1 ? 'font-bold' : 'font-normal'}`}>
                SOC 2 Certified
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-5 h-5" />
              <span className={`text-sm transition-all duration-300 ${activeBadge === 2 ? 'font-bold' : 'font-normal'}`}>
                Trusted by 10,000+ Doctors
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Zap className="w-5 h-5" />
              <span className={`text-sm transition-all duration-300 ${activeBadge === 3 ? 'font-bold' : 'font-normal'}`}>
                99.9% Uptime
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section {...useScrollAnimation()} className="py-16 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Spend More Time with Patients, Not Paperwork
          </h2>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" {...useScrollAnimation()} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Notetaker Built for Healthcare
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our platform uses advanced AI to understand medical conversations and generate accurate clinical documentation in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Real-Time Medical<br />Transcription
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Accurate speech-to-text optimized for medical terminology</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Works in real-time during patient consultations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Multi-speaker recognition for doctor and patient</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-pink-200 rounded-3xl transform rotate-6 opacity-40"></div>
              <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full"></div>
                    <div className="flex-1 h-3 bg-orange-200 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full"></div>
                    <div className="flex-1 h-3 bg-pink-200 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full"></div>
                    <div className="flex-1 h-3 bg-purple-200 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl transform -rotate-6 opacity-40"></div>
              <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-gray-900">SOAP Note</span>
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-xs font-semibold text-gray-600 mb-1">Subjective</div>
                      <div className="h-2 bg-orange-200 rounded-full"></div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-xs font-semibold text-gray-600 mb-1">Objective</div>
                      <div className="h-2 bg-pink-200 rounded-full"></div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-xs font-semibold text-gray-600 mb-1">Assessment</div>
                      <div className="h-2 bg-purple-200 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Structured Clinical Notes
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Automatic SOAP note generation from conversations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Customizable templates for different specialties</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">ICD-10 and CPT code suggestions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Seamless EHR<br />Integration
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Direct integration with Epic, Cerner, and Athenahealth</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">One-click export to your existing workflow</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">API access for custom integrations</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-orange-200 rounded-3xl transform rotate-6 opacity-40"></div>
              <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-2xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {['Epic', 'Cerner', 'Athena', 'Allscripts'].map((ehr, idx) => (
                      <div key={idx} className="bg-white rounded-xl p-4 text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg mx-auto mb-2"></div>
                        <div className="text-xs font-medium text-gray-700">{ehr}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-pink-200 rounded-3xl transform -rotate-6 opacity-40"></div>
              <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                      <CountUp end={95} suffix="%" duration={2} useEasing={true} start={0} triggerOnce={true}>
                        {({ countUpRef, start }) => {
                          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
                          useEffect(() => { if (inView) start(); }, [inView, start]);
                          return <span ref={ref}><span ref={countUpRef} /></span>;
                        }}
                      </CountUp>
                    </div>
                    <div className="text-sm text-gray-600">Accuracy Rate</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gradient-to-r from-purple-400 to-orange-400 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Data-Driven AI for Smarter<br />Care
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">AI learns from your documentation style</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Clinical decision support and suggestions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Analytics on documentation time and patterns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section {...useScrollAnimation()} className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-2">
                <CountUp end={70} suffix="%" duration={2} useEasing={true} start={0} triggerOnce={true}>
                  {({ countUpRef, start }) => {
                    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
                    useEffect(() => { if (inView) start(); }, [inView, start]);
                    return <span ref={ref}><span ref={countUpRef} /></span>;
                  }}
                </CountUp>
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Time Saved</div>
              <div className="text-gray-600">
                Doctors save an average of 2-3 hours per day on documentation
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-2">
                <CountUp end={95} suffix="%" duration={2} useEasing={true} start={0} triggerOnce={true}>
                  {({ countUpRef, start }) => {
                    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
                    useEffect(() => { if (inView) start(); }, [inView, start]);
                    return <span ref={ref}><span ref={countUpRef} /></span>;
                  }}
                </CountUp>
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Accuracy Rate</div>
              <div className="text-gray-600">
                Medical-grade accuracy with clinical terminology understanding
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500 mb-2">
                24/7
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Always Available</div>
              <div className="text-gray-600">
                Cloud-based platform accessible anytime, anywhere, on any device
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" {...useScrollAnimation()} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Intelligent way to manage work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Record</h3>
              <p className="text-sm text-gray-600">
                Start recording your patient consultation with one click
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Transcribe</h3>
              <p className="text-sm text-gray-600">
                AI converts speech to text in real-time with medical accuracy
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Generate</h3>
              <p className="text-sm text-gray-600">
                Structured SOAP notes created automatically from conversation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Export</h3>
              <p className="text-sm text-gray-600">
                Review, edit, and export directly to your EHR system
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              From Visit to Note in<br />Just few Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-pink-200 rounded-3xl transform rotate-3 opacity-40"></div>
              <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Mic className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-2">Start Recording</div>
                    <div className="text-gray-600">Begin your patient visit</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl transform -rotate-3 opacity-40"></div>
              <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <FileText className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-2">Get Your Note</div>
                    <div className="text-gray-600">Complete SOAP note ready in seconds</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative md:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-orange-200 rounded-3xl transform rotate-2 opacity-40"></div>
              <div className="relative bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-2xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900 mb-4">Real-time Analytics</div>
                      <p className="text-gray-600">
                        Track your documentation efficiency, time saved, and note quality metrics in a beautiful dashboard.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white rounded-xl p-4 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Notes Created</span>
                        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
                          <CountUp end={247} duration={2} useEasing={true} start={0} triggerOnce={true}>
                            {({ countUpRef, start }) => {
                              const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
                              useEffect(() => { if (inView) start(); }, [inView, start]);
                              return <span ref={ref}><span ref={countUpRef} /></span>;
                            }}
                          </CountUp>
                        </span>
                      </div>
                      <div className="bg-white rounded-xl p-4 flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Hours Saved</span>
                        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                          <CountUp end={38.5} decimals={1} duration={2} useEasing={true} start={0} triggerOnce={true}>
                            {({ countUpRef, start }) => {
                              const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
                              useEffect(() => { if (inView) start(); }, [inView, start]);
                              return <span ref={ref}><span ref={countUpRef} /></span>;
                            }}
                          </CountUp>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section {...useScrollAnimation()} className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built with Doctors, for Doctors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600">
                Bank-level encryption, HIPAA compliance, and SOC 2 certification ensure your patient data is always protected.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl mb-4 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trusted by Thousands</h3>
              <p className="text-gray-600">
                Over 10,000 doctors across 50+ specialties rely on our platform for their daily documentation needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-orange-500 rounded-xl mb-4 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Always Improving</h3>
              <p className="text-gray-600">
                Our AI continuously learns and improves, with regular updates based on feedback from our medical community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" {...useScrollAnimation()} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find the right plan for your needs
            </h2>
            <p className="text-gray-600 text-lg">
              Start with a 14-day free trial. No credit card required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-orange-300 transition">
              <div className="text-sm font-semibold text-orange-600 mb-2">STARTER</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                $49<span className="text-lg text-gray-600">/mo</span>
              </div>
              <div className="text-gray-600 mb-6">Perfect for individual practitioners</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Up to 100 notes/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Real-time transcription</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">SOAP note generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Basic EHR integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Email support</span>
                </li>
              </ul>
              <a href={ctaLink} className="w-full border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-full hover:border-orange-500 hover:text-orange-500 transition text-center text-base font-medium">
                Start Free Trial
              </a>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl p-8 text-white transform scale-105 shadow-2xl">
              <div className="text-sm font-semibold mb-2">PROFESSIONAL</div>
              <div className="text-4xl font-bold mb-2">
                $99<span className="text-lg opacity-90">/mo</span>
              </div>
              <div className="opacity-90 mb-6">Most popular for busy practices</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Unlimited notes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Advanced AI features</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">All EHR integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Custom templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Analytics dashboard</span>
                </li>
              </ul>
              <a href={ctaLink} className="w-full bg-white text-orange-600 py-4 px-6 rounded-full font-semibold hover:shadow-xl transition text-center text-base">
                Start Free Trial
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 transition">
              <div className="text-sm font-semibold text-purple-600 mb-2">ENTERPRISE</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">Custom</div>
              <div className="text-gray-600 mb-6">For large healthcare organizations</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Everything in Professional</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Unlimited team members</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Custom AI training</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">SLA guarantee</span>
                </li>
              </ul>
              <a href={ctaLink} className="w-full border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-full hover:border-purple-500 hover:text-purple-500 transition text-center text-base font-medium">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" {...useScrollAnimation()} className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is my patient data secure and HIPAA compliant?
              </h3>
              <p className="text-gray-600">
                Yes, we take security seriously. Our platform is fully HIPAA compliant with end-to-end encryption, regular security audits, and SOC 2 Type II certification. All data is stored in secure, encrypted servers with strict access controls.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How accurate is the medical transcription?
              </h3>
              <p className="text-gray-600">
                Our AI achieves 95%+ accuracy with medical terminology, trained on millions of clinical conversations. The system continuously learns and improves, and you can always review and edit notes before finalizing.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Which EHR systems do you integrate with?
              </h3>
              <p className="text-gray-600">
                We integrate with all major EHR systems including Epic, Cerner, Athenahealth, Allscripts, and many more. We also provide API access for custom integrations with your existing workflow.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I try it before committing to a paid plan?
              </h3>
              <p className="text-gray-600">
                Absolutely! We offer a 14-day free trial with full access to all features. No credit card required. You can cancel anytime during the trial period with no obligations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What happens to my notes if I cancel?
              </h3>
              <p className="text-gray-600">
                You can export all your notes and data before canceling. We provide multiple export formats including PDF, Word, and structured data files. Your data remains accessible for 30 days after cancellation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section {...useScrollAnimation()} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 rounded-3xl transform rotate-3 opacity-60"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <Blog1 />
                <a
                  href={`/blog/blog1`}
                  className="mt-4 inline-flex items-center gap-2 text-orange-500 hover:text-orange-700 transition"
                >
                  Read More <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 rounded-3xl transform rotate-3 opacity-60"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <Blog2 />
                <a
                  href={`/blog/blog2`}
                  className="mt-4 inline-flex items-center gap-2 text-orange-500 hover:text-orange-700 transition"
                >
                  Read More <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="/blogs"
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition"
            >
              Blogs
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section {...useScrollAnimation()} className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Automate SOAP notes with<br />AI in seconds
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join thousands of doctors who have already transformed their practice
          </p>
          <a href={ctaLink} className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition">
            Get Started Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer {...useScrollAnimation()} className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logoImage} alt="Scribing.io Logo" className="w-8 h-8" />
                <span className="font-semibold text-xl">Scribing.io</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering healthcare professionals with AI-powered documentation solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="/blogs" className="hover:text-white transition">Blogs</a></li>
                <li><a href="/legal" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/legal" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/legal" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="/legal" className="hover:text-white transition">HIPAA Compliance</a></li>
                <li><a href="/legal" className="hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Scribing.io. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto">
            <button 
              onClick={() => setShowModal(false)} 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/2D0Kt46JBPA"
                title="Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;