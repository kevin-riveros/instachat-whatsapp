"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "./useForm";

export default function Form() {
  const { value, onChange, openChat, inputRef } = useForm();
  return (
    <div className="max-w-sm mx-auto w-full">
      <Input
        placeholder="🇵🇪 987654321"
        type="tel"
        className="mt-8"
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
      <Button className="mt-4 w-full" variant="default" onClick={openChat}>
        Abrir chat
      </Button>
    </div>
  );
}
