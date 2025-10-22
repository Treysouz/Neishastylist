"use server";

import { createClient, SupabaseClient } from "@supabase/supabase-js";

/**Env Variables */
const { SUPABASE_URL, SUPABASE_KEY } = process.env;

/** Supabase client instance */
let supabase: SupabaseClient | undefined = undefined;

export const getSupabase = async () => {
  if (!supabase) {
    supabase = createClient(SUPABASE_URL || "", SUPABASE_KEY || "");
  }
  return supabase;
};
