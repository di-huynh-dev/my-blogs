import '@/app/globals.css'
import Navbar from '@/components/navbar'
import { cn } from '@/lib/utils'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div
      className={cn(
        'break-words pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#86ecec_1px,transparent_1px)] [background-size:16px_16px]',
        { 'bg-white': '#E6E7EB' }
      )}
    >
      <Navbar />
      {children}
    </div>
  )
}
