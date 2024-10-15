import "./Board.css";
import BgCellGenerator from "./Board/BgCellGenerator";

function Board(){
    return <div className={"Board"}>
        <BgCellGenerator/>
        <div style={{gridColumn: 4, gridRow: 4}}></div>
        <div style={{gridColumn: 2, gridRow: 2}}></div>
        <div style={{gridColumn: 6, gridRow: 4}}></div>
    </div>
}
export default Board;