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
    title: "CredPe",
    description: "Behavioral nudges for credit card payments using psychology. Improved task completion by 30% through A/B testing and user research.",
    image: "/assets/brainstack.webm",
    href: "https://credpe-pay-smartly-now.lovable.app",
  },
  {
    title: "WellNest",
    description: "Mental wellness MVP for professionals. Top 10 finalist out of 200+ teams in ProductSpace Sprint with retention analytics.",
    image: "/assets/omnifood.webm",
    href: "https://indian-wellbeing-hub.lovable.app/welcome",
  },
  {
    title: "Messo",
    description: "MERN-based hostel mess management system for 500+ students. Reduced downtime by 30% with JWT auth and Redis caching.",
    image: "/assets/portfolio.webm",
    href: "https://github.com/krizto8/Messo/tree/main/Messo/Messo-main",
  },
];

const projects1 = [
  {
    title: "IMDb Analytics",
    description: "BI platform analyzing 9,000+ titles with Power BI dashboards. Processed Netflix/IMDb data for actionable business insights.",
    image: "/assets/aichess.webm",
    href: "https://github.com/kavinarasan-005/IMDB-Data-Analysis-and-Visualization",
  },
  {
    title: "L'Oréal Challenge",
    description: "3-year inclusive sourcing roadmap with KPI design. Reached Quarter-Finals globally, modeled 3,000+ beneficiary growth.",
    image: "/assets/peter.webm",
    href: "https://www.canva.com/design/DAGw4g4SgQ0/qgY8XRsB5XXbOsOS88ZqNg/edit",
  },
];

const solutions = [
  {
    service: "Product Strategy & Roadmapping",
    description: "End-to-end product management from ideation to launch, with user research, PRDs, and feature prioritization frameworks.",
    icon: Target,
  },
  {
    service: "Data Analytics & BI",
    description: "Business intelligence dashboards, KPI frameworks, SQL analysis, and data visualization for actionable insights.",
    icon: BarChart3,
  },
  {
    service: "Full-Stack Development",
    description: "Modern web applications using React, Node.js, and cloud deployment with focus on scalability and performance.",
    icon: Code2,
  },
  {
    service: "UI/UX Design & Research",
    description: "User-centered design processes, prototyping, usability testing, and conversion optimization through behavioral insights.",
    icon: Frame,
  },
  {
    service: "Process Automation",
    description: "Workflow optimization, ERP module development, and system integration to reduce manual tasks and improve efficiency.",
    icon: Zap,
  },
];

const technicalHighlights = [
  {
    title: "Product Management",
    description: "A/B testing, user research, roadmapping, and feature prioritization using data-driven frameworks and agile methodologies.",
    icon: Target,
  },
  {
    title: "Business Intelligence",
    description: "Power BI dashboards, SQL optimization, and KPI frameworks that turn complex data into actionable business insights.",
    icon: BarChart3,
  },
  {
    title: "MERN Stack Development", 
    description: "Full-stack applications using MongoDB, Express, React, and Node.js with JWT authentication and Redis caching.",
    icon: Code2,
  },
  {
    title: "Process Automation",
    description: "C# .NET applications, Windows Services, and ERP modules that automate workflows and improve operational efficiency.",
    icon: Zap,
  },
  {
    title: "UX Research & Design",
    description: "User interviews, journey mapping, behavioral analysis, and Figma prototyping for conversion-focused experiences.",
    icon: Users,
  },
];

const careerFocus = [
  {
    title: "Product Management",
    description: "Roadmapping, user research, A/B testing, and feature prioritization using data-driven frameworks for measurable business impact.",
    icon: Target,
  },
  {
    title: "Business Analytics",
    description: "SQL optimization, dashboard creation, KPI design, and cohort analysis to turn complex data into strategic insights.",
    icon: BarChart3,
  },
  {
    title: "Full-Stack Development",
    description: "Modern web applications using React, Node.js, and cloud deployment with focus on scalability and user experience.",
    icon: Code2,
  },
  {
    title: "UX Research & Design",
    description: "User interviews, behavioral analysis, prototyping, and conversion optimization through evidence-based design decisions.",
    icon: Frame,
  },
  {
    title: "Process Automation",
    description: "Workflow optimization, ERP development, and system integration to eliminate manual tasks and improve efficiency.",
    icon: Zap,
  },
  {
    title: "Data Visualization",
    description: "Power BI, Tableau, and Python-based dashboards that communicate complex insights through compelling visual narratives.",
    icon: Activity,
  },
];

