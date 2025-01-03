import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTickets } from "../api/tickets";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/useToast";

export function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const data = await getTickets();
        setTickets(data);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message,
        });
      } finally {
        setLoading(false);
      }
    };
    fetchTickets();
  }, [toast]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Support Tickets</h1>
        <Button onClick={() => navigate("/tickets/new")}>Create New Ticket</Button>
      </div>

      {loading ? (
        <p>Loading tickets...</p>
      ) : tickets.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Support Tickets</h3>
          <p className="text-gray-500 mb-4">Create your first support ticket to get help from our team.</p>
          <Button onClick={() => navigate("/tickets/new")}>Create Your First Ticket</Button>
        </div>
      ) : (
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div
              key={ticket.ticketNumber}
              className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
              onClick={() => navigate(`/tickets/${ticket._id}`)}
            >
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">#{ticket.ticketNumber} - {ticket.subject}</h2>
                <span className="px-2 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                  {ticket.status}
                </span>
              </div>
              <p className="text-gray-600 mt-2">Priority: {ticket.priority}</p>
              <p className="text-gray-500 text-sm mt-1">
                Created: {new Date(ticket.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}