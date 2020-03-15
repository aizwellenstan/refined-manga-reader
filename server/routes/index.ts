import * as path from 'path';
import * as express from 'express';

const router = express.Router();
const staticDir = path.resolve(__dirname, '../../static');

// Service worker
router.use('/sw.js', (_, res) => {
  res.sendFile(path.resolve(staticDir, 'sw.js'));
});

router.use('/*', (_, res) => {
  res.sendFile(path.resolve(staticDir, 'index.html'));
});

export const routes = router;
