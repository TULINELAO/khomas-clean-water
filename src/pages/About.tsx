import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
              <p className="text-xl">
                Building a healthier, more dignified future for all communities in Khomas Region
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Mission</h2>
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed">
                    To promote equitable access to dignified, safe, and sustainable sanitation in informal and underserved communities, through a multisectoral, community-driven approach. An Initiative Of Shared Ownership With Cross-Sector Partnerships.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge: Growth with a Sanitation Gap</h2>
              
              <p className="text-lg leading-relaxed">
                The Khomas Region is the heartbeat of Namibia's growth. Our population has surged to 494,605 people as of 2023, with Windhoek accounting for 98.3% of the regional population. This growth is a sign of progress, and in many ways, we lead the nation. A remarkable 98.7% of households in Khomas have access to safe drinking water.
              </p>

              <p className="text-lg leading-relaxed">
                However, this rapid growth, marked by a 17% increase in informal structures (higher than the national average), has created a pressing challenge: sanitation. While there has been improvement, 16.9% of households in Khomas still have no toilet facility at home. This means tens of thousands of our residents lack a basic foundation for health and dignity. This gap represents a profound public health risk within our region, threatening vulnerable communities with preventable diseases, deepening urban inequality, and undermining the sustainability of our growth.
              </p>

              <p className="text-lg leading-relaxed">
                The concentration of this challenge in our expanding informal settlements demands urgent and focused action. We believe that access to safe sanitation is not a privilege, but a fundamental right for every resident of Khomas.
              </p>
            </div>
          </div>
        </section>

        {/* Our Response */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Integrated Response: The Khomas Region Sanitation & Water Programme
              </h2>
              
              <p className="text-lg leading-relaxed">
                To meet this challenge head-on, we have launched a targeted, multi-faceted programme focused on direct action, community empowerment, and systemic change within the Khomas Region. Our work is guided by a clear set of objectives:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Improve access to safe and sustainable sanitation facilities across the region.",
                  "Ensure access to safe and clean water for all communities, targeting underserved areas.",
                  "Promote hygiene behavior change and awareness.",
                  "Strengthen local leadership, ownership, and cross-sector collaboration within Khomas."
                ].map((objective, index) => (
                  <Card key={index} className="border-l-4 border-l-accent">
                    <CardContent className="p-6">
                      <p className="leading-relaxed">{objective}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision for the Future of Khomas</h2>
              
              <p className="text-xl leading-relaxed">
                We envision a region where every resident, in every neighborhood—formal or informal—can live a healthy life with dignity. A region where our economic growth is matched by excellence in public health and living conditions.
              </p>

              <p className="text-xl leading-relaxed">
                By integrating sanitation into the core of urban development planning for Khomas, we are not just building infrastructure—we are building a stronger, healthier, and more equitable future for our home.
              </p>
            </div>
          </div>
        </section>

        {/* Guiding Principles */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Guiding Principles</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Community-Led Design</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      We don't impose solutions. We partner with communities from the very beginning, ensuring that every toilet, borehole, and handwashing station is designed with local input and meets their specific cultural and environmental needs.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Sustainability First</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      Our "eco-friendly" commitment is central. We use locally-sourced materials where possible, train community members in maintenance, and implement technologies that have a low environmental impact, ensuring our projects thrive for generations.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Equity and Inclusion</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      We prioritize the most vulnerable—women, children, the elderly, and people with disabilities—recognizing that they are disproportionately affected by poor sanitation. Our facilities are designed to be accessible and safe for all.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Transparency and Accountability</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      We are committed to clear reporting on our progress and finances. We believe our partners and the people of Khomas have a right to know how resources are being used to transform their region.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Ripple Effect */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The Ripple Effect of Our Work</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Improving Public Health</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      By reducing open defecation and contaminated environments, we directly combat diarrheal diseases and malnutrition, leading to fewer sick days, lower healthcare costs, and healthier children who can stay in school.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Economic Empowerment</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Access to water and sanitation close to home saves residents, particularly women and girls, countless hours previously spent fetching water. This time can be redirected to education, income-generating activities, and community engagement.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-secondary">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Dignity and Safety</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Providing private, safe sanitation facilities restores a fundamental sense of dignity, especially for women and girls, and reduces the risks of gender-based violence associated with seeking sanitation facilities after dark.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">Environmental Protection</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Proper waste management and sanitation prevent the pollution of soil and groundwater in the Khomas region, protecting the delicate ecosystem upon which both urban and rural communities depend.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Our Approach: The Khomas Model for Change
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Our strategy is a cyclical process of engagement and improvement:
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Map & Assess", desc: "Using GIS technology and community walks, we identify the areas of greatest need within Khomas." },
                  { title: "Co-Create", desc: "We facilitate community meetings to design solutions together." },
                  { title: "Build & Implement", desc: "We construct infrastructure while simultaneously training local water and sanitation committees on management and maintenance." },
                  { title: "Educate & Empower", desc: "We roll out hygiene promotion campaigns tailored to the community." },
                  { title: "Monitor & Adapt", desc: "We use real-time data to track usage and functionality, ensuring we can adapt and provide support where needed." }
                ].map((step, index) => (
                  <Card key={index} className="border-l-4 border-l-accent">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
