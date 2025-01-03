import { useCallback, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/useToast";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Newsletter form submission started", { email });

      try {
        setLoading(true);

        const response = await fetch("/api/newsletter/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (!response.ok) {
          throw new Error("Failed to subscribe to newsletter");
        }

        console.log("Newsletter subscription successful", { email });
        
        toast({
          title: "Success!",
          description: "You have been subscribed to our newsletter.",
        });

        setEmail("");
      } catch (error) {
        console.error("Newsletter subscription error:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: error instanceof Error ? error.message : "Failed to subscribe to newsletter",
        });
      } finally {
        setLoading(false);
      }
    },
    [email, toast]
  );

  return (
    <form onSubmit={handleSubmit} className="mt-6 sm:flex sm:max-w-md gap-x-4">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        name="email"
        id="newsletter-email"
        autoComplete="email"
        required
        className="w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:border-black"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => {
          console.log("Newsletter email input changed", { value: e.target.value });
          setEmail(e.target.value);
        }}
      />
      <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
        <Button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center w-full"
        >
          Subscribe
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </form>
  );
}