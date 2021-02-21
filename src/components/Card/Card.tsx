import React from 'react';
import './Card.scss';

interface Props {
  title: string;
  subTitle: string;
}

export const Card: React.FC<Props> = (props) => {
  return (
    <div className="card-wrapper">
      <div className="card-title">
        {props.title}
      </div>
      <div className="card-subtitle">
        {props.subTitle}
      </div>
    </div>
  )
}
