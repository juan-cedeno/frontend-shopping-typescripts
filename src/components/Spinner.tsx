import "../css/spinner.css";

export const Spinner = () => {
  return (
    <div className="spinner">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
