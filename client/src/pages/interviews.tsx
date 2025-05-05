import { useState, useEffect } from "react";
import InterviewCard from "@/components/interview-card";
import { interviewItems } from "@/data/mock-data";

const Interviews = () => {
  const [featuredInterview, setFeaturedInterview] = useState(interviewItems[0]);
  const [otherInterviews, setOtherInterviews] = useState(interviewItems.slice(1));
  
  useEffect(() => {
    document.title = "Entrevistas - Jesus Alves Amazonas";
  }, []);

  return (
    <section id="entrevistas" className="py-16 bg-background-light">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-title">Entrevistas</h2>
          <p className="section-description">
            Acompanhe as principais entrevistas e participações na mídia de Jesus Alves Amazonas.
          </p>
        </div>

        {/* Featured Interview */}
        <InterviewCard interview={featuredInterview} featured={true} />

        {/* Interviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherInterviews.map((interview) => (
            <InterviewCard key={interview.id} interview={interview} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-block bg-white border border-primary text-primary font-semibold px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-colors duration-300">
            Carregar Mais Entrevistas
          </button>
        </div>
      </div>
    </section>
  );
};

export default Interviews;
