'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/admin.module.css';

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Service>({
    id: '',
    name: '',
    description: '',
    price: 0,
  });
  const [activeTab, setActiveTab] = useState('services');
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem('adminAuth');
    if (!auth) {
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
      loadServices();
    }
  }, [router]);

  const loadServices = () => {
    const saved = localStorage.getItem('services');
    if (saved) {
      setServices(JSON.parse(saved));
    } else {
      // Default services
      const defaultServices: Service[] = [
        {
          id: '1',
          name: 'Diagnostics',
          description: 'Comprehensive diagnostic services to identify equipment issues quickly and accurately.',
          price: 150,
        },
        {
          id: '2',
          name: 'Electrical Systems',
          description: 'Expert repair and maintenance of electrical components and wiring systems.',
          price: 200,
        },
        {
          id: '3',
          name: 'Hydraulics',
          description: 'Hydraulic system repair, maintenance, and component replacement.',
          price: 250,
        },
        {
          id: '4',
          name: 'HVAC',
          description: 'Heating, ventilation, and air conditioning system services for equipment cabs.',
          price: 180,
        },
        {
          id: '5',
          name: 'General Repair',
          description: 'Complete repair and maintenance services for all heavy equipment types.',
          price: 220,
        },
        {
          id: '6',
          name: 'Preventive Maintenance',
          description: 'Regular maintenance programs to keep your equipment running smoothly.',
          price: 175,
        },
      ];
      setServices(defaultServices);
      localStorage.setItem('services', JSON.stringify(defaultServices));
    }
  };

  const handleAddService = () => {
    setFormData({
      id: Date.now().toString(),
      name: '',
      description: '',
      price: 0,
    });
    setEditingId('new');
  };

  const handleEditService = (service: Service) => {
    setFormData(service);
    setEditingId(service.id);
  };

  const handleSaveService = () => {
    if (!formData.name || !formData.description || formData.price <= 0) {
      alert('Please fill in all fields with valid data');
      return;
    }

    let updated: Service[];
    if (editingId === 'new') {
      updated = [...services, { ...formData, id: Date.now().toString() }];
    } else {
      updated = services.map((s) => (s.id === editingId ? formData : s));
    }

    setServices(updated);
    localStorage.setItem('services', JSON.stringify(updated));
    setEditingId(null);
    setFormData({ id: '', name: '', description: '', price: 0 });
  };

  const handleDeleteService = (id: string) => {
    if (confirm('Are you sure you want to delete this service?')) {
      const updated = services.filter((s) => s.id !== id);
      setServices(updated);
      localStorage.setItem('services', JSON.stringify(updated));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    router.push('/admin/login');
  };

  if (!isAuthenticated) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.adminContainer}>
      <div className={styles.adminHeader}>
        <h1>🐝 BeeRad LLC Admin Dashboard</h1>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          Logout
        </button>
      </div>

      <div className={styles.adminTabs}>
        <button
          className={`${styles.tab} ${activeTab === 'services' ? styles.active : ''}`}
          onClick={() => setActiveTab('services')}
        >
          📋 Services & Pricing
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'settings' ? styles.active : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          ⚙️ Settings
        </button>
      </div>

      {activeTab === 'services' && (
        <div className={styles.adminContent}>
          <section className={styles.serviceManager}>
            <h2>Manage Services & Pricing</h2>

            {editingId ? (
              <div className={styles.editForm}>
                <h3>{editingId === 'new' ? 'Add New Service' : 'Edit Service'}</h3>

                <div className={styles.formGroup}>
                  <label>Service Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Hydraulic Repair"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe this service..."
                    rows={4}
                  ></textarea>
                </div>

                <div className={styles.formGroup}>
                  <label>Price ($)</label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                  />
                </div>

                <div className={styles.buttonGroup}>
                  <button onClick={handleSaveService} className={styles.saveBtn}>
                    Save Service
                  </button>
                  <button
                    onClick={() => {
                      setEditingId(null);
                      setFormData({ id: '', name: '', description: '', price: 0 });
                    }}
                    className={styles.cancelBtn}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button onClick={handleAddService} className={styles.addBtn}>
                + Add New Service
              </button>
            )}

            <div className={styles.servicesList}>
              <h3>Current Services ({services.length})</h3>
              {services.length === 0 ? (
                <p>No services added yet.</p>
              ) : (
                <table className={styles.servicesTable}>
                  <thead>
                    <tr>
                      <th>Service Name</th>
                      <th>Price</th>
                      <th>Description</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((service) => (
                      <tr key={service.id}>
                        <td>{service.name}</td>
                        <td>${service.price.toFixed(2)}</td>
                        <td>{service.description.substring(0, 50)}...</td>
                        <td>
                          <button
                            onClick={() => handleEditService(service)}
                            className={styles.editBtn}
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteService(service.id)}
                            className={styles.deleteBtn}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </section>
        </div>
      )}

      {activeTab === 'settings' && (
        <div className={styles.adminContent}>
          <section className={styles.settingsSection}>
            <h2>Admin Settings</h2>
            <div className={styles.settingCard}>
              <h3>📸 Image Management</h3>
              <p>Image upload feature coming soon!</p>
              <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                You'll be able to upload service images and equipment photos here.
              </p>
            </div>

            <div className={styles.settingCard}>
              <h3>📧 Email Settings</h3>
              <p>Contact form notifications are configured.</p>
              <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                Emails are being sent to: <strong>Beeradllc@gmail.com</strong>
              </p>
            </div>

            <div className={styles.settingCard}>
              <h3>📱 Site Information</h3>
              <p>Current site location: <strong>Lubbock, Texas</strong></p>
              <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                Update your business information by editing the about page.
              </p>
            </div>

            <div className={styles.settingCard}>
              <h3>🔐 Security</h3>
              <p>Admin password is configured and working.</p>
              <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                To change your password, edit the admin login page code.
              </p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}