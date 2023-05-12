import * as React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, CssBaseline} from '@mui/material';
import { Drawer, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

interface Props {
    window?: () => Window;
}


const drawerWidth = 240;
const navItems = ['People', 'Planets', 'Starships'];

export default function Header(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const generateLink = (item: string) => {
        const lowered = item.toLowerCase();
        if (lowered === 'people')
            return '/';
        return `/${lowered}`;
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Link to="/">
        <Typography variant="h6" sx={{ my: 2 }}>
        Nerds Fundation Inc
        </Typography>
        </Link>
        <Divider />
            <List
                className='text-center'
            >
                {navItems.map((item) => (
                        <ListItem key={item}  disablePadding>
                        <Link
                            className='text-black w-full text-center mb-2'
                                to={generateLink(item)}
                            >
                            {item}
                            </Link>
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
            <Toolbar className="bg-black flex justify-between">
                <IconButton
                color="inherit"
                aria-label="open drawer"
                        edge="start"
                        data-testid='menu-button'
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
                >
                <MenuIcon />
                    </IconButton>
                    <Link to="/">
                <Typography
                variant="h5"
                component="div"
                className="text-white "
                sx={{ display: { sm: 'block' } }}
                >
                Nerds Fundation
                        </Typography>
                    </Link>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                    <Link to={generateLink(item)} className="text-white mr-4" key={item}>
                    {item}
                    </Link>
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
                    keepMounted: true,
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
            </Box>
        </Box>
    )
}
