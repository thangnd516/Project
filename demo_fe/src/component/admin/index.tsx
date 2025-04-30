// // src/components/AdminDashboard.tsx
// import React, { useState, useEffect } from 'react';
// import { 
//   LineChart, Line, BarChart, Bar, PieChart, Pie, 
//   XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
//   ResponsiveContainer, Cell 
// } from 'recharts';
// import { USER_DISTRIBUTION, REVENUE_DATA, EMPLOYEE_DATA, USER_DATA } from '../data/mockData';

// const AdminDashboard: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<'dashboard'|'users'|'employees'|'revenue'>('dashboard');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredUsers, setFilteredUsers] = useState(USER_DATA);
//   const [filteredEmployees, setFilteredEmployees] = useState(EMPLOYEE_DATA);
//   const [revenueTimeFrame, setRevenueTimeFrame] = useState<'monthly'|'quarterly'|'yearly'>('yearly');

//   useEffect(() => {
//     setFilteredUsers(
//       USER_DATA.filter(u =>
//         u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         u.email.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );
//   }, [searchTerm]);

//   useEffect(() => {
//     setFilteredEmployees(
//       EMPLOYEE_DATA.filter(e =>
//         e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         e.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         e.department.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );
//   }, [searchTerm]);

//   const totalUsers = USER_DISTRIBUTION.reduce((sum, i) => sum + i.value, 0);
//   const totalRevenue = REVENUE_DATA.reduce((sum, i) => sum + i.revenue, 0);
//   const totalProfit = REVENUE_DATA.reduce((sum, i) => sum + i.profit, 0);
//   const avgPerf = EMPLOYEE_DATA.reduce((sum, i) => sum + i.performance, 0) / EMPLOYEE_DATA.length;

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-lg">
//         <div className="p-6 border-b">
//           <h2 className="text-2xl font-bold">Admin Portal</h2>
//         </div>
//         <nav className="p-4">
//           {[
//             { key: 'dashboard', icon: 'fas fa-chart-line', label: 'Dashboard' },
//             { key: 'users', icon: 'fas fa-users', label: 'User Management' },
//             { key: 'employees', icon: 'fas fa-user-tie', label: 'Employee Management' },
//             { key: 'revenue', icon: 'fas fa-dollar-sign', label: 'Revenue Analytics' },
//           ].map(tab => (
//             <button
//               key={tab.key}
//               onClick={() => setActiveTab(tab.key as any)}
//               className={`flex items-center w-full mb-2 p-3 rounded-lg hover:bg-gray-200 transition ${
//                 activeTab === tab.key ? 'bg-gray-200 font-semibold' : 'text-gray-600'
//               }`}
//             >
//               <i className={`${tab.icon} w-6`}></i>
//               <span>{tab.label}</span>
//             </button>
//           ))}
//           <button className="flex items-center w-full p-3 rounded-lg text-gray-600 hover:bg-gray-200 transition">
//             <i className="fas fa-cog w-6"></i>
//             <span>Settings</span>
//           </button>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="flex items-center justify-between bg-white p-4 shadow-sm">
//           <div className="relative w-1/3">
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchTerm}
//               onChange={e => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <i className="fas fa-bell text-xl text-gray-600"></i>
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <img src="https://via.placeholder.com/40" alt="Admin" className="w-10 h-10 rounded-full"/>
//               <span className="font-medium text-gray-700">Admin User</span>
//             </div>
//           </div>
//         </header>

