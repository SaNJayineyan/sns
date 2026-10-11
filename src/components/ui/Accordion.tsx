import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenIndex?: number | null;
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenIndex = 0,
  allowMultiple = false,
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>(
    defaultOpenIndex !== null ? [defaultOpenIndex] : []
  );

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter((i) => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    } else {
      if (openIndices.includes(index)) {
        setOpenIndices([]);
      } else {
        setOpenIndices([index]);
      }
    }
  };

  return (
    <div className="accordion-wrapper" role="region" aria-label="Frequently Asked Questions Accordion">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const headerId = `accordion-header-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div key={item.id} className="accordion-item">
            <h3>
              <button
                id={headerId}
                className="accordion-trigger"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                type="button"
              >
                <span>{item.question}</span>
                <ChevronDown className="accordion-icon" aria-hidden="true" />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className="accordion-content"
              style={{
                display: isOpen ? "block" : "none",
              }}
            >
              <div className="accordion-body">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
