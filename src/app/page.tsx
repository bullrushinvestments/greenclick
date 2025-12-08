import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GreenClick',
  description: 'A carbon tracking and offsetting platform for e-commerce businesses that provides personalized climate action plans to reduce their carbon footprint while engaging customers with sustainable practices.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">GreenClick</h1>
      <p className="mt-4 text-lg">A carbon tracking and offsetting platform for e-commerce businesses that provides personalized climate action plans to reduce their carbon footprint while engaging customers with sustainable practices.</p>
    </main>
  )
}
