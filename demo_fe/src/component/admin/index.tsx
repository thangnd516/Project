import React, { useState } from 'react';
import {
    Box, Drawer, List, ListItem, ListItemButton, ListItemIcon,
    ListItemText, Collapse, Toolbar, Typography
} from '@mui/material';
import {
    Dashboard, ShoppingCart, ExpandLess, ExpandMore,
    BarChart, InsertDriveFile, Traffic, Settings
} from '@mui/icons-material';

import UserDetail from '../user';
import CustomerManager from './customer/CustomerManager';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';

const drawerWidth = 240;

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [openReports, setOpenReports] = useState(false);

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return <Typography>Dashboard content</Typography>;
            case 'orders':
                return <Typography>Orders content</Typography>;
            case 'sales':
                return <Typography>Dashboard content for /reports/sales</Typography>;
            case 'traffic':
                return <Typography>Dashboard content for /reports/traffic</Typography>;
            case 'users':
                return <UserDetail />;
            case 'customer':
                return <CustomerManager />;
            case 'revenue':
                return <Typography>Revenue content</Typography>;
            default:
                return null;
        }
    };

    return (
        <>
            <Header />
            <Box sx={{ display: 'flex' }}>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    <Toolbar>
                        <Typography variant="h6">Toolpad</Typography>
                    </Toolbar>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton selected={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')}>
                                <ListItemIcon><Dashboard /></ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton selected={activeTab === 'orders'} onClick={() => setActiveTab('orders')}>
                                <ListItemIcon><ShoppingCart /></ListItemIcon>
                                <ListItemText primary="Orders" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemText primary="Analytics" sx={{ pl: 2, color: 'gray', fontSize: 12 }} />
                        </ListItem>

                        <ListItemButton onClick={() => setOpenReports(!openReports)}>
                            <ListItemIcon><BarChart /></ListItemIcon>
                            <ListItemText primary="Reports" />
                            {openReports ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openReports} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }} selected={activeTab === 'sales'} onClick={() => setActiveTab('sales')}>
                                    <ListItemIcon><InsertDriveFile /></ListItemIcon>
                                    <ListItemText primary="Sales" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }} selected={activeTab === 'traffic'} onClick={() => setActiveTab('traffic')}>
                                    <ListItemIcon><Traffic /></ListItemIcon>
                                    <ListItemText primary="Traffic" />
                                </ListItemButton>
                            </List>
                        </Collapse>

                        <ListItem disablePadding>
                            <ListItemButton selected={activeTab === 'users'} onClick={() => setActiveTab('users')}>
                                <ListItemIcon><Settings /></ListItemIcon>
                                <ListItemText primary="Người dùng" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton selected={activeTab === 'customer'} onClick={() => setActiveTab('customer')}>
                                <ListItemIcon><Settings /></ListItemIcon>
                                <ListItemText primary="Sản phẩm" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton selected={activeTab === 'revenue'} onClick={() => setActiveTab('revenue')}>
                                <ListItemIcon><Settings /></ListItemIcon>
                                <ListItemText primary="Doanh thu" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>

                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    {renderContent()}
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default AdminPage;
