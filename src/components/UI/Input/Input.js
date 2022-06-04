import React, { useRef, useImperativeHandle } from "react";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const focusing = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return { activate: focusing };
  });

  return (
    <div>
      <label htmlFor={props.htmlFor}>{props.labelTitle}</label>
      <input
        ref={inputRef}
        id={props.id}
        type={props.type}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        className={props.className}
        placeholder={props.placeholder}
      />
    </div>
  );
});

export default Input;
