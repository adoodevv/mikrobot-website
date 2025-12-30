"use client";

import { useEffect, useState } from "react";
import { Mail, Trash2, Eye, EyeOff, Filter } from "lucide-react";
import toast from "react-hot-toast";
import { format } from "date-fns";

interface FormSubmission {
  id: string;
  formType: string;
  name: string | null;
  email: string | null;
  subject: string | null;
  message: string | null;
  age: string | null;
  interest: string | null;
  data: string | null;
  read: boolean;
  createdAt: string;
}

export default function AdminForms() {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "unread" | "contact" | "enroll">("all");

  useEffect(() => {
    fetchSubmissions();
  }, [filter]);

  const fetchSubmissions = async () => {
    try {
      let url = "/api/forms";
      if (filter === "unread") {
        url += "?read=false";
      } else if (filter === "contact") {
        url += "?formType=contact";
      } else if (filter === "enroll") {
        url += "?formType=enroll";
      }

      const response = await fetch(url);
      const data = await response.json();
      setSubmissions(data);
    } catch (error) {
      toast.error("Failed to fetch form submissions");
    } finally {
      setIsLoading(false);
    }
  };

  const handleMarkAsRead = async (id: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/forms/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read: !currentStatus }),
      });

      if (response.ok) {
        toast.success(currentStatus ? "Marked as unread" : "Marked as read");
        fetchSubmissions();
      } else {
        toast.error("Failed to update submission");
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this submission?")) return;

    try {
      const response = await fetch(`/api/forms/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Submission deleted successfully");
        fetchSubmissions();
      } else {
        toast.error("Failed to delete submission");
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  const getFormData = (submission: FormSubmission) => {
    if (submission.data) {
      try {
        return JSON.parse(submission.data);
      } catch {
        return {};
      }
    }
    return {};
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-slate-600">Loading submissions...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Form Submissions
          </h1>
          <p className="text-slate-600">View and manage form submissions</p>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex gap-2 flex-wrap">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-lg transition-colors ${filter === "all"
            ? "bg-sky-700 text-white"
            : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("unread")}
          className={`px-4 py-2 rounded-lg transition-colors ${filter === "unread"
            ? "bg-sky-700 text-white"
            : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
        >
          Unread
        </button>
        <button
          onClick={() => setFilter("contact")}
          className={`px-4 py-2 rounded-lg transition-colors ${filter === "contact"
            ? "bg-sky-700 text-white"
            : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
        >
          Contact
        </button>
        <button
          onClick={() => setFilter("enroll")}
          className={`px-4 py-2 rounded-lg transition-colors ${filter === "enroll"
            ? "bg-sky-700 text-white"
            : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
        >
          Enroll
        </button>
      </div>

      {submissions.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
          <Mail className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <p className="text-slate-600">No form submissions found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {submissions.map((submission) => {
            const formData = getFormData(submission);
            return (
              <div
                key={submission.id}
                className={`bg-white rounded-xl shadow-sm border p-6 ${!submission.read ? "border-sky-300 bg-sky-50/50" : "border-slate-200"
                  }`}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${submission.formType === "contact"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-green-100 text-green-700"
                          }`}
                      >
                        {submission.formType}
                      </span>
                      {!submission.read && (
                        <span className="px-2 py-1 text-xs font-medium bg-orange-100 text-orange-700 rounded-full">
                          New
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500">
                      {format(new Date(submission.createdAt), "MMM d, yyyy 'at' h:mm a")}
                    </p>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto justify-end">
                    <button
                      onClick={() =>
                        handleMarkAsRead(submission.id, submission.read)
                      }
                      className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                      title={submission.read ? "Mark as unread" : "Mark as read"}
                    >
                      {submission.read ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                    <button
                      onClick={() => handleDelete(submission.id)}
                      className="p-2 text-red-600 hover:text-red-900 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  {submission.name && (
                    <div>
                      <span className="text-sm font-medium text-slate-700">Name: </span>
                      <span className="text-sm text-slate-900">{submission.name}</span>
                    </div>
                  )}
                  {submission.email && (
                    <div>
                      <span className="text-sm font-medium text-slate-700">Email: </span>
                      <a
                        href={`mailto:${submission.email}`}
                        className="text-sm text-sky-600 hover:underline"
                      >
                        {submission.email}
                      </a>
                    </div>
                  )}
                  {submission.subject && (
                    <div>
                      <span className="text-sm font-medium text-slate-700">Subject: </span>
                      <span className="text-sm text-slate-900">{submission.subject}</span>
                    </div>
                  )}
                  {submission.message && (
                    <div>
                      <span className="text-sm font-medium text-slate-700">Message: </span>
                      <p className="text-sm text-slate-900 mt-1 whitespace-pre-wrap">
                        {submission.message}
                      </p>
                    </div>
                  )}
                  {submission.age && (
                    <div>
                      <span className="text-sm font-medium text-slate-700">Age: </span>
                      <span className="text-sm text-slate-900">{submission.age}</span>
                    </div>
                  )}
                  {submission.interest && (
                    <div>
                      <span className="text-sm font-medium text-slate-700">Interest: </span>
                      <p className="text-sm text-slate-900 mt-1 whitespace-pre-wrap">
                        {submission.interest}
                      </p>
                    </div>
                  )}
                  {Object.keys(formData).length > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-sm font-medium text-slate-700 mb-2">
                        Additional Data:
                      </p>
                      <pre className="text-xs bg-slate-50 p-3 rounded-lg overflow-auto">
                        {JSON.stringify(formData, null, 2)}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

