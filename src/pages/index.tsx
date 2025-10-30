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
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "11+" },
  { label: "Technologies", value: "15+" },
];

const coreTechnologies = [
  {
    title: "Product Management",
    description: "Roadmapping, PRDs, A/B Testing, Feature Prioritization",
    icon: Target,
  },
  {
    title: "Data Analytics",
    description: "SQL, Power BI, Python for data-driven insights",
    icon: BarChart3,
  },
  {
    title: "UI/UX Design",
    description: "User research, prototyping, and design systems",
    icon: Frame,
  },
  {
    title: "Full-Stack Development",
    description: "React, Node.js, C#, .NET, SQL Server",
    icon: Code2,
  },
  {
    title: "Business Intelligence",
    description: "Dashboard creation and KPI frameworks",
    icon: TrendingUp,
  },
  {
    title: "System Integration",
    description: "ERP modules, automation, and cloud deployment",
    icon: Network,
  },
];

const projects = [
  {
    title: "CredPe",
    description: "Behavioral nudges for credit card payments using psychology to reduce procrastination. Improved task completion by 30% in pilot tests.",
    image: "/assets/brainstack.webm",
    href: "https://credpe-pay-smartly-now.lovable.app",
  },
  {
    title: "WellNest",
    description: "Mental wellness app for professionals with daily emotion tracking. Top 10 out of 200+ in ProductSpace Sprint.",
    image: "/assets/omnifood.webm",
    href: "https://indian-wellbeing-hub.lovable.app/welcome",
  },
  {
    title: "Messo",
    description: "MERN-based hostel mess management system for 500+ students with JWT authentication and Redis caching.",
    image: "/assets/portfolio.webm",
    href: "https://github.com/krizto8/Messo/tree/main/Messo/Messo-main",
  },
];

const projects1 = [
  {
    title: "IMDb Analytics",
    description: "Data intelligence platform processing 9,000+ titles with Power BI dashboards turning raw datasets into actionable insights.",
    image: "/assets/aichess.webm",
    href: "https://github.com/kavinarasan-005/IMDB-Data-Analysis-and-Visualization",
  },
  {
    title: "L'Oréal Challenge",
    description: "Inclusive sourcing roadmap with Supplier Inclusion Index. Reached Quarter-Finals globally with 600→3,000+ beneficiaries model.",
    image: "/assets/peter.webm",
    href: "https://www.canva.com/design/DAGw4g4SgQ0/qgY8XRsB5XXbOsOS88ZqNg/edit",
  },
];

const solutions = [
  {
    service: "Product Management",
    description: "Product roadmapping, PRDs, user stories, A/B testing, and feature prioritization for measurable impact.",
    icon: Target,
  },
  {
    service: "Data Analytics & BI",
    description: "Power BI dashboards, SQL optimization, KPI frameworks, and data visualization for decision-making.",
    icon: BarChart3,
  },
  {
    service: "Full-Stack Development",
    description: "React.js, Node.js, C#/.NET applications with cloud deployment and system integration capabilities.",
    icon: Code2,
  },
  {
    service: "UI/UX Design",
    description: "User research, wireframing, prototyping, and design systems using Figma for optimal user experiences.",
    icon: Frame,
  },
  {
    service: "Process Automation",
    description: "ERP modules, workflow automation, and system integration to reduce manual tasks and improve efficiency.",
    icon: Zap,
  },
];

const technicalHighlights = [
  {
    title: "MERN Stack Development",
    description: "Full-stack applications with React.js, Node.js, Express, and MongoDB including JWT authentication, Redis caching, and Docker deployment.",
    icon: Code2,
  },
  {
    title: "Power BI & SQL Analytics",
    description: "Complex dashboards with DAX functions, SQL optimization using CTEs and window functions for business intelligence and decision-making.",
    icon: BarChart3,
  },
  {
    title: "C# .NET ERP Systems",
    description: "Enterprise resource planning modules with SQL Server integration, Windows Services, and Classic ASP legacy system modernization.",
    icon: Database,
  },
  {
    title: "Behavioral Product Design",
    description: "User research methodologies, A/B testing frameworks, and behavioral psychology implementation using Fogg's Behavior Model for product optimization.",
    icon: Brain,
  },
  {
    title: "Cloud & DevOps",
    description: "AWS EC2 deployment, Docker containerization, Nginx load balancing, and automated CI/CD pipelines for scalable web applications.",
    icon: Cloud,
  },
];

