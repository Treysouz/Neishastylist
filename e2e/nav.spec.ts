import { test, expect } from "@playwright/test";
import { navItemConfigs } from "@/components/nav/nav";
import { mockSupabaseRoutes } from "./global-setup";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Mock Supabase API calls
    await mockSupabaseRoutes(page);
    // Navigate to the home page
    await page.goto("/");
  });

  navItemConfigs.forEach((testCase) => {
    test.describe(`${testCase.text} Link`, () => {
      test("nav link navigate to correct anchors for desktop", async ({
        page,
      }) => {
        // Test on desktop viewport
        await page.setViewportSize({ width: 1290, height: 720 });

        // Wait for the page to load
        await page.waitForSelector('[data-testid="desktop-nav"]');

        // Test link
        const link = page.getByRole("link", { name: testCase.text });
        await link.click();
        await page.waitForURL(testCase.href);
        expect(page.url()).toContain(testCase.href);
      });
      test("nav link navigate to correct anchors for mobile", async ({
        page,
      }) => {
        // Test on desktop viewport
        await page.setViewportSize({ width: 1250, height: 720 });

        // Wait for the page to load
        await page.waitForSelector('[data-testid="mobile-nav"]');

        // Open nav dropdown
        const mobileNavToggle = page.getByLabel("Open Mobile Nav");
        await mobileNavToggle.click();

        // Test link
        const link = page.getByRole("link", { name: testCase.text });
        await link.click();
        await page.waitForURL(testCase.href);
        expect(page.url()).toContain(testCase.href);
      });
    });
  });
});
