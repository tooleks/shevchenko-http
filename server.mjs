import express from 'express';
import * as shevchenko from 'shevchenko';
import { getShevchenkoMetadata } from './metadata.mjs';

const app = express();
const port = process.env.API_PORT ?? 3000;

app.use(express.json());

app.get('/', async (req, res, err) => {
  try {
    const metadata = await getShevchenkoMetadata();
    res.status(200).send({ version: metadata.version });
  } catch (err) {
    next(err);
  }
});

/**
 * Inflects an anthroponym in nominative grammatical case.
 */
app.post('/nominative', (req, res, next) => {
  try {
    const result = shevchenko.inNominative(req.body);
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
});

/**
 * Inflects an anthroponym in genitive grammatical case.
 */
app.post('/genitive', (req, res, next) => {
  try {
    const result = shevchenko.inGenitive(req.body);
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
});

/**
 * Inflects an anthroponym in dative grammatical case.
 */
app.post('/dative', (req, res, next) => {
  try {
    const result = shevchenko.inDative(req.body);
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
});

/**
 * Inflects an anthroponym in accusative grammatical case.
 */
app.post('/accusative', (req, res, next) => {
  try {
    const result = shevchenko.inAccusative(req.body);
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
});

/**
 * Inflects an anthroponym in ablative grammatical case.
 */
app.post('/ablative', (req, res, next) => {
  try {
    const result = shevchenko.inAblative(req.body);
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
});

/**
 * Inflects an anthroponym in locative grammatical case.
 */
app.post('/locative', (req, res, next) => {
  try {
    const result = shevchenko.inLocative(req.body);
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
});

/**
 * Inflects an anthroponym in vocative grammatical case.
 */
app.post('/vocative', (req, res, next) => {
  try {
    const result = shevchenko.inVocative(req.body);
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
});

/**
 *
 */
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => {
  console.log(`Shevchenko application is running on port ${port}.`);
});
