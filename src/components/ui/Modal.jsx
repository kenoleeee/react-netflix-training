import { createPortal } from "react-dom";
import { useEffect } from "react";

export default function Modal({ children, onClose }) {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => {
            window.removeEventListener("keydown", handleEsc);
        }
    }, [onClose]);
    return createPortal(
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="relative bg-neutral-900 text-white rounded-2xl
            shadow-lg animate-fade-in">
                <button onClick={onClose}
                    aria-label="Close modal"
                    className="absolute top-3 right-3 text-white
                    text-xl hover:text-red-600 transition">
                    x
                </button>
                <div className="flex justify-center items-center">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    )
}