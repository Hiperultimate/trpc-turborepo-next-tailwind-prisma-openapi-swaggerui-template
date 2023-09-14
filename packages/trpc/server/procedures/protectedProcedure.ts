import { isAuthed } from "../middlewares/auth";
import { t } from "../trpc";

export const protectedProcedure = t.procedure.use(isAuthed);
