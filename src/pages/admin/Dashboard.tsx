import { useEffect, useMemo, useState } from 'react';
import { API_ENDPOINTS } from '@/config/api';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Mail, Package, Images, Folder, Activity, MessageSquare } from 'lucide-react';

interface Product {
  _id: string;
  slug: string;
  title: string;
  body: string;
  category: string;
  images?: string[];
  createdAt?: string;
  updatedAt?: string;
}

interface MessageItem {
  _id: string;
  firstName: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  createdAt: string;
}

export function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function fetchAll() {
      try {
        const [prodRes, msgRes] = await Promise.all([
          fetch(API_ENDPOINTS.PRODUCTS),
          fetch(API_ENDPOINTS.MESSAGES),
        ]);
        const [prodData, msgData] = await Promise.all([
          prodRes.ok ? prodRes.json() : Promise.resolve([]),
          msgRes.ok ? msgRes.json() : Promise.resolve([]),
        ]);
        if (!cancelled) {
          setProducts(prodData);
          setMessages(msgData);
        }
      } catch (e) {
        console.error('Failed to load dashboard data', e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchAll();
    return () => { cancelled = true; };
  }, []);

  const stats = useMemo(() => {
    const productCount = products.length;
    const messageCount = messages.length;
    const categoryCount = new Set(products.map(p => p.category)).size;
    const imageCount = products.reduce((sum, p) => sum + (p.images?.length || 0), 0);
    return { productCount, messageCount, categoryCount, imageCount };
  }, [products, messages]);

  const latestEmails = useMemo(() => messages.slice(0, 5), [messages]);

  type ActivityItem = { type: 'message' | 'product'; title: string; time: string; meta?: string };

  const activityLog: ActivityItem[] = useMemo(() => {
    const msgItems: ActivityItem[] = messages.map(m => ({
      type: 'message',
      title: `New enquiry from ${m.firstName}`,
      time: m.createdAt,
      meta: m.subject || 'General Enquiry',
    }));
    const prodItems: ActivityItem[] = products.map(p => ({
      type: 'product',
      title: `Product change: ${p.title}`,
      time: p.updatedAt || p.createdAt || new Date().toISOString(),
      meta: p.category,
    }));
    return [...msgItems, ...prodItems]
      .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
      .slice(0, 10);
  }, [messages, products]);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[1,2,3,4].map(i => <Skeleton key={i} className="h-24 w-full rounded-xl" />)}
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Skeleton className="h-[300px] w-full rounded-xl" />
          <Skeleton className="h-[300px] w-full rounded-xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={<Package className="h-5 w-5 text-emerald-700" />} label="Products" value={stats.productCount} />
        <StatCard icon={<MessageSquare className="h-5 w-5 text-emerald-700" />} label="Messages" value={stats.messageCount} />
        <StatCard icon={<Folder className="h-5 w-5 text-emerald-700" />} label="Categories" value={stats.categoryCount} />
        <StatCard icon={<Images className="h-5 w-5 text-emerald-700" />} label="Images" value={stats.imageCount} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between p-4 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-slate-700" />
              <h2 className="text-sm font-semibold text-slate-900">Latest Emails</h2>
            </div>
            <Button variant="outline" onClick={() => window.location.href = '/admin/messages'}>View all</Button>
          </div>
          <ul className="divide-y divide-slate-200">
            {latestEmails.length === 0 && (
              <li className="p-4 text-sm text-slate-500">No messages received yet.</li>
            )}
            {latestEmails.map(m => (
              <li key={m._id} className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{m.firstName} <span className="text-slate-400 font-normal">({m.email})</span></p>
                    <p className="text-xs text-slate-600">{m.subject || 'General Enquiry'}</p>
                  </div>
                  <span className="text-xs text-slate-500">{new Date(m.createdAt).toLocaleString()}</span>
                </div>
                <p className="mt-2 text-sm text-slate-700 line-clamp-2">{m.message}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white">
          <div className="flex items-center gap-2 p-4 border-b border-slate-200">
            <Activity className="h-5 w-5 text-slate-700" />
            <h2 className="text-sm font-semibold text-slate-900">Activity Log</h2>
          </div>
          <ul className="divide-y divide-slate-200">
            {activityLog.length === 0 && (
              <li className="p-4 text-sm text-slate-500">No recent activity.</li>
            )}
            {activityLog.map((a, idx) => (
              <li key={idx} className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{a.title}</p>
                    <p className="text-xs text-slate-600">{a.meta}</p>
                  </div>
                  <span className="text-xs text-slate-500">{new Date(a.time).toLocaleString()}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode, label: string, value: number }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg bg-emerald-50 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <p className="text-xs font-medium text-slate-500">{label}</p>
          <p className="text-2xl font-bold text-slate-900">{value}</p>
        </div>
      </div>
    </div>
  );
}
