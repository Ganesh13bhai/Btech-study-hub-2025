
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CoursesPage from "./pages/CoursesPage";
import StudyRoomPage from "./pages/StudyRoomPage";
import SoftSkillsPage from "./pages/SoftSkillsPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import WebRTCRoomPage from "./pages/WebRTCRoomPage";
import EnhancedChatbot from "./components/EnhancedChatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/study-room" element={<StudyRoomPage />} />
          <Route path="/soft-skills" element={<SoftSkillsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/course/:subjectId" element={<CourseDetailPage />} />
          <Route path="/study-room/:roomId" element={<WebRTCRoomPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <EnhancedChatbot />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
