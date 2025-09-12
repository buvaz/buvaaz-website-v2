import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function loadScript(src: string) {
  return new Promise<HTMLScriptElement>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = () => resolve(s);
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(s);
  });
}

export default function WebflowScripts() {
  const location = useLocation();

  useEffect(() => {
    let mounted = true;

    (async () => {
      // 1) (Optional) If your exported webflow.js needs jQuery, load it first.
      if (!(window as any).jQuery) {
        await loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js");
      }

      // 2) Load/Reload webflow.js after React DOM exists.
      //    If already loaded, re-init interactions on route change.
      if ((window as any).Webflow) {
        try {
          // kill previous interactions to avoid double-init
          (window as any).Webflow.destroy();
        } catch {}
        try {
          (window as any).Webflow.ready();
          (window as any).Webflow.require("ix2").init();
        } catch {}
      } else if (mounted) {
        await loadScript("webflow.js"); // put your exported webflow.js in /public
      }
    })();

    return () => {
      mounted = false;
    };
  }, [location.pathname]); // re-run when route changes

  return null;
}
