import { projectData } from "@/data/projects";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AIMatchingScreen } from "@/components/screens/AIMatchingScreen";
import { EducationScreen } from "@/components/screens/EducationScreen";
import { GamingScreen } from "@/components/screens/GamingScreen";
import { AsaniScreen } from "@/components/screens/AsaniScreen";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projectData[params.slug as keyof typeof projectData];
  if (!project) return { title: 'Project Not Found' };
  
  return {
    title: `${project.title} | Usama Sohail`,
    description: project.overview,
  };
}

export default function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  const project = projectData[params.slug as keyof typeof projectData];
  
  if (!project) {
    notFound();
  }

  // Determine which screen to render based on slug
  let ScreenComponent = null;
  if (params.slug === "ai-matching-platform") ScreenComponent = AIMatchingScreen;
  if (params.slug === "education-platform") ScreenComponent = EducationScreen;
  if (params.slug === "gaming-platform") ScreenComponent = GamingScreen;
  if (params.slug === "asani-iot-platform") ScreenComponent = AsaniScreen;

  // Fallback for others if not implemented yet
  if (!ScreenComponent) {
    ScreenComponent = () => (
      <div className="w-full h-[600px] bg-[#0a0f1a] rounded-xl border border-gray-800 flex items-center justify-center">
        <p className="text-gray-500">Interactive screen demo in development.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <Link href="/#projects" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
        </Link>

        <SectionHeading title={project.title} />

        {/* Hero Interactive Screen */}
        <div className="mb-16 mt-8 relative rounded-xl overflow-hidden shadow-2xl border border-white/10 p-2 bg-gradient-to-br from-gray-900 to-black">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <ScreenComponent />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed text-lg">{project.overview}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
              <div className="glass-card p-6 border-l-4 border-l-red-500">
                <p className="text-gray-300 leading-relaxed">{project.problem}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">My Role & Solution</h2>
              <p className="text-blue-400 font-medium mb-4">{project.role}</p>
              <p className="text-gray-300 leading-relaxed">{project.solution}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Results</h2>
              <div className="glass-card p-6 bg-gradient-to-br from-green-500/10 to-transparent">
                <p className="text-gray-200 leading-relaxed font-medium flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                  {project.results}
                </p>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Architecture</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{project.architecture}</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Challenges</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{project.challenges}</p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
