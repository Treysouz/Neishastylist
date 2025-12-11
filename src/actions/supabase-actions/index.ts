"use server";

import { createClient, SupabaseClient } from "@supabase/supabase-js";

/**Env Variables */
const { SUPABASE_URL, SUPABASE_KEY, E2E_TEST } = process.env;

/** Supabase client instance */
let supabase: SupabaseClient | undefined = undefined;

export const getSupabase = async () => {
  // Return mock client during e2e tests
  if (E2E_TEST === "true") {
    return null;
  }

  if (!supabase) {
    supabase = createClient(SUPABASE_URL || "", SUPABASE_KEY || "");
  }
  return supabase;
};
