import { Page } from "@playwright/test";

// Helper function to mock Supabase API calls
export async function mockSupabaseRoutes(page: Page) {
  await page.route("**supabase**/storage/v1/**", async (route) => {
    await route.fulfill({ status: 200 });
  });

  await page.route("**supabase**/rest/v1/**", async (route) => {
    await route.fulfill({ status: 200 });
  });
}
