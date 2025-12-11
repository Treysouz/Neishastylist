import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mockSupabaseRoutes } from "./global-setup";

test.describe("Accessibility", () => {
  const testRoutes = ["/"];

  testRoutes.forEach((route) => {
    test.describe(`"${route}" Route`, () => {
      test("should not have any automatically detectable accessibility issues", async ({
        page,
      }) => {
        // Mock Supabase API calls
        await mockSupabaseRoutes(page);
        //Go to route
        await page.goto(route, { waitUntil: "networkidle" });

        const accessibilityScanResults = await new AxeBuilder({
          page,
        }).analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
      });
    });
  });
});
