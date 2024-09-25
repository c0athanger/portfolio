"use client"
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Loader from "@/components/loader";
import { useRouter, usePathname } from 'next/navigation';
import Nav from "@/components/nav";

// Create a homepage

export default function Home() {

  const router = useRouter();
  const isHome = usePathname() === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading]);
  return (
    <div className="flex items-center justify-center fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-navy z-[99]">
      {isLoading && isHome ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (

        <Nav isHome={isHome} />
        // <Social isHome={isHome} />
        // <Email isHome={isHome} />

        // <div id="content">
        //   {children}
        //   <Footer />
        // </div>
      )}
    </div>
  );
}
