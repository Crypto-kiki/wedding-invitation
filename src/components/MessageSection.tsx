"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Message } from "@/lib/supabase";
import { FaHeart, FaPaperPlane, FaQuoteLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

export default function MessageSection() {
  const { t, language } = useLanguage();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      const response = await fetch('/api/messages');
      if (response.ok) {
        const data = await response.json();
        setMessages(Array.isArray(data) ? data : []);
      } else {
        setMessages([]);
      }
    } catch {
      console.error('메시지 로딩 실패:');
      setMessages([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      setSubmitMessage("이름과 메시지를 모두 입력해주세요.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message }),
      });

      if (response.ok) {
        setSubmitMessage("축하 메시지가 전달되었습니다. 감사합니다!");
        setName("");
        setMessage("");
        loadMessages(); // 새 메시지 로드
      } else {
        setSubmitMessage("메시지 전송에 실패했습니다. 다시 시도해주세요.");
      }
    } catch {
      setSubmitMessage("메시지 전송에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 3000);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16">
      {/* 헤더 섹션 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#d8b4a0]"></div>
          <FaHeart className="text-[#d8b4a0] mx-4 text-xl" />
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#d8b4a0]"></div>
        </div>
        <h2 className="text-3xl font-serif font-light text-[#b18463] mb-4 tracking-wide">
          {t('congratulationsMessage')}
        </h2>
        <p className="text-[#a8916f] text-base leading-relaxed max-w-md mx-auto">
          {t('preciousHeart')}
        </p>
      </motion.div>

      {/* 메시지 작성 폼 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 mb-12 border border-white/60 shadow-2xl relative overflow-hidden"
      >
        {/* 배경 장식 */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#f5e6d3]/20 to-transparent rounded-full -translate-y-6 translate-x-6"></div>

        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          {/* 이름 입력 */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#8b6f52] mb-2">
              성함
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#e6bfae]/60 bg-white/80 focus:outline-none focus:border-[#d8b4a0] focus:ring-2 focus:ring-[#d8b4a0]/30 transition-all duration-200 text-[#7a6149] placeholder-[#a8916f]/60"
              placeholder={t('yourName')}
            />
          </div>

          {/* 메시지 입력 */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#8b6f52] mb-2">
              축하 메시지
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-[#e6bfae]/60 bg-white/80 focus:outline-none focus:border-[#d8b4a0] focus:ring-2 focus:ring-[#d8b4a0]/30 transition-all duration-200 resize-none text-[#7a6149] placeholder-[#a8916f]/60"
              placeholder={t('congratulatoryMessage')}
            />
          </div>

          {/* 전송 버튼 */}
          <button
            type="submit"
            disabled={isSubmitting || !name.trim() || !message.trim()}
            className="w-full bg-gradient-to-r from-[#d8b4a0] to-[#c9a68a] text-white py-3.5 rounded-xl font-medium hover:from-[#c9a68a] hover:to-[#b8956e] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 active:scale-95"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>{language === 'ko' ? '전송 중...' : '發送中...'}</span>
              </>
            ) : (
              <>
                <FaPaperPlane className="text-sm" />
                <span>{t('submitMessage')}</span>
              </>
            )}
          </button>
        </form>

        <AnimatePresence>
          {submitMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className={`mt-4 p-3 rounded-xl text-sm text-center font-medium ${
                submitMessage.includes("전달되었습니다")
                  ? "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border border-green-200"
                  : "bg-gradient-to-r from-red-50 to-pink-50 text-red-700 border border-red-200"
              }`}
            >
              {submitMessage}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 축하 메시지 목록 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d8b4a0]"></div>
            <FaQuoteLeft className="text-[#d8b4a0] mx-4 text-lg" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d8b4a0]"></div>
          </div>
          <h3 className="text-2xl font-serif text-[#b18463] mb-2">
            {t('warmCongratulations')}
          </h3>
          <p className="text-[#a8916f] text-sm">
            {messages.length > 0 ? `${messages.length}${t('preciousMessageCount')}` : "첫 번째 축하 메시지를 남겨보세요"}
          </p>
        </div>

        {messages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm rounded-3xl border border-white/40"
          >
            <div className="text-6xl mb-4">💌</div>
            <p className="text-[#a8916f] text-lg font-medium mb-2">
              아직 축하 메시지가 없습니다
            </p>
            <p className="text-[#b89a7f] text-sm">
              첫 번째 축하 메시지의 주인공이 되어주세요!
            </p>
          </motion.div>
        ) : (
          <>
            <div className="grid gap-4 md:grid-cols-2">
              {(showAll ? messages : messages.slice(0, 5)).map((msg, index) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                {/* 배경 장식 */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#f5e6d3]/20 to-transparent rounded-full -translate-y-6 translate-x-6 group-hover:scale-110 transition-transform duration-300"></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#d8b4a0] to-[#c9a68a] rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-sm">
                          {msg.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#8b6f52] text-base">
                          {msg.name}
                        </h4>
                        <span className="text-xs text-[#a8916f] font-medium">
                          {formatDate(msg.created_at)}
                        </span>
                      </div>
                    </div>
                    <FaHeart className="text-[#d8b4a0] text-sm group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="relative">
                    <FaQuoteLeft className="text-[#e6bfae] text-lg absolute -top-2 -left-1 opacity-50" />
                    <p className="text-[#7a6149] text-sm leading-relaxed pl-6 font-medium">
                      {msg.message}
                    </p>
                  </div>
                </div>
              </motion.div>
              ))}
            </div>

            {messages.length > 5 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mt-8"
              >
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ffe8cf] to-[#d8b4a0] text-[#6d4635] font-semibold shadow hover:scale-105 transition-all duration-300"
                >
                  {showAll ? (
                    <>
                      <span>{t('collapse')}</span>
                      <FaChevronUp className="text-sm" />
                    </>
                  ) : (
                    <>
                      <span>
                        {language === 'ko' 
                          ? `${messages.length - 5}개 더 보기`
                          : `查看更多 (還有${messages.length - 5}則)`
                        }
                      </span>
                      <FaChevronDown className="text-sm" />
                    </>
                  )}
                </button>
              </motion.div>
            )}
          </>
        )}
      </motion.div>
    </section>
  );
}