import Option from "../constraints/Option";
import { Type, Position } from "./Enum";


const defaults: Option = {
    "id": "",
    "type": Type.HTML,
    "title": "未命名标题",
    "width": 800,
    "height": 600,
    "minWidth": 100,
    "minHeight": 100,
    "maxWidth": "100%",
    "maxHeight": "100%",
    "position": Position.CENTER
}

export default defaults;