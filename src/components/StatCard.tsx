import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "secondary";
}

const StatCard = ({ children, variant = "primary" }: StatCardProps) => {
  const variantClasses = {
    primary: "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground border-0",
    accent: "bg-gradient-to-br from-accent to-accent/90 text-accent-foreground border-0",
    secondary: "bg-gradient-to-br from-secondary to-secondary/90 text-secondary-foreground border-0"
  };

  return (
    <Card className={`${variantClasses[variant]} shadow-soft hover:shadow-md transition-all duration-300`}>
      <CardContent className="p-8">
        {children}
      </CardContent>
    </Card>
  );
};

export default StatCard;
