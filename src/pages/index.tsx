import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code2,
  Frame,
  SearchCheck,
  Eye,
  MonitorSmartphone,
  Globe,
  Leaf,
  Brain,
  Satellite,
  Building,
  Users,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  FileText,
  Upload,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Zap,
  Shield,
  Cpu,
  Database,
  Network,
  Cloud,
  Target,
  Lightbulb,
  BarChart3,
  Activity,
  Globe2,
  Smartphone,
  Server,
  Bot,
  BrainCircuit,
  Sparkles,
  Rocket,
  Award,
  Heart,
  Star,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";

const aboutStats = [
  { label: "Years of Experience", value: "2+" },
  { label: "Projects Completed", value: "11+" },
  { label: "Certifications", value: "6+" },
];

const coreTechnologies = [
  {
    title: "Product Management",
    description: "Roadmapping, PRDs, A/B Testing, Feature Prioritization",
    icon: Target,
  },
  {
    title: "Data Analytics",
    description: "SQL, Power BI, Python, Data Visualization",
    icon: BarChart3,
  },
  {
    title: "Full-Stack Development",
    description: "React, Node.js, MongoDB, C#, .NET",
    icon: Code2,
  },
  {
    title: "UI/UX Design",
    description: "Figma, User Research, Prototyping, Journey Mapping",
    icon: Frame,
  },
  {
    title: "Business Intelligence",
    description: "Dashboard creation, KPI frameworks, Metric definition",
    icon: TrendingUp,
  },
  {
    title: "Process Automation",
    description: "Workflow optimization, System integration",
    icon: Zap,
  },
];

const projects = [
  {
    title: "ClimateTwin",
    description: "AI-Powered Digital Climate Twins - Real-time virtual replicas of geographic regions for scenario modeling and risk testing.",
    image: "/assets/brainstack.webm",
    href: "#",
  },
  {
    title: "VisionEarth",
    description: "Satellite-AI Fusion for Ecosystem Monitoring - Tracks environmental change with multispectral imaging and CV pipelines.",
    image: "/assets/omnifood.webm",
    href: "#",
  },
  {
    title: "GreenMind",
    description: "Low-Energy AI for Smart Agriculture - Edge-deployed ML models optimizing water usage, soil health, and yield.",
    image: "/assets/portfolio.webm",
    href: "#",
  },
];

const projects1 = [
  {
    title: "UrbanFlowAI",
    description: "City Resilience via Predictive AI - Detects urban climate risks and automates municipal responses in real time.",
    image: "/assets/aichess.webm",
    href: "#",
  },
  {
    title: "BioSynth",
    description: "Generative AI for Eco-Material Discovery - Accelerates discovery of carbon-negative, biodegradable materials.",
    image: "/assets/peter.webm",
    href: "#",
  },
];

const solutions = [
  {
    service: "Web Development",
    description: "Custom websites and web applications built with modern frameworks like React, Next.js, and Vue.js for optimal performance.",
    icon: Globe,
  },
  {
    service: "Mobile Development",
    description: "Cross-platform mobile applications using React Native and Flutter, delivering native-like experiences across devices.",
    icon: MonitorSmartphone,
  },
  {
    service: "Full Stack Solutions",
    description: "End-to-end development services from database design to frontend implementation with seamless API integration.",
    icon: Database,
  },
  {
    service: "UI/UX Design",
    description: "User-centered design approach creating intuitive interfaces that enhance user experience and drive engagement.",
    icon: Frame,
  },
  {
    service: "Consulting & Strategy",
    description: "Technical consulting to help businesses choose the right technology stack and development approach for their goals.",
    icon: Lightbulb,
  },
];

const technicalHighlights = [
  {
    title: "Diffusion Transformers",
    description: "Advanced generative models combining diffusion processes with transformer architectures for high-quality data synthesis and prediction.",
    icon: Cpu,
  },
  {
    title: "Neuro-Symbolic Reasoning",
    description: "Hybrid AI systems that combine neural networks with symbolic reasoning for interpretable and robust decision-making capabilities.",
    icon: Brain,
  },
  {
    title: "Federated Learning",
    description: "Distributed machine learning approach enabling model training across edge devices while preserving data privacy and security.",
    icon: Network,
  },
  {
    title: "Multi-Agent Systems",
    description: "Complex simulation environments where multiple AI agents interact and collaborate to model real-world scenarios and behaviors.",
    icon: Users,
  },
  {
    title: "TinyML for Energy Grids",
    description: "Ultra-efficient machine learning models optimized for microcontrollers in renewable energy grid management and optimization.",
    icon: Zap,
  },
];

