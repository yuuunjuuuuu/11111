import { motion } from 'framer-motion';

const Mentor = () => {
    return (
        <section id="mentor" className="py-32 bg-dark-950 relative overflow-hidden border-t border-dark-800">
            {/* Background Shape */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-dark-900 -z-10 rounded-l-[4rem] hidden md:block border-l border-dark-800"></div>

            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-16 items-center"
                >
                    <div className="flex-1">
                        <div className="w-16 h-1 bg-primary-500 mb-6 rounded-full"></div>
                        <span className="text-primary-400 font-bold tracking-widest text-sm uppercase mb-2 block">
                            Data Science Expert
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-sans">
                            Yunju Lee
                        </h2>
                        <p className="text-dark-200 text-lg leading-relaxed word-keep-all mb-8">
                            "데이터 분석은 누구나 할 수 있습니다.<br />
                            중요한 것은 <strong>'어떤 데이터를 어떻게 볼 것인가'</strong>를 아는 힘입니다.<br /><br />
                            실무에서 실제로 요구되는 Data Analytics 역량을<br />
                            체계적으로 전수해 드립니다."
                        </p>
                    </div>

                    <div className="flex-1 w-full relative">
                        <div className="bg-dark-800 p-10 rounded-[2.5rem] shadow-2xl border border-dark-700 relative z-10">
                            <h3 className="text-xl font-bold text-white mb-8 border-b border-dark-700 pb-4">
                                멘토 약력
                            </h3>
                            <ul className="space-y-6 relative">
                                <li className="pl-6 border-l-2 border-primary-500 relative">
                                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-dark-900 border-[3px] border-primary-500"></span>
                                    <span className="text-white font-bold block text-lg mb-1">SKY 대학교 졸업</span>
                                </li>
                                <li className="pl-6 border-l-2 border-primary-500 relative">
                                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-dark-900 border-[3px] border-primary-500"></span>
                                    <span className="text-white font-bold block text-lg mb-1">New York University</span>
                                    <span className="text-dark-400">Data Science, M.S.</span>
                                </li>
                                <li className="pl-6 border-l-2 border-primary-500 relative">
                                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-dark-900 border-[3px] border-primary-500"></span>
                                    <span className="text-white font-bold block text-lg mb-1">前 IT Enterprise</span>
                                    <span className="text-dark-400">Data/Systems Engineer</span>
                                </li>
                                <li className="pl-6 border-l-2 border-primary-500 relative">
                                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-dark-900 border-[3px] border-primary-500"></span>
                                    <span className="text-white font-bold block text-lg mb-1">現 University & Corporate</span>
                                    <span className="text-dark-400">Data Analytics Instructor</span>
                                </li>
                            </ul>
                        </div>
                        {/* Decor */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full rounded-[2.5rem] bg-dark-700/50 -z-10"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Mentor;
