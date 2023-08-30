import { test } from 'vitest';
import supertest from 'supertest';
import app from '../app';
import assert from 'assert';

export function testCases() {
  test('Increment counter', async () => {
    const response = await supertest(app).get('/pageview/test');
    const body = response.text;
    assert.strictEqual(response.headers['content-type'], 'text/plain; charset=utf-8');
    assert.strictEqual(Number(body), 1);
  });
}