//         {/* Body */}
//         <main className="flex-1 overflow-auto p-6">
//           {/* Dashboard Tab */}
//           {activeTab === 'dashboard' && (
//             <div className="space-y-6">
//               {/* Stat Cards */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {[
//                   { icon: 'fas fa-users', title: 'Total Users', value: totalUsers.toLocaleString() },
//                   { icon: 'fas fa-dollar-sign', title: 'Total Revenue', value: `$${totalRevenue.toLocaleString()}` },
//                   { icon: 'fas fa-chart-line', title: 'Total Profit', value: `$${totalProfit.toLocaleString()}` },
//                   { icon: 'fas fa-star', title: 'Avg. Performance', value: `${avgPerf.toFixed(1)}%` },
//                 ].map((s, i) => (
//                   <div key={i} className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
//                     <div className="p-3 bg-blue-100 rounded-full text-blue-600">
//                       <i className={s.icon}></i>
//                     </div>
//                     <div>
//                       <h3 className="text-sm text-gray-500">{s.title}</h3>
//                       <p className="text-xl font-semibold">{s.value}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Charts */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 <div className="bg-white p-4 rounded-lg shadow">
//                   <h3 className="mb-2 font-medium">Revenue Trend</h3>
//                   <ResponsiveContainer width="100%" height={250}>
//                     <LineChart data={REVENUE_DATA}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="month" />
//                       <YAxis />
//                       <Tooltip />
//                       <Legend />
//                       <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
//                       <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
//                       <Line type="monotone" dataKey="target" stroke="#ff7300" strokeDasharray="5 5" />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </div>
//                 <div className="bg-white p-4 rounded-lg shadow">
//                   <h3 className="mb-2 font-medium">User Distribution</h3>
//                   <ResponsiveContainer width="100%" height={250}>
//                     <PieChart>
//                       <Pie
//                         data={USER_DISTRIBUTION}
//                         cx="50%"
//                         cy="50%"
//                         outerRadius={80}
//                         dataKey="value"
//                         label={({ name, percent }) => `${name}: ${(percent*100).toFixed(0)}%`}
//                       >
//                         {USER_DISTRIBUTION.map((entry, idx) => (
//                           <Cell key={idx} fill={entry.color} />
//                         ))}
//                       </Pie>
//                       <Tooltip />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>

//               {/* Recent Activities */}
//               <div className="bg-white p-4 rounded-lg shadow">
//                 <h3 className="font-medium mb-3">Recent Activities</h3>
//                 <ul className="space-y-2 text-gray-700">
//                   <li className="flex space-x-4">
//                     <span className="font-mono text-gray-500">10:32 AM</span>
//                     <span>New user <strong>Tran Thi K</strong> registered</span>
//                   </li>
//                   <li className="flex space-x-4">
//                     <span className="font-mono text-gray-500">09:45 AM</span>
//                     <span>Employee <strong>Le Van C</strong> updated status to On Leave</span>
//                   </li>
//                   <li className="flex space-x-4">
//                     <span className="font-mono text-gray-500">Yesterday</span>
//                     <span>Monthly revenue report generated</span>
//                   </li>
//                   <li className="flex space-x-4">
//                     <span className="font-mono text-gray-500">Yesterday</span>
//                     <span>New product <strong>Model X</strong> added to inventory</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           )}

//           {/* User Management Tab */}
//           {activeTab === 'users' && (
//             <div className="space-y-4">
//               <div className="flex justify-between items-center">
//                 <h1 className="text-2xl font-semibold">User Management</h1>
//                 <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//                   <i className="fas fa-plus mr-2"></i> Add New User
//                 </button>
//               </div>
//               <div className="overflow-auto bg-white rounded-lg shadow">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       {['ID','Name','Email','Plan','Reg. Date','Last Login','Actions'].map((h,i) => (
//                         <th key={i} className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">{h}</th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {filteredUsers.map(u => (
//                       <tr key={u.id}>
//                         <td className="px-4 py-2">{u.id}</td>
//                         <td className="px-4 py-2">{u.name}</td>
//                         <td className="px-4 py-2">{u.email}</td>
//                         <td className="px-4 py-2">
//                           <span className={`px-2 py-1 rounded-full text-xs ${
//                             u.plan==='Premium'?'bg-green-100 text-green-800':
//                             u.plan==='Standard'?'bg-blue-100 text-blue-800':'bg-yellow-100 text-yellow-800'
//                           }`}>{u.plan}</span>
//                         </td>
//                         <td className="px-4 py-2">{u.registeredDate}</td>
//                         <td className="px-4 py-2">{u.lastLogin}</td>
//                         <td className="px-4 py-2 space-x-2">
//                           <button className="text-blue-600 hover:text-blue-800"><i className="fas fa-edit"></i></button>
//                           <button className="text-red-600 hover:text-red-800"><i className="fas fa-trash"></i></button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}

