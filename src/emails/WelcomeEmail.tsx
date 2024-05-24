import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "jsx-email";
import {
  main,
  container,
  box,
  paragraph,
  button,
  hr,
  anchor,
} from "./emailStyles";

// Note: Superstruct is a fantastic validation package. It's smaller and faster than alternatives
// and uses a delightful API without chaining. docs.superstructjs.org
//
// To install `superstruct` run `pnpm add superstruct`.
import { defaulted, number, object, string, type Infer } from "superstruct";
import * as React from "react";

export const TemplateName = "WelcomeEmail";

export const TemplateStruct = object({
  email: defaulted(string(), "batman@example.com"),
  name: defaulted(string(), "Bruce Wayne"),
});

export type TemplateProps = Infer<typeof TemplateStruct>;

export const Template = ({ email, name }: TemplateProps) => (
  <Html>
    <Head />
    <Preview>
      This is our email preview text for {name} &lt;{email}&gt;
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Text style={paragraph}>This is our email body text</Text>
          <Button style={button} href="https://example.com">
            Action Button
          </Button>
          <Hr style={hr} />
          <Text style={paragraph}>
            This is text content with a{" "}
            <Link style={anchor} href="mailto:{email}">
              link
            </Link>
            .
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);
