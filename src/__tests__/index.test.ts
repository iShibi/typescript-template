import { add } from '../index';
import { expect, test } from 'vitest';

test('Add two numbers', () => {
	expect(add(6, 3)).toBe(9);
});
