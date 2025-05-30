
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mic, MicOff, Video, VideoOff, MessageSquare, Users, Send, Share2 } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
}

interface Participant {
  id: string;
  name: string;
  isVideoOn: boolean;
  isAudioOn: boolean;
  isScreenSharing: boolean;
}

const WebRTCStudyRoom = () => {
  const [roomName, setRoomName] = useState("Advanced Calculus Study Group");
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'Priya Sharma',
      content: 'Hi everyone, can someone explain the concept of partial derivatives?',
      timestamp: new Date(Date.now() - 1000 * 60 * 5)
    },
    {
      id: '2',
      sender: 'Rahul Verma',
      content: 'Sure! Partial derivatives are used when you have a function of multiple variables, and you want to see how the function changes when you vary just one of those variables.',
      timestamp: new Date(Date.now() - 1000 * 60 * 4)
    },
    {
      id: '3',
      sender: 'Neha Kumar',
      content: 'I found this resource really helpful: https://math.libretexts.org/Bookshelves/Calculus/Book%3A_Calculus_(OpenStax)/12%3A_Vectors_in_Space/12.6%3A_Directional_Derivatives_and_the_Gradient',
      timestamp: new Date(Date.now() - 1000 * 60 * 2)
    }
  ]);
  
  const [participants, setParticipants] = useState<Participant[]>([
    { id: '1', name: 'You', isVideoOn, isAudioOn, isScreenSharing },
    { id: '2', name: 'Priya Sharma', isVideoOn: true, isAudioOn: true, isScreenSharing: false },
    { id: '3', name: 'Rahul Verma', isVideoOn: true, isAudioOn: true, isScreenSharing: false },
    { id: '4', name: 'Neha Kumar', isVideoOn: false, isAudioOn: true, isScreenSharing: false }
  ]);
  
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  // Simulate getting local video stream
  useEffect(() => {
    const getMedia = async () => {
      try {
        if (isVideoOn && localVideoRef.current) {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: isAudioOn });
          if (localVideoRef.current) {
            localVideoRef.current.srcObject = stream;
          }
        }
      } catch (error) {
        console.error("Error accessing media devices:", error);
        toast.error("Could not access camera or microphone");
        setIsVideoOn(false);
      }
    };
    
    if (isVideoOn) {
      getMedia();
    } else if (localVideoRef.current) {
      const stream = localVideoRef.current.srcObject as MediaStream;
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        localVideoRef.current.srcObject = null;
      }
    }
  }, [isVideoOn, isAudioOn]);
  
  // Scroll chat to bottom on new messages
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  
  // Update participant list when local settings change
  useEffect(() => {
    setParticipants(prev => 
      prev.map(p => p.id === '1' ? { ...p, isVideoOn, isAudioOn, isScreenSharing } : p)
    );
  }, [isVideoOn, isAudioOn, isScreenSharing]);
  
  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
  };
  
  const toggleAudio = () => {
    setIsAudioOn(!isAudioOn);
  };
  
  const toggleScreenShare = () => {
    if (!isScreenSharing) {
      // Start screen sharing
      navigator.mediaDevices.getDisplayMedia({ video: true })
        .then(stream => {
          if (localVideoRef.current) {
            localVideoRef.current.srcObject = stream;
            setIsScreenSharing(true);
            
            // Listen for when user stops screen sharing
            stream.getVideoTracks()[0].onended = () => {
              setIsScreenSharing(false);
              // Restore camera if video was on
              if (isVideoOn) {
                navigator.mediaDevices.getUserMedia({ video: true, audio: isAudioOn })
                  .then(camStream => {
                    if (localVideoRef.current) {
                      localVideoRef.current.srcObject = camStream;
                    }
                  });
              }
            };
          }
        })
        .catch(error => {
          console.error("Error sharing screen:", error);
          toast.error("Could not share screen");
        });
    } else {
      // Stop screen sharing
      const stream = localVideoRef.current?.srcObject as MediaStream;
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      
      setIsScreenSharing(false);
      
      // Restore camera if video was on
      if (isVideoOn && localVideoRef.current) {
        navigator.mediaDevices.getUserMedia({ video: true, audio: isAudioOn })
          .then(camStream => {
            if (localVideoRef.current) {
              localVideoRef.current.srcObject = camStream;
            }
          });
      }
    }
  };
  
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!messageInput.trim()) return;
    
    const newMessage = {
      id: Date.now().toString(),
      sender: 'You',
      content: messageInput,
      timestamp: new Date()
    };
    
    setMessages([...messages, newMessage]);
    setMessageInput('');
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className="h-full flex flex-col">
      <div className="border-b p-4 bg-white">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">{roomName}</h2>
            <div className="flex items-center text-sm text-gray-500">
              <Users className="h-4 w-4 mr-1" />
              <span>{participants.length} participants</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button 
              variant={isVideoOn ? "default" : "outline"} 
              size="sm" 
              onClick={toggleVideo}
              className={!isVideoOn ? "border-red-300 text-red-500" : ""}
            >
              {isVideoOn ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
            </Button>
            
            <Button 
              variant={isAudioOn ? "default" : "outline"} 
              size="sm" 
              onClick={toggleAudio}
              className={!isAudioOn ? "border-red-300 text-red-500" : ""}
            >
              {isAudioOn ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
            </Button>
            
            <Button 
              variant={isScreenSharing ? "default" : "outline"} 
              size="sm" 
              onClick={toggleScreenShare}
              className={isScreenSharing ? "bg-green-600 hover:bg-green-700" : ""}
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex-grow p-4 bg-gray-50 overflow-hidden">
        <Tabs defaultValue="video" className="h-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-4">
            <TabsTrigger value="video">Video Conference</TabsTrigger>
            <TabsTrigger value="chat">Group Chat</TabsTrigger>
          </TabsList>
          
          <TabsContent value="video" className="flex flex-col h-[calc(100%-50px)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
              {participants.map((participant) => (
                <div key={participant.id} className="relative rounded-lg overflow-hidden bg-gray-900">
                  {participant.id === '1' && isVideoOn ? (
                    <video 
                      ref={localVideoRef} 
                      autoPlay 
                      muted 
                      playsInline 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-gray-700 text-gray-400 mx-auto flex items-center justify-center text-xl font-semibold">
                          {participant.name.charAt(0)}
                        </div>
                        <p className="mt-2">{participant.name}</p>
                        <div className="flex justify-center mt-2 space-x-2">
                          {!participant.isVideoOn && <VideoOff className="h-4 w-4 text-red-500" />}
                          {!participant.isAudioOn && <MicOff className="h-4 w-4 text-red-500" />}
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
                    {participant.name} {participant.isScreenSharing && '(Screen)'}
                  </div>
                  {participant.isScreenSharing && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Sharing Screen
                    </div>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="chat" className="h-[calc(100%-50px)]">
            <Card className="h-full flex flex-col">
              <CardHeader className="px-4 py-3 border-b">
                <CardTitle className="text-lg">Group Chat</CardTitle>
                <CardDescription>Message all participants in this room</CardDescription>
              </CardHeader>
              
              <CardContent ref={chatContainerRef} className="flex-grow overflow-y-auto px-4 py-2">
                <div className="space-y-4">
                  {messages.map(message => (
                    <div key={message.id} className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                      <div className="flex max-w-[80%]">
                        {message.sender !== 'You' && (
                          <Avatar className="h-8 w-8 mr-2 mt-1">
                            <AvatarFallback>{message.sender[0]}</AvatarFallback>
                          </Avatar>
                        )}
                        <div>
                          <div className={`rounded-lg px-3 py-2 ${
                            message.sender === 'You' 
                              ? 'bg-btech-purple text-white' 
                              : 'bg-white border text-gray-800'
                          }`}>
                            {message.sender !== 'You' && (
                              <p className="font-medium text-xs mb-1">{message.sender}</p>
                            )}
                            <p className="text-sm">{message.content}</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-2 border-t">
                <form onSubmit={sendMessage} className="w-full flex gap-2">
                  <Textarea 
                    placeholder="Type your message..." 
                    className="min-h-0 h-10 py-2 resize-none"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage(e);
                      }
                    }}
                  />
                  <Button type="submit" size="sm" className="h-10">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WebRTCStudyRoom;
