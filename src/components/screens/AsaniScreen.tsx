"use client";

import { Activity, Coffee, CreditCard, Signal, AlertTriangle, MapPin, Search } from "lucide-react";

export function AsaniScreen() {
  return (
    <div className="w-full bg-[#f4f7f6] text-gray-800 rounded-xl border border-gray-200 overflow-hidden shadow-2xl font-sans flex flex-col h-[600px] text-sm">
      {/* Header */}
      <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Coffee className="w-6 h-6 text-[#ff6b6b]" />
          <span className="font-bold text-gray-900 text-lg tracking-tight">Asani IoT Fleet</span>
        </div>
        
        <div className="flex-1 max-w-sm mx-8">
          <div className="bg-gray-100 rounded-full flex items-center px-4 py-2">
            <Search className="w-4 h-4 text-gray-400" />
            <input type="text" placeholder="Search machine ID or location..." className="bg-transparent border-none focus:outline-none ml-2 text-sm w-full" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <AlertTriangle className="w-5 h-5 text-gray-500" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
            <img src="https://ui-avatars.com/api/?name=Usama+Sohail&background=ff6b6b&color=fff" alt="Avatar" />
          </div>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Dashboard */}
        <div className="flex-[2] p-6 overflow-y-auto">
          {/* Metrics Row */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <MetricCard title="Active Machines" value="482 / 500" trend="+12 this week" color="text-green-500" />
            <MetricCard title="Today's Revenue" value="$4,250.50" trend="+8% vs yesterday" color="text-blue-500" />
            <MetricCard title="Needs Restock" value="18 units" trend="Action Required" color="text-red-500" />
          </div>

          <h3 className="font-bold text-gray-900 mb-4 text-lg">Live Fleet Status (MQTT Stream)</h3>
          
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs text-gray-500 uppercase tracking-wider">
                  <th className="p-4 font-semibold">Machine ID</th>
                  <th className="p-4 font-semibold">Location</th>
                  <th className="p-4 font-semibold">Signal</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 font-semibold">Last Ping</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <TableRow id="VM-8492" loc="Central Station, Terminal 1" signal={98} status="Online" time="2 sec ago" />
                <TableRow id="VM-8493" loc="Downtown Mall, Level 2" signal={85} status="Online" time="4 sec ago" />
                <TableRow id="VM-8494" loc="University Library" signal={12} status="Offline" time="45 min ago" alert />
                <TableRow id="VM-8495" loc="Tech Park, Building C" signal={76} status="Online" time="1 sec ago" />
                <TableRow id="VM-8496" loc="City Hospital, Lobby" signal={92} status="Online" time="8 sec ago" />
              </tbody>
            </table>
          </div>
        </div>

        {/* Details Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-xl text-gray-900">VM-8494</h3>
                <p className="text-gray-500 text-sm flex items-center gap-1 mt-1"><MapPin className="w-3 h-3" /> University Library</p>
              </div>
              <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full border border-red-200 uppercase">Offline</span>
            </div>
            
            <div className="flex gap-4 mb-4">
              <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors text-xs">Reboot Target</button>
              <button className="flex-1 bg-[#ff6b6b] text-white py-2 rounded-lg font-medium hover:bg-[#ff5252] transition-colors text-xs">Dispatch Tech</button>
            </div>
          </div>

          <div className="p-6 flex-1 overflow-y-auto">
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Recent Transactions</h4>
            
            <div className="space-y-4">
              <TxRow item="Coca Cola Can" price="$1.50" type="RFID Card" time="10:24 AM" />
              <TxRow item="Snickers Bar" price="$1.20" type="Mobile App" time="09:15 AM" />
              <TxRow item="Lays Chips" price="$2.00" type="NFC Pay" time="08:42 AM" />
              <TxRow item="Water Bottle" price="$1.00" type="Mobile App" time="08:05 AM" />
            </div>

            <div className="mt-8">
              <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Telemetry Log</h4>
              <div className="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-[10px] space-y-1 h-32 overflow-y-auto">
                <div>[10:30:12] DISCONNECT from broker</div>
                <div className="text-gray-400">[10:30:10] Ping resp latency: 140ms</div>
                <div className="text-gray-400">[10:30:05] Ping req</div>
                <div className="text-yellow-400">[10:29:45] WARN: Cell signal drop to 12%</div>
                <div className="text-gray-400">[10:25:00] TX_OK id:84920</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, trend, color }: { title: string, value: string, trend: string, color: string }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
      <div className="text-gray-500 font-medium text-xs uppercase tracking-wider mb-2">{title}</div>
      <div className="text-2xl font-bold text-gray-900 mb-2">{value}</div>
      <div className={`text-xs font-semibold ${color}`}>{trend}</div>
    </div>
  );
}

function TableRow({ id, loc, signal, status, time, alert = false }: { id: string, loc: string, signal: number, status: string, time: string, alert?: boolean }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="p-4 font-bold text-gray-900">{id}</td>
      <td className="p-4 text-gray-600 truncate max-w-[150px]">{loc}</td>
      <td className="p-4">
        <div className="flex items-center gap-2">
          <Signal className={`w-4 h-4 ${alert ? 'text-red-500' : 'text-green-500'}`} />
          <span className="text-xs font-medium text-gray-600">{signal}%</span>
        </div>
      </td>
      <td className="p-4">
        <span className={`px-2 py-1 rounded-full text-xs font-bold ${alert ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {status}
        </span>
      </td>
      <td className="p-4 text-gray-500 text-xs font-mono">{time}</td>
    </tr>
  );
}

function TxRow({ item, price, type, time }: { item: string, price: string, type: string, time: string }) {
  return (
    <div className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0">
      <div>
        <div className="font-bold text-gray-900 text-xs">{item}</div>
        <div className="text-[10px] text-gray-500 flex items-center gap-1 mt-0.5"><CreditCard className="w-3 h-3" /> {type}</div>
      </div>
      <div className="text-right">
        <div className="font-bold text-green-600 text-sm">{price}</div>
        <div className="text-[10px] text-gray-500">{time}</div>
      </div>
    </div>
  );
}