const caseStudies = [
  {
    title: "CredPe Behavioral Design",
    description: "Designed credit card payment experience using behavioral psychology and Fogg's Behavior Model to reduce procrastination.",
    metric: "↑30% completion rate",
    icon: TrendingUp,
  },
  {
    title: "Eros IT Dashboard Impact",
    description: "Built Power BI dashboards analyzing 1,000+ IT service requests to optimize support efficiency for senior leadership.",
    metric: "↓40% manual tasks",
    icon: Activity,
  },
  {
    title: "Messo System Optimization",
    description: "Developed MERN-based hostel management system with JWT auth and Redis caching serving 500+ students daily.",
    metric: "↓30% system downtime",
    icon: Globe2,
  },
];

const contactInfo = [
  {
    city: "Dubai, UAE",
    address: "Available for Remote & On-site Work",
    email: "kavinarasan2019@gmail.com",
    icon: MapPin,
  },
  {
    city: "LinkedIn",
    address: "Professional Network & Updates",
    email: "linkedin.com/in/kavinarasan",
    icon: Linkedin,
  },
  {
    city: "GitHub",
    address: "Open Source Projects & Code",
    email: "github.com/kavinarasan-005",
    icon: Code2,
  },
  {
    city: "Resume",
    address: "Detailed Experience & Skills",
    email: "Download PDF Resume",
    icon: FileText,
  },
];

const opportunities = [
  {
    title: "Product Management Intern",
    location: "Remote/Hybrid",
    requirement: "January 2026 onwards",
    experience: "Roadmapping, A/B testing, user research, and data-driven feature prioritization.",
    icon: Target,
  },
  {
    title: "Business Analytics Intern",
    location: "Remote/Hybrid",
    requirement: "January 2026 onwards",
    experience: "SQL, Power BI, dashboard creation, and KPI frameworks for business insights.",
    icon: BarChart3,
  },
  {
    title: "Software Development Intern",
    location: "Remote/Hybrid",
    requirement: "January 2026 onwards",
    experience: "React, Node.js, Python, C#, and full-stack application development.",
    icon: Code2,
  },
];

const workingPrinciples = [
  {
    title: "Data-Driven Decision Making",
    description: "I believe in letting data guide every decision. Whether it's A/B testing product features or analyzing user behavior, I use metrics and analytics to validate assumptions and optimize outcomes.",
    icon: BarChart3,
  },
  {
    title: "User-Centered Design Approach",
    description: "Every solution starts with understanding the user. Through interviews, journey mapping, and behavioral analysis, I ensure that products solve real problems and create meaningful experiences.",
    icon: Users,
  },
  {
    title: "Cross-Functional Collaboration",
    description: "Great products are built by great teams. I thrive in environments where business, design, and engineering work together, bringing diverse perspectives to solve complex challenges.",
    icon: Globe,
  },
  {
    title: "Continuous Learning & Growth",
    description: "Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, earning certifications, and staying updated with industry trends to deliver cutting-edge solutions.",
    icon: Lightbulb,
  },
  {
    title: "Process Optimization Focus",
    description: "I see inefficiencies as opportunities. From automating manual workflows to building scalable systems, I'm passionate about creating solutions that save time and improve productivity.",
    icon: Zap,
  },
  {
    title: "Quality & Attention to Detail",
    description: "Whether it's clean code, polished designs, or accurate analytics, I believe that attention to detail makes the difference between good and exceptional work.",
    icon: CheckCircle,
  },
  {
    title: "Impact-Driven Mindset",
    description: "I measure success by real business impact. Whether it's improving conversion rates, reducing operational costs, or enhancing user satisfaction, I focus on outcomes that matter.",
    icon: Heart,
  },
];

