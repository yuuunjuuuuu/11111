import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: "김OO",
        role: "경영학과 졸업생 취업준비",
        content: "막연하게 데이터 분석가가 되고 싶었지만 무엇부터 해야 할지 막막했습니다. 멘토님과 함께 제 관심 분야인 '이커머스' 데이터를 직접 크롤링하고 분석해보면서, 자소서에 쓸 강력한 무기를 하나 만들었습니다. 면접관분들도 프로젝트 깊이에 놀라시더라고요.",
        tags: ["취업성공", "포트폴리오"]
    },
    {
        name: "박OO",
        role: "마케팅 직무 3년차",
        content: "회사에 데이터는 쌓여있는데 활용을 못하고 있었습니다. 4주간 제 업무 데이터를 직접 가져와서 분석했는데, 그 결과로 마케팅 효율을 15% 개선하는 인사이트를 찾았습니다. 팀장님께 칭찬받고 바로 실무에 적용 중입니다!",
        tags: ["실무적용", "업무효율"]
    },
    {
        name: "최OO",
        role: "사회과학 계열 대학원 진학 예정",
        content: "통계학 기초가 부족해서 논문 쓸 걱정이 컸는데, t-test부터 회귀분석까지 이론과 파이썬 구현을 동시에 잡아주셔서 정말 큰 도움이 되었습니다. 어려운 수식 없이 직관적으로 설명해주시는 점이 최고였습니다.",
        tags: ["통계기초", "연구논문"]
    },
    {
        name: "이OO",
        role: "스타트업 PO",
        content: "데이터 기반으로 의사결정하는 문화를 만들고 싶어서 수강했습니다. SQL이나 파이썬 문법만 배우는 게 아니라, '어떤 지표를 봐야 하는지'에 대한 비즈니스적인 시각을 키워주셔서 정말 좋았습니다. PO님들께 강추합니다.",
        tags: ["의사결정", "비즈니스"]
    },
    {
        name: "정OO",
        role: "비전공자 개발 취준생",
        content: "개발 공부를 하다가 데이터 쪽에도 관심이 생겨서 들었습니다. 파이썬 기초부터 모델링까지 쭉 훑어볼 수 있어서 좋았고, 특히 1:1로 코드 리뷰를 꼼꼼하게 해주셔서 코딩 실력이 정말 많이 늘었습니다.",
        tags: ["코드리뷰", "실력향상"]
    },
    {
        name: "강OO",
        role: "금융권 이직 준비",
        content: "다른 부트캠프도 다녀봤지만, 이렇게 밀착해서 케어해주는 곳은 없었습니다. 제 배경지식에 맞춰서 커리큘럼을 유연하게 조정해주신 덕분에 금융 데이터 분석 프로젝트를 성공적으로 마칠 수 있었습니다.",
        tags: ["맞춤형", "이직성공"]
    },
];

const Testimonials = () => {
    return (
        <section id="review" className="py-24 bg-dark-900 border-t border-dark-800">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">수강생 리얼 후기</h2>
                    <p className="text-dark-200">데이터로 커리어를 바꾼 분들의 이야기입니다.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-dark-800 p-8 rounded-[2rem] border border-dark-700 relative hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] flex flex-col"
                        >
                            <div className="flex gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 text-secondary-500 fill-secondary-500" />)}
                            </div>

                            <p className="text-dark-200 text-[15px] leading-relaxed mb-8 flex-1">
                                "{item.content}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-dark-700 pt-6 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center font-bold text-white shadow-inner shrink-0">
                                    {item.name[0]}
                                </div>
                                <div>
                                    <p className="text-white font-bold text-sm">{item.name}</p>
                                    <p className="text-dark-500 text-xs">{item.role}</p>
                                </div>
                            </div>

                            <div className="absolute top-8 right-8 flex gap-2">
                                {item.tags.map((tag, i) => (
                                    <span key={i} className="text-[10px] font-bold text-primary-400 bg-primary-500/10 px-2 py-1 rounded-md border border-primary-500/20">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
