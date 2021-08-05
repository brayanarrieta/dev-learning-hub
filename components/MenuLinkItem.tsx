import { MenuItem } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

interface MenuLinkItemProps {
    text: string;
    link: string;
}

const MenuLinkItem = (props: MenuLinkItemProps) => {
  const { text, link } = props;
  const router = useRouter();

  const handleOnClick = (e: any) => {
    e.preventDefault();
    router.push(link);
  };

  return (
    <MenuItem onClick={handleOnClick}>{text}</MenuItem>
  );
};

export default React.memo(MenuLinkItem);
