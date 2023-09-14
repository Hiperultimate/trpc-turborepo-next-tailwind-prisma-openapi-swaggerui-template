import { t } from "../trpc";
import { isAuthed } from "../middlewares/auth";

export const protectedProcedure = t.procedure.use(isAuthed);
