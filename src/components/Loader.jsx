export default function Loader() {
  return (
    <div className="star-container absolute z-50 flex justify-center items-center">
      <div className="star">
        <div className="corner corner--top-left"></div>
        <div className="corner corner--top-right"></div>
        <div className="corner corner--bottom-right"></div>
        <div className="corner corner--bottom-left"></div>
      </div>
    </div>
  );
}
