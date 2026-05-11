"use client";

export default function MeshBackground() {
  return (
    <>
      <div className="mesh-gradient-bg" aria-hidden="true">
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <div className="mesh-blob mesh-blob-3" />
      </div>
      <div className="noise-overlay" aria-hidden="true" />
    </>
  );
}