const testimonials = [
  {
    quote: "Kavin's analytical mindset and technical skills made him invaluable to our IT operations. His Power BI dashboards transformed how we view and manage our service requests.",
    author: "IT Leadership Team",
    company: "Eros Group, Dubai",
  },
  {
    quote: "Outstanding work on the ERP modules. Kavin's attention to detail and systematic approach significantly improved our operational efficiency.",
    author: "Senior Manager",
    company: "Crossword ERP Division",
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
        multiplier: 0.5,
        class: "is-revealed",
        scrollbarContainer: false,
        lerp: 0.05,
        smartphone: {
          smooth: false
        },
        tablet: {  
          smooth: false,
          breakpoint: 1024
        }
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
      speed: 150,
      glare: false,
      gyroscope: false,
      perspective: 400,
      scale: 1.005,
      transition: true,
      max: 3,
      reset: true,
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
            <div className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3">
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
            </div>
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
              ✨ Featured Projects
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Product & Analytics Portfolio.
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              A showcase of my work in product management, data analytics, and full-stack development with measurable impact.
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
            <div className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3">
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
            </div>
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
            <div className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3">
              <div className="flex flex-col py-6 xl:p-6">
                <h2 className="text-4xl font-medium tracking-tight">
                  Technical
                  <br />
                  <span className="text-gradient clash-grotesk tracking-normal">
                    Highlights
                  </span>
                </h2>
                <p className="mt-2 tracking-tighter text-secondary-foreground">
                  Key technical competencies and real-world experience that drive results.
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
            </div>
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
                Measurable achievements and impact from my projects and internships.
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
            <div className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3">
              <div className="flex flex-col py-6 xl:p-6">
                <h2 className="text-4xl font-medium tracking-tight">
                  Career Focus &
                  <br />
                  <span className="text-gradient clash-grotesk tracking-normal">
                    Expertise
                  </span>
                </h2>
                <p className="mt-2 tracking-tighter text-secondary-foreground">
                  Areas where I deliver the most impact through data-driven solutions and user-centered design.
                </p>
              </div>
              {careerFocus.map((trend) => (
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
            </div>
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
                What
                <span className="text-gradient clash-grotesk tracking-normal"> Colleagues</span> Say
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

        {/* Contact Information */}
        <section id="locations" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <div className="text-center">
              <h2 className="text-4xl font-medium tracking-tight xl:text-6xl">
                Get In
                <span className="text-gradient clash-grotesk tracking-normal"> Touch</span>
              </h2>
              <p className="mt-2 tracking-tighter text-secondary-foreground">
                Let's connect and explore opportunities to work together.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {contactInfo.map((office) => (
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

        {/* Career Opportunities */}
        <section id="careers" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <div className="text-center">
              <h2 className="text-4xl font-medium tracking-tight xl:text-6xl">
                Seeking
                <span className="text-gradient clash-grotesk tracking-normal"> Opportunities</span>
              </h2>
              <p className="mt-2 tracking-tighter text-secondary-foreground">
                Available for internships starting January 2026.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {opportunities.map((career) => (
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

        {/* Working Principles */}
        <section id="benefits" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <div className="text-center">
              <h2 className="text-4xl font-medium tracking-tight xl:text-6xl">
                How I
                <span className="text-gradient clash-grotesk tracking-normal"> Work</span>
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {workingPrinciples.map((benefit) => (
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
              Let&apos;s{" "}
              <span className="text-gradient clash-grotesk">collaborate.</span>
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              Ready to work together? I'm available for internships starting January 2026 and always open to discuss exciting projects.
            </p>
            <div className="mt-6 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="mailto:kavinarasan2019@gmail.com" passHref>
                <Button>
                  Get in touch <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/resume.pdf" target="_blank" passHref>
                <Button variant="outline">
                  Download Resume <FileText className="ml-1 h-4 w-4" />
                </Button>
              </Link>
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
