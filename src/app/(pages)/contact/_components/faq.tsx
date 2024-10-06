import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQs } from "@/data/faqs";

const FAQsComp = () => {
  return (
    <section id="faqs">
      <Card>
        <CardHeader>
          <CardTitle>FAQs</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion
            type="single"
            collapsible
            className="flex flex-col gap-2.5"
          >
            {FAQs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={index.toString()}
                className="bg-muted px-5 py-2 rounded-lg hover:border-primary border border-muted duration-500"
              >
                <AccordionTrigger className="hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
};

export default FAQsComp;
