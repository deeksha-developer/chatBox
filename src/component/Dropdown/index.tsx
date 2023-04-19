import React, { useState } from 'react';

interface useSelect {
  className?: string;

  children?: React.ReactNode;
  title: string;
  Idetail: any;
}

const Dropdown = (props: useSelect) => {
  const [close, setClose] = useState(false);

  const toggleMenu = () => {
    setClose(!close);
  };

  return (
    <>
      <div className={props.className} onClick={toggleMenu}>
        {props.title}
        {close ? (
          <span className="material-symbols-outlined">arrow_drop_down</span>
        ) : (
          <span className="material-symbols-outlined">arrow_drop_up</span>
        )}
      </div>
      {close
        ? props?.Idetail.map((data: any) => {
            return (
              <p className={data.title} key={data.id}>
                {data.title}
              </p>
            );
          })
        : null}
    </>
  );
};

export default Dropdown;
