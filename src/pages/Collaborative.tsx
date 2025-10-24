import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Building2, Users, Droplet, Heart } from "lucide-react";

const Collaborative = () => {
  const activities = [
    {
      org: "Local Business Initiative",
      title: "Borehole Sponsorship Programme",
      date: "Ongoing",
      place: "Multiple locations",
      type: "Infrastructure",
      icon: Droplet,
      description: "Local businesses have sponsored 5 new boreholes in underserved communities, providing clean water access to over 2,000 residents."
    },
    {
      org: "Windhoek NGO Coalition",
      title: "Hygiene Education Campaign",
      date: "Q4 2024",
      place: "Khomas Region Schools",
      type: "Education",
      icon: Users,
      description: "Training programs reaching 15 schools, teaching proper handwashing and sanitation practices to over 3,000 students."
    },
    {
      org: "Community Health Partners",
      title: "Sanitation Block Construction",
      date: "October 2024",
      place: "Ongava 145",
      type: "Infrastructure",
      icon: Building2,
      description: "Collaborative effort to build 20 eco-friendly toilet facilities with community-led maintenance committees."
    },
    {
      org: "Youth Volunteers Network",
      title: "Monthly Cleanup Drives",
      date: "Every 1st Saturday",
      place: "Rotating locations",
      type: "Community Action",
      icon: Heart,
      description: "Youth-led initiative mobilizing 50+ volunteers monthly for community cleanups and waste management education."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Collaborative Action Hub</h1>
            <p className="text-xl text-muted-foreground">
              Discover how partners across Khomas are working together to improve sanitation and water access. Join the movement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-2 py-1 rounded text-xs font-bold bg-accent/20 text-accent mb-2">
                        {activity.type}
                      </div>
                      <h3 className="text-xl font-bold mb-1">{activity.title}</h3>
                      <p className="text-sm text-muted-foreground font-semibold">{activity.org}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{activity.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div>
                      <span className="font-semibold">Date:</span> {activity.date}
                    </div>
                    <div>
                      <span className="font-semibold">Location:</span> {activity.place}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5">
              <h3 className="text-2xl font-bold mb-4">Share Your Initiative</h3>
              <p className="text-muted-foreground mb-6">
                Are you working on a sanitation or water project in Khomas? Let us know so we can amplify your impact and connect you with potential partners.
              </p>
              <a 
                href="mailto:team@jtptoursandsafaris.com?subject=Collaborative Initiative"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Add Your Activity
              </a>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5">
              <h3 className="text-2xl font-bold mb-4">Join the Task Force</h3>
              <p className="text-muted-foreground mb-6">
                The Collaborative Waste Management Task Force brings together NGOs, government, and businesses. Be part of the solution.
              </p>
              <a 
                href="mailto:team@jtptoursandsafaris.com?subject=Join Task Force"
                className="inline-block px-6 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Get Involved
              </a>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Collaborative;
