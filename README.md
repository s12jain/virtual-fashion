Steps to run the React app
a) npm install
b) npm run start
c) It will launch the app on browser http://localhost:3000/

Functionality covered:
1. Contents Filter
○ Pricing Option
■ There are three options: Paid, Free, and View Only

■ The default state should be unchecked, and when all options are unchecked,
all data (Content List) should be displayed.
■ Content List should be filtered based on the selected Pricing Option(s).
(e.g., If Paid is selected, only Paid content should be shown.)
■ Multiple Pricing Options can be selected at once.
○ Clicking the Reset Button should restore the default state.
○ The filter or search results should persist across page reloads, but avoid using
browser storage for this.

2. Contents List
○ Display each item’s photo, user name, title, and the Pricing Option (Free/View
Only), and for Paid items, the price should be shown.
○ Apply a grid system that adjusts based on the device width:
■ Default: 4 columns
■ Below 1200px: 3 columns
■ Below 768px: 2 columns
■ Below 480px: 1 column
○ Implement infinite scroll to load more items as the user scrolls (loading size can be
determined as needed).

3. Keyword Search

■ Filter the list based on a keyword search (e.g., searching "Anisha" should
filter content that includes "Anisha" in the user name or title).
■ If no keyword is entered, all items should be displayed.
■ Keyword searches should be combinable with Pricing Option filters.
(e.g., searching for "Anisha" and selecting Paid should filter content that is
both Paid and related to "Anisha.")
