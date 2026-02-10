
import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="py-20 container max-w-2xl mx-auto space-y-20">
            {/* 1. Hero / Profile */}
            <div className="flex flex-col items-center text-center">
                <div className="relative group mb-6">
                    <div className="absolute -inset-0.5 bg-lime rounded-full opacity-75 blur-sm group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative w-32 h-32 rounded-full p-1 bg-background-light dark:bg-almost-black overflow-hidden">
                        <div className="w-full h-full rounded-full bg-dark-gray flex items-center justify-center text-text-sub overflow-hidden relative">
                            {/* Placeholder for Profile Image */}
                            <span className="material-symbols-outlined text-4xl">person</span>
                            {/* 
                <Image 
                    src="/profile-placeholder.jpg" 
                    alt="Bea" 
                    fill 
                    className="object-cover"
                /> 
                */}
                        </div>
                    </div>
                    <div className="absolute bottom-1 right-1 bg-lime text-black p-1.5 rounded-full border-2 border-almost-black flex items-center justify-center">
                        {/* Simple checkmark icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-h1 text-white">Bea</h2>
                    <p className="text-body text-text-sub">Product Manager & Business Strategist</p>
                </div>

                <div className="flex gap-4 mt-8">
                    <a href="#" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white">
                        <span>Language</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white">
                        <span>Share</span>
                    </a>
                </div>
            </div>

            {/* 2. The Journey */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-1 bg-lime rounded-full"></div>
                    <h3 className="text-h2 text-white">The Journey</h3>
                </div>
                <div className="p-6 rounded-lg bg-white/5 border border-white/5 shadow-sm">
                    <p className="text-body text-text-sub leading-relaxed">
                        Building products that matter. Bridging business goals with user needs through data-driven decisions and cross-functional collaboration.
                    </p>
                    <p className="text-body text-text-sub leading-relaxed mt-4">
                        From early startups to established tech giants, I&apos;ve helped shape products that users love.
                    </p>
                </div>
            </div>

            {/* 3. Core Skills */}
            <div className="space-y-8">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-1 bg-lime rounded-full"></div>
                    <h3 className="text-h2 text-white">Core Skills</h3>
                </div>
                <div className="space-y-6">
                    {/* Skill 1 */}
                    <div className="group">
                        <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-text-sub">Product Strategy</span>
                            <span className="text-sm font-bold text-lime">Expert</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                            <div className="bg-lime h-2 rounded-full shadow-[0_0_10px_rgba(204,255,0,0.4)]" style={{ width: '95%' }}></div>
                        </div>
                    </div>
                    {/* Skill 2 */}
                    <div className="group">
                        <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-text-sub">Data Analysis</span>
                            <span className="text-sm font-bold text-lime">Advanced</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                            <div className="bg-lime h-2 rounded-full shadow-[0_0_10px_rgba(204,255,0,0.4)]" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                    {/* Skill 3 */}
                    <div className="group">
                        <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium text-text-sub">Global Communication</span>
                            <span className="text-sm font-bold text-lime">Native</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                            <div className="bg-lime h-2 rounded-full shadow-[0_0_10px_rgba(204,255,0,0.4)]" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. Tools & Tech */}
            <div className="space-y-6">
                <h4 className="text-sm uppercase tracking-wider text-text-sub font-semibold">Tools & Tech</h4>
                <div className="flex flex-wrap gap-3">
                    {["Jira", "Figma", "Amplitude", "SQL", "Notion", "Python"].map((tool) => (
                        <span key={tool} className="px-4 py-2 rounded-full bg-white/5 border border-transparent hover:border-lime/50 text-text-sub text-sm font-medium transition-colors cursor-default">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>

            {/* 5. Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-lg bg-white/5 flex flex-col items-center justify-center text-center space-y-1">
                    <span className="text-3xl font-bold text-white">5+</span>
                    <span className="text-xs uppercase tracking-wide text-text-sub">Years Exp.</span>
                </div>
                <div className="p-6 rounded-lg bg-white/5 flex flex-col items-center justify-center text-center space-y-1">
                    <span className="text-3xl font-bold text-white">20+</span>
                    <span className="text-xs uppercase tracking-wide text-text-sub">Projects</span>
                </div>
            </div>

        </section>
    );
}
