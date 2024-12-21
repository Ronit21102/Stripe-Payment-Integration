import { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import { api } from './utils/api'

function App() {
  const [message, setMessage] = useState('')

  const testBackend = async () => {
    try {
      const response = await api.get('/test')
      setMessage(response.message)
    } catch (error) {
      setMessage('Error connecting to backend')
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Vite + React + Tailwind
          </h1>
          
          <div className="space-y-4">
            <Input
              label="Sample Input"
              placeholder="Type something..."
            />
            
            <Button
              onClick={testBackend}
              className="w-full"
            >
              Test Backend Connection
            </Button>

            {message && (
              <div className="mt-4 p-4 bg-gray-100 rounded-md">
                <p className="text-gray-700">{message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