const aiTrends = [
  {
    title: "Multimodal AI",
    description: "Advanced AI systems that process and understand multiple types of data simultaneously - text, images, audio, and video - creating more human-like intelligence.",
    icon: Globe,
  },
  {
    title: "Agentic Systems",
    description: "Autonomous AI agents that can plan, reason, and take actions independently to achieve complex goals, revolutionizing automation and decision-making.",
    icon: Bot,
  },
  {
    title: "Edge AI",
    description: "Bringing AI processing power directly to devices and sensors, enabling real-time intelligence with reduced latency and enhanced privacy protection.",
    icon: Smartphone,
  },
  {
    title: "AI for Robotics",
    description: "Intelligent robotic systems powered by advanced AI algorithms, enabling sophisticated manipulation, navigation, and human-robot collaboration.",
    icon: Server,
  },
  {
    title: "AI Explainability",
    description: "Making AI decision-making processes transparent and interpretable, building trust and enabling responsible AI deployment in critical applications.",
    icon: Shield,
  },
  {
    title: "Sustainable AI",
    description: "Developing energy-efficient AI models and responsible practices that minimize environmental impact while maximizing societal benefits.",
    icon: Leaf,
  },
];

const caseStudies = [
  {
    title: "Crop Yield Prediction",
    description: "Advanced machine learning models analyzing satellite imagery, weather patterns, and soil data to predict crop yields with unprecedented accuracy.",
    metric: "↑92% accuracy",
    icon: TrendingUp,
  },
  {
    title: "Urban Heat Index Forecast",
    description: "Real-time urban climate monitoring system using IoT sensors and AI algorithms to predict heat island effects and optimize city planning.",
    metric: "↓40% model latency",
    icon: Activity,
  },
  {
    title: "Flood Risk Modeling",
    description: "Comprehensive flood prediction system combining hydrological data, topography, and climate models to enhance disaster preparedness.",
    metric: "↑30% response window",
    icon: Globe2,
  },
];

const officeLocations = [
  {
    city: "London, UK",
    address: "Shoreditch Tech Campus, London E1",
    email: "uk@climateai.org",
    icon: MapPin,
  },
  {
    city: "Bangkok, Thailand",
    address: "Sukhumvit Innovation Hub, Bangkok 10110",
    email: "asia@climateai.org",
    icon: MapPin,
  },
  {
    city: "Pune, India",
    address: "Magarpatta Cyber City, Pune MH 411028",
    email: "pune@climateai.org",
    icon: MapPin,
  },
  {
    city: "Gurgaon, India",
    address: "DLF Cyber City, Tower B, Gurgaon HR 122002",
    email: "gurgaon@climateai.org",
    icon: MapPin,
  },
];

const careers = [
  {
    title: "AI Research Scientist",
    location: "Remote",
    requirement: "Ph.D. required",
    experience: "5–10 years of experience in research publication and patent filing.",
    icon: Brain,
  },
  {
    title: "ML Engineer",
    location: "Remote",
    requirement: "Ph.D. required",
    experience: "5–10 years of experience in research",
    icon: Cpu,
  },
  {
    title: "Deep Learning Specialist",
    location: "Remote",
    requirement: "Ph.D. required",
    experience: "2–3 years of experience in research",
    icon: Network,
  },
];

