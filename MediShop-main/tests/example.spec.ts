import { expect, test } from "../fixtures/Fixtures";
import { Orders } from "../pages/Orders";
test.describe.skip("Register Functionality", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.url!}/MediShopWebApp/login.html`);
  });

  test.skip(
    "Verify registration page controls",
    { tag: "@smoke" },
    async ({ page, central }) => {
      await central.getLogin().perform_fill_the_form();
      await central.getHome().click_specific_tab_name_within_navbar("Orders");
      // await central.getOrders().search_orders("Vitamin")
      await central.getEnterCapsuleName(new Orders(page), "D3");
      await central.getAction(
        new Orders(page),
        "Daily Multivitamin Supplement, Vitamin D3",
      );
      // await central.getLogin().perform_reset_password("hello@gmail.com")
      // await central.getLogin().perform_register_your_clinic()
      // await central.getLogin().perform_browse_the_catalogue_as_a_guest()
      // await central.getLogin().perform_login("ell@gmail.com","12345")
      // await central.getLogin().assert_error_message_after_login("Invalid email or password. Please try again.")
      await page.pause();
    },
  );
});
test.describe.skip("Storage_State", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.url!}/MediShopWebApp/login.html`);
  });
  test.skip("Creation_of_Individual_Storage_State", async ({
    central,
    context,
  }) => {
    await central
      .getLogin()
      .perform_login("trainer@way2automation.com", "way2automation");
    // const text = await central.page.getByTestId("home_greeting").textContent()
    // await expect(text).toContain("Rahul Arora")
    await central.page.waitForURL("**/home.html");
    await context.storageState({ path: "token.json", indexedDB: true });
    await central.page.pause();
  });
  test("trails", async ({ page }) => {
    await page.pause();
  });
});

test.describe("Add_To_Cart_Functionality", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.url!}/MediShopWebApp/login.html`);
  });
  test("Verify_one_catologue_product_added", async ({ page, central }) => {
    await central.getShop().clickAnyNavbar("Shop");
    await central.getShop().add_to_cart_by_medicine_name("Dolo 650",3)
    await central.getShop().delivery_address("Hellos","9876543210","Hlos","city","States","987654","Australia","Delivery")
    await page.pause()
    await page.pause();
  });
});
