"use client";

import { Button } from "@/components/ui/button";
import { sendWelcomeEmail } from "@/app/actions/email";
import { SyntheticEvent } from "react";
import { useToast } from "@/components/ui/use-toast";

export function TestButton() {
  const { toast } = useToast();

  async function onClick(e: SyntheticEvent<HTMLButtonElement>) {
    try {
      await sendWelcomeEmail("Dave", "recipient@bar.com");
      toast({
        title: "Sent!",
        description: "Your email has been sent",
      });
    } catch (error) {
      toast({
        title: "Error",
        description:
          "There was an error sending your email. Check the console for details.",
      });
      console.error(error);
    }
  }
  return <Button onClick={onClick}>Click me</Button>;
}
