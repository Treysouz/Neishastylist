"use server";

import { getSupabase } from "@/actions/supabase-actions";

/**Env Variables */
const { SUPABASE_URL } = process.env;

/** Supabase client instance */
const supabase = await getSupabase();

export async function getWorkImages() {
  try {
    const { data, error } = await supabase.storage
      .from("images")
      .list("portfolio");

    if (error) {
      throw error;
    }

    const publicUrls: string[] = [];

    data.forEach((file) => {
      if (file.metadata.mimetype === "image/webp") {
        publicUrls.push(
          `${SUPABASE_URL}/storage/v1/object/public/images/portfolio/${file.name}`
        );
      }
    });

    return publicUrls;
  } catch (error) {
    console.error(error);
  }
}
