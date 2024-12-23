"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faWindowMinimize, faXmark } from "@fortawesome/free-solid-svg-icons";

export const runtime = "edge";

function formatDateTime() {
  const now = new Date();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const day = days[now.getDay()];
  const month = months[now.getMonth()];
  const date = now.getDate();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  return `Last login: ${day} ${month} ${date} ${hours}:${minutes}:${seconds} on tty2`;
}


export default function Component() {
  return (
    <div className="flex min-h-screen items-center justify-center p-8 text-white">
      <div
        className="flex w-full max-w-[250px] flex-col items-center"
      >
        <div className="relative -mx-8 mb-8 w-[calc(100%+4rem)] text-sm sm:-mx-16 sm:w-[calc(100%+8rem)]">
          <div className="absolute -top-6 right-0 flex gap-2">
            <FontAwesomeIcon icon={faWindowMinimize} className="w-3 h-3 cursor-pointer hover:text-gray-400" />
            <FontAwesomeIcon icon={faXmark} className="w-4 h-4 cursor-pointer hover:text-gray-400" />
          </div>
          <div className="border border-white p-2 space-y-1">
            <div>Portfolio login: samuelsarzaba</div>
            <div>Password:</div>
            <div>{formatDateTime()}</div>
            <div className="flex">
              <span>[samuelsarzaba@Portfolio ~]$&nbsp;</span>
              <span className="w-2 h-5 bg-white cursor-blink"></span>
            </div>
          </div>
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
              href="https://files.catbox.moe/ygwcwk.pdf"
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
