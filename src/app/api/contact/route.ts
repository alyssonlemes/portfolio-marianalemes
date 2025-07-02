import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, childAge, message } = await req.json();

    // Validação básica dos campos obrigatórios
    if (!name || !email || !message) {
      return NextResponse.json({ 
        error: 'Campos obrigatórios não preenchidos: nome, email e mensagem são obrigatórios.' 
      }, { status: 400 });
    }

    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ 
        error: 'Email inválido.' 
      }, { status: 400 });
    }

    // Verificar se a API key está configurada
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY não está configurada');
      return NextResponse.json({ 
        error: 'Configuração do servidor incompleta.' 
      }, { status: 500 });
    }

    const result = await resend.emails.send({
      from: 'Contato Site Mariana Lemes <onboarding@resend.dev>',
      to: ['marianaldiamantino@gmail.com'],
      subject: 'Novo contato pelo site - Mariana Lemes Fisioterapia',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2563eb; margin-bottom: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
              🩺 Novo contato pelo site - Fisioterapia Pediátrica
            </h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">👤 Nome:</strong> 
              <span style="color: #6b7280;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">📧 Email:</strong> 
              <span style="color: #6b7280;">${email}</span>
            </div>
            
            ${phone ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">📱 Telefone:</strong> 
              <span style="color: #6b7280;">${phone}</span>
            </div>
            ` : ''}
            
            ${childAge ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">👶 Idade da criança:</strong> 
              <span style="color: #6b7280;">${childAge}</span>
            </div>
            ` : ''}
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #374151;">💬 Mensagem:</strong>
              <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin-top: 8px; color: #374151; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 15px; margin-top: 20px; color: #6b7280; font-size: 12px;">
              <p>📅 Enviado em: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</p>
              <p>🌐 Site: marianalemes.com.br</p>
            </div>
          </div>
        </div>
      `,
      replyTo: email
    });

    console.log('Email enviado com sucesso:', result);
    
    // Log adicional para debug
    if (result.data) {
      console.log('ID da mensagem:', result.data.id);
    }
    
    return NextResponse.json({ 
      ok: true, 
      messageId: result.data?.id,
      message: 'Email enviado com sucesso!' 
    });
    
  } catch (error) {
    console.error('Erro completo:', error);
    
    // Se for erro de parsing do JSON
    if (error instanceof SyntaxError) {
      return NextResponse.json({ 
        error: 'Dados inválidos na requisição.' 
      }, { status: 400 });
    }
    
    // Se for erro específico do Resend
    if (error && typeof error === 'object' && 'message' in error) {
      console.error('Erro do Resend:', error.message);
      return NextResponse.json({ 
        error: 'Erro ao enviar e-mail. Tente novamente em alguns minutos.', 
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      }, { status: 500 });
    }
    
    // Erro genérico
    return NextResponse.json({ 
      error: 'Erro interno do servidor. Tente novamente mais tarde.', 
      details: error instanceof Error ? error.message : 'Erro desconhecido' 
    }, { status: 500 });
  }
}