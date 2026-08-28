'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { ServiceFaq } from '@/lib/services';

export default function ServiceFaq({ faqs }: { faqs: ServiceFaq[] }) {
  return (
    <Accordion multiple hiddenUntilFound className="w-full">
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.question}
          value={faq.question}
          className="border-b border-border"
        >
          <AccordionTrigger className="rounded-none py-6 font-serif text-lg font-normal text-foreground hover:text-[#00b7cc] hover:no-underline sm:text-xl">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-base leading-relaxed text-foreground/65">
            <p>{faq.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
