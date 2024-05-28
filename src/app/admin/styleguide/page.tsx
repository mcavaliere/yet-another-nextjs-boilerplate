import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/src/components/ui/card";
import { tailwindConfig } from "~/tailwind.config";

function Well({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg shadow-lg p-4 bg-secondary">{children}</div>
  );
}

export default function StyleGuide() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
      <section className="mb-8">
        <h1 className="h1 mb-4">Styleguide</h1>

        <p>
          Our shared, styled elements can be seen here at a glance with all of
          their variants.{" "}
        </p>
      </section>

      <Separator className="mb-8" />

      <section className="mb-8">
        <h2 className="h2 mb-2">Headings</h2>

        <p className="mb-4">
          Headings have no styles by default; we add <code>.h1</code>...
          <code>.h6</code> classes to style them independently, while preserving
          semantic meaning.
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

      <section className="mb-8">
        <h2 className="h2 mb-2">Cards</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>et illo necessitatibus</CardTitle>
            </CardHeader>

            <CardContent>
              Accusantium et distinctio ratione mollitia ut sed voluptates
              nulla. Aliquid necessitatibus sit. Sint velit iste recusandae
              necessitatibus officiis.
            </CardContent>

            <CardFooter>
              <Button variant="secondary">ea sit nihil</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>qui optio commodi</CardTitle>
            </CardHeader>

            <CardContent>
              Culpa sed alias veniam architecto nobis et ea. Voluptatem ipsam
              dolore recusandae odio non quo dicta deleniti. Et ut omnis
              quisquam incidunt sunt laborum quia sit. Voluptas labore
              voluptatem minima eum vero eaque dicta. Quam quod autem alias eum
              unde et quis vel. Non consequatur quod voluptas voluptas
              voluptates earum aliquid.
            </CardContent>

            <CardFooter>
              <Button variant="secondary">repellat atque aut</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>quos aliquid fuga</CardTitle>
            </CardHeader>

            <CardContent>
              Aut et sint. Laudantium dolor nostrum dolore deleniti dolorum
              facere. Consequatur consectetur suscipit corporis rerum. Odit
              possimus qui consequatur vero dolor doloribus. Blanditiis qui
              laborum necessitatibus provident ab nihil omnis.
            </CardContent>

            <CardFooter>
              <Button variant="secondary">qui ut et</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
