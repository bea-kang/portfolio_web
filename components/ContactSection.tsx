
"use client";

import { useState } from "react";

export default function ContactSection() {
    const [copied, setCopied] = useState(false);
    const email = "garding3@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-20 container max-w-md mx-auto">
            {/* Hero Section with Glow */}
            <div className="relative mb-10">
                <div className="absolute -top-16 -left-16 w-64 h-64 bg-lime/20 rounded-full blur-[80px] pointer-events-none opacity-60"></div>
                <h2 className="relative text-[48px] font-black leading-[1.05] tracking-tight mb-2 text-white">
                    Let&apos;s<br />Connect.
                </h2>
                <p className="relative text-body text-text-sub font-medium max-w-[280px]">
                    Open for collaborations, interesting opportunities, or just a chat.
                </p>
            </div>

            {/* Copy Email Button */}
            <div className="mb-10">
                <button
                    onClick={handleCopy}
                    className="group relative w-full flex items-center justify-center gap-3 bg-lime hover:bg-[#d9ff4d] active:scale-[0.98] transition-all duration-200 h-16 rounded-full shadow-[0_0_20px_rgba(204,255,0,0.15)] hover:shadow-[0_0_30px_rgba(204,255,0,0.3)]"
                >
                    <span className="material-symbols-outlined text-black text-[24px]">
                        {copied ? "check" : "content_copy"}
                    </span>
                    <span className="text-black text-lg font-bold tracking-wide">
                        {copied ? "Email Copied!" : "Copy Email"}
                    </span>
                </button>
                <p className="text-center text-xs text-text-sub mt-3 font-medium opacity-60">
                    {email}
                </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-2">
                <h3 className="text-sm font-bold text-text-sub uppercase tracking-widest mb-2 ml-2">Socials</h3>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/ye-been-kang-b7a145236/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 rounded-[20px] bg-white/5 hover:bg-white/10 transition-colors duration-200 border border-white/5">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center size-12 rounded-full bg-[#0077b5]/20 text-[#0077b5] group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined">work</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base font-bold text-white leading-tight">LinkedIn</span>
                            <span className="text-xs text-text-sub">Professional Network</span>
                        </div>
                    </div>
                    <span className="material-symbols-outlined text-text-sub group-hover:text-lime transition-colors">arrow_outward</span>
                </a>

                {/* GitHub */}
                <a href="https://github.com/bea-kang" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 rounded-[20px] bg-white/5 hover:bg-white/10 transition-colors duration-200 border border-white/5">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center size-12 rounded-full bg-white/10 text-white group-hover:scale-110 transition-transform duration-300">
                            <span className="material-symbols-outlined">terminal</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base font-bold text-white leading-tight">GitHub</span>
                            <span className="text-xs text-text-sub">Code Repositories</span>
                        </div>
                    </div>
                    <span className="material-symbols-outlined text-text-sub group-hover:text-lime transition-colors">arrow_outward</span>
                </a>

                            </div>
        </section>
    );
}
