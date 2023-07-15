import ChatWindow from '@/components/chat/chat-window'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col container pb-8'>
      <Navbar />
      <main>
        <ChatWindow />
      </main>
    </div>
  )
}
