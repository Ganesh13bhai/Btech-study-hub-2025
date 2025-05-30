
import React, { useState } from 'react';
import { 
  Users, 
  VideoIcon, 
  MessageSquare, 
  Lock, 
  Unlock, 
  Copy, 
  Share2
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

const StudyRoomCreate = () => {
  const [roomName, setRoomName] = useState('');
  const [subject, setSubject] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [roomCreated, setRoomCreated] = useState(false);
  const [roomCode, setRoomCode] = useState('');
  const [roomLink, setRoomLink] = useState('');

  const handleCreateRoom = () => {
    if (!roomName) {
      toast.error("Please enter a room name");
      return;
    }

    // Generate a random room code
    const generatedCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    setRoomCode(generatedCode);
    setRoomLink(`https://studyspark.com/room/${generatedCode}`);
    setRoomCreated(true);
    toast.success("Study room created successfully!");
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(roomCode);
    toast.success("Room code copied to clipboard!");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(roomLink);
    toast.success("Room link copied to clipboard!");
  };

  const handleJoinExisting = () => {
    setRoomCreated(false);
    setRoomName('');
    setSubject('');
    setIsPrivate(false);
  };

  return (
    <section className="py-12 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Virtual Study Rooms
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Create or join study rooms to collaborate with peers in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="rounded-xl overflow-hidden bg-white p-6 shadow-xl">
              <div className="relative pb-[56.25%] bg-gray-100 rounded-lg overflow-hidden mb-6">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <VideoIcon className="h-16 w-16 text-gray-300 mb-4" />
                  <p className="text-gray-500 text-center px-4">
                    Join a study room to see video feed here
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center">
                  <VideoIcon className="h-6 w-6 text-btech-blue mb-2" />
                  <p className="text-sm text-gray-700 text-center">Video Chat</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-btech-purple mb-2" />
                  <p className="text-sm text-gray-700 text-center">Text Chat</p>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-btech-teal mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <p className="text-sm text-gray-700 text-center">Whiteboard</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 mb-2">Current Participants</h3>
                <div className="flex items-center justify-center p-8">
                  <Users className="h-10 w-10 text-gray-300" />
                  <p className="text-gray-500 ml-3">No participants yet</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            {!roomCreated ? (
              <Card>
                <CardHeader>
                  <CardTitle>Create a Study Room</CardTitle>
                  <CardDescription>
                    Set up a virtual space to study with your classmates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="room-name">Room Name</Label>
                    <Input 
                      id="room-name" 
                      placeholder="e.g., Data Structures Study Group" 
                      value={roomName}
                      onChange={(e) => setRoomName(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select value={subject} onValueChange={setSubject}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="computer-science">Computer Science</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="electrical">Electrical Engineering</SelectItem>
                        <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                        <SelectItem value="civil">Civil Engineering</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="private-mode" 
                      checked={isPrivate}
                      onCheckedChange={setIsPrivate}
                    />
                    <Label htmlFor="private-mode" className="flex items-center cursor-pointer">
                      {isPrivate ? (
                        <>
                          <Lock className="h-4 w-4 mr-2 text-btech-purple" />
                          Private Room (Invite Only)
                        </>
                      ) : (
                        <>
                          <Unlock className="h-4 w-4 mr-2 text-btech-blue" />
                          Public Room (Anyone can join)
                        </>
                      )}
                    </Label>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-btech-purple hover:bg-btech-blue" 
                    onClick={handleCreateRoom}
                  >
                    Create Study Room
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Room Created Successfully!</CardTitle>
                  <CardDescription>
                    Share this information with others to invite them
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h3 className="text-green-800 font-medium mb-2">Room Details</h3>
                    <p className="text-green-700">Name: {roomName}</p>
                    {subject && <p className="text-green-700">Subject: {subject}</p>}
                    <p className="text-green-700">Type: {isPrivate ? 'Private' : 'Public'}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-sm text-gray-500">Room Code</Label>
                    <div className="flex">
                      <Input value={roomCode} className="rounded-r-none" readOnly />
                      <Button 
                        variant="secondary" 
                        className="rounded-l-none" 
                        onClick={handleCopyCode}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-sm text-gray-500">Shareable Link</Label>
                    <div className="flex">
                      <Input value={roomLink} className="rounded-r-none" readOnly />
                      <Button 
                        variant="secondary" 
                        className="rounded-l-none" 
                        onClick={handleCopyLink}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                  <Button className="w-full bg-btech-blue">
                    Enter Room
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={handleJoinExisting}
                  >
                    Create Another Room
                  </Button>
                </CardFooter>
              </Card>
            )}
            
            <div className="mt-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Join Existing Room</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex">
                    <Input placeholder="Enter room code" className="rounded-r-none" />
                    <Button className="rounded-l-none bg-btech-blue">
                      Join
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyRoomCreate;