//           {/* Employee Management Tab */}
//           {activeTab === 'employees' && (
//             <div className="space-y-4">
//               <div className="flex justify-between items-center">
//                 <h1 className="text-2xl font-semibold">Employee Management</h1>
//                 <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//                   <i className="fas fa-plus mr-2"></i> Add New Employee
//                 </button>
//               </div>
//               <div className="overflow-auto bg-white rounded-lg shadow">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       {['ID','Name','Role','Dept','Status','Performance','Actions'].map((h,i) => (
//                         <th key={i} className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">{h}</th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody className="divide-y divide-gray-200">
//                     {filteredEmployees.map(emp => (
//                       <tr key={emp.id}>
//                         <td className="px-4 py-2">{emp.id}</td>
//                         <td className="px-4 py-2">{emp.name}</td>
//                         <td className="px-4 py-2">{emp.role}</td>
//                         <td className="px-4 py-2">{emp.department}</td>
//                         <td className="px-4 py-2">
//                           <span className={`px-2 py-1 rounded-full text-xs ${
//                             emp.status==='Active' ? 'bg-green-100 text-green-800' :
//                             emp.status==='On Leave' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
//                           }`}>{emp.status}</span>
//                         </td>
//                         <td className="px-4 py-2">
//                           <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
//                             <div 
//                               className="h-2 rounded-full"
//                               style={{ width: `${emp.performance}%`, backgroundColor: emp.performance>=90 ? '#16a34a' : emp.performance>=75 ? '#f59e0b' : '#dc2626' }}
//                             ></div>
//                           </div>
//                           <span className="text-sm text-gray-600">{emp.performance}%</span>
//                         </td>
//                         <td className="px-4 py-2 space-x-2">
//                           <button className="text-blue-600 hover:text-blue-800"><i className="fas fa-eye"></i></button>
//                           <button className="text-green-600 hover:text-green-800"><i className="fas fa-edit"></i></button>
//                           <button className="text-red-600 hover:text-red-800"><i className="fas fa-trash"></i></button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               {/* Department Distribution Chart */}
//               <div className="bg-white p-4 rounded-lg shadow">
//                 <h3 className="mb-2 font-medium">Department Distribution</h3>
//                 <ResponsiveContainer width="100%" height={250}>
//                   <BarChart
//                     data={[
//                       { department: 'Sales', count: 12 },
//                       { department: 'Marketing', count: 8 },
//                       { department: 'Support', count: 15 },
//                       { department: 'Product', count: 10 },
//                       { department: 'Finance', count: 6 }
//                     ]}
//                   >
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="department" />
//                     <YAxis />
//                     <Tooltip />
//                     <Bar dataKey="count" fill="#8884d8" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           )}

