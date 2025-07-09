
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const SupportTicketForm = () => {
  const [ticketForm, setTicketForm] = useState({
    name: "",
    email: "",
    subject: "",
    priority: "",
    category: "",
    description: ""
  });

  const { toast } = useToast();

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "Your support ticket has been created.",
      duration: 5000,
    });
    
    setTicketForm({
      name: "",
      email: "",
      subject: "",
      priority: "",
      category: "",
      description: ""
    });
  };

  const handleTicketChange = (field: string, value: string) => {
    setTicketForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Create Support Ticket</h2>
      <p className="text-gray-600 mb-8">
        Having an issue? Create a ticket and our support team will help you resolve it within 2 hours.
      </p>

      <form onSubmit={handleTicketSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <Input
              type="text"
              value={ticketForm.name}
              onChange={(e) => handleTicketChange('name', e.target.value)}
              required
              className="w-full"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <Input
              type="email"
              value={ticketForm.email}
              onChange={(e) => handleTicketChange('email', e.target.value)}
              required
              className="w-full"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subject *
          </label>
          <Input
            type="text"
            value={ticketForm.subject}
            onChange={(e) => handleTicketChange('subject', e.target.value)}
            required
            className="w-full"
            placeholder="Brief description of the issue"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Priority
            </label>
            <Select value={ticketForm.priority} onValueChange={(value) => handleTicketChange('priority', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low - General question</SelectItem>
                <SelectItem value="medium">Medium - Minor issue</SelectItem>
                <SelectItem value="high">High - Service disruption</SelectItem>
                <SelectItem value="critical">Critical - System down</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <Select value={ticketForm.category} onValueChange={(value) => handleTicketChange('category', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="training-labs">Training Labs</SelectItem>
                <SelectItem value="cloud-desktops">Cloud Desktops</SelectItem>
                <SelectItem value="vps">VPS Hosting</SelectItem>
                <SelectItem value="billing">Billing & Account</SelectItem>
                <SelectItem value="technical">Technical Issue</SelectItem>
                <SelectItem value="feature">Feature Request</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description *
          </label>
          <Textarea
            value={ticketForm.description}
            onChange={(e) => handleTicketChange('description', e.target.value)}
            required
            rows={6}
            className="w-full"
            placeholder="Please provide detailed information about your issue, including any error messages, steps to reproduce, and what you've already tried..."
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-lg py-3"
        >
          Submit Ticket
        </Button>
      </form>
    </div>
  );
};

export default SupportTicketForm;
