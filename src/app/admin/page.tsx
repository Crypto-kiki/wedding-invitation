
"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaChevronLeft, FaUsers, FaComments, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

interface RSVPData {
  id: number;
  name: string;
  phone: string;
  attendance: string;
  guestCount: number;
  submittedAt: string;
}

interface MessageData {
  id: number;
  name: string;
  message: string;
  submittedAt: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rsvpData, setRsvpData] = useState<RSVPData[]>([]);
  const [messageData, setMessageData] = useState<MessageData[]>([]);
  const [activeTab, setActiveTab] = useState<'rsvp' | 'messages'>('rsvp');

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/check');
      const data = await response.json();
      
      setIsAuthenticated(data.authenticated);
      setIsAdmin(data.isAdmin);
      
      if (data.isAdmin) {
        await loadData();
      }
    } catch (error) {
      console.error('인증 확인 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadData = async () => {
    try {
      const [rsvpResponse, messageResponse] = await Promise.all([
        fetch('/api/rsvp'),
        fetch('/api/messages')
      ]);
      
      const rsvpData = await rsvpResponse.json();
      const messageData = await messageResponse.json();
      
      setRsvpData(rsvpData);
      setMessageData(messageData);
    } catch (error) {
      console.error('데이터 로드 실패:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#fdf8f3] via-[#faf0e8] to-[#f5e6d3] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#d8b4a0] mx-auto mb-4"></div>
          <p className="text-[#8b6f52]">인증 확인 중...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#fdf8f3] via-[#faf0e8] to-[#f5e6d3] flex items-center justify-center p-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-serif text-[#b18463] mb-4">관리자 로그인</h1>
          <p className="text-[#8b6f52] mb-6">관리자 페이지에 접근하려면 Replit으로 로그인해주세요.</p>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.addEventListener('load', function() {
                  const script = document.createElement('script');
                  script.src = 'https://auth.util.repl.co/script.js';
                  script.setAttribute('authed', 'location.reload()');
                  document.body.appendChild(script);
                });
              `
            }}
          />
          <div id="replit-auth-container"></div>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#fdf8f3] via-[#faf0e8] to-[#f5e6d3] flex items-center justify-center p-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full text-center">
          <FaTimesCircle className="text-5xl text-red-400 mx-auto mb-4" />
          <h1 className="text-2xl font-serif text-[#b18463] mb-4">접근 권한 없음</h1>
          <p className="text-[#8b6f52] mb-6">관리자만 접근할 수 있는 페이지입니다.</p>
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-[#d8b4a0] text-white rounded-xl hover:bg-[#c9a190] transition-colors"
          >
            <FaChevronLeft className="mr-2" />
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const attendingCount = rsvpData.filter(item => item.attendance === 'yes').length;
  const totalGuests = rsvpData.reduce((sum, item) => sum + item.guestCount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdf8f3] via-[#faf0e8] to-[#f5e6d3] p-4">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-6">
          <Link 
            href="/"
            className="flex items-center text-[#d8b4a0] hover:text-[#c9a190] transition-colors"
          >
            <FaChevronLeft className="mr-2" />
            홈으로
          </Link>
          <h1 className="text-2xl font-serif text-[#b18463]">관리자 대시보드</h1>
        </div>

        {/* 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center"
          >
            <FaCheckCircle className="text-3xl text-green-500 mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-[#8b6f52]">참석 확정</h3>
            <p className="text-2xl font-bold text-[#b18463]">{attendingCount}팀</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center"
          >
            <FaUsers className="text-3xl text-blue-500 mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-[#8b6f52]">총 게스트</h3>
            <p className="text-2xl font-bold text-[#b18463]">{totalGuests}명</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center"
          >
            <FaComments className="text-3xl text-purple-500 mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-[#8b6f52]">축하 메시지</h3>
            <p className="text-2xl font-bold text-[#b18463]">{messageData.length}개</p>
          </motion.div>
        </div>

        {/* 탭 메뉴 */}
        <div className="flex bg-white/80 backdrop-blur-sm rounded-xl p-1 mb-6">
          <button
            onClick={() => setActiveTab('rsvp')}
            className={`flex-1 py-3 px-6 rounded-lg transition-colors ${
              activeTab === 'rsvp'
                ? 'bg-[#d8b4a0] text-white'
                : 'text-[#8b6f52] hover:bg-[#f0e6d2]'
            }`}
          >
            참석 현황
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`flex-1 py-3 px-6 rounded-lg transition-colors ${
              activeTab === 'messages'
                ? 'bg-[#d8b4a0] text-white'
                : 'text-[#8b6f52] hover:bg-[#f0e6d2]'
            }`}
          >
            축하 메시지
          </button>
        </div>

        {/* 컨텐츠 */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-6"
        >
          {activeTab === 'rsvp' ? (
            <div>
              <h3 className="text-xl font-serif text-[#b18463] mb-4">참석 현황</h3>
              <div className="space-y-3">
                {rsvpData.map((item) => (
                  <div key={item.id} className="border-b border-[#e6bfae] pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-[#8b6f52]">{item.name}</h4>
                        <p className="text-sm text-[#a8916f]">{item.phone}</p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                          item.attendance === 'yes'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {item.attendance === 'yes' ? '참석' : '불참'}
                        </span>
                        {item.attendance === 'yes' && (
                          <p className="text-sm text-[#8b6f52] mt-1">{item.guestCount}명</p>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-[#a8916f] mt-2">
                      {new Date(item.submittedAt).toLocaleString('ko-KR')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-serif text-[#b18463] mb-4">축하 메시지</h3>
              <div className="space-y-4">
                {messageData.map((item) => (
                  <div key={item.id} className="border border-[#e6bfae] rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-[#8b6f52]">{item.name}</h4>
                      <p className="text-xs text-[#a8916f]">
                        {new Date(item.submittedAt).toLocaleString('ko-KR')}
                      </p>
                    </div>
                    <p className="text-[#8b6f52] leading-relaxed">{item.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
