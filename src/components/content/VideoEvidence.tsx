"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/style/components/video-evidence.module.css";

type VideoEvidenceProps = {
  youtubeId: string;
  startSeconds: number;
  title: string;
  sourceUrl: string;
  timestampLabel: string;
  alt: string;
  poster?: string;
};

export default function VideoEvidence({
  youtubeId,
  startSeconds,
  title,
  timestampLabel,
  alt,
  poster,
}: VideoEvidenceProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeId}?start=${startSeconds}&autoplay=1&rel=0`;

  return (
    <figure className={styles.evidence}>
      <div className={styles.frame}>
        {isPlaying ? (
          <iframe
            src={embedUrl}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className={styles.preview}
            onClick={() => setIsPlaying(true)}
            aria-label={`Play ${title} from ${timestampLabel}`}
          >
            <Image
              src={poster ?? `https://i.ytimg.com/vi/${youtubeId}/mqdefault.jpg`}
              width="960"
              height="540"
              unoptimized
              loading="lazy"
              referrerPolicy="no-referrer"
              alt={alt}
            />
            <span className={styles.play} aria-hidden="true">▶</span>
          </button>
        )}
      </div>
    </figure>
  );
}
