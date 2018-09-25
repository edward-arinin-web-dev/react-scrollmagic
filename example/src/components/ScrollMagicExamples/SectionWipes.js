// @flow
import React from 'react';
import styled from 'styled-components';
import { SMController, SMScene } from 'react-scrollmagic';

const SectionWipesStyled = styled.div`
  overflow: hidden;

  .panel {
    height: 100vh;
    width: 100vw;
    text-align: center;
  }
  
  .panel span {
    position: relative;
    display: block;
    overflow: visible;
    top: 50%;
    font-size: 80px;
  }
  
  .panel.blue {
    background-color: #3883d8;
  }
  
  .panel.turqoise {
    background-color: #38ced7;
  }
  
  .panel.green {
    background-color: #22d659;
    margin-bottom: 800px;
  }
  
  .panel.bordeaux {
    background-color: #953543;
  }

`;

const SectionWipes = () => (
  <SectionWipesStyled>
    <SMController globalSceneOptions={{ triggerHook: 'onLeave' }}>
      <SMScene pin={true}>
        <div className="panel blue"><span>Panel</span></div>
      </SMScene>
      <SMScene pin={true}>
        <div className="panel turqoise"><span>Panel</span></div>
      </SMScene>
      <SMScene pin={true}>
        <div className="panel green"><span>Panel</span></div>
      </SMScene>
      <SMScene pin={true}>
        <div className="panel bordeaux"><span>Panel</span></div>
      </SMScene>
    </SMController>
  </SectionWipesStyled>
);

export default SectionWipes;
