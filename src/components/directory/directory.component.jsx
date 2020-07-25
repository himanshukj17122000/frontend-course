import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Welcome!',
          imageUrl:
            'https://i.ibb.co/0VFzKG1/Screenshot-2020-07-18-at-11-20-51-PM.png',
          size: 'name',
          linkUrl: '',
          info: `
         Search any topic to get resources from websites like Youtube, Dev, Coursera and many more! 
  
        
         
          `,
          id: 1,
        },
        {
          title: 'About',
          size: 'name',
          imageUrl:
            'https://i.ibb.co/cF66rWX/Screenshot-2020-06-07-at-1-14-16-AM.png',
          id: 2,
          linkUrl: 'about',
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
