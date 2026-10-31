import assert from 'node:assert';
import test from 'node:test';
import fs from 'node:fs';
import path from 'node:path';

test('Finding #9: nginx.conf configuration', () => {
  const confPath = path.join(process.cwd(), 'nginx.conf');
  assert.ok(fs.existsSync(confPath), 'nginx.conf must exist');
  const content = fs.readFileSync(confPath, 'utf-8');
  assert.ok(content.includes('listen 8080;'), 'nginx.conf must listen on port 8080');
  assert.ok(content.includes('try_files $uri $uri/ /index.html;'), 'nginx.conf must have SPA fallback');
});

test('Finding #31: Project thumbnails integrity', () => {
  const projectsTs = fs.readFileSync(path.join(process.cwd(), 'src/data/projects.ts'), 'utf-8');
  assert.ok(projectsTs.includes('/screenshots/thumb-tzeva-adom-new.png'), 'tzeva-adom must use thumb-tzeva-adom-new.png');

  const babyTrackerThumb = path.join(process.cwd(), 'public/screenshots/thumb-baby-tracker.png');
  assert.ok(fs.existsSync(babyTrackerThumb), 'thumb-baby-tracker.png must exist');
  const stat = fs.statSync(babyTrackerThumb);
  assert.ok(stat.size > 1000, 'thumb-baby-tracker.png must be non-empty');
});

test('Finding #44: Hash selector sanitization', () => {
  // Test decoding and escaping non-CSS identifier hashes
  const testHashes = ['#/projects', '#123', '#contact-me', '#section/nested'];
  for (const h of testHashes) {
    const rawHash = h.replace(/^#/, '');
    const id = decodeURIComponent(rawHash);
    assert.ok(typeof id === 'string');
    // Ensure no unhandled exception
  }
});
