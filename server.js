import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, 'data.json');

// Middleware
app.use(cors()); 
app.use(express.json());

// Initialize Data File if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
  const initialData = {
    projects: [
      {
        id: 1,
        title: "Modern Residential Complex",
        category: "Construction",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
      },
      {
        id: 2,
        title: "Highway Paving",
        category: "Infrastructure",
        image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop"
      },
      {
        id: 3,
        title: "Commercial Tower",
        category: "Real Estate",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      },
      {
        id: 4,
        title: "Infrastructure Project",
        category: "Excavation",
        image: "https://images.unsplash.com/photo-1590644365607-1c5a29846519?q=80&w=2071&auto=format&fit=crop"
      }
    ]
  };
  fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
}

// Helper to read/write data
const readData = () => JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
const writeData = (data) => fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

// --- Routes ---

app.get('/', (req, res) => {
  res.send('Plumeria Backend & Admin API is Running');
});

// Admin Login (Simple Hardcoded)
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // In a real app, use a database and hash passwords
  if (username === 'admin' && password === 'admin123') {
    res.json({ success: true, token: 'fake-jwt-token-123456' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Get All Projects
app.get('/api/projects', (req, res) => {
  const data = readData();
  res.json(data.projects);
});

// Add New Project
app.post('/api/projects', (req, res) => {
  const { title, category, image } = req.body;
  if (!title || !category || !image) {
    return res.status(400).json({ success: false, message: 'Missing fields' });
  }

  const data = readData();
  const newProject = {
    id: Date.now(), // Simple ID generation
    title,
    category,
    image
  };
  
  data.projects.push(newProject);
  writeData(data);
  
  res.json({ success: true, project: newProject });
});

// Delete Project
app.delete('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  const data = readData();
  
  const initialLength = data.projects.length;
  data.projects = data.projects.filter(p => p.id != id);
  
  if (data.projects.length === initialLength) {
    return res.status(404).json({ success: false, message: 'Project not found' });
  }

  writeData(data);
  res.json({ success: true, message: 'Project deleted' });
});

// Contact Form
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }
  console.log('--- New Contact Form Submission ---');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  console.log('-----------------------------------');
  return res.status(200).json({ success: true, message: 'Message received successfully' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});