import test from 'node:test';
import assert from 'node:assert/strict';
import { netRevenueCents, countFulfilled } from '../src/metrics.js';

const fulfilled = (grossCents, refundCents = 0) => ({ status: 'fulfilled', grossCents, refundCents });
const pending = (grossCents) => ({ status: 'pending', grossCents, refundCents: 0 });
const failed = (grossCents) => ({ status: 'failed', grossCents, refundCents: 0 });

test('ordinary fulfilled order contributes its gross amount', () => {
  assert.equal(netRevenueCents([fulfilled(4000)]), 4000);
});

test('refunds are deducted from net revenue', () => {
  assert.equal(netRevenueCents([fulfilled(10000, 1500)]), 8500);
});

test('non-fulfilled orders do not contribute to net revenue', () => {
  assert.equal(netRevenueCents([fulfilled(3000), pending(4000), failed(5000)]), 3000);
});

test('only fulfilled records count as fulfilled', () => {
  assert.equal(countFulfilled([fulfilled(1000), pending(1000), failed(1000)]), 1);
});

test('empty input has zero revenue and zero fulfilled records', () => {
  assert.equal(netRevenueCents([]), 0);
  assert.equal(countFulfilled([]), 0);
});

test('invalid status is rejected', () => {
  assert.throws(() => countFulfilled([{ status: 'mystery', grossCents: 100, refundCents: 0 }]), TypeError);
});
