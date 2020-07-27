import React from 'react';
import './styles.css';
export interface Props {
    label: string;
}
declare type InputProps = JSX.IntrinsicElements['input'] & Props;
declare const TextField: React.FC<InputProps>;
export default TextField;
//# sourceMappingURL=index.d.ts.map