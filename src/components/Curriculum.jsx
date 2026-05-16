import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code, BarChart, Brain, FolderGit2 } from 'lucide-react';

const Curriculum = () => {
    const [openWeek, setOpenWeek] = useState(-1); // Default closed // Default open first week

    const weeks = [
        {
            id: 0,
            title: "Week 1 | Python & Exploratory Data Analysis (EDA)",
            icon: Code,
            details: [
                "Development Environment Setup (Anaconda, Jupyter, Git)",
                "pandas 기반 데이터 처리 (Dataframe Manipulation)",
                "Data Cleaning & Preprocessing",
                "Visualization with Matplotlib & Seaborn"
            ]
        },
        {
            id: 1,
            title: "Week 2 | Statistical Analysis",
            icon: BarChart,
            details: [
                "Probability & Basic Statistics Concepts",
                "Hypothesis Testing (t-test, ANOVA)",
                "Correlation & Regression Analysis",
                "데이터 기반 Insight 도출 실습"
            ]
        },
        {
            id: 2,
            title: "Week 3 | Machine Learning",
            icon: Brain,
            details: [
                "Supervised vs Unsupervised Learning 이해",
                "Classification & Prediction Models (Decision Tree, Random Forest)",
                "Clustering (K-Means)",
                "Model Evaluation & Feature Engineering"
            ]
        },
        {
            id: 3,
            title: "Week 4 | Capstone Project",
            icon: FolderGit2,
            details: [
                "Problem Definition (분석 주제 선정)",
                "Data Collection & Processing (실데이터 활용)",
                "Modeling & Interpretation",
                "Final Report & Presentation",
                "GitHub Portfolio 구축"
            ]
        }
    ];

    return (
        <section id="curriculum" className="py-24 bg-dark-950 border-t border-dark-800">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">4주 집중 커리큘럼</h2>
                    <p className="text-dark-200">클릭하여 주차별 상세 내용을 확인하세요.</p>
                </motion.div>

                <div className="space-y-4">
                    {weeks.map((week) => (
                        <div
                            key={week.id}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-md ${openWeek === week.id
                                ? 'bg-dark-800/80 border-primary-500 shadow-[0_0_30px_rgba(125,49,255,0.2)]'
                                : 'bg-dark-900/40 border-dark-700/50 hover:bg-dark-800/60 hover:border-primary-500/30'
                                }`}
                        >
                            <button
                                onClick={() => setOpenWeek(openWeek === week.id ? -1 : week.id)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${openWeek === week.id ? 'bg-primary-600 text-white' : 'bg-dark-700 text-dark-400'
                                        }`}>
                                        <week.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className={`text-lg md:text-xl font-bold transition-colors ${openWeek === week.id ? 'text-white' : 'text-dark-200'
                                        }`}>
                                        {week.title}
                                    </h3>
                                </div>
                                <ChevronDown className={`w-6 h-6 text-dark-400 transition-transform duration-300 ${openWeek === week.id ? 'rotate-180 text-primary-500' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {openWeek === week.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-8 pb-8 md:pl-[6.5rem]">
                                            <ul className="space-y-3">
                                                {week.details.map((detail, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-dark-300">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0"></span>
                                                        <span className="leading-relaxed">{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Curriculum;
