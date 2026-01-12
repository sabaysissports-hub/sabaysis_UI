'use client';

import { useEffect, useMemo, useState } from 'react';
import { API_ENDPOINTS } from '@/config/api';

type Service = {
  slug: string;
  title: string;
  body?: string;
};

type ServiceDetailForm = {
  bannerTitle?: string;
  welcomeText?: string;
  bannerImage?: string;
};

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [selected, setSelected] = useState<Service | null>(null);

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const [activeTab, setActiveTab] = useState<'meta' | 'detail'>('meta');

  const [serviceForm, setServiceForm] = useState<Partial<Service>>({});
  const [detailForm, setDetailForm] = useState<ServiceDetailForm>({});
  const [bannerFile, setBannerFile] = useState<File | null>(null);


  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');


  const fetchServices = async () => {
    setLoading(true);
    try {
      console.log('Fetching services from:', API_ENDPOINTS.SERVICES);
      const res = await fetch(API_ENDPOINTS.SERVICES, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Services API response status:', res.status, res.statusText);

      if (res.ok) {
        const data = await res.json();
        console.log('Services data received:', data);
        setServices(Array.isArray(data) ? data : []);
        setMessage('');
      } else {
        console.error('Failed to fetch services:', res.status, res.statusText);
        const errorData = await res.json().catch(() => ({}));
        console.error('Error details:', errorData);
        setServices([]);
        setMessage(`Failed to load services: ${res.status} ${res.statusText}`);
      }
    } catch (error) {
      console.error('Failed to fetch services', error);
      setServices([]);
      setMessage(`Network error: ${error instanceof Error ? error.message : 'Unable to fetch services'}`);
    } finally {
      setLoading(false);
    }
  };

  const loadService = async (slug: string) => {
    setLoading(true);
    try {
      const metaRes = await fetch(`${API_ENDPOINTS.SERVICES}/${slug}`);
      const meta = await metaRes.json();

      setSelected(meta);
      setServiceForm(meta);

      const detailRes = await fetch(`${API_ENDPOINTS.SERVICES}/${slug}/detail`);
      if (detailRes.ok) {
        const detail = await detailRes.json();
        setDetailForm({
          bannerTitle: detail.bannerTitle || '',
          welcomeText: detail.welcomeText || '',
          bannerImage: detail.bannerImage || '',
        });
      } else {
        setDetailForm({});
      }

      setActiveTab('meta');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);


  const saveService = async () => {
    if (!serviceForm.title) {
      setMessage('Title is required');
      return;
    }

    setLoading(true);
    try {
      const payload = {
        slug: selected?.slug || slugify(serviceForm.title),
        title: serviceForm.title,
        body: serviceForm.body,
      };

      const method = selected ? 'PUT' : 'POST';
      const url = selected
        ? `${API_ENDPOINTS.SERVICES}/${selected.slug}`
        : API_ENDPOINTS.SERVICES;

      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      setMessage('Service saved');
      await fetchServices();

      if (selected) {
        await loadService(selected.slug);
      } else {
        await loadService(payload.slug);
      }
    } finally {
      setLoading(false);
    }
  };

  const saveDetail = async () => {
    if (!selected) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('detail', JSON.stringify(detailForm));
      if (bannerFile) formData.append('bannerImage', bannerFile);

      await fetch(`${API_ENDPOINTS.SERVICES}/${selected.slug}/detail`, {
        method: 'POST',
        body: formData,
      });

      setMessage('Detail saved');
      setBannerFile(null);
      await loadService(selected.slug);
    } finally {
      setLoading(false);
    }
  };

  const deleteService = async (slug: string) => {
    if (!confirm('Delete this service?')) return;

    setLoading(true);
    try {
      await fetch(`${API_ENDPOINTS.SERVICES}/${slug}`, { method: 'DELETE' });
      setSelected(null);
      setServiceForm({});
      setDetailForm({});
      await fetchServices();
    } finally {
      setLoading(false);
    }
  };


  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return services.filter(
      (s) => s.title.toLowerCase().includes(q) || s.slug.includes(q)
    );
  }, [services, search]);


  return (
    <div className="grid grid-cols-1 lg:grid-cols-[360px,1fr] gap-6">
      <div className="border rounded bg-white">
        <div className="p-4 border-b">
          <input
            placeholder="Search services..."
            className="w-full rounded border px-3 py-2 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {loading ? (
          <div className="p-4 text-center text-slate-400">
            <p>Loading services...</p>
          </div>
        ) : filtered.length === 0 && services.length === 0 ? (
          <div className="p-8 text-center text-slate-500">
            <p className="font-medium mb-2">No services found</p>
            <p className="text-xs text-slate-400">Check the browser console for API errors.</p>
            <p className="text-xs text-slate-400 mt-1">API URL: {API_ENDPOINTS.SERVICES}</p>
          </div>
        ) : (
          <ul className="divide-y">
            {filtered.map((s) => (
              <li
                key={s.slug}
                className={`p-3 cursor-pointer hover:bg-slate-50 ${selected?.slug === s.slug ? 'bg-slate-100' : ''
                  }`}
                onClick={() => loadService(s.slug)}
              >
                <p className="font-medium">{s.title}</p>
                <p className="text-xs text-slate-500">{s.slug}</p>
              </li>
            ))}
          </ul>
        )}

        <div className="p-3 border-t">
          <button
            className="w-full rounded bg-slate-900 text-white py-2 text-sm hover:bg-slate-800 transition-colors"
            onClick={() => {
              setSelected(null);
              setServiceForm({});
              setDetailForm({});
            }}
          >
            + New Service
          </button>
        </div>
      </div>

      <div className="border rounded bg-white p-6">
        <div className="flex justify-between mb-4">
          <h2 className="font-semibold text-lg">
            {selected ? 'Edit Service' : 'New Service'}
          </h2>
          {selected && (
            <button
              onClick={() => deleteService(selected.slug)}
              className="text-sm text-red-600"
            >
              Delete
            </button>
          )}
        </div>

        <div className="flex border-b mb-6">
          {['meta', 'detail'].map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t === 'meta' ? 'meta' : 'detail')}
              className={`px-4 py-2 text-sm font-medium ${activeTab === t
                ? 'border-b-2 border-slate-900'
                : 'text-slate-500'
                }`}
            >
              {t === 'meta' ? 'Basic Info' : 'Detail'}
            </button>
          ))}
        </div>

        {activeTab === 'meta' && (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Title</label>
              <input
                className="mt-1 w-full rounded border px-3 py-2"
                value={serviceForm.title || ''}
                onChange={(e) =>
                  setServiceForm((f) => ({ ...f, title: e.target.value }))
                }
              />
            </div>

            <div>
              <label className="text-sm font-medium">Description</label>
              <textarea
                className="mt-1 w-full rounded border px-3 py-2 h-32"
                value={serviceForm.body || ''}
                onChange={(e) =>
                  setServiceForm((f) => ({ ...f, body: e.target.value }))
                }
              />
            </div>

            <button
              onClick={saveService}
              className="rounded bg-slate-900 text-white px-4 py-2"
            >
              Save Service
            </button>
          </div>
        )}

        {activeTab === 'detail' && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Banner Title</label>
                <input
                  className="mt-1 w-full rounded border px-3 py-2"
                  value={detailForm.bannerTitle || ''}
                  onChange={(e) =>
                    setDetailForm((f) => ({
                      ...f,
                      bannerTitle: e.target.value,
                    }))
                  }
                />
              </div>

              <div>
                <label className="text-sm font-medium">Welcome Text</label>
                <textarea
                  className="mt-1 w-full rounded border px-3 py-2 h-28"
                  value={detailForm.welcomeText || ''}
                  onChange={(e) =>
                    setDetailForm((f) => ({
                      ...f,
                      welcomeText: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium block mb-2">Upload Banner Image</label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setBannerFile(e.target.files?.[0] || null)}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center bg-slate-50 hover:bg-slate-100 hover:border-slate-400 transition">
                    <svg className="w-8 h-8 mx-auto text-slate-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <p className="text-sm text-slate-600">{bannerFile ? bannerFile.name : 'Click or drag image here'}</p>
                    <p className="text-xs text-slate-500 mt-1">PNG, JPG, or WebP</p>
                  </div>
                </div>
              </div>

              <button
                onClick={saveDetail}
                className="rounded bg-slate-900 text-white px-4 py-2"
              >
                Save Detail
              </button>
            </div>

            {/* Preview */}
            <div className="border-2 border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="aspect-video bg-linear-to-br from-slate-100 to-slate-50 flex items-center justify-center relative group">
                {bannerFile ? (
                  <>
                    <img
                      src={URL.createObjectURL(bannerFile)}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition flex items-center justify-center">
                      <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                        ✓ Selected
                      </span>
                    </div>
                  </>
                ) : detailForm.bannerImage ? (
                  <img
                    src={detailForm.bannerImage}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <svg className="w-12 h-12 text-slate-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm text-slate-400">No image selected</span>
                  </div>
                )}
              </div>
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-slate-900">
                  {detailForm.bannerTitle || 'Banner Title'}
                </h3>
                <p className="text-sm text-slate-600 mt-2 line-clamp-2">
                  {detailForm.welcomeText || 'Welcome text preview...'}
                </p>
              </div>
            </div>
          </div>
        )}

        {loading && <p className="text-xs mt-4 text-slate-500">Saving…</p>}
        {message && <p className="text-sm mt-4 text-emerald-600">{message}</p>}
      </div>
    </div>
  );
}
