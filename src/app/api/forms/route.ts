import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const formType = searchParams.get('formType');
    const read = searchParams.get('read');

    const submissions = await prisma.formSubmission.findMany({
      where: {
        ...(formType ? { formType } : {}),
        ...(read !== null ? { read: read === 'true' } : {})
      },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(submissions);
  } catch (error) {
    console.error('Error fetching form submissions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch form submissions' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, name, email, contact, subject, message, age, interest, ...otherData } = body;

    const submission = await prisma.formSubmission.create({
      data: {
        formType,
        name,
        email,
        contact,
        subject,
        message,
        age,
        interest,
        data: JSON.stringify(otherData)
      }
    });

    return NextResponse.json(submission, { status: 201 });
  } catch (error: any) {
    console.error('Error creating form submission:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to submit form' },
      { status: 500 }
    );
  }
}

