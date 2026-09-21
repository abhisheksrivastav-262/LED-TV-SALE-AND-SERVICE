"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={BUSINESS.whatsapp}
      target="_blank"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
      className="fixed bottom-5 right-5 z-50 grid h-15 w-15 h-[60px] w-[60px] place-items-center rounded-full bg-[#25D366] shadow-[0_0_36px_rgba(37,211,102,0.65)] transition hover:scale-110"
    >
      <MessageCircle className="h-7 w-7 text-white" />
      <span className="absolute -right-1 -top-1 flex h-5 w-5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75" />
        <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">1</span>
      </span>
    </motion.a>
  );
}
