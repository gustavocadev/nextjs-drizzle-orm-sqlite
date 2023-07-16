import { db } from "~/db";
import { notes } from "~/db/schema";

// Loader  - RSC 
async function getNotes() {
  const currentNotes = db.select().from(notes).all();

  return currentNotes;
};

// to show in the client - SSR
export default async function Home() {
  const currentNotes = await getNotes();

  // server action - RSC
  const addItem = async (formData: FormData) => {
    'use server';
    const description = formData.get('description') as string;
    const title = formData.get('title') as string;

    db.insert(notes).values({
      description: description,
      id: crypto.randomUUID(),
      title: title,
    }).run();
  };


  return (
    <main className="container mx-auto my-10">
      <h1 className="text-3xl font-semibold"></h1>
      <form action={addItem} className="form-control">
        <label htmlFor="" className="label">Title</label>
        <input type="text" name="title" className="input bg-base-200" />

        <label htmlFor="" className="label">Description</label>
        <input type="text" name="description" className="input bg-base-200" />

        <button type="submit" className="btn btn-primary w-full mt-2">Add</button>
      </form>


      <h2 className="text-3xl font-bold mt-10">All my notes:</h2>
      <ul className="list-none">
        {currentNotes.map((note) => (
          <li key={note.id} className="list-item">
            <h2 className="text-xl font-semibold">{note.title}</h2>
            <p className="text-base">{note.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