const benefits = [
  {
    title: "Remote-First & Async-Friendly Culture",
    description: "Work from anywhere in the world with flexible schedules that respect your work-life balance. Our global team collaborates seamlessly across time zones, empowering you to do your best work when and where you're most productive.",
    icon: Globe,
  },
  {
    title: "Access to Cutting-Edge Infrastructure",
    description: "Leverage state-of-the-art GPU clusters, cloud computing resources, and curated datasets. Our world-class infrastructure removes technical barriers, letting you focus on breakthrough AI/ML research and innovation.",
    icon: Server,
  },
  {
    title: "Open Source & Research Publication Support",
    description: "Share your discoveries with the world. We actively support publishing in top-tier conferences and contributing to open-source projects, helping you build your reputation while advancing the field of AI for good.",
    icon: FileText,
  },
  {
    title: "Collaborative & Inclusive Research Culture",
    description: "Thrive in a diverse environment where every voice matters. Our inclusive culture fosters open collaboration, shared learning, and collective problem-solving across disciplines and backgrounds.",
    icon: Users,
  },
  {
    title: "Freedom to Innovate",
    description: "Lead projects that align with your passions and expertise. We empower team members to explore bold ideas, take ownership of research directions, and drive initiatives that could reshape how AI addresses global challenges.",
    icon: Lightbulb,
  },
  {
    title: "Mentorship & Growth",
    description: "Accelerate your career with structured mentorship programs, continuous learning opportunities, and skill development resources. Whether you're early-career or seasoned, we invest in your professional growth.",
    icon: Award,
  },
  {
    title: "Mission-Driven Impact",
    description: "Make a difference that matters. Every project contributes to solving critical sustainability challenges and creating positive global impact through responsible AI innovation. Your work here changes the world.",
    icon: Heart,
  },
];

