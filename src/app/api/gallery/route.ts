import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    const images = await prisma.galleryImage.findMany({
      where: {
        ...(category && category !== 'All' ? { category } : {})
      },
      orderBy: { createdAt: 'desc' }
    });
    
    return NextResponse.json(images);
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return NextResponse.json(
      { error: 'Failed to fetch gallery images' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { src, alt, category, description } = body;
    
    const image = await prisma.galleryImage.create({
      data: {
        src,
        alt,
        category,
        description
      }
    });
    
    return NextResponse.json(image, { status: 201 });
  } catch (error: any) {
    console.error('Error creating gallery image:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create gallery image' },
      { status: 500 }
    );
  }
}

