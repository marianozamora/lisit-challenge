import * as React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, CssBaseline} from '@mui/material';
import { Drawer, List, ListItem, ListItemButton, ListItemText, Divider, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function Header(props: Props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
            MUI
        </Typography>
        <Divider />
        <List>
            {navItems.map((item) => (
            <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
            <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
            <Toolbar className="bg-black-500">
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
                >
                <MenuIcon />
                </IconButton>
                <Typography
                variant="h4"
                        component="div"
                        className="text-white w-[300px]"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                MUI
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                    <Button key={item} sx={{ color: '#fff' }}>
                    {item}
                    </Button>
                ))}
                </Box>
            </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
                fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
                aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
            </Typography>
            </Box>
        </Box>
    )
}
