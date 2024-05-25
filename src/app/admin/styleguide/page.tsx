import { Button } from "@/components/ui/button";
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
        <h1 className="h1 mb-4">Styleguide</h1>

        <p>
          Our shared, styled elements can be seen here at a glance with all of
          their variants.{" "}
        </p>
      </section>

      <Separator className="mb-8" />

      <section className="mb-8">
        <h2 className="h2 mb-2">Custom Colors</h2>

        <ul className="flex flex-row flex-wrap">
          {[
            "border",
            "input",
            "ring",
            "background",
            "foreground",
            "primary",
            "secondary",
            "destructive",
            "muted",
            "accent",
            "popover",
            "card",
          ].map((color) => (
            <li key={color} className={`block mb-4 bg-${color} w-28 h-28`}>
              {color}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="h2 mb-2">Headings</h2>

        <p className="mb-4">
          Headings have no styles by default; we add `.h1`...`.h6` classes to
          style them independently, while preserving semantic meaning.
        </p>

        <Well>
          <h1 className="h1">Heading 1</h1>
          <h2 className="h2">Heading 2</h2>
          <h3 className="h3">Heading 3</h3>
          <h4 className="h4">Heading 4</h4>
          <h5 className="h5">Heading 5</h5>
          <h6 className="h6">Heading 6</h6>
        </Well>
      </section>

      <section className="mb-8">
        <h2 className="h2 mb-2">Buttons</h2>

        <div className="flex items-center gap-4 mb-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>

        <div className="flex items-center gap-4">
          <Button size="default">Default size</Button>
          <Button size="sm">sm</Button>
          <Button size="lg">lg</Button>
          <Button size="icon">icon</Button>
        </div>
      </section>

      <Separator className="mb-8" />
    </>
  );
}
