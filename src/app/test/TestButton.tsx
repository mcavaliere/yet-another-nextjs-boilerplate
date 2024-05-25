"use client";

import { Button } from "@/components/ui/button";
import { sendWelcomeEmail } from "@/app/actions/email";
import { SyntheticEvent } from "react";

export function TestButton() {
  function onClick(e: SyntheticEvent<HTMLButtonElement>) {
    sendWelcomeEmail("Dave", "recipient@bar.com");
  }
  return <Button onClick={onClick}>Click me</Button>;
}
