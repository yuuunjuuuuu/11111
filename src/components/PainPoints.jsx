import { motion } from 'framer-motion';

const PainPoints = () => {
    return (
        <section className="py-20 bg-primary-900 text-center relative overflow-hidden border-t border-b border-primary-800">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-snug word-keep-all">
                    "혼자 보는 인강에 지치셨나요?<br />
                    이제 <span className="text-primary-400">함께 성장하는 즐거움</span>을 느껴보세요."
                </h2>
            </div>
        </section>
    );
};

export default PainPoints;
