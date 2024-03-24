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

## Entities

### User
- user_id
- username
- email
- password
- created_at
- updated_at

### Passbook
- passbook_id
- user_id (foreign key to users table)
- bank_name
- account_number
- total_balance

### Transaction
- transaction_id
- amount
- transaction_date
- type (CREDIT/DEBIT)
- party_name
- description
- created_at
- updated_at
- tags ( comma separated list of tags. max 3 tags per transaction)
- passbook_id (foreign key to passbooks table)
- user_id (foreign key to users table)


## Requirements

### Users
- User can register with username, email and password.
- User can login with email and password.

### Passbooks
- User can create multiple passbooks with bank name, account number and zero balance.
- User can view all passbooks.
- user can delete a passbook which also deletes all transactions for that passbook.

### Transactions
- User can add transactions to a passbook with amount, transaction date, type, party name, description and tags.
- User can edit a transaction.
- User can delete a transaction.
- User can view all transactions for a passbook.
- User can filter transactions by
    - party name
    - description
    - tags
