import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Community Cleanup Drive",
      date: "December 15, 2024",
      time: "08:00 - 12:00",
      location: "Ongulumbashe B",
      type: "Cleanup",
      description: "Join us for a community-led cleanup initiative in Ongulumbashe B. Bring your energy and help us make a difference!"
    },
    {
      title: "Hygiene Education Workshop",
      date: "January 10, 2025",
      time: "14:00 - 16:00",
      location: "Community Center, Windhoek",
      type: "Workshop",
      description: "Interactive workshop on proper handwashing techniques and sanitation best practices for families."
    },
    {
      title: "Water Access Planning Meeting",
      date: "January 22, 2025",
      time: "10:00 - 13:00",
      location: "Tobias Hainyeko Constituency",
      type: "Stakeholder Meeting",
      description: "Community stakeholders meeting to plan new borehole locations and water distribution points."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Activities</h1>
            <p className="text-xl text-muted-foreground">
              Join us in building a healthier Khomas Region. Check out our upcoming events and get involved.
            </p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-3">
                      {event.type}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-border">
            <h3 className="text-2xl font-bold mb-4">Want to organize an event?</h3>
            <p className="text-muted-foreground mb-6">
              We welcome community-led initiatives. Get in touch to discuss how we can support your event.
            </p>
            <a 
              href="mailto:team@jtptoursandsafaris.com?subject=Event Proposal"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Propose an Event
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