const aiTrends = [
  {
    title: "Product Analytics",
    description: "Data-driven product decisions using cohort analysis, funnel optimization, and A/B testing to improve user activation and retention metrics.",
    icon: BarChart3,
  },
  {
    title: "Behavioral Design",
    description: "Psychology-driven UX design incorporating behavioral nudges, habit formation, and cognitive biases to drive user engagement and task completion.",
    icon: Brain,
  },
  {
    title: "Full-Stack Development",
    description: "Modern web applications using React ecosystem, Node.js backend, and cloud deployment with focus on scalability and user experience.",
    icon: Code2,
  },
  {
    title: "Business Intelligence",
    description: "Enterprise dashboards and KPI frameworks using Power BI, SQL, and Python to transform raw data into actionable business insights.",
    icon: TrendingUp,
  },
  {
    title: "System Integration",
    description: "ERP module development, legacy system modernization, and process automation to streamline business operations and reduce manual overhead.",
    icon: Network,
  },
  {
    title: "User Research",
    description: "Qualitative and quantitative research methods including user interviews, usability testing, and persona mapping for product optimization.",
    icon: Users,
  },
];

const caseStudies = [
  {
    title: "IT Service Optimization",
    description: "Analyzed 1,000+ IT service desk requests at Eros Group, built Power BI dashboards for senior leadership decision-making.",
    metric: "↑40% efficiency",
    icon: TrendingUp,
  },
  {
    title: "ERP Process Automation",
    description: "Developed 3 internal ERP modules using C#/.NET, automating manual processes and improving data accuracy across departments.",
    metric: "↓50% manual tasks",
    icon: Zap,
  },
  {
    title: "Behavioral UX Design",
    description: "CredPe app with behavioral nudges using psychology principles, achieving measurable improvement in user task completion rates.",
    metric: "↑30% completion",
    icon: Brain,
  },
];

const officeLocations = [
  {
    city: "Dubai, UAE",
    address: "Currently based in Dubai",
    email: "kavinarasan2019@gmail.com",
    icon: MapPin,
  },
  {
    city: "Gwalior, India",
    address: "ABV-IIITM Gwalior, Madhya Pradesh",
    email: "Student at IIITM Gwalior",
    icon: Building,
  },
];

const careers = [
  {
    title: "Product Manager Intern",
    location: "Remote/Dubai",
    requirement: "Available from Jan 2026",
    experience: "Product roadmapping, A/B testing, and user research experience",
    icon: Target,
  },
  {
    title: "Data Analyst Intern",
    location: "Remote/Dubai", 
    requirement: "Available from Jan 2026",
    experience: "Power BI, SQL, and Python analytics experience",
    icon: BarChart3,
  },
  {
    title: "Software Developer Intern",
    location: "Remote/Dubai",
    requirement: "Available from Jan 2026",
    experience: "Full-stack development with React, Node.js, and C#/.NET",
    icon: Code2,
  },
];

const benefits = [
  {
    title: "Product & Analytics Excellence",
    description: "Strong foundation in product management methodologies, A/B testing frameworks, and data analytics using SQL, Power BI, and Python for data-driven decision making.",
    icon: Target,
  },
  {
    title: "Full-Stack Development Skills",
    description: "Comprehensive experience with modern web technologies including React.js, Node.js, C#/.NET, and cloud deployment for scalable application development.",
    icon: Code2,
  },
  {
    title: "Design & User Research",
    description: "UI/UX design expertise with Figma, user research methodologies, behavioral design principles, and prototyping for optimal user experiences.",
    icon: Frame,
  },
  {
    title: "Cross-Functional Collaboration",
    description: "Proven ability to work across business and technical teams, translating requirements into technical solutions and driving projects from concept to completion.",
    icon: Users,
  },
  {
    title: "Process Automation & Efficiency",
    description: "Experience in building ERP modules, automating manual processes, and creating workflows that improve operational efficiency and reduce costs.",
    icon: Zap,
  },
  {
    title: "Academic Excellence & Learning",
    description: "Currently pursuing B.Tech in Computer Science at IIITM Gwalior with hands-on project experience and multiple certifications in product management and analytics.",
    icon: Award,
  },
  {
    title: "Real-World Impact",
    description: "Track record of delivering measurable results including 30% improvement in task completion rates, 40% reduction in manual tasks, and successful project implementations.",
    icon: Heart,
  },
];

const testimonials = [
  {
    quote: "Kavin's analytical approach and dashboard insights significantly improved our IT operations efficiency.",
    author: "IT Leadership Team",
    company: "Eros Group",
  },
  {
    quote: "Delivered clean, responsive React.js components that perfectly matched our design requirements.",
    author: "Project Manager",
    company: "LUMINTRIQAI",
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
                  Hi, I'm
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
                  Kavin Arasan
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
              >
                Product & Data Analyst passionate about turning data into decisions and insights into products. Currently pursuing B.Tech. in Computer Science.
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
                onClick={() => scrollTo(document.querySelector("#about"))}
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
              I enjoy building dashboards that uncover hidden trends, designing user experiences that drive behavior, and collaborating across business and tech to make measurable impact. Currently seeking internships in Product, Analytics, and Development from January 2026.
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
                    Technologies
                  </span>
                </h2>
                <p className="mt-2 tracking-tighter text-secondary-foreground">
                  Our cutting-edge AI technologies power the future of climate intelligence.
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
