/**
 * Metrics over fictitious delivery orders.
 * Each record has { status, grossCents, refundCents }.
 * Only records with status === 'fulfilled' count as completed.
 */

function validate(records) {
  if (!Array.isArray(records)) throw new TypeError('records must be an array');
  for (const record of records) {
    if (!record || !['fulfilled', 'pending', 'failed'].includes(record.status)) {
      throw new TypeError('invalid order status');
    }
    if (!Number.isInteger(record.grossCents) || record.grossCents < 0 ||
        !Number.isInteger(record.refundCents) || record.refundCents < 0) {
      throw new TypeError('amounts must be nonnegative integer cents');
    }
  }
}

export function netRevenueCents(records) {
  validate(records);
  return records
    .filter(record => record.status === 'fulfilled')
    .reduce((total, record) => total + record.grossCents + record.refundCents, 0);
}

export function countFulfilled(records) {
  validate(records);
  return records.filter(record => record.status !== 'failed').length;
}
