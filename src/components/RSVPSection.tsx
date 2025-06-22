"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function RSVPSection() {
  const [response, setResponse] = useState<"attending" | "not-attending" | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //if (name.trim() && phone.trim() && attendance) { //name, phone, attendance 가 없어서 주석처리함
      try {
        //const response = await fetch('/api/rsvp', { //name, phone, attendance 가 없어서 주석처리함
        //  method: 'POST',
        //  headers: {
        //    'Content-Type': 'application/json',
        //  },
        //  body: JSON.stringify({
        //    name,
        //    phone,
        //    attendance,
        //    guestCount: attendance === 'yes' ? guestCount : 0
        //  }),
        //});

        //const result = await response.json();

        //if (result.success) {
          setSubmitted(true);
        //} else {
        //  alert('저장 중 오류가 발생했습니다. 다시 시도해주세요.');
        //}
      } catch (error) {
        console.error('RSVP 저장 오류:', error);
        alert('저장 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    //} //name, phone, attendance 가 없어서 주석처리함
  };

  return (
    <section className="w-full max-w-md px-4 py-10 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-xl font-serif font-light text-[#b18463] mb-6 text-center tracking-wide"
      >
        참석 여부 확인
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full bg-white/70 backdrop-blur-lg rounded-2xl p-6 border border-white/50 shadow-xl"
      >
        {!submitted ? (
          <>
            <p className="text-[#7a6149] text-center mb-6 leading-relaxed font-light">
              소중한 분의 참석 여부를 알려주시면
              <br />
              더 완벽한 준비를 할 수 있습니다.
            </p>

            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setResponse("attending")}
                className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl border-2 transition-all duration-300 ${
                  response === "attending"
                    ? "bg-green-50 border-green-300 text-green-700"
                    : "bg-white/50 border-[#e6bfae] text-[#7a6149] hover:bg-[#f5e6d3]/30"
                }`}
              >
                <FaCheck className="text-lg" />
                <span className="font-medium">참석</span>
              </button>

              <button
                onClick={() => setResponse("not-attending")}
                className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl border-2 transition-all duration-300 ${
                  response === "not-attending"
                    ? "bg-red-50 border-red-300 text-red-700"
                    : "bg-white/50 border-[#e6bfae] text-[#7a6149] hover:bg-[#f5e6d3]/30"
                }`}
              >
                <FaTimes className="text-lg" />
                <span className="font-medium">불참</span>
              </button>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!response}
              className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                response
                  ? "bg-gradient-to-r from-[#d8b4a0] to-[#c9a082] text-white shadow-lg hover:scale-105"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              확인
            </button>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-4"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheck className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-lg font-medium text-[#7a6149] mb-2">
              감사합니다!
            </h3>
            <p className="text-[#a8916f] font-light">
              소중한 답변을 주셔서 감사합니다.
              <br />
              {response === "attending" ? "함께 해주셔서 기쁩니다!" : "마음만 받겠습니다."}
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}