'use client'
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ElementPopUpProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

const ElementPopUp: React.FC<ElementPopUpProps> = ({ children, className, delay = 0 }) => {
    const popupVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut", delay }}
            variants={popupVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ElementPopUp;