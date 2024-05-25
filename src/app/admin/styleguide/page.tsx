import { Heading } from "@/components/Heading";
import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

function Well({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg shadow-lg p-4 bg-secondary">{children}</div>
  );
}

export default function StyleGuide() {
  return (
    <>
      <section className="mb-8">
        <Heading size="h1" tagName="h1">
          Styleguide
        </Heading>

        <p>
          Our shared, styled elements can be seen here at a glance with all of
          their variants.{" "}
        </p>
      </section>

      <Separator className="mb-8" />

      <section className="mb-8">
        <h1 className="h1 mb-4">Headings</h1>

        <Well>
          <h1 className="h1">Heading 1</h1>
          <h2 className="h2">Heading 2</h2>
          <h3 className="h3">Heading 3</h3>
          <h4 className="h4">Heading 4</h4>
          <h5 className="h5">Heading 5</h5>
          <h6 className="h6">Heading 6</h6>
        </Well>
      </section>

      <Separator className="mb-8" />
    </>
  );
}
