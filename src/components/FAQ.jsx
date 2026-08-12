import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const faqs = [
        {
            question: "비전공자도 따라갈 수 있나요?",
            answer: "네, 가능합니다. 프로그래밍 기초부터 시작하여 실무 데이터 분석까지 단계별로 진행됩니다."
        },
        {
            question: "수강료는 어떻게 되나요?",
            answer: "멘토의 신규 집필 도서 <데이터 뜯어보기> 제작 과정에서 도움을 받고 있으며, 진지하게 참여하고 싶은 분들을 위해 소정의 참가비를 받고 있습니다. 신청 시 바로 결제하는 것이 아니라, 오리엔테이션(OT) 진행 후 5만원을 받을 예정입니다."
        },
        {
            question: "직장인이라 시간이 부족한데 괜찮을까요?",
            answer: "주말과 평일 저녁 시간을 활용하여 1:1 멘토링이 진행됩니다. 유연하게 일정을 조율해드립니다."
        },
        {
            question: "준비해야 할 장비나 프로그램이 있나요?",
            answer: "개인 노트북(Windows 또는 Mac)만 있으면 됩니다. 필요한 소프트웨어는 함께 설치합니다."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-dark-950 border-t border-dark-800">
            <div className="max-w-4xl mx-auto px-6">

                {/* Program Info (Format/Location/Cost) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
                    <div className="bg-dark-900/50 backdrop-blur-sm p-6 rounded-2xl border border-dark-700/50 flex flex-col items-center text-center gap-4 hover:border-primary-500/50 transition-colors shadow-lg">
                        <div className="w-12 h-12 bg-primary-900/30 rounded-full flex items-center justify-center text-primary-400 font-bold text-xl shadow-[0_0_15px_rgba(125,49,255,0.3)]">
                            1:1
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-1">Format</h3>
                            <p className="text-dark-400 text-sm">Private Mentoring<br />(맞춤형 진행)</p>
                        </div>
                    </div>
                    <div className="bg-dark-900/50 backdrop-blur-sm p-6 rounded-2xl border border-dark-700/50 flex flex-col items-center text-center gap-4 hover:border-primary-500/50 transition-colors shadow-lg">
                        <div className="w-12 h-12 bg-primary-900/30 rounded-full flex items-center justify-center text-primary-400 font-bold text-xl shadow-[0_0_15px_rgba(125,49,255,0.3)]">
                            📍
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-1">Location</h3>
                            <p className="text-dark-400 text-sm">서울대입구<br />(장소/일정 협의)</p>
                        </div>
                    </div>
                    <div className="bg-dark-900/50 backdrop-blur-sm p-6 rounded-2xl border border-dark-700/50 flex flex-col items-center text-center gap-4 hover:border-primary-500/50 transition-colors shadow-lg relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="w-12 h-12 bg-primary-900/30 rounded-full flex items-center justify-center text-primary-400 font-bold text-xl shadow-[0_0_15px_rgba(125,49,255,0.3)] relative z-10">
                            💸
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-white font-bold text-lg mb-1">Cost</h3>
                            <p className="text-primary-400 font-bold text-sm">50,000원</p>
                            <p className="text-dark-500 text-xs mt-1">OT 진행 후 결제</p>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">자주 묻는 질문</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <Item key={idx} faq={faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Item = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-dark-900 rounded-2xl overflow-hidden border border-dark-800 shadow-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-dark-800 transition-colors"
            >
                <span className="text-lg font-bold text-dark-200">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-dark-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-0 text-dark-400 leading-relaxed bg-dark-900 border-t border-dark-800">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default FAQ;
