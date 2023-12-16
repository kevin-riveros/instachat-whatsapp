import Footer from './components/Footer'
import Form from './components/Form'

export const metadata = {
  title: 'InstaChat Whatsapp',
  description: 'App para abrir conversaciones de Whatsapp sin guardar el número',
}

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-between w-full'>
    <main className="container mx-auto mt-16 px-4 flex flex-col items-center justify-start ">
      <h1 className="text-4xl font-bold text-center font-black">
        InstaChat Whatsapp
      </h1>
      <p className='mt-8 text-center'>
        Abre conversaciones de Whatsapp sin guardar el número
      </p>
      <p className='mt-2 text-xs'>
        *Solo disponible para números de Perú
      </p>
      <Form />
      
    </main>
    <Footer />
    </div>
    
  )
}
