'use client'

import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils';
import { Icons } from "@/components/ui/icons";

interface BreadcrumbProps {
  previousPageName: string
  previousPageUrl: string
  className?: string
  buttonClassName?: string
  iconClassName?: string
  textClassName?: string
}

function Breadcrumb({ 
  previousPageName, 
  previousPageUrl,
  className,
  buttonClassName,
  iconClassName,
  textClassName
}: BreadcrumbProps) {
  const router = useRouter()

  const handleBack = () => {
    if (previousPageUrl) {
      router.push(previousPageUrl)
    } else {
      router.back()
    }
  }

  return (
    <nav 
      className={cn(
        "flex items-center space-x-2 mb-4 cursor-pointer",
        className
      )} 
      aria-label="Breadcrumb"
    >
      <button
        onClick={handleBack}
        className={cn(
          "text-sm font-medium text-foreground hover:text-gray-800 flex items-center",
          buttonClassName
        )}
      >
        <Icons.back className={cn("mr-2", iconClassName)} />
        <h2 className={cn('text-2xl font-semibold', textClassName)}>
          {previousPageName}
        </h2>
      </button>
    </nav>
  )
}

Breadcrumb.displayName = "Breadcrumb"

export { Breadcrumb }