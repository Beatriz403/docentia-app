export function DocentIALogo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src="/images/logo.jpeg" alt="DocentIA Logo" className="h-12 w-auto" />
    </div>
  )
}
