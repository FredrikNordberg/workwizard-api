// Importera Express & Axios..

const express = require('express');
const cors = require('cors');
const axios = require('axios');

// Hämta express, instansiera express..
const app = express();
app.use(cors());
app.use(express.json());

// Skapa endpoints dvs resurser..
// GET...
app.get('/api/1/workorders', async(req, res) => {
    const url = 'http://localhost:3000/workorders';
    const {data} = await axios.get(url);
    res.status(200).json(data);
    
});

// GET: ID..
app.get('/api/1/workorders/:id', async(req, res) => {
    const param = req.params.id
    const url = `http://localhost:3000/workorders/${param}`;
    const {data} = await axios.get(url);
    res.status(200).json(data);
    
});

// POST...
app.post('/api/1/workorders', async(req, res) => {
    const url = 'http://localhost:3000/workorders';
    const body = req.body;
    const {data} = await axios.post(url, body);
    res.status(201).json(data);
});

// DELETE: ID
app.delete('/api/1/workorders/:id', async (req, res) => {
    const param = req.params.id;
    const url = `http://localhost:3000/workorders/${param}`;
    await axios.delete(url);
    res.status(204).end();
  });

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
