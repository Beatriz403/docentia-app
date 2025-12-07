export function DocentIALogo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 justify-start  ${className}`}>
      <img src="/images/logo_transparente.png" alt="DocentIA Logo" className="h-16 md:h-20 w-auto" />
    </div>
  )
}
