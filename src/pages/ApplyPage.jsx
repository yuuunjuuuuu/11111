import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ApplyPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', birthdate: '', gender: '', message: '', codingLevel: 0, comment: '', location: '', education: '' });
    const [selectedSlots, setSelectedSlots] = useState(new Set());
    const [isSubmitted, setIsSubmitted] = useState(false);

    const days = ['월', '화', '수', '목', '금', '토', '일'];
    const hours = Array.from({ length: 24 }, (_, i) => i);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const scheduleText = Array.from(selectedSlots).map(slot => {
            const [dayIdx, hour] = slot.split('-').map(Number);
            return { dayIdx, hour, label: `${days[dayIdx]}요일 ${hour}시` };
        }).sort((a, b) => a.dayIdx !== b.dayIdx ? a.dayIdx - b.dayIdx : a.hour - b.hour)
            .map(item => item.label).join(', ') || "선택된 시간 없음";

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    access_key: '72682181-14c6-461f-86ad-d985de4cdcc8',
                    subject: `[신청] ${formData.name}님 데이터 분석 트레이닝 신청`,
                    ...formData,
                    schedule: scheduleText,
                }),
            });
            const data = await response.json();
            if (data.success) {
                setIsSubmitted(true);
                setFormData({ name: '', email: '', phone: '', birthdate: '', gender: '', message: '', codingLevel: 0, comment: '', location: '', education: '' });
                setSelectedSlots(new Set());
            } else {
                alert("제출 중 오류가 발생했습니다. 다시 시도해주세요.");
            }
        } catch (error) {
            alert("제출에 실패했습니다. 다시 시도해주세요.");
        }
    };

    const toggleSlot = (dayIndex, hour) => {
        const key = `${dayIndex}-${hour}`;
        const newSlots = new Set(selectedSlots);
        if (newSlots.has(key)) newSlots.delete(key);
        else newSlots.add(key);
        setSelectedSlots(newSlots);
    };

    return (
        <section className="pt-32 pb-24 min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">지원서 작성</h1>
                    <p className="text-dark-400">멘토링 가능한 시간을 선택해주세요.</p>
                </div>

                {isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-20 text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 pointer-events-none">
                            {[...Array(10)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-primary-500' : 'bg-secondary-500'}`}
                                    initial={{ x: 0, y: 0, opacity: 0 }}
                                    animate={{ x: (Math.random() - 0.5) * 400, y: (Math.random() - 0.5) * 400, opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                                    transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
                                    style={{ left: '50%', top: '50%' }}
                                />
                            ))}
                        </div>
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="w-24 h-24 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(125,49,255,0.6)] mb-6 z-10"
                        >
                            <Check className="w-12 h-12 text-white stroke-[3]" />
                        </motion.div>
                        <div className="z-10 relative">
                            <motion.h3
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl font-extrabold text-white mb-4 drop-shadow-lg"
                            >
                                신청 완료! 🎉
                            </motion.h3>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-dark-200 text-lg mb-8 leading-relaxed"
                            >
                                성공적으로 접수되었습니다.<br />
                                <span className="text-primary-400 font-bold">빠른 시일 내에</span> 연락드리겠습니다.
                            </motion.p>
                        </div>
                    </motion.div>
                ) : (
                    <div className="bg-dark-900 rounded-3xl border border-dark-700 p-8">
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <input type="hidden" name="coding_level" value={formData.codingLevel} />

                            {/* Basic Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark-200">이름</label>
                                    <input type="text" name="name" required onChange={handleChange} value={formData.name} className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none" placeholder="홍길동" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark-200">생년월일</label>
                                    <input type="text" name="birthdate" required onChange={handleChange} value={formData.birthdate} className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none" placeholder="예: 19980101" maxLength="8" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark-200">연락처</label>
                                    <input type="tel" name="phone" required onChange={handleChange} value={formData.phone} className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none" placeholder="010-0000-0000" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark-200">성별</label>
                                    <div className="flex gap-2">
                                        {['남성', '여성'].map((gender) => (
                                            <button
                                                key={gender}
                                                type="button"
                                                onClick={() => setFormData(prev => ({ ...prev, gender }))}
                                                className={`flex-1 py-3 rounded-xl border transition-all duration-200 text-center relative overflow-hidden ${formData.gender === gender
                                                    ? 'bg-primary-600 border-primary-400 text-white shadow-glow'
                                                    : 'bg-dark-800 border-dark-700 text-dark-400 hover:bg-dark-700'
                                                    }`}
                                            >
                                                {gender}
                                                {formData.gender === gender && (
                                                    <motion.div layoutId="gender-check" className="absolute top-2 right-2 text-white bg-white/20 rounded-full p-0.5">
                                                        <Check className="w-2 h-2" />
                                                    </motion.div>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                    <input type="hidden" name="gender" value={formData.gender} />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-bold text-dark-200">이메일</label>
                                    <input type="email" name="email" required onChange={handleChange} value={formData.email} className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none" placeholder="example@gmail.com" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-bold text-dark-200">학력</label>
                                    <input type="text" name="education" required onChange={handleChange} value={formData.education} className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none" placeholder="예: 서울대학교 경영학과 3학년 / 졸업" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-bold text-dark-200">거주지 (가까운 지하철역)</label>
                                    <input type="text" name="location" required onChange={handleChange} value={formData.location} className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none" placeholder="예: 강남역, 서울대입구역" />
                                </div>
                            </div>

                            {/* Time Grid Selector */}
                            <div className="bg-dark-950 p-6 rounded-2xl border border-dark-700 shadow-inner">
                                <label className="text-lg font-bold text-white block mb-4">
                                    가능한 시간대 (클릭하여 선택) <span className="text-primary-500">*</span>
                                </label>
                                <div className="overflow-x-auto pb-4 custom-scrollbar">
                                    <div className="min-w-[700px] select-none">
                                        <div className="flex mb-2">
                                            <div className="w-12 shrink-0"></div>
                                            <div className="flex-1 flex justify-between text-xs text-dark-400 px-1">
                                                <span>00</span><span>03</span><span>06</span><span>09</span><span>12</span><span>15</span><span>18</span><span>21</span><span>24</span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            {days.map((day, dIdx) => (
                                                <div key={day} className="flex items-center gap-2">
                                                    <div className="w-12 font-bold text-dark-200 text-center shrink-0">{day}</div>
                                                    <div className="flex-1 grid grid-cols-24 gap-1 h-10">
                                                        {hours.map((h) => {
                                                            const isSelected = selectedSlots.has(`${dIdx}-${h}`);
                                                            return (
                                                                <div
                                                                    key={h}
                                                                    onMouseDown={(e) => { e.preventDefault(); toggleSlot(dIdx, h); }}
                                                                    className={`cursor-pointer rounded-sm transition-all duration-100 relative ${isSelected ? 'bg-primary-500 shadow-[0_0_8px_rgba(125,49,255,0.8)] z-10' : 'bg-dark-800 hover:bg-dark-700'}`}
                                                                    title={`${day}요일 ${h}시 ~ ${h + 1}시`}
                                                                ></div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex justify-between text-xs text-dark-400 mt-3 px-2">
                                            <span>* 각 칸은 1시간 단위입니다.</span>
                                            <span className="text-primary-400 font-bold">선택됨: {selectedSlots.size}시간</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Coding Level Selector */}
                            <div className="space-y-4">
                                <label className="text-lg font-bold text-white block">
                                    현재 코딩 실력은 어느 정도인가요? <span className="text-primary-500">*</span>
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    {[
                                        { level: 0, text: "완전 처음이에요 (노베이스)" },
                                        { level: 1, text: "기초 문법은 알아요" },
                                        { level: 2, text: "간단한 데이터 분석 가능해요" },
                                        { level: 3, text: "실무/프로젝트 경험이 있어요" }
                                    ].map((item) => (
                                        <div
                                            key={item.level}
                                            onClick={() => setFormData(prev => ({ ...prev, codingLevel: item.level }))}
                                            className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 text-center relative overflow-hidden ${formData.codingLevel === item.level ? 'bg-primary-600 border-primary-400 shadow-glow text-white' : 'bg-dark-800 border-dark-700 text-dark-300 hover:border-dark-500'}`}
                                        >
                                            <div className="font-bold text-lg mb-1">Lv. {item.level}</div>
                                            <div className="text-xs word-keep-all leading-tight opacity-90">{item.text}</div>
                                            {formData.codingLevel === item.level && (
                                                <motion.div layoutId="check" className="absolute top-2 right-2 text-white bg-white/20 rounded-full p-0.5">
                                                    <Check className="w-3 h-3" />
                                                </motion.div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Message & Comments */}
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark-200">지원 동기</label>
                                    <textarea name="message" required onChange={handleChange} value={formData.message} rows="3" className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none resize-none" placeholder="데이터 분석을 배우고 싶은 이유나 목표를 적어주세요."></textarea>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-dark-200">멘토에게 하고 싶은 말</label>
                                    <textarea name="comment" onChange={handleChange} value={formData.comment} rows="2" className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-700 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none resize-none" placeholder="궁금한 점이나 바라는 점이 있다면 자유롭게 적어주세요."></textarea>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4 border-t border-dark-700">
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl shadow-lg shadow-primary-900/50 transition-transform hover:scale-[1.02] text-lg"
                                >
                                    지원서 제출완료
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ApplyPage;
