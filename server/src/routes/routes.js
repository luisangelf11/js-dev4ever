import {Router} from 'express'
import { deleteNota, getNota, getNotas, postNota, putNota } from '../services/notas.js';

const router = Router();

router.get('/notas', getNotas);

router.get('/notas/:id', getNota);

router.post('/notas', postNota);

router.put('/notas/:id', putNota);

router.delete('/notas/:id', deleteNota);

export default router;