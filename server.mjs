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
app.post('/nominative', async (req, res, next) => {
  try {
    const output = await shevchenko.inNominative(req.body);
    res.status(200).send(output);
  } catch (err) {
    next(err);
  }
});

/**
 * Inflects an anthroponym in genitive grammatical case.
 */
app.post('/genitive', async (req, res, next) => {
  try {
    const output = await shevchenko.inGenitive(req.body);
    res.status(200).send(output);
  } catch (err) {
    next(err);
  }
});

/**
 * Inflects an anthroponym in dative grammatical case.
 */
app.post('/dative', async (req, res, next) => {
  try {
    const output = await shevchenko.inDative(req.body);
    res.status(200).send(output);
  } catch (err) {
    next(err);
  }
});

/**
 * Inflects an anthroponym in accusative grammatical case.
 */
app.post('/accusative', async (req, res, next) => {
  try {
    const output = await shevchenko.inAccusative(req.body);
    res.status(200).send(output);
  } catch (err) {
    next(err);
  }
});

/**
 * Inflects an anthroponym in ablative grammatical case.
 */
app.post('/ablative', async (req, res, next) => {
  try {
    const output = await shevchenko.inAblative(req.body);
    res.status(200).send(output);
  } catch (err) {
    next(err);
  }
});

/**
 * Inflects an anthroponym in locative grammatical case.
 */
app.post('/locative', async (req, res, next) => {
  try {
    const output = await shevchenko.inLocative(req.body);
    res.status(200).send(output);
  } catch (err) {
    next(err);
  }
});

/**
 * Inflects an anthroponym in vocative grammatical case.
 */
app.post('/vocative', async (req, res, next) => {
  try {
    const output = await shevchenko.inVocative(req.body);
    res.status(200).send(output);
  } catch (err) {
    next(err);
  }
});

/**
 * Inflects detectGender .
 */
app.post('/gender', async (req, res, next) => {
  try {
    
    const output = await shevchenko.detectGender(req.body);
    //в отриманий запит дописую поле gender. Результат можна одразу відправляти для відмінювання.
    var data = req.body; 
    data.gender = output;
    res.status(200).send(data);
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
