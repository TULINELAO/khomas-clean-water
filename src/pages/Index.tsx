import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlideshow from "@/components/HeroSlideshow";
import StatCard from "@/components/StatCard";
import ImageOverlay from "@/components/ImageOverlay";
import ImageCarousel from "@/components/ImageCarousel";
import Map from "@/components/Map";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import waterAccess from "@/assets/water-access.jpg";
import sanitationFacilities from "@/assets/sanitation-facilities.jpg";
import sanitationChallenge from "@/assets/sanitation-challenge.jpg";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Slideshow */}
      <HeroSlideshow />

      {/* Statistics Section */}
      <section id="stats" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Statistics — Extracted from the Latest Census
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-lg">
            As Khomas grows, our commitment to sustainable sanitation must keep pace.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard variant="primary">
              <div className="space-y-3">
                <div className="text-5xl font-bold">3M</div>
                <p className="text-sm leading-relaxed">
                  Namibia's population reached 3 million people in 2023 from 2.1 million in 2011 with 50% of the population urbanized.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-semibold">91.4%</div>
                    <span className="text-xs">had access to safe drinking water in 2023</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-semibold">20.3%</div>
                    <span className="text-xs">Urban households had no toilets in 2023</span>
                  </div>
                </div>
              </div>
            </StatCard>

            <StatCard variant="accent">
              <div className="space-y-3">
                <div className="text-5xl font-bold">494,605</div>
                <p className="text-sm leading-relaxed">
                  Khomas region population as of 2023 from 342,141 in 2011 with Windhoek accounting for 98.3% of the total regional population.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-semibold">17%</div>
                    <span className="text-xs">informal structure increase (2011-2023)</span>
                  </div>
                </div>
              </div>
            </StatCard>

            <StatCard variant="secondary">
              <div className="space-y-3">
                <div className="text-5xl font-bold">98.7%</div>
                <p className="text-sm leading-relaxed">
                  Of households in Khomas Region had access to safe drinking water in 2023.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-semibold">16.9%</div>
                    <span className="text-xs">of households had no toilet facility at home in 2023</span>
                  </div>
                </div>
              </div>
            </StatCard>
          </div>
        </div>
      </section>

      {/* Image Overlays */}
      <ImageOverlay image={waterAccess} alt="Community water access">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <div className="inline-block px-5 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 font-semibold text-sm text-white">
              Water Access & Sanitation Challenge
            </div>
          </div>
          <p className="text-xl md:text-2xl leading-relaxed font-medium text-white/95">
            Namibia has made progress in improving access to clean water, but sanitation remains a challenge. The rise in informal settlements and slow improvement in household sanitation highlight the need for urgent and focused action to ensure that basic hygiene and dignity are accessible to all, especially as the population and cities continue to expand.
          </p>
        </div>
      </ImageOverlay>

      <ImageOverlay image={sanitationFacilities} alt="Sanitation facilities">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="inline-block px-5 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 font-semibold text-sm text-white">
              Public Health Impact
            </div>
          </div>
          <p className="text-xl md:text-2xl leading-relaxed font-medium text-white/95">
            Inadequate sanitation presents a profound public health challenge with far-reaching consequences. The absence of proper facilities leads to the contamination of water sources and the environment, creating conditions ripe for the spread of preventable but deadly diseases such as cholera, typhoid, and dysentery. These health burdens disproportionately affect vulnerable communities, particularly in informal settlements, deepening existing inequalities and placing unsustainable pressure on healthcare systems.
          </p>
        </div>
      </ImageOverlay>

      <ImageOverlay image={sanitationChallenge} alt="Sanitation challenge">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="inline-block px-5 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 font-semibold text-sm text-white">
              Development & Human Rights
            </div>
          </div>
          <p className="text-xl md:text-2xl leading-relaxed font-medium text-white/95">
            Beyond immediate illness, poor sanitation perpetuates cycles of poverty, undermines national development goals, and signals a broader failure in delivering essential public services. Addressing this issue is not merely a matter of infrastructure—it is an imperative tied to human rights, public dignity, and sustainable urban development.
          </p>
        </div>
      </ImageOverlay>

      {/* Mission & Model */}
      <section id="mission" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To promote equitable access to dignified, safe, and sustainable sanitation in informal and underserved communities of Khomas.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Model</h2>
              <p className="text-2xl font-semibold text-primary mb-6">
                An Initiative Of Shared Ownership With Cross-Sector Partnerships
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We believe solutions are lasting when they are built with communities, not for them. We bring together residents, local government, NGOs, and businesses to co-create a healthier Khomas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            A Collaborative Blueprint for Action
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-lg">
            This is our plan for the coming year. With your support, we will turn these goals into reality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { num: "01", title: "Construct 100 Eco-Friendly Toilets", desc: "in target communities" },
              { num: "02", title: "Launch a Water Access Initiative", desc: "by drilling 20 new boreholes" },
              { num: "03", title: "Build 50 Handwashing Stations", desc: "in high-priority locations" },
              { num: "04", title: "Establish a Collaborative Waste Management Task Force", desc: "" },
              { num: "05", title: "Implement Hygiene Education Programs", desc: "across the region" }
            ].map((goal) => (
              <Card key={goal.num} className="border-l-4 border-l-accent shadow-soft hover:shadow-md transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-accent mb-4">{goal.num}</div>
                  <h3 className="font-semibold text-xl mb-3">{goal.title}</h3>
                  {goal.desc && <p className="text-sm text-muted-foreground">{goal.desc}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Community at the Core
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Before we break ground, we build trust. We had our first community engagement session in Tobias Hainyeko Constituency, Ongulumbashe B, Ongava 145, where we listened to residents' experiences and priorities.
            </p>

            <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground shadow-soft border-0">
              <CardContent className="p-10">
                <p className="text-2xl font-semibold mb-6">
                  This is the foundation of our model: solutions are built with communities, not for them.
                </p>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-4">
                    <span className="text-accent font-bold text-2xl">•</span>
                    <span><strong>What we did:</strong> We met with community leaders and residents to understand their specific sanitation and water challenges.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent font-bold text-2xl">•</span>
                    <span><strong>What we learned:</strong> Direct feedback on the real-world needs that our plans must address.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-accent font-bold text-2xl">•</span>
                    <span><strong>What's next:</strong> This dialogue continues as we co-design solutions, as we engage MORE CONSTITUENCIES TO FOLLOW.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="mt-16">
          <ImageCarousel
            images={[
              { src: waterAccess, alt: "Community water access" },
              { src: sanitationFacilities, alt: "Sanitation facilities" },
              { src: sanitationChallenge, alt: "Sanitation challenge" },
              { src: waterAccess, alt: "Water initiative" },
              { src: sanitationFacilities, alt: "Community engagement" },
            ]}
          />
        </div>
      </section>

      {/* Live Map Section */}
      <section id="map" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Live Map</h2>
        <div className="rounded-2xl overflow-hidden shadow-soft">
          <Map />
        </div>
      </section>

      {/* Call to Action */}
      <section id="get-involved" className="py-20 bg-gradient-to-br from-accent via-accent/95 to-accent/85 text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                A Call to Action: You Can Be Part of the Solution
              </h2>
              <p className="text-xl">
                The transformation of Khomas requires a collective effort. Here's how you can get involved:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-8">
              <Card className="shadow-soft hover:shadow-md transition-all duration-300 border-0">
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-4 text-primary">For Community Members</h3>
                  <ul className="space-y-3 text-sm">
                    <li>• Report sanitation challenges in your area</li>
                    <li>• Participate in community meetings</li>
                    <li>• Become a hygiene champion in your neighborhood</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-md transition-all duration-300 border-0">
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-4 text-primary">For Local Businesses</h3>
                  <ul className="space-y-3 text-sm">
                    <li>• Partner through corporate social investment (CSI)</li>
                    <li>• Sponsor a borehole or a block of toilets</li>
                    <li>• Provide in-kind expertise or materials</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-md transition-all duration-300 border-0">
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-4 text-primary">For NGOs & Development Partners</h3>
                  <ul className="space-y-3 text-sm">
                    <li>• Join our collaborative enforcement task force</li>
                    <li>• Share best practices and technical knowledge</li>
                    <li>• Help us scale successful pilots</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-soft hover:shadow-md transition-all duration-300 border-0">
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-4 text-primary">For Government Entities</h3>
                  <ul className="space-y-3 text-sm">
                    <li>• Work with us to align policies</li>
                    <li>• Streamline regulations supporting urban sanitation</li>
                    <li>• Partner on infrastructure projects</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/20 to-primary/10 shadow-soft hover:shadow-md transition-all duration-300 border-0">
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-4 text-primary">See Collaborative Action</h3>
                  <p className="text-sm text-foreground mb-6">
                    Explore contributions across Khomas — and add yours.
                  </p>
                  <Button asChild className="w-full rounded-full shadow-soft">
                    <a href="/collaborative">Open the Hub</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
