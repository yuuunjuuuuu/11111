import { motion } from 'framer-motion';
import { TrendingUp, Users, Briefcase } from 'lucide-react';

const points = [
    {
        icon: Briefcase,
        title: "모든 직무의 필수 역량",
        desc: "마케팅, 기획, 경영, 디자인 등 전공을 불문하고 데이터 기반 의사결정 능력이 요구되고 있습니다."
    },
    {
        icon: TrendingUp,
        title: "비전공자의 경쟁력",
        desc: "데이터 활용 능력은 이제 전공자만의 무기가 아닙니다. 배워두면 어떤 분야에서도 확실한 차별점이 됩니다."
    },
    {
        icon: Users,
        title: "실제로 비전공자가 더 많아요",
        desc: "본 프로그램 수강생의 다수는 비전공 출신이며, 기초부터 차근차근 실무 역량까지 성장하고 있습니다."
    }
];

const WhyData = () => {
    return (
        <section className="py-24 bg-dark-950 border-t border-dark-800 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary-400 font-bold tracking-widest text-sm uppercase mb-2 block">
                        Why Data Now
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 word-keep-all">
                        데이터는 더 이상 <span className="text-primary-400">전공자만의 영역</span>이 아닙니다
                    </h2>
                    <p className="text-dark-400 max-w-2xl mx-auto word-keep-all leading-relaxed">
                        컴퓨터공학이나 통계학을 전공하지 않았더라도, 데이터를 다루는 능력은<br className="hidden md:block" />
                        커리어 전반에 걸쳐 확실한 경쟁력이 됩니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {points.map((point, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-dark-900 p-8 rounded-2xl border border-dark-700 hover:border-primary-500/50 transition-colors shadow-lg"
                        >
                            <div className="w-12 h-12 bg-primary-900/30 rounded-full flex items-center justify-center text-primary-400 mb-6 shadow-[0_0_15px_rgba(125,49,255,0.3)]">
                                <point.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">{point.title}</h3>
                            <p className="text-dark-400 text-sm leading-relaxed word-keep-all">{point.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyData;
