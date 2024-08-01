import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './dashboard.css'; 

import logoDashboard from './asset/logoDashboard.png'; 
import logoInventory from './asset/logoInventory.jpg'; 
import logoOrder from './asset/logoOrder.jpg'; 
import logoReturns from './asset/logoReturns.png'; 
import logoCustomers from './asset/logoCustomers.jpg'; 
import logoShipping from './asset/logoShipping.png'; 
import logoChannel from './asset/logoChannel.jpg'; 
import logoIntegrations from './asset/logoIntegrations.png'; 
import logoCalculators from './asset/logoCalculators.png'; 
import logoReports from './asset/logoReports.png'; 
import logoAccount from './asset/logoAccount.png'; 

const Dashboard = () => {
  const lineData = {
    labels: ['6/30/2024 - 7/6/2024', '7/7/2024 - 7/13/2024', '7/21/2024 - 7/27/2024'],
    datasets: [
      {
        label: 'Orders',
        data: [4, 2, 2],
        borderColor: 'orange',
        backgroundColor: 'orange',
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: 'orange',
        yAxisID: 'y1',
      },
      {
        label: 'Sales',
        data: [1404, 1200, 1000],
        borderColor: 'cyan',
        backgroundColor: 'cyan',
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: 'cyan',
        yAxisID: 'y2',
      },
    ],
  };

  const lineOptions = {
    scales: {
      y1: {
        type: 'linear',
        position: 'left',
        beginAtZero: true,
        grid: {
          borderDash: [5, 5],
        },
      },
      y2: {
        type: 'linear',
        position: 'right',
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };

  const pieData = {
    labels: ['WooCommerce Store', 'Shopify Store'],
    datasets: [
      {
        data: [55.8, 44.2],
        backgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li className="dashboard-item mb-4 flex items-center">
            <img src={logoDashboard} alt="Dashboard Logo" className="h-8 w-8 mr-2" />
           <span><button>Dashboard</button></span> 
          </li>
          <li className="inventory-item mb-4 flex items-center">
            <img src={logoInventory} alt="Inventory Logo" className="h-8 w-8 mr-2" />
            <span>Inventory</span>
          </li>
          <li className="order-item mb-4 flex items-center">
            <img src={logoOrder} alt="Order Logo" className="h-8 w-8 mr-2" />
            <span>Order</span>
          </li>
          <li className="returns-item mb-4 flex items-center">
            <img src={logoReturns} alt="Returns Logo" className="h-8 w-8 mr-2" />
            <span>Returns</span>
          </li>
          <li className="customers-item mb-4 flex items-center">
            <img src={logoCustomers} alt="Customers Logo" className="h-8 w-8 mr-2" />
            <span>Customers</span>
          </li>
          <li className="shipping-item mb-4 flex items-center">
            <img src={logoShipping} alt="Shipping Logo" className="h-8 w-8 mr-2" />
            <span>Shipping</span>
          </li>
          <li className="channel-item mb-4 flex items-center">
            <img src={logoChannel} alt="Channel Logo" className="h-8 w-8 mr-2" />
            <span>Channel</span>
          </li>
          <li className="integrations-item mb-4 flex items-center">
            <img src={logoIntegrations} alt="Integrations Logo" className="h-8 w-8 mr-2" />
            <span>Integrations</span>
          </li>
          <li className="calculators-item mb-4 flex items-center">
            <img src={logoCalculators} alt="Calculators Logo" className="h-8 w-8 mr-2" />
            <span>Calculators</span>
          </li>
          <li className="reports-item mb-4 flex items-center">
            <img src={logoReports} alt="Reports Logo" className="h-8 w-8 mr-2" />
            <span>Reports</span>
          </li>
          <li className="account-item mb-4 flex items-center">
            <img src={logoAccount} alt="Account Logo" className="h-8 w-8 mr-2" />
            <span>Account</span>
          </li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="main-content">
        <div className="dashboard-header w-full">
          <h1 className="dashboard-title">Dashboard</h1>
        </div>
        <div className="dashboard-content w-full flex gap-4">
          <div className="sales-box w-2/3">
            <h2 className="text-lg font-bold mb-4">Sales vs Orders</h2>
            <Line data={lineData} options={lineOptions} />
          </div>
          <div className="pie-box w-1/3 pie-container">
            <h2 className="text-lg font-bold mb-4">Portion of Sales</h2>
            <Pie data={pieData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
