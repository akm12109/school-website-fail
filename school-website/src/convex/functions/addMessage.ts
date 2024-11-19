// convex/functions/addMessage.ts
import { mutation } from './_generated/server';

export default mutation(async ({ db }, { text }: { text: string }) => {
  const message = { text, timestamp: Date.now() };
  await db.insert('messages', message);
});
