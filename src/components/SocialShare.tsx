"use client";

import Image from "next/image";
import { useState, useSyncExternalStore } from "react";
import styles from "@/style/components/social-share.module.css";

type ShareDetails = {
  title: string;
  url: string;
};

const socialChannels = [
  {
    id: "x",
    label: "X",
    icon: "/images/ui/social/x.png",
    buildUrl: ({ title, url }: ShareDetails) =>
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  },
  {
    id: "facebook",
    label: "Facebook",
    icon: "/images/ui/social/facebook.png",
    buildUrl: ({ url }: ShareDetails) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    id: "reddit",
    label: "Reddit",
    icon: "/images/ui/social/reddit.png",
    buildUrl: ({ title, url }: ShareDetails) =>
      `https://www.reddit.com/submit?title=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
  },
] as const;

const subscribeToBrowserCapabilities = () => () => undefined;

function browserSupportsNativeShare() {
  return typeof navigator !== "undefined" && typeof navigator.share === "function";
}

function getShareDetails(): ShareDetails {
  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href;
  const currentUrl = new URL(canonical || window.location.href);
  currentUrl.hash = "";

  return {
    title: document.title,
    url: currentUrl.toString(),
  };
}

function openShareWindow(url: string) {
  const popup = window.open(
    url,
    "_blank",
    "noopener,noreferrer,width=720,height=640",
  );
  if (popup) popup.opener = null;
}

async function copyText(value: string) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const field = document.createElement("textarea");
  field.value = value;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  const copied = document.execCommand("copy");
  field.remove();
  if (!copied) throw new Error("Copy command failed");
}

type SocialShareProps = {
  variant?: "footer" | "floating";
};

export default function SocialShare({ variant = "footer" }: SocialShareProps) {
  const nativeShareAvailable = useSyncExternalStore(
    subscribeToBrowserCapabilities,
    browserSupportsNativeShare,
    () => false,
  );
  const [status, setStatus] = useState("");

  function shareOnSocial(channel: (typeof socialChannels)[number]) {
    setStatus("");
    openShareWindow(channel.buildUrl(getShareDetails()));
  }

  async function shareWithDevice() {
    try {
      const details = getShareDetails();
      await navigator.share({ title: details.title, url: details.url });
      setStatus("Page shared.");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setStatus("Sharing is not available in this browser.");
    }
  }

  async function copyPageLink() {
    try {
      await copyText(getShareDetails().url);
      setStatus("Link copied.");
    } catch {
      setStatus("Could not copy the link.");
    }
  }

  return (
    <div
      className={`${styles.share} ${styles[variant]}`}
      role="group"
      aria-label="Share this page"
    >
      <span className={styles.label} aria-hidden={variant === "floating"}>
        {variant === "floating" ? "Share" : "Share this page"}
      </span>
      <div className={styles.buttons}>
        {socialChannels.map((channel) => (
          <button
            type="button"
            className={styles.button}
            aria-label={`Share this page on ${channel.label}`}
            title={`Share on ${channel.label}`}
            data-tooltip={channel.label}
            onClick={() => shareOnSocial(channel)}
            key={channel.id}
          >
            <Image src={channel.icon} width={22} height={22} alt="" aria-hidden="true" />
          </button>
        ))}
        <button
          type="button"
          className={`${styles.button} ${!nativeShareAvailable ? styles.unavailable : ""}`}
          aria-label="Share this page with your device"
          aria-hidden={!nativeShareAvailable}
          title="Share with your device"
          data-tooltip="Device"
          tabIndex={nativeShareAvailable ? 0 : -1}
          disabled={!nativeShareAvailable}
          onClick={shareWithDevice}
        >
          <Image src="/images/ui/social/share.png" width={22} height={22} alt="" aria-hidden="true" />
        </button>
        <button
          type="button"
          className={styles.button}
          aria-label="Copy a link to this page"
          title="Copy page link"
          data-tooltip="Copy link"
          onClick={copyPageLink}
        >
          <Image src="/images/ui/social/copy.png" width={22} height={22} alt="" aria-hidden="true" />
        </button>
      </div>
      <span className={styles.status} aria-live="polite" aria-atomic="true">
        {status}
      </span>
    </div>
  );
}
