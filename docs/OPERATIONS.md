# Operations Policy — Dispatch Metrics

This file describes the intended behavior for a synthetic demo; confirm it against source and tests before making claims.

## Order status

Only `fulfilled` orders are completed. `pending` orders have not completed; `failed` orders did not complete.

## Money conventions

- Both `grossCents` and `refundCents` are nonnegative integer amounts denominated in fictitious cents.
- For each fulfilled order, net revenue is `grossCents - refundCents`.
- The net revenue metric excludes pending and failed orders.
- Fulfilled count includes only records whose status is exactly `fulfilled`.

No refund or payment processing occurs in this demo; these are arithmetic calculations over static input.
