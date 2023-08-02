'use server';
import { revalidatePath } from 'next/cache';
import { db } from '~/db';
import { notes } from '~/db/schema';

export const addNoteAction = async (formData: FormData) => {
  const description = formData.get('description') as string;
  const title = formData.get('title') as string;

  // insert the new note
  db.insert(notes)
    .values({
      description: description,
      id: crypto.randomUUID(),
      title: title,
    })
    .run();
  // to apply the changes without reload the page
  revalidatePath('/');
};
