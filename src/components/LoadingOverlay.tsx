interface LoadingOverlayProps {
  isVisible: boolean
}

export default function LoadingOverlay({ isVisible }: LoadingOverlayProps) {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-white/80 dark:bg-black/60">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 rounded-full border-4 border-brand-500/30 border-t-brand-600 animate-spin"></div>
        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
          กำลังประมวลผล กรุณารอสักครู่...
        </p>
      </div>
    </div>
  )
}