"use server";

import { sendWelcomeEmail as doSendWelcomeEmail } from "@/services/emailer";

export async function sendWelcomeEmail(
  ...args: Parameters<typeof doSendWelcomeEmail>
) {
  return await doSendWelcomeEmail(...args);
}
