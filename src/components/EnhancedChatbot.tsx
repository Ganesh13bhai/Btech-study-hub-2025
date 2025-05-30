
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, Book, Lightbulb } from 'lucide-react';
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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  type?: 'text' | 'code' | 'explanation' | 'math';
}

interface SuggestedPrompt {
  text: string;
  icon: React.ReactNode;
}

const EnhancedChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [aiMode, setAiMode] = useState<'general' | 'subject'>('general');
  const [activeSubject, setActiveSubject] = useState('Mathematics');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your BTechStudyHub AI Assistant. I can help with your studies, explain concepts, solve problems, and more.",
      isBot: true
    },
    {
      id: 2,
      text: "What would you like to learn today?",
      isBot: true
    }
  ]);

  const suggestedPrompts: Record<string, SuggestedPrompt[]> = {
    general: [
      { 
        text: "Explain partial derivatives in calculus",
        icon: <Sparkles className="h-4 w-4 text-purple-500" />
      },
      { 
        text: "Help me solve this circuit problem",
        icon: <Lightbulb className="h-4 w-4 text-yellow-500" />
      },
      { 
        text: "Compare Python vs C for beginners",
        icon: <Book className="h-4 w-4 text-blue-500" />
      }
    ],
    Mathematics: [
      { 
        text: "Explain eigenvalues and eigenvectors",
        icon: <Sparkles className="h-4 w-4 text-purple-500" />
      },
      { 
        text: "How to solve second-order differential equations?",
        icon: <Book className="h-4 w-4 text-blue-500" />
      },
      { 
        text: "Explain Laplace transforms with examples",
        icon: <Lightbulb className="h-4 w-4 text-yellow-500" />
      }
    ],
    Physics: [
      { 
        text: "Explain quantum wave functions",
        icon: <Sparkles className="h-4 w-4 text-purple-500" />
      },
      { 
        text: "How does a semiconductor work?",
        icon: <Book className="h-4 w-4 text-blue-500" />
      },
      { 
        text: "Explain Young's double-slit experiment",
        icon: <Lightbulb className="h-4 w-4 text-yellow-500" />
      }
    ],
    Electrical: [
      { 
        text: "How to analyze an RLC circuit?",
        icon: <Sparkles className="h-4 w-4 text-purple-500" />
      },
      { 
        text: "Explain three-phase power systems",
        icon: <Book className="h-4 w-4 text-blue-500" />
      },
      { 
        text: "How does a transformer work?",
        icon: <Lightbulb className="h-4 w-4 text-yellow-500" />
      }
    ],
    Programming: [
      { 
        text: "Write a Python function to find prime numbers",
        icon: <Sparkles className="h-4 w-4 text-purple-500" />
      },
      { 
        text: "Explain pointers in C language",
        icon: <Book className="h-4 w-4 text-blue-500" />
      },
      { 
        text: "Compare object-oriented vs procedural programming",
        icon: <Lightbulb className="h-4 w-4 text-yellow-500" />
      }
    ]
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
    setIsTyping(true);
    
    // Simulate AI thinking
    setTimeout(() => {
      let response: Message;
      
      // Customize response based on message content and mode
      if (input.toLowerCase().includes('derivative') || input.toLowerCase().includes('calculus')) {
        response = {
          id: messages.length + 2,
          text: "In calculus, a derivative measures the sensitivity to change of a function's output with respect to its input. Geometrically, it represents the slope of the tangent line to the function at a specific point.\n\nThe derivative of a function f(x) is denoted as f'(x) or df/dx.\n\nFor example, if f(x) = x², then f'(x) = 2x. This means that at any point x, the slope of the tangent line to the parabola y = x² is 2x.",
          isBot: true,
          type: 'explanation'
        };
      }
      else if (input.toLowerCase().includes('python') && input.toLowerCase().includes('c')) {
        response = {
          id: messages.length + 2,
          text: "Python vs C for beginners:\n\n1. **Python**:\n   - Easier syntax with minimal punctuation\n   - Dynamic typing (no need to declare variable types)\n   - Extensive libraries for various tasks\n   - Interpreted language (no compilation step)\n   - Slower execution but faster development\n\n2. **C**:\n   - More complex syntax with strict punctuation rules\n   - Static typing (must declare variable types)\n   - Requires manual memory management\n   - Compiled language (needs compilation before running)\n   - Faster execution but steeper learning curve\n\nFor beginners, Python is generally recommended as it allows you to focus on programming concepts rather than syntax details.",
          isBot: true,
          type: 'explanation'
        };
      }
      else if (input.toLowerCase().includes('circuit') || input.toLowerCase().includes('electrical')) {
        response = {
          id: messages.length + 2,
          text: "When solving circuit problems, follow these steps:\n\n1. Identify the circuit components and their values\n2. Determine what you need to find (voltage, current, power, etc.)\n3. Choose the appropriate analysis method:\n   - For simple circuits: Ohm's Law (V = IR) and Kirchhoff's Laws\n   - For complex circuits: Nodal analysis, mesh analysis, or Thévenin/Norton equivalents\n4. Write the equations based on your chosen method\n5. Solve the system of equations\n6. Verify your answer using conservation laws\n\nFor specific circuit problems, it's helpful to draw the circuit and label all known values first.",
          isBot: true,
          type: 'explanation'
        };
      }
      else if (input.toLowerCase().includes('code') || input.toLowerCase().includes('function') || input.toLowerCase().includes('program')) {
        response = {
          id: messages.length + 2,
          text: "Here's a Python function to check if a number is prime:\n\n```python\ndef is_prime(num):\n    \"\"\"Check if a number is prime.\"\"\"\n    if num <= 1:\n        return False\n    if num <= 3:\n        return True\n    if num % 2 == 0 or num % 3 == 0:\n        return False\n    i = 5\n    while i * i <= num:\n        if num % i == 0 or num % (i + 2) == 0:\n            return False\n        i += 6\n    return True\n\n# Example usage\nfor n in range(1, 20):\n    if is_prime(n):\n        print(f\"{n} is prime\")\n    else:\n        print(f\"{n} is not prime\")\n```\n\nThis function efficiently checks if a number is prime using trial division with optimization.",
          isBot: true,
          type: 'code'
        };
      }
      else {
        const botResponses = [
          "That's an interesting question about " + aiMode === 'subject' ? activeSubject : "this topic" + ". Let me explain...",
          "I'd be happy to help you understand this concept. In BTech studies, this is approached by...",
          "Great question! This is a fundamental concept in " + aiMode === 'subject' ? activeSubject : "engineering" + ". Here's how it works...",
          "Let me break this down step by step to make it easier to understand...",
          "This is actually a common question among BTech students. The key insights are..."
        ];
        
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        
        response = {
          id: messages.length + 2,
          text: randomResponse + " As we explore this topic, consider how it connects to other concepts you've learned. Would you like me to go deeper into any specific aspect?",
          isBot: true
        };
      }
      
      setMessages(prevMessages => [...prevMessages, response]);
      setIsTyping(false);
    }, 1500);
  };

  const handlePromptClick = (promptText: string) => {
    setInput(promptText);
  };

  const handleSubjectChange = (subject: string) => {
    setActiveSubject(subject);
  };

  const formatMessage = (message: Message) => {
    if (message.type === 'code') {
      const codeBlocks = message.text.split('```');
      if (codeBlocks.length > 1) {
        return (
          <>
            {codeBlocks.map((block, index) => {
              if (index % 2 === 0) {
                return <p key={index} className="mb-2">{block}</p>;
              } else {
                const [language, ...code] = block.split('\n');
                return (
                  <div key={index} className="bg-gray-800 text-gray-100 p-3 rounded-md my-2 overflow-auto">
                    <pre className="text-xs md:text-sm whitespace-pre-wrap">
                      <code>{code.join('\n')}</code>
                    </pre>
                  </div>
                );
              }
            })}
          </>
        );
      }
    }
    
    // For normal text and explanation types
    return message.text.split('\n').map((line, i) => (
      <p key={i} className={i > 0 ? "mt-2" : ""}>
        {line}
      </p>
    ));
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
        <Card className="fixed bottom-24 right-6 w-full max-w-md shadow-xl border-t-4 border-t-btech-purple animate-in zoom-in-90">
          <CardHeader className="bg-gray-50 rounded-t-lg pb-2">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 bg-btech-purple text-white mr-3">
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <CardTitle className="text-lg flex items-center">
                  BTechStudyHub AI
                  <Sparkles className="h-4 w-4 ml-2 text-yellow-500" />
                </CardTitle>
                <CardDescription>Your intelligent learning assistant</CardDescription>
              </div>
            </div>
            
            <Tabs value={aiMode} onValueChange={(value) => setAiMode(value as 'general' | 'subject')} className="mt-2">
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="general">General AI</TabsTrigger>
                <TabsTrigger value="subject">Subject-Specific</TabsTrigger>
              </TabsList>
              
              {aiMode === 'subject' && (
                <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
                  {['Mathematics', 'Physics', 'Electrical', 'Programming'].map((subject) => (
                    <Button 
                      key={subject}
                      variant={activeSubject === subject ? "default" : "outline"}
                      size="sm"
                      className={`text-xs ${activeSubject === subject ? "bg-btech-purple" : ""}`}
                      onClick={() => handleSubjectChange(subject)}
                    >
                      {subject}
                    </Button>
                  ))}
                </div>
              )}
            </Tabs>
          </CardHeader>
          
          <CardContent className="p-0">
            <div className="h-96 overflow-y-auto p-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {message.isBot && (
                    <Avatar className="h-8 w-8 mr-2 mt-1 bg-btech-purple text-white">
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[85%] rounded-lg px-4 py-3 ${
                      message.isBot
                        ? 'bg-white shadow-sm border border-gray-100 text-gray-800'
                        : 'bg-btech-purple text-white'
                    }`}
                  >
                    <div className={`text-sm ${message.type === 'explanation' ? 'space-y-2' : ''}`}>
                      {formatMessage(message)}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <Avatar className="h-8 w-8 mr-2 mt-1 bg-btech-purple text-white">
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div className="bg-white shadow-sm border border-gray-100 rounded-lg px-4 py-3 max-w-[85%]">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="px-4 py-3 bg-white">
              <div className="flex flex-wrap gap-2 mb-3">
                {suggestedPrompts[aiMode === 'general' ? 'general' : activeSubject].map((prompt, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs border-gray-200 bg-gray-50 text-gray-700 whitespace-normal h-auto py-1 flex justify-start text-left"
                    onClick={() => handlePromptClick(prompt.text)}
                  >
                    {prompt.icon}
                    <span className="ml-1 line-clamp-1">{prompt.text}</span>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="p-3 border-t">
            <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about your studies..."
                className="flex-grow"
              />
              <Button type="submit" className="bg-btech-purple hover:bg-btech-blue">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default EnhancedChatbot;
