import { contact } from "@/data/site";
import { WhatsappIcon } from "./ui";

/** Floating WhatsApp shortcut, fixed to the bottom-right corner. */
export function WhatsAppButton() {
  if (!contact.whatsapp) return null;
  const href = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    contact.whatsappMessage,
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp (opens in a new tab)"
      className="group fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition duration-300 hover:scale-110 hover:shadow-xl focus-visible:outline-offset-4 sm:bottom-7 sm:right-7"
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.5s] motion-reduce:hidden"
      />
      <WhatsappIcon width={30} height={30} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-sm font-medium opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100 md:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
