
import Hooks from './hooks';
import HooksTwo from './hooksTwo';
import Class from './class';
import './index.css';

export default function() {
  return (
    <div>
      <h1>class Component VS function Component</h1>
      <Class />
      <Hooks />
      <HooksTwo />
    </div>
  );
}
