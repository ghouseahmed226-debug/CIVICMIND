'use client';
import ChatMessage from '@/components/ChatMessage';
import { suggestedPrompts, processMessage, getGreeting } from '@/lib/chatEngine';
import { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Mic, Sparkles } from 'lucide-react';

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messages.length === 0 && getGreeting) {
      setMessages([getGreeting()]);
    }
  }, [messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (text = inputValue) => {
    if (!text.trim()) return;
    
    const userMsg = {
      id: Date.now(),
      role: 'user',
      content: text,
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);
    
    try {
      const response = await processMessage(text);
      setIsTyping(false);
      setMessages(prev => [...prev, { ...response, id: Date.now() + 1, role: 'assistant', timestamp: new Date().toISOString() }]);
    } catch (e) {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-layout animate-fade-in">
      <div className="chat-main">
        <div className="chat-messages">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
          {isTyping && (
            <div className="chat-message chat-message-ai">
              <div className="chat-message-avatar">
                <Sparkles size={18} />
              </div>
              <div className="chat-message-content">
                <div className="chat-typing-indicator">
                  <div className="chat-typing-dot"></div>
                  <div className="chat-typing-dot"></div>
                  <div className="chat-typing-dot"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="chat-input-area">
          {messages.length <= 1 && (
            <div className="chat-suggested-prompts">
              {suggestedPrompts?.slice(0, 4).map((prompt, i) => (
                <button key={i} className="chat-suggested-prompt" onClick={() => handleSend(prompt.text)}>
                  <Sparkles size={14} /> {prompt.text}
                </button>
              ))}
            </div>
          )}
          
          <div className="chat-input-container">
            <button className="header-icon-btn" style={{ flexShrink: 0 }}>
              <Paperclip size={20} />
            </button>
            <div className="chat-input-wrapper">
              <textarea
                className="chat-input"
                placeholder="Ask CivicMind anything about the city..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
              />
            </div>
            <button className="header-icon-btn" style={{ flexShrink: 0 }}>
              <Mic size={20} />
            </button>
            <button 
              className="chat-send-btn" 
              onClick={() => handleSend()}
              disabled={!inputValue.trim()}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
