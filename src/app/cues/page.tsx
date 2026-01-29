"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Typography, Upload, Modal, message } from "antd";
import type { UploadFile } from "antd/es/upload/interface";

const { Title, Paragraph } = Typography;

export default function CueCollectionPage() {
  const [photos, setPhotos] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [activeSrc, setActiveSrc] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  async function loadPhotos() {
    const res = await fetch("/api/cues/photos", { cache: "no-store" });
    const data = await res.json();
    setPhotos(data.photos || []);
  }

  useEffect(() => {
    loadPhotos();
  }, []);

  async function uploadFiles(files: File[]) {
    setUploading(true);
    try {
      const form = new FormData();
      files.forEach((f) => form.append("files", f));

      const res = await fetch("/api/cues/upload", { method: "POST", body: form });
      if (!res.ok) throw new Error("Upload failed");

      message.success("Uploaded!");
      await loadPhotos();
    } catch (e) {
      message.error("Upload failed.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div style={{ width: "100%" }}>
      <Title level={2} style={{ marginBottom: 8 }}>
        cue collection
      </Title>
      <Paragraph type="secondary" style={{ marginBottom: 16 }}>
        upload and browse all my pool cue pictures.
      </Paragraph>

      {/* Upload */}
      <Upload.Dragger
        multiple
        accept="image/*"
        showUploadList={false}
        disabled={uploading}
        beforeUpload={() => false} // prevent antd auto-upload
        onChange={(info) => {
          const fileObjs = (info.fileList as UploadFile[])
            .map((f) => f.originFileObj)
            .filter(Boolean) as File[];

          if (fileObjs.length > 0) uploadFiles(fileObjs);
        }}
        style={{ marginBottom: 24 }}
      >
        <div style={{ padding: 18 }}>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>
            {uploading ? "uploading..." : "click or drag photos to upload"}
          </div>
          <div style={{ color: "rgba(0,0,0,0.55)" }}>
            supports jpg, png, webp, gif
          </div>
        </div>
      </Upload.Dragger>

      {/* Grid */}
      {photos.length === 0 ? (
        <Paragraph type="secondary">no cue photos yet — upload your first one ✨</Paragraph>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {photos.map((src) => (
            <button
              key={src}
              onClick={() => {
                setActiveSrc(src);
                setOpen(true);
              }}
              style={{
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: 16,
                overflow: "hidden",
                padding: 0,
                background: "white",
                cursor: "pointer",
              }}
              aria-label="Open photo"
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3" }}>
                <Image
                  src={src}
                  alt="Cue photo"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Modal preview */}
      <Modal
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}
        width={900}
        centered
        styles={{ body: { padding: 0 } }}
      >
        {activeSrc && (
          <div style={{ position: "relative", width: "100%", height: "70vh" }}>
            <Image
              src={activeSrc}
              alt="Cue photo enlarged"
              fill
              style={{ objectFit: "contain", background: "black" }}
              sizes="100vw"
              priority
            />
          </div>
        )}
      </Modal>
    </div>
  );
}
