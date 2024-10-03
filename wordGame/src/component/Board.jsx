
import Letter from "./Letter";

function Board() {
  return (
    <div className="flex justify-center mt-10 ">
      <div className="grid grid-rows-6 gap-2 p-4 bg-gradient-to-r from-rose-500 via-red-400 to-red-500  shadow-lg rounded-lg max-w-md">
        {/* Row 1 */}
        <div className="grid grid-cols-5 gap-2">
          <Letter letterPos ={0} attemtVal={0} />
          <Letter letterPos={1} attemtVal={0} />
          <Letter letterPos={2} attemtVal={0} />
          <Letter letterPos={3} attemtVal={0} />
          <Letter letterPos={4} attemtVal={0} />
        </div>
        {/* Row 2 */}
        <div className="grid grid-cols-5 gap-2">
          <Letter letterPos={0} attemtVal={1} />
          <Letter letterPos={1} attemtVal={1} />
          <Letter letterPos={2} attemtVal={1} />
          <Letter letterPos={3} attemtVal={1} />
          <Letter letterPos={4} attemtVal={1} />
        </div>
        {/* Repeat for all rows */}
        <div className="grid grid-cols-5 gap-2">
          <Letter letterPos={0} attemtVal={2} />
          <Letter letterPos={1} attemtVal={2} />
          <Letter letterPos={2} attemtVal={2} />
          <Letter letterPos={3} attemtVal={2} />
          <Letter letterPos={4} attemtVal={2} />
        </div>
        <div className="grid grid-cols-5 gap-2">
          <Letter letterPos={0} attemtVal={3} />
          <Letter letterPos={1} attemtVal={3} />
          <Letter letterPos={2} attemtVal={3} />
          <Letter letterPos={3} attemtVal={3} />
          <Letter letterPos={4} attemtVal={3} />
        </div>
        <div className="grid grid-cols-5 gap-2">
          <Letter letterPos={0} attemtVal={4} />
          <Letter letterPos={1} attemtVal={4} />
          <Letter letterPos={2} attemtVal={4} />
          <Letter letterPos={3} attemtVal={4} />
          <Letter letterPos={4} attemtVal={4} />
        </div>
        <div className="grid grid-cols-5 gap-2">
          <Letter letterPos={0} attemtVal={5} />
          <Letter letterPos={1} attemtVal={5} />
          <Letter letterPos={2} attemtVal={5} />
          <Letter letterPos={3} attemtVal={5} />
          <Letter letterPos={4} attemtVal={5} />
        </div>
      </div>
    </div>
  );
}

export default Board;
