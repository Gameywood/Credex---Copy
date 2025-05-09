import React, { useState, useRef, useEffect } from 'react';

const mockResponses = {
  'How do I sell my license?': 'You just need to upload your license info, and we’ll handle the rest!',
  'How long does it take to get paid?': 'Typically within 2–3 business days after validation.',
  'What payment methods do you accept?': 'We accept payments through PayPal, Credit Card, and Bank Transfer.',
  'Can I cancel my order?': 'Yes, you can cancel your order within 24 hours of purchase.',
  'How can I contact customer support?': 'You can contact us via email at support@softsell.com or through the chat.',
  'Do you offer refunds?': 'Yes, we offer refunds within 30 days of purchase if you are not satisfied with the product.',
};

const mockQuestions = Object.keys(mockResponses);

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const sendMockResponse = (question) => {
    const userMsg = { role: 'user', text: question };
    const botMsg = { role: 'bot', text: mockResponses[question] || 'Sorry, I don’t have an answer for that.' };
    setMessages(prev => [
      ...prev,
      userMsg,
      botMsg,
      { role: 'bot', text: 'Do you have any more queries? Select from below:' }
    ]);
  };

  const handleOpenChat = () => {
    setIsOpen(true);
    setMessages([{ role: 'bot', text: 'Hi! How can I help you today? Please select a question:' }]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return isOpen ? (
    <div className="fixed bottom-4 right-4 w-80 h-[450px] bg-gradient-to-br from-blue-100/80 to-purple-100/80 backdrop-blur-md rounded-lg shadow-xl border border-gray-300 flex flex-col">




      <div className="bg-indigo-600 text-white p-4 font-semibold flex justify-between items-center  rounded-t-lg">
        SoftSell Chat
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-gray-300 focus:outline-none"
        >
          ✕
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-2 text-sm">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`inline-block p-2 rounded-lg max-w-[70%] ${msg.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'}`}>
              {msg.text}
            </div>
          </div>
        ))}

        {/* Show selectable mock questions */}
        <div className="flex flex-wrap gap-2 mt-2">
          {mockQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => sendMockResponse(q)}
              className="inline-block text-left text-black border border-indigo-300 bg-gradient-to-br from-blue-200/80 to-indigo-200/80 rounded-b-md px-3 py-1 hover:bg-indigo-50"
            >
              {q}
            </button>
          ))}
        </div>

        <div ref={messagesEndRef} />
      </div>
    </div>
  ) : (
    <button
      onClick={handleOpenChat}
      className="fixed bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg"
      aria-label="Open chat"
    >
      💬
    </button>
  );
}
