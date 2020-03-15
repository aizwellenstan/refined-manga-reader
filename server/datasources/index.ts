import * as express from 'express';
import * as request from 'request';
import { RESOURCE_HOST, RESOURCE_PROTOCOL } from '../config';

const router = express.Router();

// Bind /api/* to original API server
router.use('/api', (req, res) => {
  const boundPath = `${RESOURCE_PROTOCOL}://${RESOURCE_HOST}${req.path}`;
  req.pipe(request(boundPath)).pipe(res);
});

export const dataSources = router;