//           {/* Revenue Analytics Tab */}
//           {activeTab === 'revenue' && (
//             <div className="space-y-6">
//               <div className="flex items-center justify-between">
//                 <h1 className="text-2xl font-semibold">Revenue Analytics</h1>
//                 <div className="space-x-2">
//                   {['monthly','quarterly','yearly'].map(frame => (
//                     <button
//                       key={frame}
//                       onClick={() => setRevenueTimeFrame(frame as any)}
//                       className={`px-3 py-1 rounded ${
//                         revenueTimeFrame === frame ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
//                       }`}
//                     >
//                       {frame.charAt(0).toUpperCase() + frame.slice(1)}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Summary Cards */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {[
//                   { title: 'Total Revenue', amount: `$${totalRevenue.toLocaleString()}`, trend: '+15.3%', color: 'text-green-600' },
//                   { title: 'Total Profit', amount: `$${totalProfit.toLocaleString()}`, trend: '+12.7%', color: 'text-green-600' },
//                   { title: 'Profit Margin', amount: `${((totalProfit/totalRevenue)*100).toFixed(1)}%`, trend: '-2.1%', color: 'text-red-600' },
//                   { title: 'Avg. Transaction', amount: '$247', trend: '+5.4%', color: 'text-green-600' },
//                 ].map((s,i) => (
//                   <div key={i} className="bg-white p-4 rounded-lg shadow">
//                     <h3 className="text-sm text-gray-500">{s.title}</h3>
//                     <p className="text-xl font-semibold">{s.amount}</p>
//                     <p className={`text-sm ${s.color}`}>{s.trend} from previous period</p>
//                   </div>
//                 ))}
//               </div>

//               {/* Revenue vs Target Chart */}
//               <div className="bg-white p-4 rounded-lg shadow">
//                 <h3 className="mb-2 font-medium">Revenue vs. Target</h3>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <LineChart data={REVENUE_DATA}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="month" />
//                     <YAxis />
//                     <Tooltip formatter={val => `$${val}`} />
//                     <Legend />
//                     <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
//                     <Line type="monotone" dataKey="target" stroke="#ff7300" strokeDasharray="5 5" />
//                     <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>

//               {/* Revenue by Category & Channel */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 <div className="bg-white p-4 rounded-lg shadow">
//                   <h3 className="mb-2 font-medium">Revenue by Product Category</h3>
//                   <ResponsiveContainer width="100%" height={250}>
//                     <BarChart
//                       data={[
//                         { category: 'A', revenue: 24000 },
//                         { category: 'B', revenue: 18000 },
//                         { category: 'C', revenue: 32000 },
//                         { category: 'D', revenue: 15000 },
//                         { category: 'E', revenue: 8000 }
//                       ]}  
//                     >
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="category" />
//                       <YAxis />
//                       <Tooltip formatter={val => `$${val}`} />
//                       <Bar dataKey="revenue" fill="#8884d8">
//                         {[...Array(5)].map((_, idx) => (
//                           <Cell key={idx} fill={['#8884d8','#83a6ed','#8dd1e1','#82ca9d','#a4de6c'][idx]} />
//                         ))}
//                       </Bar>
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//                 <div className="bg-white p-4 rounded-lg shadow">
//                   <h3 className="mb-2 font-medium">Revenue by Sales Channel</h3>
//                   <ResponsiveContainer width="100%" height={250}>
//                     <PieChart>
//                       <Pie
//                         data={[
//                           { name: 'Online Store', value: 45000, fill: '#8884d8' },
//                           { name: 'Physical Stores', value: 28000, fill: '#82ca9d' },
//                           { name: 'Marketplace', value: 18000, fill: '#ffc658' },
//                           { name: 'Wholesale', value: 15000, fill: '#ff8042' }
//                         ]}
//                         cx="50%"
//                         cy="50%"
//                         innerRadius={40}
//                         outerRadius={80}
//                         label={({ name, percent }) => `${name}: ${(percent*100).toFixed(0)}%`}
//                       />
//                       <Tooltip formatter={val => `$${val}`} />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>

//               {/* Export Buttons */}
//               <div className="bg-white p-4 rounded-lg shadow">
//                 <h3 className="mb-3 font-medium">Export Revenue Data</h3>
//                 <div className="flex space-x-4">
//                   <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
//                     <i className="fas fa-file-excel mr-2"></i> Export to Excel
//                   </button>  
//                   <button className="flex items-center bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
//                     <i className="fas fa-file-pdf mr-2"></i> Export to PDF
//                   </button>  
//                   <button className="flex items-center bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
//                     <i className="fas fa-print mr-2"></i> Print Report
//                   </button>  
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;
