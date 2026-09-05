import React, { useState, useEffect } from "react";
import { ROLES } from "../../data/portfolioData";

const ROLES_LIST =
  ROLES.length > 0
    ? ROLES
    : [
        "Full-Stack Software Engineer",
        "Founding Systems Engineer",
        "Cloud & Distributed Systems",
        "Explainable AI / ML Researcher",
      ];

export const TypewriterRole: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullRole = ROLES_LIST[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      // Typing mode
      if (displayText.length < currentFullRole.length) {
        timer = setTimeout(
          () => {
            setDisplayText(currentFullRole.slice(0, displayText.length + 1));
          },
          45 + Math.random() * 25,
        );
      } else {
        // Finished typing word, wait before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      // Deleting mode
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentFullRole.slice(0, displayText.length - 1));
        }, 25);
      } else {
        // Finished deleting, pause briefly before next word
        timer = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES_LIST.length);
        }, 150);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div
      className="font-display font-bold uppercase"
      style={{
        fontSize: "clamp(1.5rem, 4.2vw, 3.4rem)",
        lineHeight: 1.05,
        letterSpacing: "-0.03em",
        color: "var(--ink-secondary)",
        minHeight: "1.2em",
        display: "flex",
        alignItems: "center",
      }}
    >
      <span>{displayText}</span>
      <span className="typewriter-cursor">|</span>
    </div>
  );
};
