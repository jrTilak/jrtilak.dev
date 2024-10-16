import { toast } from "react-hot-toast";
import { trackShare } from "@/firebase/track-share";

export const shareWebpage = (slug: string) => {
  trackShare(slug);
  if (typeof window === "undefined" || !("localStorage" in window)) return;
  try {
    window.navigator.share({
      title: document.title,
      url: window.location.href,
      text: document.getElementById("summary")?.innerText,
    });
  } catch (err) {
    try {
      window.navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard");
    } catch (err) {
      toast.error("Failed to share, try copying the link manually");
    }
  }
};
