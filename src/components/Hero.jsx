import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-dark-950">
            {/* Background Decor - Glowing Blobs */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[100px] opacity-50"
            ></motion.div>
            <motion.div
                animate={{ scale: [1, 1.3, 1], rotate: [0, -60, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary-500/10 rounded-full blur-[80px] opacity-50"
            ></motion.div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-800 border border-dark-700 text-primary-400 font-bold text-sm mb-8 hover:border-primary-500 transition-colors cursor-default"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                        Research-based Pilot Program (Free)
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.2] mb-8 font-sans tracking-tight word-keep-all drop-shadow-2xl">
                        <span className="inline-block animate-bounce delay-1000">1:1</span> Private Mentoring<br />
                        <span className="animate-text-shimmer block mt-2">
                            Data Analytics Training
                        </span>
                    </h1>

                    <div className="text-lg md:text-xl text-dark-100 mb-12 leading-relaxed word-keep-all max-w-3xl mx-auto space-y-4 font-medium backdrop-blur-sm bg-dark-950/30 p-6 rounded-2xl border border-white/5">
                        <p>
                            본 프로그램은 일반 강의나 단기 부트캠프와 달리,<br className="hidden md:block" />
                            <strong>1:1 맞춤형 멘토링</strong> 방식으로 진행되는 데이터 분석 집중 과정입니다.
                        </p>
                        <p className="text-dark-300 text-base">
                            Python 데이터 처리부터 통계 분석, 머신러닝, 포트폴리오 제작까지<br className="hidden md:block" />
                            실무 핵심 역량을 체계적으로 학습하여 <strong>독립적 프로젝트 수행</strong>을 목표로 합니다.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <Link
                            to="/apply"
                            className="px-10 py-5 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-2xl font-bold text-lg text-center hover:scale-105 transition-all shadow-[0_0_40px_rgba(125,49,255,0.6)] border border-primary-400/50 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            지원서 작성하기
                        </Link>
                        <Link
                            to="/curriculum"
                            className="px-10 py-5 bg-dark-900/50 backdrop-blur-md border border-dark-600 text-white rounded-2xl font-bold text-lg text-center hover:bg-dark-800 transition-all hover:border-primary-500/50 shadow-lg"
                        >
                            커리큘럼 상세 보기
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
