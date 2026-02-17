"use client";

import React, { useId, useState } from "react";

export type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

export default function Accordion({
  items,
  className,
  defaultOpenIndex = null,
  singleOpen = true,
}: {
  items: AccordionItem[];
  className?: string;
  defaultOpenIndex?: number | null;
  singleOpen?: boolean;
}) {
  const uid = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  return (
    <div className={className ?? ""}>
      {items.map((item, i) => {
        const isOpen = singleOpen ? openIndex === i : openSet.has(i);
        const buttonId = `${uid}-btn-${i}`;
        const panelId = `${uid}-panel-${i}`;

        return (
          <div
            key={item.title}
            className="border border-black/10 bg-white"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%, 12px 50%)",
            }}
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => {
                if (singleOpen) {
                  setOpenIndex((cur) => (cur === i ? null : i));
                } else {
                  setOpenSet((cur) => {
                    const next = new Set(cur);
                    if (next.has(i)) next.delete(i);
                    else next.add(i);
                    return next;
                  });
                }
              }}
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
            >
              <span className="text-sm font-black text-slate-900">{item.title}</span>
              <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-slate-50 text-xs font-black text-slate-700 ring-1 ring-inset ring-black/10">
                {isOpen ? "–" : "+"}
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={
                (isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0") +
                " overflow-hidden px-4 transition-all duration-300 ease-out"
              }
            >
              <div className="border-t border-black/10 pb-4 pt-4 text-sm font-semibold text-slate-700">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
