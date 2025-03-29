'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, Loader } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// Add this new component for message formatting
const FormattedMessage = ({ content }: { content: string }) => {
  const formattedContent = useMemo(() => {
    return content.split('\n').map((line, i) => {
      // Convert "•" bullet points into proper list items
      if (line.trim().startsWith('•')) {
        return (
          <li key={i} className="ml-4 mb-1">
            {line.trim().substring(1).trim()}
          </li>
        )
      }
      // Convert numbered lists (1., 2., etc.)
      if (/^\d+\./.test(line.trim())) {
        return (
          <li key={i} className="ml-4 mb-1">
            {line.trim()}
          </li>
        )
      }
      // Handle normal text
      return (
        <p key={i} className={line.trim() ? 'mb-2' : 'mb-4'}>
          {line}
        </p>
      )
    })
  }, [content])

  return <div className="whitespace-pre-wrap">{formattedContent}</div>
}

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ type: 'user' | 'ai'; content: string }[]>([
    { 
      type: 'ai', 
      content: "👋 Hi! I'm Propab AI. Ask me anything about our revolutionary features and how they can transform your professional journey!" 
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { type: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      })

      if (!response.ok) throw new Error('Failed to get response')

      const data = await response.json()
      setMessages(prev => [...prev, { 
        type: 'ai', 
        content: data.response
      }])
    } catch (error) {
      setMessages(prev => [...prev, { 
        type: 'ai', 
        content: "I apologize, but I'm having trouble responding right now. Please try again in a moment."
      }])
    } finally {
      setIsLoading(false)
    }
  }

  // Add click outside handler to close chat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const chatWindow = document.getElementById('chat-window')
      const chatButton = document.getElementById('chat-button')
      
      if (isOpen && 
          chatWindow && 
          !chatWindow.contains(event.target as Node) &&
          chatButton && 
          !chatButton.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
      >
        <motion.span
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-900/90 text-white px-4 py-2 rounded-full border border-gray-700/50 backdrop-blur-sm text-sm font-medium"
        >
          Chat with AI
        </motion.span>
        <Button
          id="chat-button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chat-window"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 w-80 bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-6 h-6" />
                <span className="font-semibold text-white text-sm">Propab AI</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-gray-800 text-gray-200 rounded-bl-none'
                    }`}
                  >
                    <FormattedMessage content={message.content} />
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-800 p-3 rounded-2xl rounded-bl-none">
                    <Loader className="w-5 h-5 animate-spin" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800 flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our features..."
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 