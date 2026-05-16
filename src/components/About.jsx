import { motion } from 'framer-motion';
import { Target, FileText, MapPin, Zap } from 'lucide-react';

const About = () => {
    const outputs = [
        "EDA Notebook",
        "Statistical Analysis Report",
        "Machine Learning Model Results",
        "Final Project Report (PDF)",
        "GitHub Portfolio"
    ];

    return (
        <section id="about" className="py-24 bg-dark-900 border-t border-dark-800">
            <div className="max-w-6xl mx-auto px-6">

                {/* Outputs Section */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                        >
                            수료 후 얻게 되는 결과물
                        </motion.h2>
                        <p className="text-dark-400">현업에서 즉시 활용 가능한 수준의 포트폴리오를 완성합니다.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {outputs.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="px-6 py-4 bg-dark-800 rounded-xl border border-dark-700 text-white font-bold flex items-center gap-3 hover:border-primary-500 transition-colors shadow-lg"
                            >
                                <FileText className="w-5 h-5 text-primary-500" />
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
