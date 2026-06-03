import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import GlitchText from '../GlitchText';

const Resume: React.FC = () => {
    const resumePath = '/Resume-Yanshi.pdf';

    return (
        <section className="pt-[34px] pb-20 px-6 md:px-16 relative z-10 w-full overflow-hidden flex flex-col h-[calc(100vh-4rem)]">
             <div className="w-full mb-8 flex flex-col md:flex-row items-center justify-between gap-6 shrink-0">
                 <motion.div 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }}
                    className="mt-[-10px]"
                 >
                    <div className="flex items-center gap-3 mb-2">
                        <FileText className="text-cyan-400" size={24} />
                        <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-tighter text-white">
                            <GlitchText text="RESUME_CV" />
                        </h1>
                    </div>
                    <p className="text-gray-400 font-mono text-sm border-l-2 border-cyan-500/30 pl-4 py-1">{'>'} PROFESSIONAL HISTORY AND QUALIFICATIONS</p>
                 </motion.div>

                 <motion.a 
                    href={resumePath}
                    download="Yanshi_Sharma_Resume.pdf"
                    initial={{ opacity: 0, x: 20 }} 
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 px-6 py-3 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-sm hover:bg-cyan-500/20 transition-colors"
                >
                     <Download size={18} /> DOWNLOAD_PDF
                 </motion.a>
            </div>

            <div className="max-w-5xl mx-auto w-full flex-grow bg-[#0c121e]/50 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm relative flex flex-col min-h-0">
                 <div id="resume-container" className="flex-grow overflow-y-auto overflow-x-hidden custom-scrollbar p-2 md:p-6 bg-[#1a1f2e] text-center">
                     <div className="w-full h-full min-h-[600px] rounded-xl overflow-hidden bg-[#0f1729]">
                         <iframe
                             title="Resume PDF"
                             src={resumePath}
                             className="w-full h-full border-none"
                         />
                     </div>
                     <div className="mt-6 text-sm text-gray-400 font-mono">
                         If the resume does not display, you can <a href={resumePath} className="text-cyan-400 underline">download it here</a>.
                     </div>
                 </div>
            </div>
        </section>
    );
};
export default Resume;
