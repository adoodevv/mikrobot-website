import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { format } from "date-fns";
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;

    const post = await prisma.post.findUnique({
        where: { slug }
    });

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.title,
        description: post.excerpt || `Read about ${post.title} at Mikrobot Academy`,
        openGraph: {
            title: post.title,
            description: post.excerpt || `Read about ${post.title} at Mikrobot Academy`,
            images: post.image ? [post.image] : ['/hero.png'],
            type: 'article',
            publishedTime: post.createdAt.toISOString(),
            authors: [post.author],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt || `Read about ${post.title} at Mikrobot Academy`,
            images: post.image ? [post.image] : ['/hero.png'],
        },
    };
}

// This is a server component
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const post = await prisma.post.findUnique({
        where: { slug }
    });

    if (!post) {
        return notFound();
    }

    return (
        <article className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-slate-900">
                {post.image ? (
                    <>
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover opacity-60"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                    </>
                ) : (
                    <div className="absolute inset-0 bg-slate-900" />
                )}

                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="max-w-4xl mx-auto">
                            <Link
                                href="/news"
                                className="inline-flex items-center text-sky-300 hover:text-sky-200 transition-colors mb-6 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full text-sm font-medium"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to News
                            </Link>

                            <div className="space-y-4">
                                <span className="inline-block px-3 py-1 rounded-full bg-sky-600 text-white text-sm font-bold tracking-wide">
                                    {post.category}
                                </span>
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                    {post.title}
                                </h1>

                                <div className="flex flex-wrap items-center gap-6 text-slate-300 pt-4">
                                    <div className="flex items-center">
                                        <User className="w-5 h-5 mr-2 text-sky-400" />
                                        <span className="font-medium text-white">{post.author}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Calendar className="w-5 h-5 mr-2 text-sky-400" />
                                        <span>{format(post.createdAt, "MMMM d, yyyy")}</span>
                                    </div>
                                    {post.readTime && (
                                        <div className="flex items-center">
                                            <Clock className="w-5 h-5 mr-2 text-sky-400" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 sm:px-6 py-16">
                <div className="max-w-3xl mx-auto">
                    {/* Excerpt */}
                    {post.excerpt && (
                        <div className="text-xl md:text-2xl font-serif text-slate-600 leading-relaxed mb-12 italic border-l-4 border-sky-500 pl-6">
                            {post.excerpt}
                        </div>
                    )}

                    {/* Main Content */}
                    <div className="prose prose-lg md:prose-xl prose-slate max-w-none 
                        prose-headings:text-slate-900 prose-headings:font-bold
                        prose-p:text-slate-600 prose-p:leading-relaxed
                        prose-a:text-sky-700 prose-a:no-underline hover:prose-a:underline
                        prose-img:rounded-xl prose-img:shadow-lg
                        prose-blockquote:border-l-sky-500 prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:not-italic
                        prose-li:marker:text-sky-500">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {post.content}
                        </ReactMarkdown>
                    </div>

                    {/* Share/Navigation Footer */}
                    <div className="mt-16 pt-8 border-t border-slate-200">
                        <div className="flex justify-between items-center">
                            <Link
                                href="/news"
                                className="group flex items-center text-slate-600 hover:text-sky-700 transition-colors font-medium"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                More Articles
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
