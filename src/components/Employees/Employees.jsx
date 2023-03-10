import { Employee } from '../Employee';
export const Employees = () => {
  return (
    <ul>
      {[].map(id => (
        <li key={id}>
          <Employee />
        </li>
      ))}
    </ul>
  );
};
