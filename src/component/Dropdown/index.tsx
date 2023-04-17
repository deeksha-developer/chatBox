import React, { useState } from 'react';

interface useSelect {
  className?: string;
  childrens?: string;
  children?: React.ReactNode;
  title: string;
  Idetail: any;
}

const Dropdown = (props: useSelect) => {
  const [close, setClose] = useState(true);

  const toggleMenu = () => {
    setClose(!close);
  };

  return (
    <>
      <div className={props.className} onClick={toggleMenu}>
        {props.title}
        {close ? (
          <span className="material-symbols-outlined">arrow_drop_up</span>
        ) : (
          <span className="material-symbols-outlined">arrow_drop_down</span>
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
