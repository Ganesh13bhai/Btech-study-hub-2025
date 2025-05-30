
import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your BTechStudyHub Assistant. How can I help you with your studies today? You can ask me about:",
      isBot: true
    },
    {
      id: 2,
      text: "• Course materials and concepts\n• Study techniques\n• Branch-specific queries\n• Career guidance\n• Or anything else!",
      isBot: true
    }
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const newUserMessage = {
      id: messages.length + 1,
      text: input,
      isBot: false
    };
    
    setMessages([...messages, newUserMessage]);
    setInput('');
    
    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "I can help you find study materials for your courses. What subject are you looking for?",
        "Would you like to join a study room for that topic? I can create one for you.",
        "Check out our course repository for complete study materials and question banks.",
        "Need help with soft skills? We have tutorials on resume building and communication.",
        "Is there anything specific you'd like to know about your BTech curriculum?"
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const newBotMessage = {
        id: messages.length + 2,
        text: randomResponse,
        isBot: true
      };
      
      setMessages(prevMessages => [...prevMessages, newBotMessage]);
    }, 1000);
  };

  return (
    <>
      <Button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 rounded-full p-4 shadow-lg ${
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-btech-purple hover:bg-btech-blue"
        } transition-all duration-200 transform hover:scale-105`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-full max-w-sm shadow-xl border-t-4 border-t-btech-purple animate-in zoom-in-90">
          <CardHeader className="bg-gray-50 rounded-t-lg">
            <div className="flex items-center">
              <Bot className="h-6 w-6 text-btech-purple mr-2" />
              <div>
                <CardTitle className="text-lg">BTechStudyHub Assistant</CardTitle>
                <CardDescription>Your 24/7 Learning Companion</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-80 overflow-y-auto p-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-btech-purple text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-3 border-t">
            <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow"
              />
              <Button type="submit" size="icon" className="bg-btech-purple hover:bg-btech-blue">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default ChatbotButton;
