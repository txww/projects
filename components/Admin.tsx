import React, { useState, useEffect } from 'react';
import { Trash2, Plus, LogOut, Image, FolderPlus } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  
  // New Project Form State
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newImage, setNewImage] = useState('');

  // Check for existing session
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
      fetchProjects();
    }
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/projects');
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      }
    } catch (err) {
      console.error("Failed to fetch projects");
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('adminToken', data.token);
        setIsAuthenticated(true);
        fetchProjects();
      } else {
        alert('Invalid Credentials');
      }
    } catch (err) {
      alert('Login Error');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3001/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle, category: newCategory, image: newImage })
      });
      if (res.ok) {
        setNewTitle('');
        setNewCategory('');
        setNewImage('');
        fetchProjects();
      }
    } catch (err) {
      alert('Error adding project');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProject = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      const res = await fetch(`http://localhost:3001/api/projects/${id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        fetchProjects();
      }
    } catch (err) {
      alert('Error deleting project');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-200">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
            <p className="text-gray-500">Plumeria Control Panel</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-primary outline-none"
                placeholder="admin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-primary outline-none"
                placeholder="admin123"
              />
            </div>
            <button className="w-full bg-brand-primary text-white py-3 rounded-lg font-bold hover:bg-brand-blue transition-colors">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-dark text-white hidden md:block flex-shrink-0">
        <div className="p-6 text-2xl font-bold tracking-tight border-b border-gray-800">
          Plumeria <span className="text-brand-light">Admin</span>
        </div>
        <nav className="p-4 space-y-2">
          <div className="block py-3 px-4 rounded bg-brand-primary text-white font-medium">
             Projects
          </div>
          <div className="block py-3 px-4 rounded hover:bg-white/10 text-gray-300 transition cursor-not-allowed opacity-50">
             Settings (Soon)
          </div>
        </nav>
        <div className="absolute bottom-0 w-64 p-4 border-t border-gray-800">
           <button onClick={handleLogout} className="flex items-center gap-2 text-gray-400 hover:text-white transition">
             <LogOut size={20} /> Logout
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Manage Projects</h2>
          <button onClick={handleLogout} className="md:hidden text-red-600">Logout</button>
        </div>

        {/* Add Project Form */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-10">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FolderPlus size={20} className="text-brand-primary"/>
            Add New Project
          </h3>
          <form onSubmit={handleAddProject} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input 
              type="text" 
              placeholder="Project Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-brand-primary outline-none"
              required
            />
            <input 
              type="text" 
              placeholder="Category (e.g. Construction)"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-brand-primary outline-none"
              required
            />
            <input 
              type="url" 
              placeholder="Image URL (https://...)"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
              className="p-3 border rounded-lg focus:ring-2 focus:ring-brand-primary outline-none"
              required
            />
            <button 
              type="submit" 
              disabled={loading}
              className="bg-brand-primary text-white py-3 rounded-lg font-bold hover:bg-brand-blue transition-colors flex items-center justify-center gap-2"
            >
              <Plus size={20} /> {loading ? 'Adding...' : 'Add Project'}
            </button>
          </form>
        </div>

        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {(e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=No+Image'}}
                />
                <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                  {project.category}
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-900 text-lg mb-2">{project.title}</h4>
                <button 
                  onClick={() => handleDeleteProject(project.id)}
                  className="w-full mt-2 flex items-center justify-center gap-2 text-red-500 bg-red-50 py-2 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <Trash2 size={18} /> Delete
                </button>
              </div>
            </div>
          ))}
          {projects.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-400">
              <Image size={48} className="mx-auto mb-4 opacity-50" />
              <p>No projects found. Add one above.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;