import React from 'react'
import Button from '../components/Button/Button';
import { SvgIcon } from '../components/SvgIcon/SvgIcon';
import { theme } from '../themes';


const RecipeFinderPage = () => {
    return ( 
        <div>
            <Button color='primary' size='small' shape='rounded'>Primary small</Button>
            <Button color='secondary' size='medium' shape='rounded' icon='down' iconColor='white'>Secondary medium</Button>
            <Button color='secondary' size='large' variant='outlined' icon='down' iconColor={theme.colors.secondary}>Secondary large outlined</Button>
            <SvgIcon fill={theme.colors.primary} iconName='down' iconSize='16'/>
             {/* Navbar */}
             {/* Search bar */}
             {/* Button */}
             {/* Filters */}
             {/* Browse dropdown */}
             {/* Cards */}
             {/* Sort */}
             {/* Footer */}
        </div>
     );
}
 
export default RecipeFinderPage;