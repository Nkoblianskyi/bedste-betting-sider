"use client"

import type React from "react"
import { useEffect } from "react"
import { X } from "lucide-react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-1 sm:p-4">
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />
      <div className="relative bg-dark-800 rounded-xl w-full max-w-xs sm:max-w-md h-fit max-h-[95vh] overflow-hidden flex flex-col mx-2">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 text-gray-400 hover:text-white transition-colors bg-gray-700/50 rounded-full p-1"
        >
          <X size={20} />
        </button>
        <div className="overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  )
}