const testimonials = [
  {
    quote: "ClimateAI helped us cut forecasting time in half while improving accuracy.",
    author: "Dr. Sarah Chen",
    company: "Global Weather Systems",
  },
  {
    quote: "Our carbon analysis was transformed through their Edge-AI sensors.",
    author: "Mark Rodriguez",
    company: "EcoTech Solutions",
  },
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
          console.log(li.getAttribute("href"));
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        {/* Hero Section */}
        <section
          id="home"
          data-scroll-section
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="flex flex-row items-center space-x-1.5"
            >
              <span className={styles.pill}>Product</span>
              <span className={styles.pill}>Analytics</span>
              <span className={styles.pill}>Development</span>
            </div>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                  Hi, I'm Kavin Arasan
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
                  Product & Data Analyst
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
              >
                Passionate about turning data into decisions and insights into products. Building dashboards that uncover hidden trends and designing user experiences that drive behavior.
              </p>
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="flex flex-row items-center space-x-1.5 pt-6"
            >
              <Link href="#contact" passHref>
                <Button>
                  Get in touch <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => scrollTo("#about")}
              >
                Learn More
              </Button>
            </span>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"],
              )}
            >
              Scroll to discover{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="-.01"
            id={styles["canvas-container"]}
            className="mt-14 h-full w-full xl:mt-0"
          >
            <Suspense fallback={<span>Loading...</span>}>
              <Spline scene="/assets/scene.splinecode" />
            </Suspense>
          </div>
        </section>

        {/* About */}
        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-14 flex max-w-6xl flex-col justify-start space-y-10"
          >
            <h2 className="py-16 pb-2 text-3xl font-light leading-normal tracking-tighter text-foreground xl:text-[40px]">
              Currently pursuing B.Tech. in Computer Science at ABV-IIITM Gwalior and seeking internships in Product, Analytics, and Development starting January 2026. I enjoy collaborating across business and tech to make measurable impact through data-driven insights.
            </h2>
            <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center xl:items-start xl:text-start"
                >
                  <span className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">
                    {stat.value}
                  </span>
                  <span className="tracking-tight text-muted-foreground xl:text-lg">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Technologies */}
        <section id="technologies" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                staggerChildren: 0.5,
              }}
              viewport={{ once: true }}
              className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3"
            >
              <div className="flex flex-col py-6 xl:p-6">
                <h2 className="text-4xl font-medium tracking-tight">
                  Core
                  <br />
                  <span className="text-gradient clash-grotesk tracking-normal">
                    Skills
                  </span>
                </h2>
                <p className="mt-2 tracking-tighter text-secondary-foreground">
                  My expertise spans product management, data analytics, and full-stack development.
                </p>
              </div>
              {coreTechnologies.map((tech) => (
                <div
                  key={tech.title}
                  className="flex flex-col items-start rounded-md bg-white/5 p-14 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md"
                >
                  <tech.icon className="my-6 text-primary" size={20} />
                  <span className="text-lg tracking-tight text-foreground">
                    {tech.title}
                  </span>
                  <span className="mt-2 tracking-tighter text-muted-foreground">
                    {tech.description}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" data-scroll-section>
          {/* Gradient */}
          <div className="relative isolate -z-10">
            <div
              className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80 lg:-top-60"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary via-primary to-secondary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
          <div data-scroll data-scroll-speed=".4" className="my-64">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              ✨ Projects & Products
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Revolutionary climate solutions.
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              Our innovative projects are transforming how we understand and respond to climate challenges.
            </p>

            {/* Carousel */}
            <div className="mt-14">
              <Carousel setApi={setCarouselApi} className="w-full ">
                <CarouselContent>
                  {projects.map((project,index) => (
                    <CarouselItem key={index} className="md:basis-1/3">
                      <Card id="tilt">
                        <CardHeader className="p-0">
                          <Link href={project.href} target="_blank" passHref>
                            {project.image.endsWith(".webm") ? (
                              <video
                                src={project.image}
                                autoPlay
                                loop
                                muted
                                className="aspect-video h-full w-full rounded-t-md bg-primary object-cover object-fill"
                              />
                            ) : (
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={300}
                                quality={100}
                                className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                              />
                            )}
                          </Link>
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter">
                            {project.description}
                          </CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <div className="h-[4rem]"></div>

              <Carousel setApi={setCarouselApi} className="w-full ">
                <CarouselContent>
                  {projects1.map((project,index) => (
                    <CarouselItem key={index} className="md:basis-1/3">
                      <Card id="tilt">
                        <CardHeader className="p-0">
                          <Link href={project.href} target="_blank" passHref>
                            {project.image.endsWith(".webm") ? (
                              <video
                                src={project.image}
                                autoPlay
                                loop
                                muted
                                className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                              />
                            ) : (
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={300}
                                quality={100}
                                className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                              />
                            )}
                          </Link>
                        </CardHeader>
                        <CardContent className="absolute bottom-0 w-full bg-background/50 backdrop-blur">
                          <CardTitle className="border-t border-white/5 p-4 text-base font-normal tracking-tighter">
                            {project.description}
                          </CardTitle>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="py-2 text-center text-sm text-muted-foreground">
                <span className="font-semibold">Scroll Horizontally</span>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Powered Solutions */}
        <section id="solutions" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                staggerChildren: 0.5,
              }}
              viewport={{ once: true }}
              className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3"
            >
              <div className="flex flex-col py-6 xl:p-6">
                <h2 className="text-4xl font-medium tracking-tight">
                  Services
                  <br />
                  <span className="text-gradient clash-grotesk tracking-normal">
                    I Offer
                  </span>
                </h2>
                <p className="mt-2 tracking-tighter text-secondary-foreground">
                  Professional development services to bring your ideas to life.
                </p>
              </div>
              {solutions.map((solution) => (
                <div
                  key={solution.service}
                  className="flex flex-col items-start rounded-md bg-white/5 p-14 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md"
                >
                  <solution.icon className="my-6 text-primary" size={20} />
                  <span className="text-lg tracking-tight text-foreground">
                    {solution.service}
                  </span>
                  <span className="mt-2 tracking-tighter text-muted-foreground">
                    {solution.description}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Technical Highlights */}
        <section id="technical" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                staggerChildren: 0.5,
              }}
              viewport={{ once: true }}
              className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3"
            >
              <div className="flex flex-col py-6 xl:p-6">
                <h2 className="text-4xl font-medium tracking-tight">
                  Technical
                  <br />
                  <span className="text-gradient clash-grotesk tracking-normal">
                    Highlights
                  </span>
                </h2>
                <p className="mt-2 tracking-tighter text-secondary-foreground">
                  Cutting-edge AI technologies driving climate innovation.
                </p>
              </div>
              {technicalHighlights.map((tech) => (
                <div
                  key={tech.title}
                  className="flex flex-col items-start rounded-md bg-white/5 p-14 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md"
                >
                  <tech.icon className="my-6 text-primary" size={20} />
                  <span className="text-lg tracking-tight text-foreground">
                    {tech.title}
                  </span>
                  <span className="mt-2 tracking-tighter text-muted-foreground">
                    {tech.description}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="case-studies" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <div className="text-center">
              <h2 className="text-4xl font-medium tracking-tight xl:text-6xl">
                Case
                <span className="text-gradient clash-grotesk tracking-normal"> Studies</span>
              </h2>
              <p className="mt-2 tracking-tighter text-secondary-foreground">
                Real-world impact through AI-driven climate solutions.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {caseStudies.map((study) => (
                <Card key={study.title} className="bg-white/5 backdrop-blur">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <study.icon className="text-primary" size={24} />
                      <span className="text-gradient font-semibold">{study.metric}</span>
                    </div>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{study.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* AI Trends */}
        <section id="trends" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                staggerChildren: 0.5,
              }}
              viewport={{ once: true }}
              className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3"
            >
              <div className="flex flex-col py-6 xl:p-6">
                <h2 className="text-4xl font-medium tracking-tight">
                  AI Trends &
                  <br />
                  <span className="text-gradient clash-grotesk tracking-normal">
                    Insights
                  </span>
                </h2>
                <p className="mt-2 tracking-tighter text-secondary-foreground">
                  The latest developments in AI technology and their climate applications.
                </p>
              </div>
              {aiTrends.map((trend) => (
                <div
                  key={trend.title}
                  className="flex flex-col items-start rounded-md bg-white/5 p-14 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md"
                >
                  <trend.icon className="my-6 text-primary" size={20} />
                  <span className="text-lg tracking-tight text-foreground">
                    {trend.title}
                  </span>
                  <span className="mt-2 tracking-tighter text-muted-foreground">
                    {trend.description}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <div className="text-center">
              <h2 className="text-4xl font-medium tracking-tight xl:text-6xl">
                What Our
                <span className="text-gradient clash-grotesk tracking-normal"> Partners</span> Say
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.author} className="bg-white/5 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Star className="text-primary mt-1" size={20} />
                      <div>
                        <p className="text-lg italic">"{testimonial.quote}"</p>
                        <div className="mt-4">
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section id="locations" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <div className="text-center">
              <h2 className="text-4xl font-medium tracking-tight xl:text-6xl">
                Global
                <span className="text-gradient clash-grotesk tracking-normal"> Presence</span>
              </h2>
              <p className="mt-2 tracking-tighter text-secondary-foreground">
                Our offices around the world driving climate innovation.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {officeLocations.map((office) => (
                <Card key={office.city} className="bg-white/5 backdrop-blur">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <office.icon className="text-primary" size={20} />
                      <CardTitle className="text-lg">{office.city}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{office.address}</p>
                    <Link href={`mailto:${office.email}`} className="text-primary hover:underline">
                      {office.email}
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Careers */}
        <section id="careers" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <div className="text-center">
              <h2 className="text-4xl font-medium tracking-tight xl:text-6xl">
                Join Our
                <span className="text-gradient clash-grotesk tracking-normal"> Team</span>
              </h2>
              <p className="mt-2 tracking-tighter text-secondary-foreground">
                Build the future of climate AI with us.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {careers.map((career) => (
                <Card key={career.title} className="bg-white/5 backdrop-blur">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <career.icon className="text-primary" size={20} />
                      <CardTitle className="text-lg">{career.title}</CardTitle>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="text-muted-foreground" size={16} />
                      <span className="text-muted-foreground">{career.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-semibold text-primary mb-2">{career.requirement}</p>
                    <p className="text-muted-foreground">{career.experience}</p>
                    <Button className="mt-4 w-full">
                      Apply Now <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <div className="text-center">
              <h2 className="text-4xl font-medium tracking-tight xl:text-6xl">
                What We
                <span className="text-gradient clash-grotesk tracking-normal"> Offer</span>
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="bg-white/5 backdrop-blur">
                  <CardHeader>
                    <benefit.icon className="text-primary mb-2" size={24} />
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-scroll-section className="my-64">
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
          >
            <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
              Let&apos;s build a{" "}
              <span className="text-gradient clash-grotesk">sustainable future.</span>
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              Ready to collaborate on climate AI solutions? Get in touch with our team.
            </p>
            <div className="mt-6 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="mailto:contact@climateai.org" passHref>
                <Button>
                  Get in touch <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline">
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
