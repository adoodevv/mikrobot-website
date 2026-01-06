"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, Image as ImageIcon } from "lucide-react";
import toast from "react-hot-toast";
import Image from "next/image";
import { format } from "date-fns";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  description: string | null;
  createdAt: string;
}

export default function AdminGallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadData, setUploadData] = useState({
    file: null as File | null,
    alt: "",
    category: "Events",
    description: "",
  });

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch("/api/gallery");
      const data = await response.json();
      setImages(data);
    } catch (error) {
      toast.error("Failed to fetch gallery images");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadData({ ...uploadData, file, alt: file.name });
    }
  };

  const handleUpload = async () => {
    if (!uploadData.file) {
      toast.error("Please select an image");
      return;
    }

    try {
      setIsUploading(true);
      // First upload the file
      const formData = new FormData();
      formData.append("file", uploadData.file);

      const uploadResponse = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const uploadResult = await uploadResponse.json();

      if (!uploadResponse.ok) {
        toast.error("Failed to upload image");
        return;
      }

      // Then create the gallery entry
      const createResponse = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          src: uploadResult.url,
          alt: uploadData.alt,
          category: uploadData.category,
          description: uploadData.description || null,
        }),
      });

      if (createResponse.ok) {
        toast.success("Image added successfully!");
        setShowUploadModal(false);
        setUploadData({
          file: null,
          alt: "",
          category: "Events",
          description: "",
        });
        fetchImages();
      } else {
        toast.error("Failed to add image to gallery");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      const response = await fetch(`/api/gallery/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Image deleted successfully");
        fetchImages();
      } else {
        toast.error("Failed to delete image");
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-slate-600">Loading gallery...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Gallery</h1>
          <p className="text-slate-600">Manage gallery images</p>
        </div>
        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-sky-700 text-white rounded-lg hover:bg-sky-800 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Image
        </button>
      </div>

      {images.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
          <ImageIcon className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <p className="text-slate-600 mb-4">No images in gallery</p>
          <button
            onClick={() => setShowUploadModal(true)}
            className="px-4 py-2 bg-sky-700 text-white rounded-lg hover:bg-sky-800 transition-colors"
          >
            Add First Image
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
            >
              <div className="relative aspect-video bg-slate-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-1 text-xs font-medium bg-sky-100 text-sky-700 rounded">
                    {image.category}
                  </span>
                  <button
                    onClick={() => handleDelete(image.id)}
                    className="p-1 text-red-600 hover:text-red-900 hover:bg-red-50 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm font-medium text-slate-900 mb-1">
                  {image.alt}
                </p>
                {image.description && (
                  <p className="text-sm text-slate-600 mb-2">
                    {image.description}
                  </p>
                )}
                <p className="text-xs text-slate-500">
                  {format(new Date(image.createdAt), "MMM d, yyyy")}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Add Gallery Image
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Image File *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="gallery-image"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="gallery-image"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <ImageIcon className="w-8 h-8 mb-2 text-slate-400" />
                      <p className="text-sm text-slate-500">
                        {uploadData.file ? uploadData.file.name : "Select Image"}
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Alt Text *
                </label>
                <input
                  type="text"
                  required
                  value={uploadData.alt}
                  onChange={(e) =>
                    setUploadData({ ...uploadData, alt: e.target.value })
                  }
                  className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 text-slate-900 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Category *
                </label>
                <select
                  required
                  value={uploadData.category}
                  onChange={(e) =>
                    setUploadData({ ...uploadData, category: e.target.value })
                  }
                  className="w-full h-12 bg-slate-50 border border-slate-200 rounded-lg px-4 text-slate-900 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none"
                >
                  <option value="Robofest">Robofest</option>
                  <option value="Equipment">Equipment</option>
                  <option value="Events">Events</option>
                  <option value="Teamwork">Teamwork</option>
                  <option value="Education">Education</option>
                  <option value="Projects">Projects</option>
                  <option value="WRO">WRO</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Description
                </label>
                <textarea
                  value={uploadData.description}
                  onChange={(e) =>
                    setUploadData({ ...uploadData, description: e.target.value })
                  }
                  rows={3}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none resize-none"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={handleUpload}
                disabled={isUploading}
                className="flex-1 px-4 py-2 bg-sky-700 text-white rounded-lg hover:bg-sky-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isUploading ? "Uploading..." : "Upload"}
              </button>
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setUploadData({
                    file: null,
                    alt: "",
                    category: "Events",
                    description: "",
                  });
                }}
                className="flex-1 px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

