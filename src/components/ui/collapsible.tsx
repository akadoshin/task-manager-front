"use client";

import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = ({
  open,
  onOpenChange,
  ...props
}: CollapsiblePrimitive.CollapsibleProps) => {
  const [isOpen, setIsOpen] = React.useState(open || false);

  const handleOpenChange = (open: boolean) => {
    onOpenChange && onOpenChange(open);
    setIsOpen(open);
  };

  return (
    <CollapsiblePrimitive.Root
      open={isOpen}
      onOpenChange={handleOpenChange}
      {...props}
    />
  );
};

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
