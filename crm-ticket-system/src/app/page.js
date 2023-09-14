import Image from 'next/image'
import SignInSide from './signin/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignInSide></SignInSide>
    </main>
  )
}
