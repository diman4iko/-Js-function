import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN

export default function countFreeEmailDomains(emails) {
  const domainCounts = {};

  for (const email of emails) {
    const [, domain] = email.split('@');
    if (freeEmailDomains.includes(domain)) {
      if (domainCounts[domain]) {
        domainCounts[domain]++;
      } else {
        domainCounts[domain] = 1;
      }
    }
  }

  return domainCounts;
}
// END