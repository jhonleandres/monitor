import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

interface TitleProps {
    title: string
}

const Header: React.FC<TitleProps> = (props) => {
      
    return (
          <Helmet>
              <title>{props.title}</title>
          </Helmet>
    );
};

export default Header;