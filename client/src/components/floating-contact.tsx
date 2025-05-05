import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, MessageSquare } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';
import ChatDialog from './chat-dialog';

interface FloatingContactProps {
  whatsappNumber?: string; // Número do WhatsApp com código do país (ex: 5511999999999)
  whatsappMessage?: string; // Mensagem pré-definida
}

const FloatingContact: React.FC<FloatingContactProps> = ({
  whatsappNumber = '5592999999999', // Número padrão (placeholder)
  whatsappMessage = 'Olá! Tenho uma dúvida e gostaria de falar sobre o trabalho de Jesus Alves Amazonas.'
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Função para lidar com o clique no botão principal
  const handleToggle = () => {
    if (isChatOpen) {
      setIsChatOpen(false);
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  // Função para abrir o chat
  const handleOpenChat = () => {
    setIsExpanded(false);
    setIsChatOpen(true);
  };

  // Função para fechar o chat
  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  // URL codificada para o WhatsApp
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {/* Container principal */}
        <div className="relative">
          {/* Botão principal (trigger) */}
          <button
            onClick={handleToggle}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            aria-label="Abrir opções de contato"
          >
            {isExpanded || isChatOpen ? (
              <X size={24} />
            ) : (
              <MessageCircle size={24} />
            )}
          </button>

          {/* Menu expandido com opções */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl overflow-hidden"
              >
                <div className="flex flex-col w-48">
                  {/* Opção de Chatbot */}
                  <button
                    onClick={handleOpenChat}
                    className="flex items-center px-4 py-3 hover:bg-gray-100 transition-colors duration-200 text-left"
                  >
                    <div className="bg-primary rounded-full p-2 text-white mr-3">
                      <MessageSquare size={20} />
                    </div>
                    <span className="font-medium">Chatbot AI</span>
                  </button>
                  
                  {/* Opção de WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-3 hover:bg-gray-100 transition-colors duration-200 text-left"
                  >
                    <div className="bg-green-500 rounded-full p-2 text-white mr-3">
                      <BsWhatsapp size={20} />
                    </div>
                    <span className="font-medium">WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Caixa de diálogo do chat */}
      <AnimatePresence>
        {isChatOpen && <ChatDialog isOpen={isChatOpen} onClose={handleCloseChat} />}
      </AnimatePresence>
    </>
  );
};

export default FloatingContact;
