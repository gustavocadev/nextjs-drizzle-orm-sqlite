'use client';
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { addNoteAction } from "../actions";
import { useRef } from "react";

export function FormNotesAdd() {
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <form action={async (formData) => {
      formRef.current?.reset();
      await addNoteAction(formData);
    }} className="flex flex-col gap-4" ref={formRef}>
      <Input type="text" name="title" label="Title" />

      <Input type="text" name="description" label="Description" />

      <Button type="submit" color="primary">
        Add
      </Button>
    </form>
  );
}
