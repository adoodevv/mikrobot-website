"use client";

import { useEffect, useState } from "react";
import { FileText, Image as ImageIcon, Mail, Eye } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    posts: 0,
    galleryImages: 0,
    formSubmissions: 0,
    unreadForms: 0,
  });
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchStats();
    const storedUsername = localStorage.getItem("adminUsername");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const fetchStats = async () => {
    try {
      const [postsRes, galleryRes, formsRes] = await Promise.all([
        fetch("/api/posts?published=false"),
        fetch("/api/gallery"),
        fetch("/api/forms"),
      ]);

      const posts = await postsRes.json();
      const gallery = await galleryRes.json();
      const forms = await formsRes.json();
      const unreadForms = forms.filter((f: any) => !f.read);

      setStats({
        posts: posts.length,
        galleryImages: gallery.length,
        formSubmissions: forms.length,
        unreadForms: unreadForms.length,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const statCards = [
    {
      title: "Total Posts",
      value: stats.posts,
      icon: FileText,
      href: "/admin/posts",
    },
    {
      title: "Gallery Images",
      value: stats.galleryImages,
      icon: ImageIcon,
      href: "/admin/gallery",
    },
    {
      title: "Form Submissions",
      value: stats.formSubmissions,
      icon: Mail,
      href: "/admin/forms",
    },
    {
      title: "Unread Forms",
      value: stats.unreadForms,
      icon: Eye,
      href: "/admin/forms?filter=unread",
    },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-slate-600">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
        <p className="text-slate-600">Welcome back{username ? `, ${username}` : ""}</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.title}
              href={card.href}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`bg-slate-200 p-3 rounded-lg text-slate-900`}
                >
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-sm font-medium text-slate-600 mb-1">
                {card.title}
              </h3>
              <p className="text-3xl font-bold text-slate-900">
                {card.value}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/admin/posts/new"
            className="px-4 py-2 bg-sky-700 text-white rounded-lg hover:bg-sky-800 transition-colors"
          >
            Create New Post
          </Link>
          <Link
            href="/admin/gallery"
            className="px-4 py-2 bg-none text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-200 transition-colors"
          >
            Add Gallery Image
          </Link>
        </div>
      </div>
    </div>
  );
}

