import { FC, memo, MouseEventHandler, PropsWithChildren } from 'react';

const Button: FC<PropsWithChildren<{ clickHandler?: MouseEventHandler }>> = ({
  children,
  clickHandler
}) => {
  return (
    <button
      onClick={clickHandler}
      className="px-10 py-1 font-normal rounded uppercase text-sm bg-sky-500 text-white shadow-sm">
      {children}
    </button>
  );
};

export default memo(Button);
