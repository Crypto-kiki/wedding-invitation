
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const userId = request.headers.get('X-Replit-User-Id');
  const userName = request.headers.get('X-Replit-User-Name');
  
  // 관리자 사용자 ID 설정 (본인 계정으로 변경하세요)
  const ADMIN_USER_ID = 'YOUR_REPLIT_USER_ID'; // 여기에 본인의 Replit User ID 입력
  
  if (!userId) {
    return NextResponse.json({ 
      authenticated: false, 
      isAdmin: false 
    });
  }
  
  return NextResponse.json({ 
    authenticated: true, 
    isAdmin: userId === ADMIN_USER_ID,
    userName 
  });
}
