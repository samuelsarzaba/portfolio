"use client";

import Link from "next/link";
import { LucideMail, LucideLinkedin, LucideGithub } from "lucide-react";
import { useState, useEffect } from "react";

export const runtime = "edge";

function formatDateTime() {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  const [date, time] = now.toLocaleString("en-US", options).split(", ");
  const [timeWithoutAmPm, amPm] = time.split(" ");
  return `${date}, ${timeWithoutAmPm}${amPm.toLowerCase()} VA`;
}

function TypingEffect({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayText((prev) => {
        if (index < text.length) {
          index++;
          return text.slice(0, index);
        }
        clearInterval(intervalId);
        return prev;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <div className="bg-white text-black text-2xl font-bold py-1 px-3 inline-block mb-4">
      {displayText}
    </div>
  );
}

function Notification() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 rounded shadow-lg">
      <p className="text-sm">
        Website under construction. Only the resume link is functional.
      </p>
    </div>
  );
}

export default function Component() {
  const handleResumeDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/Samuel Sarzaba Resume.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Samuel Sarzaba Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 flex items-center justify-center">
      <Notification />
      <div
        className="w-full flex flex-col items-center"
        style={{ maxWidth: "250px" }}
      >
        <TypingEffect text="samuel sarzaba" />
        <div className="mb-12 text-sm">{formatDateTime()}</div>
        <nav className="space-y-2 text-sm mb-6 w-full">
          <div>
            <span className="text-gray-500 cursor-not-allowed neon-hover">
              projects
            </span>
          </div>
          <div>
            <span className="text-gray-500 cursor-not-allowed neon-hover">
              skills
            </span>
          </div>
          <div>
            <span className="text-gray-500 cursor-not-allowed neon-hover">
              experience
            </span>
          </div>
          <div>
            <span className="text-gray-500 cursor-not-allowed neon-hover">
              education
            </span>
          </div>
          <div>
            <span className="text-gray-500 cursor-not-allowed neon-hover">
              about
            </span>
          </div>
          <div>
            <a
              href="/Samuel Sarzaba Resume.pdf"
              onClick={handleResumeDownload}
              className="neon-hover"
            >
              resume
            </a>
          </div>
        </nav>
        <div className="flex space-x-4">
          <Link href="mailto:samuelsarzaba@gmail.com">
            <LucideMail className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/samuel-sarzaba/">
            <LucideLinkedin className="w-5 h-5" />
          </Link>
          <Link href="https://github.com/samuelsarzaba">
            <LucideGithub className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
