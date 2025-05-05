import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import News from "@/pages/news";
import SocialMedia from "@/pages/social-media";
import Interviews from "@/pages/interviews";
import Gallery from "@/pages/gallery";
import About from "@/pages/about";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/noticias" component={News} />
          <Route path="/redes-sociais" component={SocialMedia} />
          <Route path="/entrevistas" component={Interviews} />
          <Route path="/galeria" component={Gallery} />
          <Route path="/sobre" component={About} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      {/* Floating Contact Button */}
      <FloatingContact 
        whatsappNumber="5592999999999" 
        whatsappMessage="Olá! Tenho uma dúvida e gostaria de falar sobre o trabalho de Jesus Alves Amazonas."
      />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
