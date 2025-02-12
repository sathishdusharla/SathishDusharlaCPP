import React from 'react';
import { Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm leading-loose text-center md:text-left">
          © 2025 All Rights Reserved |{" "}
          <a
            href="https://github.com/sathishdusharla"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4 hover:text-primary inline-flex items-center gap-1"
          >
            Developed by Sathish Dusharla
            <Github className="h-4 w-4" />
          </a>
        </p>
      </div>
    </footer>
  );
}