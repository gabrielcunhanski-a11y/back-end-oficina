import test from 'node:test';
import assert from 'node:assert/strict';
import { isValidEmail, isValidCPF, isValidCNPJ } from '../src/utils/validators.js';

test('deve validar e-mail corretamente', () => {
  assert.equal(isValidEmail('usuario@email.com'), true);
  assert.equal(isValidEmail('email-invalido'), false);
});

test('deve validar CPF corretamente', () => {
  assert.equal(isValidCPF('12345678909'), true);
  assert.equal(isValidCPF('123'), false);
});

test('deve validar CNPJ corretamente', () => {
  assert.equal(isValidCNPJ('12345678000195'), true);
  assert.equal(isValidCNPJ('123'), false);
});
