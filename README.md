` 23-03-2024 `

# Passbook App

Plan to create nextjs tailwindcss app with postgresql database and golang apis as backend.  

### Overview
- Landing page which has a login / signup form. no other pages should be visible without authentication.
- home page after login that shows a carousel of passbooks. Each passbook should show the bank name, account number and total balance.
- Clicking on a passbook should take you to a page that shows all transactions for that passbook.
- Add button on the transactions page to add a new transaction which opens a modal with a form to add a new transaction.
- Each transaction should have a delete button to delete the transaction.
- Each transaction should have an edit button to edit the transaction which opens a modal with a form to edit the transaction.
- Each transaction should have a tags section which shows the tags for that transaction. Clicking on a tag should filter the transactions by that tag.
- the table should be paginated with 10 transactions per page.
- the table should have a search bar to search for transactions by party name or description or tag.

Backend API code -> [here](https://github.com/akashsharma99/passbook-app-api)
