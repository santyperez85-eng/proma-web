import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div>
            {items.map((item, i) => (
                <div
                    key={i}
                    className="border-b"
                    style={{ borderColor: "var(--proma-border)" }}
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
                    >
                        <span
                            className="text-[var(--proma-text-primary)] group-hover:text-[var(--proma-accent)] transition-colors"
                            style={{
                                fontFamily: "var(--proma-sans)",
                                fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                                fontWeight: 500,
                            }}
                        >
                            {item.question}
                        </span>
                        <span className="ml-4 flex-shrink-0 text-[var(--proma-text-tertiary)] group-hover:text-[var(--proma-accent)] transition-colors">
                            {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                        </span>
                    </button>
                    <AnimatePresence>
                        {openIndex === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <p
                                    className="pb-6 text-[var(--proma-text-secondary)]"
                                    style={{
                                        fontSize: "0.95rem",
                                        lineHeight: 1.7,
                                        maxWidth: "600px",
                                    }}
                                >
                                    {item.answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
