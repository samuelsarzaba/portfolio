"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faWindowMinimize, faXmark } from "@fortawesome/free-solid-svg-icons";

export const runtime = "edge";

import { useState, useEffect } from "react";

const typeInTerminal = (text: string, href: string) => {
  const terminal = document.querySelector('.terminal-input');
  if (terminal) {
    terminal.textContent = '';
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        terminal.textContent += text[i];
        i++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    }, 50);
  }
};

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const formatDateTime = (date: Date) => {
  const day = DAYS[date.getDay()];
  const month = MONTHS[date.getMonth()];
  const dateNum = date.getDate();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `${day} ${month} ${dateNum} ${hours}:${minutes}:${seconds}`;
};

export default function Component() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(formatDateTime(new Date()));

    const terminal = document.querySelector('.terminal-input');
    if (terminal) {
      terminal.textContent = '';
    }
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center p-8 text-white">
      <div
        className="flex w-full max-w-[250px] flex-col items-center"
      >
        <div className="relative -mx-8 mb-8 w-[calc(100%+6rem)] text-sm sm:-mx-16 sm:w-[calc(100%+12rem)]">
          <div className="absolute -top-6 right-0 flex gap-2">
            <FontAwesomeIcon icon={faWindowMinimize} className="w-3 h-4 cursor-pointer hover:text-gray-400" />
            <FontAwesomeIcon icon={faXmark} className="w-4 h-4 cursor-pointer hover:text-gray-400" />
          </div>
          <div className="border border-white p-2 space-y-1">
            <div>Portfolio login: samuelsarzaba</div>
            <div>Password:</div>
            <div>Last login: {time} on tty2</div>
            <div className="flex">
              <span>[samuelsarzaba@Portfolio ~]$&nbsp;</span>
              <span className="terminal-input"></span>
              <span className="w-2 h-5 bg-white cursor-blink"></span>
            </div>
          </div>
          <div id="terminal-newline" className="h-5"></div>
        </div>
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
            <Link
              href="/experience"
              className="neon-hover cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                typeInTerminal('cd experience', '/experience');
              }}
            >
              experience
            </Link>
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
              href="/Samuel_Sarzaba_Resume.pdf"
              download
              className="neon-hover"
            >
              resume
            </a>
          </div>
        </nav>
        <div className="flex space-x-4">
          <Link href="mailto:samuelsarzaba@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/samuel-sarzaba/">
            <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
          </Link>
          <Link href="https://github.com/samuelsarzaba">
            <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
