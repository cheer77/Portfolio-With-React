import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { ac } from '../../../utils/mixins';
import { myTheme } from '../../../style/Theme.styled';

export const Map = () => {
  const iframeStyle: CSSProperties = {
    border: '0',
  };

  return (
    <MapSection>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.729582760742!2d30.51914993309963!3d50.4461374118707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce569a0cf23f%3A0x2b11f3126f010714!2z0YPQuy4g0JrRgNC10YnQsNGC0LjQuiwgMjEsINCa0LjQtdCyLCDQo9C60YDQsNC40L3QsCwgMDEwMDE!5e0!3m2!1sru!2sde!4v1698608473813!5m2!1sru!2sde"
          width="100%"
          height="300"
          style={iframeStyle}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </MapSection>
  );
};

const MapSection = styled.section`
  min-height: 300px;

  margin-bottom: ${ac('71px', '50px')};

  iframe {
    background-color: ${myTheme.gray.light};
  }
`;
