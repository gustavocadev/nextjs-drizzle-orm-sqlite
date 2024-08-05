import { db } from '~/db';
import { FormNotesAdd } from './components/FormNotesAdd';

async function getNotes() {
  const currentNotes = db.query.note.findMany();
  return currentNotes;
}

export default async function Home() {
  const all_notes = await getNotes();

  return (
    <main className="container mx-auto my-10">
      <h1 className="text-3xl font-semibold py-4">Agregar</h1>

      <FormNotesAdd />

      <h2 className="text-3xl font-bold mt-10">All my notes:</h2>
      <ul className="list-none">
        {all_notes?.map((note) => (
          <li key={note.id} className="list-item">
            <h2 className="text-xl font-semibold">{note.title}</h2>
            <p className="text-base">{note.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
