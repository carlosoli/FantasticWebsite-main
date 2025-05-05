import React, { useState, useRef, useEffect } from 'react';
import { X, Send, User, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

// Função para gerar ID único para mensagens
const generateId = () => Math.random().toString(36).substring(2, 10);

// Mensagens iniciais do chatbot
const initialMessages: Message[] = [
  {
    id: generateId(),
    content: 'Olá! Sou o assistente virtual de Jesus Alves Amazonas. Como posso ajudar você hoje?',
    sender: 'bot',
    timestamp: new Date()
  }
];

// Lista de perguntas frequentes
const suggestedQuestions = [
  'Quais são os próximos eventos?',
  'Como posso agendar uma entrevista?',
  'Onde encontro mais informações sobre os projetos?',
  'Como posso contribuir?'
];

const ChatDialog: React.FC<ChatDialogProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Função para enviar mensagem
  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Adiciona mensagem do usuário
    const userMessage: Message = {
      id: generateId(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simula resposta do chatbot após um breve delay
    setTimeout(() => {
      const botResponse: Message = {
        id: generateId(),
        content: `Obrigado pela sua mensagem. Estamos trabalhando para implementar respostas inteligentes. Por enquanto, sugiro que entre em contato pelo WhatsApp para uma resposta mais rápida.`,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };
  
  // Enviar mensagem ao pressionar Enter
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  // Seleciona uma pergunta sugerida
  const handleSelectQuestion = (question: string) => {
    setInputValue(question);
  };
  
  // Rola para a mensagem mais recente
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Formata a hora da mensagem
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  if (!isOpen) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-24 right-6 w-80 md:w-96 h-[450px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col z-50"
    >
      {/* Header */}
      <div className="bg-primary text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot size={20} />
          <h3 className="font-bold">Chat com Assistente</h3>
        </div>
        <button 
          onClick={onClose}
          className="text-white hover:bg-primary-light rounded-full p-1 transition-colors duration-200"
          aria-label="Fechar chat"
        >
          <X size={20} />
        </button>
      </div>
      
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-lg p-3 ${message.sender === 'user' 
                ? 'bg-primary text-white rounded-tr-none' 
                : 'bg-white border border-gray-200 rounded-tl-none'}`}
            >
              <div className="flex items-center gap-2 mb-1">
                {message.sender === 'bot' ? (
                  <Bot size={16} className="text-primary" />
                ) : (
                  <User size={16} />
                )}
                <span className="text-xs opacity-70">{formatTime(message.timestamp)}</span>
              </div>
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="bg-white border border-gray-200 rounded-lg rounded-tl-none p-3 max-w-[80%]">
              <div className="flex items-center gap-2">
                <Loader2 size={16} className="animate-spin text-primary" />
                <span className="text-sm text-gray-500">Digitando...</span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Suggested Questions */}
      {messages.length <= 2 && (
        <div className="p-3 bg-gray-50 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-2">Perguntas sugeridas:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleSelectQuestion(question)}
                className="text-xs bg-white border border-gray-200 hover:border-primary px-2 py-1 rounded-full transition-colors duration-200"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Input Container */}
      <div className="p-3 bg-white border-t border-gray-200">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Digite sua mensagem..."
            className="flex-1 border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            disabled={isTyping}
          />
          <button
            onClick={handleSendMessage}
            disabled={inputValue.trim() === '' || isTyping}
            className={`p-2 rounded-full ${inputValue.trim() === '' || isTyping 
              ? 'bg-gray-200 text-gray-400' 
              : 'bg-primary text-white hover:bg-primary-light'}`}
            aria-label="Enviar mensagem"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatDialog;
