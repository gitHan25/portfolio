"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface DownloadCVButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline" | "ghost";
}

export function DownloadCVButton({
  className = "",
  size = "lg",
  variant = "outline",
}: DownloadCVButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      // Check if the file exists
      const response = await fetch("/Muhammad_Farhan_Editya_CV.pdf", {
        method: "HEAD",
      });

      if (!response.ok) {
        throw new Error("CV file not found");
      }

      // Create download link
      const link = document.createElement("a");
      link.href = "/Muhammad_Farhan_Editya_CV.pdf";
      link.download = "Muhammad_Farhan_Editya_CV.pdf";

      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show success message
      toast.success("CV downloaded successfully!");
    } catch (error) {
      console.error("Download failed:", error);
      toast.error("Failed to download CV. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant={variant}
        size={size}
        className={`transition-all duration-300 ${className}`}
        onClick={handleDownload}
        disabled={isDownloading}
      >
        {isDownloading ? (
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        ) : (
          <Download className="mr-2 h-5 w-5" />
        )}
        {isDownloading ? "Downloading..." : "Download CV"}
      </Button>
    </motion.div>
  );
}
