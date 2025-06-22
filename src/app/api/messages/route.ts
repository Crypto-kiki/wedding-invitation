
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data: messages, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json(messages || []);
  } catch (error) {
    console.error('메시지 조회 실패:', error);
    return NextResponse.json({ error: '메시지를 불러올 수 없습니다.' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, message } = await request.json();

    if (!name || !message) {
      return NextResponse.json({ error: '이름과 메시지를 모두 입력해주세요.' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('messages')
      .insert([
        {
          name: name.trim(),
          message: message.trim(),
        }
      ])
      .select();

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('메시지 저장 실패:', error);
    return NextResponse.json({ error: '메시지 저장에 실패했습니다.' }, { status: 500 });
  }
}
