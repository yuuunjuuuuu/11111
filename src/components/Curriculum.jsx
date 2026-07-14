import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code, BarChart, Brain, FolderGit2 } from 'lucide-react';

const Curriculum = () => {
    const [openWeek, setOpenWeek] = useState(-1); // Default closed // Default open first week

    const weeks = [
        {
            id: 0,
            title: "Week 1 | 파이썬 & 탐색적 데이터 분석(EDA)",
            icon: Code,
            details: [
                "개발 환경 설정 (Anaconda, Jupyter, Git)",
                "pandas 기반 데이터 처리 (데이터프레임 다루기)",
                "데이터 클리닝 및 전처리",
                "Matplotlib & Seaborn을 활용한 시각화"
            ]
        },
        {
            id: 1,
            title: "Week 2 | 통계 분석",
            icon: BarChart,
            details: [
                "확률과 기초 통계 개념",
                "가설 검정 (t-검정, 분산분석)",
                "상관관계 및 회귀분석",
                "데이터 기반 인사이트 도출 실습"
            ]
        },
        {
            id: 2,
            title: "Week 3 | 머신러닝",
            icon: Brain,
            details: [
                "지도학습과 비지도학습 이해",
                "분류 및 예측 모델 (의사결정나무, 랜덤포레스트)",
                "군집분석 (K-Means)",
                "모델 평가 및 특성 공학"
            ]
        },
        {
            id: 3,
            title: "Week 4 | 캡스톤 프로젝트",
            icon: FolderGit2,
            details: [
                "문제 정의 (분석 주제 선정)",
                "데이터 수집 및 처리 (실데이터 활용)",
                "모델링 및 결과 해석",
                "최종 보고서 및 발표",
                "GitHub 포트폴리오 구축"
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
