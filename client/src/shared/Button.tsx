/* eslint-disable react/require-default-props */
import React from 'react';
import { LinkButton, NormalButton } from './styles/Button.styles';
import Loader from './Loader';

type ButtonProps = {
  title: string;
  method?: React.MouseEventHandler<HTMLButtonElement>;
  isNormalButton?: string;
  url?: string;
  loading?: boolean;
  color?: string;
};

export default function Button({
  title,
  method,
  isNormalButton,
  url,
  loading,
  color,
}: ButtonProps) {
  if (isNormalButton) {
    return (
      <NormalButton
        style={{ '--color': color }}
        onClick={method}
        type="button"
        disabled={loading}
      >
        {loading ? <Loader /> : title}
      </NormalButton>
    );
  }

  return <LinkButton to={url!}>{title}</LinkButton>;
}
