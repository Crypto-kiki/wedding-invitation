
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
const rsvpFile = path.join(dataDir, 'rsvp.json');

// 데이터 폴더 생성
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// RSVP 파일 초기화
if (!fs.existsSync(rsvpFile)) {
  fs.writeFileSync(rsvpFile, JSON.stringify([]));
}

export async function POST(request: NextRequest) {
  try {
    const { name, phone, attendance, guestCount } = await request.json();
    
    // 기존 데이터 읽기
    const existingData = JSON.parse(fs.readFileSync(rsvpFile, 'utf8'));
    
    // 새 데이터 추가
    const newEntry = {
      id: Date.now(),
      name,
      phone,
      attendance,
      guestCount: attendance === 'yes' ? guestCount : 0,
      submittedAt: new Date().toISOString(),
    };
    
    existingData.push(newEntry);
    
    // 파일에 저장
    fs.writeFileSync(rsvpFile, JSON.stringify(existingData, null, 2));
    
    return NextResponse.json({ success: true, message: '참석 여부가 저장되었습니다.' });
  } catch (error) {
    console.error('RSVP 저장 오류:', error);
    return NextResponse.json({ success: false, message: '저장 중 오류가 발생했습니다.' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const data = JSON.parse(fs.readFileSync(rsvpFile, 'utf8'));
    return NextResponse.json(data);
  } catch (error) {
    console.error('RSVP 조회 오류:', error);
    return NextResponse.json([], { status: 500 });
  }
}
